"""empty message

Revision ID: b4fb755eaa02
Revises: 
Create Date: 2023-09-11 13:28:30.497825

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4fb755eaa02'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('therapist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=60), nullable=False),
    sa.Column('first_name', sa.String(length=100), nullable=False),
    sa.Column('last_name', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('city', sa.String(length=100), nullable=False),
    sa.Column('state', sa.String(length=2), nullable=False),
    sa.Column('phone_number', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('password', sa.String(length=60), nullable=False),
    sa.Column('first_name', sa.String(length=100), nullable=False),
    sa.Column('last_name', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('city', sa.String(length=100), nullable=False),
    sa.Column('state', sa.String(length=2), nullable=False),
    sa.Column('phone_number', sa.String(length=20), nullable=False),
    sa.Column('therapist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['therapist_id'], ['therapist.id'], name=op.f('fk_patient_therapist_id_therapist')),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('appointments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('therapist_id', sa.Integer(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=False),
    sa.Column('appointment_date', sa.Date(), nullable=False),
    sa.Column('appointment_time', sa.Time(), nullable=False),
    sa.ForeignKeyConstraint(['patient_id'], ['patient.id'], name=op.f('fk_appointments_patient_id_patient')),
    sa.ForeignKeyConstraint(['therapist_id'], ['therapist.id'], name=op.f('fk_appointments_therapist_id_therapist')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('session',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('therapist_id', sa.Integer(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=False),
    sa.Column('session_date', sa.Date(), nullable=False),
    sa.Column('transcript', sa.Text(), nullable=False),
    sa.Column('mp3_file', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['patient_id'], ['patient.id'], name=op.f('fk_session_patient_id_patient')),
    sa.ForeignKeyConstraint(['therapist_id'], ['therapist.id'], name=op.f('fk_session_therapist_id_therapist')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('metric',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('session_id', sa.Integer(), nullable=False),
    sa.Column('measurables', sa.String(length=100), nullable=False),
    sa.ForeignKeyConstraint(['session_id'], ['session.id'], name=op.f('fk_metric_session_id_session')),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('session_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('metric')
    op.drop_table('session')
    op.drop_table('appointments')
    op.drop_table('patient')
    op.drop_table('therapist')
    # ### end Alembic commands ###
