import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import './Styles/Root.css'

export default function Root() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}
