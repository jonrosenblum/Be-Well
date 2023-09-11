import React from "react";
import { useAuthHook } from "../Services/hooks";


export default function TherapistProfile() {
    const { user } = useAuthHook();

    return (
        <div>
            {user.email}
        </div>
    )
}