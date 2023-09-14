import React from "react";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';


export default function HomePageNav() {
    return (
        <MDBNavbar className="d-flex">
            <MDBContainer>
                <MDBNavbarBrand href='/'>
                    <h1 className="logo">Be Well</h1>
                </MDBNavbarBrand>
                <div className="portal-button">
                    <Link to="/login" className="btn btn-info therapist-button">
                        Login
                    </Link>
                    
                </div>
            </MDBContainer>
        </MDBNavbar>


    );
}
