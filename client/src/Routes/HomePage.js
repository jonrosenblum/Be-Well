import HomePageNav from "../Components/Pieces/HomePageNav.js";
import { Link } from "react-router-dom";
import "./Styles/HomePage.css";

export default function HomePage() {
    return (
        <div className="flex-container">
            <HomePageNav />
            <div className="hero-container">
                <h1>Experience the future of healthcare management with BeWell EHR System.
                    Empowering healthcare providers to deliver exceptional care,
                    our platform ensures secure, efficient, and accessible data management,
                    enabling better decision-making, improved patient outcomes,
                    and enhanced collaboration among healthcare teams.</h1>
                <h2>Helping psychotherapists and mental health professionals manage their private
                    practice or clinic and strengthen client relationships.</h2>
                <Link to="/get-started">
                    <button className="patient-button">Try For Free</button>
                </Link>
            </div>
            <div>
                Hello
            </div>
        </div>


    );
}
