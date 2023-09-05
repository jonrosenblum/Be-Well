import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Root() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
}
