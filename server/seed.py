from app import app, db, Therapist, Patient, Session, Metrics

app.app_context().push()
db.create_all()

therapist1 = Therapist(
    password='password1',
    first_name='Therapist',
    last_name='One',
    email='therapist1@example.com',
    city='City1',
    state='CA',
    phone_number='123-456-7890'
)

patient1 = Patient(
    password='password1',
    first_name='Patient',
    last_name='One',
    email='patient1@example.com',
    city='City1',
    state='CA',
    phone_number='987-654-3210'
)

patient2 = Patient(
    password='password2',
    first_name='Patient',
    last_name='Two',
    email='patient2@example.com',
    city='City2',
    state='CA',
    phone_number='987-654-3210'
)

patient3 = Patient(
    password='password3',
    first_name='Patient',
    last_name='Three',
    email='patient3@example.com',
    city='City3',
    state='CA',
    phone_number='987-654-3210'
)

patient4 = Patient(
    password='password4',
    first_name='Patient',
    last_name='Four',
    email='patient4@example.com',
    city='City4',
    state='CA',
    phone_number='987-654-3210'
)


session1 = Session(
    therapist=therapist1,
    patient=patient1,
    session_date='2023-09-15',  
    transcript='Session 1 transcript',
    mp3_file='session1.mp3'  
)

session2 = Session(
    therapist=therapist1,
    patient=patient2,
    session_date='2023-09-16',  
    transcript="Session 2 transcript",
    mp3_file='session2.mp3'  
)

session3 = Session(
    therapist=therapist1,
    patient=patient3,
    session_date='2023-09-17',  
    transcript='Session 3 transcript',
    mp3_file='session3.mp3'  
)

session4 = Session(
    therapist=therapist1,
    patient=patient4,
    session_date='2023-09-18', 
    transcript="Session 4 transcript",
    mp3_file='session4.mp3'  
)

session5 = Session(
    therapist=therapist1,
    patient=patient1,
    session_date='2023-09-19',  
    transcript="Session 5 transcript",
    mp3_file='session5.mp3' 
)

metric1 = Metrics(
    session=session1,
    measurables='Metric 1 data'
)

db.session.add(therapist1)
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
