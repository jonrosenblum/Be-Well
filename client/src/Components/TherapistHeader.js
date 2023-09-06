import React from "react";
import { NavLink } from "react-bootstrap";
import "../Components/Styles/TherapistHeader.css"; // Import the CSS file

export default function TherapistHeader() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to='/therapist/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/therapist/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='therapist/settings'>Settings</NavLink>
                </li>
                <li>
                    <NavLink to='therapist/logout'>Logout</NavLink>
                </li>
            </ul>
        </nav>

    );
}