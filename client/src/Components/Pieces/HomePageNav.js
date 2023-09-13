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
        <MDBNavbar className="d-flex">
            <MDBContainer>
                <MDBNavbarBrand href='/'>
                    <img
                        src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                </MDBNavbarBrand>
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
