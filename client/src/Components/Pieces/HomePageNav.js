import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

import "../Styles/HomePageNav.css"

export default function HomePageNav() {
    return (
        <MDBNavbar>
            <MDBContainer>
                <MDBNavbarBrand href='#'>
                    <img
                        src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                </MDBNavbarBrand>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-link">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/payment" className="nav-link">
                            Payment
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/get-started" className="nav-link">
                            Get Started
                        </NavLink>
                    </li>
                </ul>
                <div className="portal-button">
                    <Link to="/therapist/login" className="btn btn-info therapist-button">
                        Therapist
                    </Link>
                    <Link to="/patient/login" className="btn btn-info patient-button">
                        Patient
                    </Link>
                </div>
            </MDBContainer>
        </MDBNavbar>


    );
}
