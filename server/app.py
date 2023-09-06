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




@app.route('/')
def hello_world():
    return 'Hello, BeWell!'


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
    # patients = Patient.query.filter_by(Patient.==therapist_id).all()
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

# # Route to fetch sessions for a specific patient
# @app.route('/patient/<int:patient_id>/sessions')
# def get_sessions_for_patient(patient_id):
#     sessions = Session.query.filter_by(patient_id=patient_id).all()
#     session_list = [
#         {
#             'id': session.id,
#             'transcript': session.transcript,
#         }
#         for session in sessions
#     ]
#     return jsonify(session_list)



if __name__ == '__main__':
    app.run(debug=True)