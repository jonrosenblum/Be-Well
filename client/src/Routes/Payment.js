import React from "react";
import HomePageNav from "../Components/Pieces/HomePageNav";
import "./Styles/Payment.css";


export default function Payment() {
    return (
        <div className="payment-div">
            <HomePageNav />
            <h1>We will grow with your practice</h1>
            <h2>Our pricing is flat and straightforward, so you
                will never get hit with unexcpected fees.
                <div className="pricing-container">
                    <h1>Freemium</h1>
                    <h2>$0 / month</h2>
                    <h3>Up to 3 Clients</h3>
                    <h3>1 Therapist</h3>
                    <h1>Professional</h1>
                    <h2>$39 / month</h2>
                    <h3>Unlimited Clients</h3>
                    <h3>$29/month per additional therapist</h3>
                    <h3>30-day free trial</h3>
                </div>
            </h2>
        </div>
    )
}