import React from "react";
import ServicesPiece from "../Components/Pieces/ServicesPiece";
import HomePageNav from "../Components/Pieces/HomePageNav";
// import './Styles/Services.css'


export default function Services() {
    return (
        <div className="services-container">
            <HomePageNav />
            <ServicesPiece />
        </div>
    )
}