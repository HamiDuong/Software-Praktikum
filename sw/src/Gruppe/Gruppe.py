# # #Anfang der Klasse, ist noch nicht richtig und fertig!!!!


# # class Gruppe (User):

# #     def __init__(self):
# #         super().__init__()
# #         self._User= None  # Fremdschlüsselbeziehung zum Inhaber des Kontos.

# #     def get_User(self):
# #         #Auslesen des Fremdschlüssels zum Kontoinhaber.
# #         return self._User

# #     def set_User(self, person):
# #         #Setzen des Fremdschlüssels zum Kontoinhaber.
# #         self._User= person

# #     def __str__(self):
# #         #Erzeugen einer einfachen textuellen Repräsentation der jeweiligen Kontoinstanz.
# #         return "Gruppe: {}, Admin {}".format(self.get_id(), self._User)

# #     @staticmethod
# #     def from_dict(dictionary=dict()):
# #         #Umwandeln eines Python dict() in ein Account()."""
# #         User = Gruppe()
# #         User.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
# #         User.set_owner(dictionary["user"])
# #         return User
