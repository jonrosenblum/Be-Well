import HomePageNav from "../Components/Pieces/HomePageNav.js";
import PatientsOrDoctorLogin from "../Components/Pieces/PatientsOrDoctorLogin.js";
import "./Styles/HomePage.css"


export default function HomePage() {
    return (
        <div className="flex-container">
            <HomePageNav />
            <PatientsOrDoctorLogin />
        </div>
    )
}