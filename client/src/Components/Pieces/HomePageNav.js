import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Styles/HomePageNav.css"; // Import the CSS file for styling

export default function HomePageNav() {
    return (
        <div className="home-page-container">
            <nav>
                <ul className="horizontal-nav">
                    <li>
                        <NavLink to="/" className="nav-link">
                            <div className="nav-item">Home</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="nav-link">
                            <div className="nav-item">Services</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment" className="nav-link">
                            <div className="nav-item">Payment</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/get-started" className="nav-link">
                            <div className="nav-item">Get Started</div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="portal-button">
                <Link to="/therapist/login">
                    <button className="therapist-button">Therapist</button>
                </Link>
                <Link to="/patient/login">
                    <button className="patient-button">Patient</button>
                </Link>
            </div>
        </div>
    );
}