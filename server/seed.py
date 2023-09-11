from app import app, db, Therapist, Patient, Session, Metrics
from datetime import date
from flask_bcrypt import Bcrypt


date_str_session1 = '2023-09-15'
date_str_session2 = '2023-09-16'
date_str_session3 = '2023-09-17'
date_str_session4 = '2023-09-18'
date_str_session5 = '2023-09-19'

session_date_1 = date.fromisoformat(date_str_session1)
session_date_2 = date.fromisoformat(date_str_session2)
session_date_3 = date.fromisoformat(date_str_session3)
session_date_4 = date.fromisoformat(date_str_session4)
session_date_5 = date.fromisoformat(date_str_session5)

app.app_context().push()
db.create_all()

bcrypt = Bcrypt(app)

therapists = [
    Therapist(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='T1',
    last_name='One',
    email='t1@example.com',
    city='City1',
    state='CA',
    phone_number='123-456-7890'
),
    Therapist(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='T2',
    last_name='One',
    email='t2@example.com',
    city='City1',
    state='CA',
    phone_number='123-456-7891'
),
    Therapist(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='T3',
    last_name='One',
    email='t3@example.com',
    city='City1',
    state='CA',
    phone_number='123-456-7892'
),
]

patient1 = Patient(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='Patient',
    last_name='One',
    email='patient1@example.com',
    city='City1',
    state='CA',
    phone_number='987-654-3210',
    therapist_id=1
)

patient2 = Patient(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='Patient',
    last_name='Two',
    email='patient2@example.com',
    city='City2',
    state='CA',
    phone_number='987-654-3210',
    therapist_id=1
)

patient3 = Patient(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='Patient',
    last_name='Three',
    email='patient3@example.com',
    city='City3',
    state='CA',
    phone_number='987-654-3210',
    therapist_id=2
)

patient4 = Patient(
    password=bcrypt.generate_password_hash('password').decode('utf-8'),
    first_name='Patient',
    last_name='Four',
    email='patient4@example.com',
    city='City4',
    state='CA',
    phone_number='987-654-3210',
    therapist_id=2
)


session1 = Session(
    therapist=therapists[0],
    patient=patient1,
    session_date=session_date_1,  
    transcript='Session 1 transcript',
    mp3_file='session1.mp3'  
)

session2 = Session(
    therapist=therapists[0],
    patient=patient2,
    session_date=session_date_2,  
    transcript="Session 2 transcript",
    mp3_file='session2.mp3'  
)

session3 = Session(
    therapist=therapists[0],
    patient=patient3,
    session_date=session_date_3,  
    transcript='Session 3 transcript',
    mp3_file='session3.mp3'  
)

session4 = Session(
    therapist=therapists[0],
    patient=patient4,
    session_date=session_date_4, 
    transcript="Session 4 transcript",
    mp3_file='session4.mp3'  
)

session5 = Session(
    therapist=therapists[0],
    patient=patient1,
    session_date=session_date_5,  
    transcript="Session 5 transcript",
    mp3_file='session5.mp3' 
)

metric1 = Metrics(
    session=session1,
    measurables='Metric 1 data'
)


for th in therapists:
    db.session.add(th)

db.session.add(patient1)
db.session.add(patient2)
db.session.add(patient3)
db.session.add(patient4)
db.session.add(session1)
db.session.add(session2)
db.session.add(session3)
db.session.add(session4)
db.session.add(session5)
db.session.add(metric1)

db.session.commit()

print("Dummy data added successfully!")
