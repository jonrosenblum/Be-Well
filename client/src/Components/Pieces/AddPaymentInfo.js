import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddPaymentInfo() {
    const [billingInfo, setBillingInfo] = useState({
        cardNumber: "",
        cardName: "",
        expirationDate: "",
        cvv: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBillingInfo({
            ...billingInfo,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the submission of billing information here
        console.log("Billing Info submitted:", billingInfo);
    };

    return (
        <div>
            <h2>Billing Information</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="cardName">
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="cardName"
                        value={billingInfo.cardName}
                        onChange={handleInputChange}
                        placeholder="Enter cardholder name"
                    />
                </Form.Group>
                <Form.Group controlId="cardNumber">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="cardNumber"
                        value={billingInfo.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Enter card number"
                    />
                </Form.Group>

                <Form.Group controlId="cardExp">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                        type="text"
                        name="expirationDate"
                        value={billingInfo.cardExp}
                        onChange={handleInputChange}
                        placeholder="Enter expiration date"
                    />
                </Form.Group>
                <Form.Group controlId="cardCVV">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                        type="text"
                        name="cardCVV"
                        value={billingInfo.cvv}
                        onChange={handleInputChange}
                        placeholder="Enter cardholder name"
                    />
                </Form.Group>

                {/* Add more form fields for expiration date, CVV, and billing address here */}

                <Form.Group controlId="address">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={billingInfo.address}
                        onChange={handleInputChange}
                        placeholder="Enter billing address"
                    />
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={billingInfo.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                    />
                </Form.Group>

                <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        name="state"
                        value={billingInfo.state}
                        onChange={handleInputChange}
                        placeholder="Enter state"
                    />
                </Form.Group>

                <Form.Group controlId="zip">
                    <Form.Label>ZIP Code</Form.Label>
                    <Form.Control
                        type="text"
                        name="zip"
                        value={billingInfo.zip}
                        onChange={handleInputChange}
                        placeholder="Enter ZIP code"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
