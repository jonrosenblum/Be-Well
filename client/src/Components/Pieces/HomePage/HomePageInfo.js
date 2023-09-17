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
    MDBCardFooter,
    MDBCardImage,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import stockImage from "./stock.jpg"
import "./HomePage.css"


export default function HomePageInfo() {



    return (
        <div>
            <div className='custom-div'>
                <MDBContainer className="col-xxl-8 py-5">
                    <MDBRow className="flex-lg-row-reverse align-items-center g-5 py-5">
                        <MDBCol className='col-10 col-sm-8 col-lg-6'>
                            <img src={stockImage} alt="" className="d-block mx-lg-auto img-fluid" width="700" height="500"></img>
                        </MDBCol>
                        <MDBCol className='col-lg-6'>
                            <h1 className='display-5 fw-bold lh-1 mb-3'>Experience the future of healthcare management with Be Well</h1>
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

            <div className='custom-div'>
                <MDBContainer className="col-xxl-8 py-5">
                    <MDBRow className="g-5 py-5">
                        <MDBCard className='mx-auto' style={{ width: '18rem' }}>
                            <MDBCardImage src={stockImage} alt="Card image cap" />
                            <MDBCardBody>
                                <MDBCardTitle>Client Management</MDBCardTitle>
                                <MDBCardText className='text-center'>
                                    Keep track of your client on one screen. View and manage
                                    client demographics, contacts, diagnosis and treatment planning,
                                    recent appointments, billing, to-do items, and more. Add individual
                                    clients as members of couples, family or conjoint therapy clients.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                        <MDBCard className='mx-auto' style={{ width: '18rem' }}>
                            <MDBCardImage src={stockImage} alt="Card image cap" />
                            <MDBCardBody>
                                <MDBCardTitle>Client Relationship</MDBCardTitle>
                                <MDBCardText className='text-center'>
                                    Without a strong therapeutic alliance withyour clients,
                                    work is much harder. We focus on building features to
                                    make it easy to get feedback from clients and keep them engaged.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                        <MDBCard className='mx-auto' style={{ width: '18rem' }}>
                            <MDBCardImage src={stockImage} alt="Card image cap" />
                            <MDBCardBody>
                                <MDBCardTitle>Dashboard and Insights</MDBCardTitle>
                                <MDBCardText>
                                    Keep track of what's important with our simplified dashboard.
                                    We'll keep you organized and focused, even if that
                                    doesn't always come naturally for you.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>

                    </MDBRow>
                    <MDBRow className="g-5 py-5">
                        <MDBCard className='mx-auto' style={{ width: '18rem' }}>
                            <MDBCardImage src={stockImage} alt="Card image cap" />
                            <MDBCardBody>
                                <MDBCardTitle>Client Portal</MDBCardTitle>
                                <MDBCardText>
                                    Invite your clients to accept and electronically sign your Consent Forms
                                    and fill out paperwork before their appointment, all in a
                                    secure and mobile-friendly Client Portal.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                        <MDBCard className='mx-auto' style={{ width: '18rem' }}>
                            <MDBCardImage src={stockImage} alt="Card image cap" />
                            <MDBCardBody>
                                <MDBCardTitle>Secure Messaging</MDBCardTitle>
                                <MDBCardText>
                                    Have realtime instant messaging with your clients within a
                                    HIPAA-compliant environment to protect your clients' privacy.
                                </MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                        <MDBCard className='mx-auto' style={{ width: '18rem' }}>
                            <MDBCardImage src={stockImage} alt="Card image cap" />
                            <MDBCardBody>
                                <MDBCardTitle>Online Booking</MDBCardTitle>
                                <MDBCardText>
                                    Eliminate headaches coordinating schedules with your
                                    clients by allowing them to request appointments
                                    through the Client Portal.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBRow>
                </MDBContainer>

            </div>
            {/* 
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
            </MDBContainer> */}
        </div>

    );
}

