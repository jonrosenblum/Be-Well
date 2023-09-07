from app import app, db, Therapist, Patient, Session, Metrics

# Initialize the Flask app and the database
app.app_context().push()
db.create_all()

# Create dummy therapist data
therapist1 = Therapist(
    password='password1',
    first_name='Therapist',
    last_name='One',
    email='therapist1@example.com',
    city='City1',
    state='CA',
    phone_number='123-456-7890'
)

# Create dummy patient data
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

# Create more dummy patient data
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


# Create dummy session data
session1 = Session(
    therapist=therapist1,
    patient=patient1,
    transcript='Session 1 transcript'
)

session2 = Session(
    therapist=therapist1,
    patient=patient2,
    transcript="Session 2 transcript"
)

# Create more dummy session data
session3 = Session(
    therapist=therapist1,
    patient=patient3,
    transcript='Session 3 transcript'
)

session4 = Session(
    therapist=therapist1,
    patient=patient4,
    transcript="Session 4 transcript"
)


# Create dummy metric data
metric1 = Metrics(
    session=session1,
    measurables='Metric 1 data'
)

# Add data to the session
db.session.add(therapist1)
db.session.add(patient1)
db.session.add(patient2)
db.session.add(session1)
db.session.add(session2)
db.session.add(metric1)

# Commit the changes to the database
db.session.commit()

print("Dummy data added successfully!")
