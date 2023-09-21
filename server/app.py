from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from models import db, Therapist, Patient, Session, Appointments
from flask_cors import CORS
from datetime import datetime
from flask_jwt_extended import create_access_token, jwt_required, JWTManager
from models import Therapist
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_bcrypt import check_password_hash, Bcrypt
from textblob import TextBlob





app = Flask(__name__)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['JWT_SECRET_KEY'] = 'your_secret_key_here'
app.json.compact = False



migrate = Migrate(app, db)
db.init_app(app)


### Registration Routes

@app.get('/hello')
def world():
    return "world"

@app.get("/")
def work():
    return "index"

@app.post('/register')
def register():
    try:
        data = request.json 
        password = data.get('password')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        city = data.get('city')
        state = data.get('state')
        phone_number = data.get('phone_number')

        # Hash the password using bcrypt
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        therapist = Therapist(
            password=hashed_password,
            first_name=first_name,
            last_name=last_name,
            email=email,
            city=city,
            state=state,
            phone_number=phone_number
        )
        db.session.add(therapist)
        db.session.commit()

        access_token = create_access_token(identity=therapist.id)

        return jsonify({'message': 'Therapist registered successfully', 'access_token': access_token})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

### Login Routes

@app.post('/auth/login')
def login():
    data = request.json 
    email = data.get('email')
    password = data.get('password')
    # return jsonify('hello world')
    user_json = therapist_login(email,password) or patient_login(email,password)

    if user_json == None:
        return jsonify({'message': 'Invalid credentials'}), 401
    
    return user_json


def therapist_login(email, password):

    therapist = Therapist.query.filter_by(email=email).first()

    if therapist and check_password_hash(therapist.password, password):
        access_token = create_access_token(identity=therapist.id)
        return jsonify({"access_token":access_token,"user":therapist.serialize(),"userType": "therapist"})
    return None
    
def patient_login(email,password):
    patient = Patient.query.filter_by(email=email).first()

    if patient and check_password_hash(patient.password, password):
        access_token = create_access_token(identity=patient.id)
        return jsonify({"access_token":access_token,"user":patient.serialize(),"userType": "patient"})
    return None

def getUser(id)->{'user': object,'userType': str}: 
    user = Patient.query.filter_by(id=id).first()
    if user :
        return {'user':user,'userType':'patient'}
    
    user = Therapist.query.filter_by(id=id).first()
    if user :
        return {'user':user,'userType':'therapist'}
    
    return None
   

@app.get('/me/<string:user_type>')
def me(user_type):
    current_user_id = get_jwt_identity()
    user = None

    if user_type == 'therapist':
        user = Therapist.query.get(current_user_id)
        # if therapist:
        #     therapist_data = {'id': therapist.id, 'name': therapist.name}
        #     return jsonify(therapist_data)
    elif user_type == 'patient':
        user = Patient.query.get(current_user_id)
        # if patient:
        #     patient_data = {'id': patient.id, 'name': patient.name}
        #     return jsonify(patient_data)

    return jsonify(user.serialize()) if user else jsonify({'message': 'User not found or user type is invalid'}), 404

        
        

### Logout Routes


