import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LogoutSuccessAlert from "./LogoutSuccessAlert";
import { useAppDispatch, useAuthHook } from "../../Services/hooks";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function PatientHeader() {
    const dispatch = useAppDispatch();
    const auth = useAuthHook();
    const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch("/therapist/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
                },
            });

            if (!response.ok) {
                throw new Error("Logout failed");
            }

            dispatch(auth.actions.logout());
            setShowLogoutSuccess(true);
            navigate('/')
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
            <Button
                variant="primary"
                as={Link}
                to="/patient/portal"
            >
                Return Home
            </Button>
            <Button
                variant="primary"
                onClick={handleLogout}
            >
                Logout
            </Button>
            {showLogoutSuccess && (
                <LogoutSuccessAlert onClose={() => setShowLogoutSuccess(false)} />
            )}
        </div>
    );
}
