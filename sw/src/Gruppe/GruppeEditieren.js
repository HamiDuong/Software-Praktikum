//Einen User hinzufügen ist noch nicht fertig!!!

getUser = () => {
    App.getAPI().getUser()
      .then(customerBOs =>
        this.setState({               
          filteredUser: [...Userprofil], 
          loadingInProgress: false,  
          error: null
        })).catch(e =>
          this.setState({            
            loadingInProgress: false,
            error: e
          })
        );

// User löschen button fehlt noch der befehl !


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BankAPI } from '../../api';
import ContextErrorMessage from './ContextErrorMessage';
import LoadingProgress from './LoadingProgress';

/**
 * Shows a modal delete/cancle dialog, which asks for deleting a customer. The CustomerBO to be deleted must be given in prop customer. 
 * In dependency of the user interaction (delete/cancel) the respective backendcall is made. After that, the function of the onClose prop 
 * is called with the deleted CustomerBO object as parameter. When the dialog is canceled, onClose is called with null.
 * 
 * @see See Material-UIs [Dialog](https://material-ui.com/components/dialogs)
 * 
 * @author [Christoph Kunz](https://github.com/christophkunz)
 */
class CustomerDeleteDialog extends Component {

  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      deletingInProgress: false,
      deletingError: null
    };
  }

  /** Delete the customer */
  deleteCustomer = () => {
    BankAPI.getAPI().deleteCustomer(this.props.customer.getID()).then(customer => {
      this.setState({
        deletingInProgress: false,              // disable loading indicator  
        deletingError: null                     // no error message
      });
      this.props.onClose(this.props.customer);  // call the parent with the deleted customer
    }).catch(e =>
      this.setState({
        deletingInProgress: false,              // disable loading indicator 
        deletingError: e                        // show error message
      })
    );

    // set loading to true
    this.setState({
      deletingInProgress: true,                 // show loading indicator
      deletingError: null                       // disable error message
    });
  }

  /** Handles the close / cancel button click event */
  handleClose = () => {
    // console.log(event);
    this.props.onClose(null);
  }

  /** Renders the component */
  render() {
    const { classes, customer, show } = this.props;
    const { deletingInProgress, deletingError } = this.state;

    return (
      show ?
        <Dialog open={show} onClose={this.handleClose}>
          <DialogTitle id='delete-dialog-title'>Delete customer
            <IconButton className={classes.closeButton} onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Really delete customer '{customer.getFirstName()} {customer.getLastName()}' (ID: {customer.getID()})?
            </DialogContentText>
            <LoadingProgress show={deletingInProgress} />
            <ContextErrorMessage error={deletingError} contextErrorMsg={`The customer '${customer.getFirstName()} ${customer.getLastName()}' (ID: ${customer.getID()}) could not be deleted.`}
              onReload={this.deleteCustomer} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='secondary'>
              Cancel
            </Button>
            <Button variant='contained' onClick={this.deleteCustomer} color='primary'>
              Delete
            </Button> 
          </DialogActions>
        </Dialog>
        : null
    );
  }
}

/** Component specific styles */
const styles = theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

/** PropTypes */
CustomerDeleteDialog.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The CustomerBO to be deleted */
  customer: PropTypes.object.isRequired,
  /** If true, the dialog is rendered */
  show: PropTypes.bool.isRequired,
  /**  
   * Handler function which is called, when the dialog is closed.
   * Sends the deleted CustomerBO as parameter or null, if cancel was pressed.
   *  
   * Signature: onClose(CustomerBO customer);
   */
  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(CustomerDeleteDialog);}
