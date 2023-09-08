import HomePageNav from "../Components/Pieces/HomePageNav.js";
import Welcome from "../Components/Pieces/Welcome.js";
import "./Styles/HomePage.css";

export default function HomePage() {
    return (
        <div className="flex-container">
            <div className="nav-container">
                <HomePageNav />
            </div>
            <div className="content-container">
                <Welcome />
            </div>
        </div>
    );
}
