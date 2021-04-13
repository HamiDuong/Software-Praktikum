from .BusinessObject import BusinessObject


class Studentprofil (BusinessObject):
    def __init__(self):
        super().__init__()
        self.__semester = ""
        self.__studiengang = ""
        self.__id = ""

    def get_semester(self):
        """Auslesen des Benutzernamens."""
        return self.__semester

    def set_semester(self, value):
        """Setzen des Benutzernamens."""
        self.__semester = value

    def get_studiengang(self):
        """Auslesen des Benutzernamens."""
        return self.__studiengang

    def set_studiengang(self, value):
        """Setzen des Benutzernamens."""
        self.__studiengang = value

    def set_id(self, value):
        self.__id = value

    def __str__(self):
        """Erzeugen einer einfachen textuellen Darstellung der jeweiligen Instanz."""
        return "User: {}, {}, {}".format(self.get_id(), self.__semester, self.__studiengang)

    @staticmethod
    def from_dict(dictionary=dict()):
        """Umwandeln eines Python dict() in einen User()."""
        obj = Studentprofil()
        obj.set_id(dictionary["id"])  # eigentlich Teil von BusinessObject !
        obj.set_semester(dictionary["semester"])
        obj.set_studiengang(dictionary["studiengang"])
        return obj
