import React from "react";
import placeholderImage from "./Assets/placeholder.png";


export default function ServicesPiece() {
    return (
        <div className="container">
            <div className="row parent-container">
                <div className="col-md-6 col-lg-3 small-container">
                    <div className="card">
                        <img className="card-img-top" src={placeholderImage} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Session Management</h5>
                            <p className="card-text">Session Management Description</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 small-container">
                    <div className="card">
                        <img className="card-img-top" src={placeholderImage} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Patient Portals</h5>
                            <p className="card-text">Patient Portals Description</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 small-container">
                    <div className="card">
                        <img className="card-img-top" src={placeholderImage} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Scheduling</h5>
                            <p className="card-text">Scheduling Description</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 small-container">
                    <div className="card">
                        <img className="card-img-top" src={placeholderImage} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Sentiment Scores</h5>
                            <p className="card-text">Wellness Tracker Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
