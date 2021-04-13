from .bo.Studentprofil import Studentprofil
from .db.Studentprofilmapper import StudentprofilMapper


class Businesslogik (object):

    def __init__(self):
        pass

    def create_studentprofil(self, id, semester, studiengang):
        studentprofil = Studentprofil()
        studentprofil.set_id(id)
        studentprofil.set_semester(semester)
        studentprofil.set_studiengang(studiengang)

        with StudentprofilMapper() as mapper:
            return mapper.insert(studentprofil)
