from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, Therapist, Patient, Session, Metrics
from flask_cors import CORS




app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.json.compact = False



migrate = Migrate(app, db)
db.init_app(app)


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
    



@app.get('/therapist/patients')
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
        for patient in  patient_list
    ]
    return jsonify(patient_list_serialized)



@app.get('/patient/<int:patient_id>/sessions')
def get_sessions_for_patient(patient_id):
    therapist_id=1
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
    

# @app.post('/patient/<int:patient_id>/sessions')
# def create_session(patient_id):
#     ## need to identify which patient
#     session_date = request.form.get('sessionDate')
#     transcript = request.form.get('transcript')
#     ## save mp3 file to storage 

#     session = Session(
#         therapist_id= ?
#         patient_id=patient_id,
#         session_date=session_date,
#         transcript=transcript,
#     )
#     db.session.add(session)
#     db.session.commit()
    
#     return jsonify({'message': 'Session created successfully'})

if __name__ == '__main__':
    app.run(debug=True)