import React from 'react';
import 'bootstrap/dist/js/bootstrap'; // Import Bootstrap JavaScript
import HomePageNav from '../Components/Pieces/HomePage/HomePageNav';
import "../Components/Pieces/HomePage/HomePage.css";
import HomePageInfo from '../Components/Pieces/HomePage/HomePageInfo';


export default function HomePage() {

    return (
        <div className='home-page'>
            <HomePageNav />
            <HomePageInfo />
        </div>
    );
}