@app.post('/therapist/logout')
# @jwt_required() 
def therapist_logout():
    try:
        # Get the therapist's ID from the JWT token
        # therapist_id = get_jwt_identity()
        therapist_id = 1
        # You can perform any additional logout-related actions here if needed
        response = make_response(jsonify({'message': 'Logout successful'}))
        response.delete_cookie('jwt-token')  # Clear the cookie
        return response

        # Return a response indicating successful logout
        return jsonify({'message': 'Logout successful'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.post('/patient/logout')
# @jwt_required() 
def patient_logout():
    try:
        # Get the therapist's ID from the JWT token
        # therapist_id = get_jwt_identity()
        therapist_id = 1
        # You can perform any additional logout-related actions here if needed
        response = make_response(jsonify({'message': 'Logout successful'}))
        response.delete_cookie('jwt-token')  # Clear the cookie
        return response

        # Return a response indicating successful logout
        return jsonify({'message': 'Logout successful'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500




@app.route('/therapist/patients')
@jwt_required()  # Require authentication for this route
def get_patients_for_therapist():
    try:
        # Get the therapist's ID from the JWT token
        therapist_id = get_jwt_identity()
        # therapist_id = id

        # Query the sessions and patients for the authenticated therapist
        patient_list = Patient.query.filter(Patient.therapist_id == therapist_id).all()
        
        # get the patients
        # patient_list = [s.patient for s in sessions]

        # serialize the patients
        patient_list_serialized = [
            {
                'id': patient.id,
                'first_name': patient.first_name,
                'last_name': patient.last_name,
            }
            for patient in  set(patient_list)
        ]

        # patients = Patient.query.filter_by(id=therapist_id).all()

        return jsonify([p.serialize() for p in patient_list])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

### Get all sessions for the authenticated therapist selected patient

@app.route('/patient/<int:patient_id>/sessions')
@jwt_required()  # Require authentication for this route
def get_sessions_for_patient(patient_id):
    
    user = getUser(get_jwt_identity())
    if user['userType'] == 'therapist':
        therapist_id = get_jwt_identity()
        sessions = Session.query.filter(
            Session.therapist_id == therapist_id,
            Session.patient_id == patient_id
        ).all()
        
    elif user['userType']== 'patient':
        sessions = Session.query.filter(Session.patient_id==get_jwt_identity()).all()

    session_list_serialized = [
        {
            'id': session.id,
            'transcript': session.transcript,
            'session_date': session.session_date,
        }
        for session in sessions
    ]
    print(session_list_serialized)

    return jsonify(session_list_serialized)
        


### Post new session to authenticated therapist selected patient
    

@app.post('/therapist/patient/<int:patient_id>/sessions/upload-session')
@jwt_required()
def upload_session(patient_id):
    
    try:
        data = request.json
        therapist_id = get_jwt_identity()
        session_date = datetime.strptime(data.get('sessionDate'), '%Y-%m-%d')
        transcript = data.get('transcript')

        session = Session(
            therapist_id=therapist_id,
            patient_id=patient_id,
            session_date=session_date,
            transcript=transcript,
        )

        db.session.add(session)
        db.session.commit()
        
        return jsonify({'message': 'Session uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

### Post new patient to authenticated therapist

@app.post('/therapist/<int:therapist_id>/create-patient')
@jwt_required()
def create_patient(therapist_id):
    print("post")
    try:
        data = request.json
        therapist_id = get_jwt_identity()
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
            phone_number=phone_number,
            therapist_id=therapist_id
        )

        db.session.add(patient)
        db.session.commit()

        return jsonify({'message': 'Patient created successfully'})
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    


### Post new appointment to authenticated therapist

@app.post('/therapist/<therapist_id>/appointments')
@jwt_required()
def create_appointment(therapist_id):
    try:
        data = request.json 
        therapist_id = get_jwt_identity()
        patient_id = data.get('patient_id')
        appointment_date = data.get('appointment_date')
        appointment_time = data.get('appointment_time')



        new_appointment = Appointments(
            therapist_id=therapist_id,
            patient_id=patient_id,
            appointment_date=appointment_date,
            appointment_time=appointment_time
        )

        db.session.add(new_appointment)
        db.session.commit()

        return jsonify({"message": "Appointment created successfully"})
    except Exception as e:
        print(e)
        return jsonify({'error on back end' : str(e)}), 500



### Get all appointments for authenticated therapist

@app.route('/therapist/<therapist_id>/appointments/')
@jwt_required()
def get_appointments(therapist_id):
        therapist_id = get_jwt_identity()
        appointments = Appointments.query.filter(
        Appointments.therapist_id == therapist_id).all()

        session_list_serialized = [
        {
            'id': appointment.id,
            'patient_id': appointment.patient_id,
            'appointment_time': appointment.appointment_time,
            'appointment_date': appointment.appointment_date,
        }
        for appointment in appointments
    ]
        print(session_list_serialized)
        resp = make_response(jsonify(session_list_serialized), 200)
        resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        resp.headers['Access-Control-Allow-Credentials'] =  True
        return jsonify(session_list_serialized)





# @app.route('/analyze', methods=['POST'])
# def analyze():
#     if request.method == 'POST':
#         uploaded_file = request.files['file']
#         if uploaded_file.filename != '':
#             text = uploaded_file.read().decode('utf-8')
#             analysis = TextBlob(text)
#             sentiment_score = analysis.sentiment.polarity
#             return f'Sentiment Score: {sentiment_score}'
        

# from .sessions import *
@app.route('/sessions')
class PatientSession:
    
    @app.get('/')
    def index():
        return "index"

if __name__ == '__main__':
    app.run(debug=True)
