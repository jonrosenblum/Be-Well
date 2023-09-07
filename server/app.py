from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, Therapist, Patient, Session, Metrics
from flask_cors import CORS
from datetime import datetime




app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.json.compact = False



migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def index():
    return "Hello"

@app.post('/register')
def register():
    data = request.json 
    print("post")
    print(data)
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    city = data.get('city')
    state = data.get('state')
    phone_number = data.get('phone_number')

    user_type = data.get('user_type')

    if user_type == 'therapist':
        therapist = Therapist(
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email,
            city=city,
            state=state,
            phone_number=phone_number
        )
        db.session.add(therapist)
        db.session.commit()
        return jsonify({'message': 'Therapist registered successfully'})

    elif user_type == 'patient':
        patient = Patient(
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email,
            city=city,
            state=state,
            phone_number=phone_number
        )
        db.session.add(patient)
        db.session.commit()
        return jsonify({'message': 'Patient registered successfully'})

    else:
        return jsonify({'error': 'Invalid user type'})
    



@app.route('/therapist/patients')
def get_patients_for_therapist():
    therapist_id = 1 
    sessions = Session.query.filter(Session.therapist_id == therapist_id).all()
    patient_list = [s.patient for s in sessions]
    patient_list_serialized = [
        {
            'id': patient.id,
            'first_name': patient.first_name,
            'last_name': patient.last_name,
        }
        for patient in  set(patient_list)
    ]
    patients = Patient.query.all()

    return jsonify([p.serialize() for p in patients])



@app.route('/patient/<int:patient_id>/sessions')
def get_sessions_for_patient(patient_id):
    therapist_id = 1
    sessions = Session.query.filter(
        Session.therapist_id == therapist_id,
        Session.patient_id == patient_id
    ).all()

    session_list_serialized = [
        {
            'id': session.id,
            'transcript': session.transcript,
        }
        for session in sessions
    ]
    print(session_list_serialized)

    return jsonify(session_list_serialized)
    

@app.post('/therapist/patient/<int:patient_id>/sessions/upload-session')
def upload_session(patient_id):
    try:
        data = request.json
        therapist_id = 1
        session_date = datetime.strptime(data.get('sessionDate'), '%Y-%m-%d')
        transcript = data.get('transcript')
        mp3_file = data.get('mp3File')

        session = Session(
            therapist_id=therapist_id,
            patient_id=patient_id,
            session_date=session_date,
            transcript=transcript,
            mp3_file=mp3_file, 
        )

        db.session.add(session)
        db.session.commit()
        
        return jsonify({'message': 'Session uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.post('/therapist/<int:therapist_id>/create-patient')
def create_patient(therapist_id):
    print("post")
    try:
        data = request.json
        print(data)
        # therapist_id = data.get('therapist_id')
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        email = data.get('email')
        password = data.get('password')
        city = data.get('city')
        state = data.get('state')
        phone_number = data.get('phoneNumber')


        patient = Patient(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=password,
            city=city,
            state=state,
            phone_number=phone_number
        )

        db.session.add(patient)
        db.session.commit()

        return jsonify({'message': 'Patient created successfully'})
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True)