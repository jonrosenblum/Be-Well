import React from "react";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';


export default function PortalNav() {
    return (
        <MDBNavbar className="d-flex">
            <div className="portal-button">
                <Link to="/login" className="btn btn-info therapist-button">
                    Logout
                </Link>
            </div>
        </MDBNavbar>


    );
}
