import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <Link to="/"><button>Back Home</button></Link>
            <Outlet />
            <Footer />
        </div>
    );
}
