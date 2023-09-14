import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap'; // Import Bootstrap JavaScript
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import stockImage from "./stock.jpg"
import "./HomePage.css"


export default function HomePageInfo() {



    return (
        <div>
            <div className='first-custom-div'>
                <MDBContainer className="col-xxl-8 px-4 py-5">
                    <MDBRow className="flex-lg-row-reverse align-items-center g-5 py-5">
                        <MDBCol className='col-10 col-sm-8 col-lg-6'>
                            <img src={stockImage} alt="" className="d-block mx-lg-auto img-fluid" width="700" height="500"></img>
                        </MDBCol>
                        <MDBCol className='col-lg-6'>
                            <h1 className='display-5 fw-bold lh-1 mb-3'>Experience the future of healthcare management with BeWell</h1>
                            <p className='lead'>
                                Empowering healthcare providers to deliver exceptional care,
                                our platform ensures secure, efficient, and accessible data management,
                                enabling better decision-making, improved patient outcomes,
                                and enhanced collaboration among healthcare teams.</p>
                            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                                <Link to="/get-started" className='btn btn-light btn-lg px-4 me-md-2'>Try it for free</Link>
                                <Link to="/about" className='btn btn-light btn-lg px-4 me-md-2'>Learn more</Link>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <MDBContainer className='second-custom-div'>
                <h2 className="my-5 py-5 text-center">Why Be Well?</h2>

                <MDBRow className="fade-in-target in">
                    <MDBCol md="6" className="mb-4 d-flex">
                        <MDBCard className="text-center">
                            <MDBCardBody>
                                <span className="icon-circle text-purple mb-3">
                                    <i className="fas fa-user-friends fa-2x"></i>
                                </span>
                                <h4 className="font-weight-bold">Therapeutic Alliance</h4>
                                <p className="h5">
                                    We know what matters most - the people you help. We built an EHR
                                    with features to help you strengthen relationships with them.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4 d-flex">
                        <MDBCard className="text-center">
                            <MDBCardBody>
                                <span className="icon-circle text-primary mb-3">
                                    <i className="fas fa-lightbulb fa-2x"></i>
                                </span>
                                <h4 className="font-weight-bold">Simple</h4>
                                <p className="h5">
                                    We believe in an elegant and intuitive design that is easy to
                                    learn so you’ll be up and running in minutes, not days.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="fade-in-target in">
                    <MDBCol md="6" className="mb-4 d-flex">
                        <MDBCard className="text-center">
                            <MDBCardBody>
                                <span className="icon-circle text-success mb-3">
                                    <i className="fas fa-piggy-bank fa-2x"></i>
                                </span>
                                <h4 className="font-weight-bold">Affordable</h4>
                                <p className="h5">
                                    We believe mental health care should be affordable to everyone.
                                    Our pricing is simple and straight-forward, so you’ll never be
                                    surprised by unexpected fees.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4 d-flex">
                        <MDBCard className="text-center">
                            <MDBCardBody>
                                <span className="icon-circle text-secondary mb-3">
                                    <i className="fas fa-exchange-alt fa-2x"></i>
                                </span>
                                <h4 className="font-weight-bold">Flexible</h4>
                                <p className="h5">
                                    Therapists work in unique ways. Your mental health practice
                                    management software needs to adapt to you. We give you control
                                    to customize everything from notes, to assessments, to reminders
                                    and more.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="fade-in-target pb-5 mb-5">
                    <MDBCol md="6" className="mb-4 d-flex">
                        <MDBCard className="text-center">
                            <MDBCardBody>
                                <span className="icon-circle text-secondary mb-3">
                                    <i className="fas fa-lock fa-2x"></i>
                                </span>
                                <h4 className="font-weight-bold">Secure</h4>
                                <p className="h5">
                                    We adhere to all HIPAA privacy and security requirements. HIPAA
                                    is at the core of every decision we make, from how we design our
                                    interface to where your data is stored. We go beyond HIPAA
                                    compliance to maintain your clients' privacy. Don't believe us?
                                    Check out our{" "}
                                    <a
                                        href="https://compliance.sessionshealth.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Compliance Policies Documentation
                                    </a>
                                    .
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4 d-flex">
                        <MDBCard className="text-center">
                            <MDBCardBody>
                                <span className="icon-circle text-purple mb-3">
                                    <i className="fas fa-universal-access fa-2x"></i>
                                </span>
                                <h4 className="font-weight-bold">Accessible</h4>
                                <p className="h5">
                                    We are a completely web-based application accessible on all
                                    modern computers, phones, and tablets. There’s no software to
                                    install, so you can access it wherever you have an internet
                                    connection.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer fluid className="mx-auto d-flex">
                <MDBCard className='m-10 feature-card' >
                    <MDBCardBody className=''>
                        <MDBCardTitle> Session Management </MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Semper auctor neque vitae tempus quam
                            pellentesque. Pulvinar elementum integer enim neque.
                        </MDBCardText>
                        <MDBBtn className='btn-info'>More info</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='m-10 feature-card' >
                    <MDBCardBody>
                        <MDBCardTitle> Scheduling </MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Semper auctor neque vitae tempus quam
                            pellentesque. Pulvinar elementum integer enim neque.                      </MDBCardText>
                        <MDBBtn className='btn-info'>More info</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <MDBContainer fluid className="mx-auto d-flex">
                <MDBCard className='m-10 feature-card' >
                    <MDBCardBody>
                        <MDBCardTitle>Patient Portals </MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Semper auctor neque vitae tempus quam
                            pellentesque. Pulvinar elementum integer enim neque.                       </MDBCardText>
                        <MDBBtn className='btn-info'>More info</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className='m-10 feature-card' >
                    <MDBCardBody>
                        <MDBCardTitle> Sentiment Analysis  </MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Semper auctor neque vitae tempus quam
                            pellentesque. Pulvinar elementum integer enim neque.                     </MDBCardText>
                        <MDBBtn className='btn-info'>More info</MDBBtn>                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>

    );
}

