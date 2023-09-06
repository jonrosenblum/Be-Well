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

if __name__ == '__main__':
    app.run(debug=True)