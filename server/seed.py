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

# Create dummy session data
session1 = Session(
    therapist=therapist1,
    patient=patient1,
    transcript='Session 1 transcript'
)

# Create dummy metric data
metric1 = Metrics(
    session=session1,
    measurables='Metric 1 data'
)

# Add data to the session
db.session.add(therapist1)
db.session.add(patient1)
db.session.add(session1)
db.session.add(metric1)

# Commit the changes to the database
db.session.commit()

print("Dummy data added successfully!")
