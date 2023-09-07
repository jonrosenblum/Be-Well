import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from 'react-router-dom' for routing
import "../Components/Styles/TherapistHeader.css"; // Import the CSS file

export default function TherapistHeader() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to='/therapist/portal'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/therapist/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/therapist/settings'>Settings</NavLink>
                </li>
                <li>
                    <NavLink to='/logout'>Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
}
