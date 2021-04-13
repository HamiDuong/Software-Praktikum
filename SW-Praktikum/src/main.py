from flask import Flask
from flask_cors import CORS
from flask_restx import Api, Resource, fields
from server.bo.Studentprofil import Studentprofil
from server.Businesslogik import Businesslogik

app = Flask(__name__)

CORS(app, resources=r'/backend/*')

api = Api(app, version='1.0', title='Lernapp API',
          description='Eine App für Lerngruppen')

Studentprofil = api.inherit('Studentprofil', Studentprofil, {
    'semester': fields.String(attribute='_semester', description='Semester eines Studenten'),
    'studiengang': fields.String(attribute='_studiengang', description='Studiengang eines Studenten'),
})


@api.route('/studentprofil')
class StudentprofilOperations(Resource):
    @api.marshal_with(Studentprofil)
    def post(self):

        adm = Businesslogik()
        adm.create_studentprofil(4, 2, "wasup")


if __name__ == '__main__':
    app.run(debug=True)
