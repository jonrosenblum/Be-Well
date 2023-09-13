import React from 'react';
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
    MDBSection
} from 'mdb-react-ui-kit';
import HomePageNav from '../Components/Pieces/HomePageNav';
import placeholderImage from "../Components/Pieces/Assets/placeholder.png"
import "../Components/Styles/HomePage.css"


export default function HomePage() {



    return (
        <div>
            <HomePageNav />
            <MDBContainer className="col-xxl-8 px-4 py-5">
                <MDBRow className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <MDBCol className='col-10 col-sm-8 col-lg-6'>
                        <img src={placeholderImage} alt="" className="d-block mx-lg-auto img-fluid" width="700" height="500"></img>
                    </MDBCol>
                    <MDBCol className='col-lg-6'>
                        <h1 className='display-5 fw-bold lh-1 mb-3'>Be Well</h1>
                        <p className='lead'>Experience the future of healthcare management with BeWell EHR System.
                            Empowering healthcare providers to deliver exceptional care,
                            our platform ensures secure, efficient, and accessible data management,
                            enabling better decision-making, improved patient outcomes,
                            and enhanced collaboration among healthcare teams.</p>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                            <button className='btn btn-primary btn-lg px-4 me-md-2'>Try it for free</button>
                            <button className='btn btn-primary btn-lg px-4 me-md-2'>Learn more</button>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div class="container my-5 py-5">
                <h2 class="my-5 py-5 text-center">Why Sessions Health?</h2>

                <div class="row fade-in-target in">
                    <div class="col-md-6 mb-4 d-flex">
                        <div class="card text-center">
                            <div class="card-body">
                                <span class="icon-circle text-purple mb-3"><i class="fas fa-user-friends fa-2x"></i></span>
                                <h4 class="font-weight-bold">Therapeutic Alliance</h4>
                                <p class="h5">We know what matters most - the people you help. We built an EHR with features to help you strengthen relationships with them.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 d-flex">
                        <div class="card text-center">
                            <div class="card-body">
                                <span class="icon-circle text-primary mb-3"><i class="fas fa-lightbulb fa-2x"></i></span>
                                <h4 class="font-weight-bold">Simple</h4>
                                <p class="h5">We believe in an elegant and intuitive design that is easy to learn so you’ll be up and running in
                                    minutes, not days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row fade-in-target in">
                    <div class="col-md-6 mb-4 d-flex">
                        <div class="card text-center">
                            <div class="card-body">
                                <span class="icon-circle text-success mb-3"><i class="fas fa-piggy-bank fa-2x"></i></span>
                                <h4 class="font-weight-bold">Affordable</h4>
                                <p class="h5">We believe mental health care should be affordable to everyone. Our pricing is simple and straight-forward, so you’ll never be surprised by unexpected fees.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 d-flex">
                        <div class="card text-center">
                            <div class="card-body">
                                <span class="icon-circle text-secondary mb-3"><i class="fas fa-exchange-alt fa-2x"></i></span>
                                <h4 class="font-weight-bold">Flexible</h4>
                                <p class="h5">Therapists work in unique ways. Your mental health practice management software needs to adapt to you. We give you control to customize everything from notes, to assessments, to reminders and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row fade-in-target pb-5 mb-5">
                    <div class="col-md-6 mb-4 d-flex">
                        <div class="card text-center">
                            <div class="card-body">
                                <span class="icon-circle text-secondary mb-3"><i class="fas fa-lock fa-2x"></i></span>
                                <h4 class="font-weight-bold">Secure</h4>
                                <p class="h5">We adhere to all HIPAA privacy and security requirements. HIPAA is at the core of every decision we make, from how we design our interface to where your data is stored. We go beyond HIPAA compliance to maintain your clients' privacy. Don't believe us? Check out our <a href="https://compliance.sessionshealth.com" target="_blank" rel="noopener noreferrer">Compliance Policies Documentation</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 d-flex">
                        <div class="card text-center">
                            <div class="card-body">
                                <span class="icon-circle text-purple mb-3"><i class="fas fa-universal-access fa-2x"></i></span>
                                <h4 class="font-weight-bold">Accessible</h4>
                                <p class="h5">We are a completely web-based application accessible on all modern computers, phones, and tablets. There’s no software to install, so you can access it wherever you have an internet connection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MDBContainer fluid className="mx-auto d-flex">
                <MDBCard className='m-10' >
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
                <MDBCard>
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
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Patient Portals </MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Semper auctor neque vitae tempus quam
                            pellentesque. Pulvinar elementum integer enim neque.                       </MDBCardText>
                        <MDBBtn className='btn-info'>More info</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle> Sentiment Analysis  </MDBCardTitle>
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. Semper auctor neque vitae tempus quam
                            pellentesque. Pulvinar elementum integer enim neque.                     </MDBCardText>
                        <MDBBtn className='btn-info'>More info</MDBBtn>                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <div className='section my-5 py-5'>
                <MDBContainer className=''>
                    <h3 className='font-weight-bold h1'>Focus on clients</h3>
                    <h4 className='font-weight-bold mb-4 h1'>Become more productive</h4>
                    <p className='text-muted h4 mb-4'>
                        Focus more on your clients and less on cleaning up a messy desk. Let Sessions Health
                        do the heavy lifting so you can spend more time on what really matters - your clients.
                        Try it free for 30 days. No credit card required.
                    </p>
                    <MDBBtn className='btn-info'>Try For Free</MDBBtn>

                </MDBContainer>
            </div>
        </div>

    );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import HomePageNav from '../Components/Pieces/HomePageNav';

// function HomePage() {
//     return (
//         <Container fluid>
//             <HomePageNav />
//             <Row className="hero-container">
//                 <Col>
//                     <h1>

//                     </h1>
//                     <h2>
//                         Helping psychotherapists and mental health professionals manage their private
//                         practice or clinic and strengthen client relationships.
//                     </h2>
//                     <Link to="/get-started">
//                         <Button variant="primary" className="patient-button">
//                             Try For Free
//                         </Button>
//                     </Link>
//                 </Col>
//                 <Col>
//                     <div>Hello</div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default HomePage;
