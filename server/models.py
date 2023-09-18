from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)


class Session(db.Model):
    __tablename__ = 'session'
    id = db.Column(db.Integer, primary_key=True)
    therapist_id = db.Column(db.Integer, db.ForeignKey('therapist.id'), nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'), nullable=False)
    session_date = db.Column(db.Date, nullable=False)
    transcript = db.Column(db.Text, nullable=False)

    therapist = db.relationship('Therapist', backref='sessions')
    patient = db.relationship('Patient', backref='sessions')
    metrics = db.relationship('Metrics', backref='session')

    def serialize(self):
        return {
            'id': self.id,
            'therapist_id': self.therapist_id,
            'patient_id': self.patient_id,
            'session_date': self.session_date.isoformat(),  # Convert Date to string
            'transcript': self.transcript,
        }


class Therapist(db.Model):
    __tablename__ = 'therapist'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(60), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)

    patient = db.relationship('Patient', backref='therapist')

    def serialize(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'city': self.city,
            'state': self.state,
            'phone_number': self.phone_number,
        }


class Patient(db.Model):
    __tablename__ = 'patient'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(60), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    therapist_id = db.Column(db.Integer, db.ForeignKey('therapist.id'), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'city': self.city,
            'state': self.state,
            'phone_number': self.phone_number,
            'therapist_id': self.therapist_id,
        }

class Metrics(db.Model):
    __tablename__ = 'metric'
    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.Integer, db.ForeignKey('session.id'), unique=True, nullable=False)
    measurables = db.Column(db.String(100), nullable=False)


class Appointments(db.Model):
    __tablename__ = 'appointments'
    id = db.Column(db.Integer, primary_key=True)
    therapist_id = db.Column(db.Integer, db.ForeignKey('therapist.id'), nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'), nullable=False)
    appointment_date = db.Column(db.String, nullable=False)
    appointment_time = db.Column(db.String, nullable=False)

    therapist = db.relationship('Therapist', backref='appointments')
    patient = db.relationship('Patient', backref='appointments')

    def serialize(self):
        return {
            'id': self.id,
            'therapist_id': self.therapist_id,
            'patient_id': self.patient_id,
            'appointment_date': self.appointment_date,  # Convert Date to string
            'appointment_time': self.appointment_time,
        }