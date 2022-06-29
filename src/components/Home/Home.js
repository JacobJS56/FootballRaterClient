import React from 'react';

import './Home.css';
import data from "../../resources/prem.json"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
    };

    const teamList = []

    data.forEach((el)=>{
        let imgURL = el.logo.split('/')
        imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5]

        
        teamList.push(
            <div className="item">
                <p>{el.teamName}</p>
                <img src={imgURL} alt="image" />
                <p>{el.rating}</p>
            </div>)
    })

    return (
        <div className="main">
            <nav className="stroke">
                <ul>
                    <li><a href="/">LOGO</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>

            <div className="line"/>
            <div className="Banner">
                <p className="FansText">FANS</p>
                <p className="RaterText">RATER</p>
            </div>
    
            <div className="line"/>
            
            <div className="TeamBanner">
                <p className="TeamText">TOP TEAMS</p>
                <Slider className="carousel" {...settings}>
                    {teamList}
                </Slider>
            </div>

            <div className="line"/>
            <div className="PlayerBanner">
                <p className="PlayerText">TOP PLAYERS</p>
            </div>

            <div className="line"/>

            <div className="LeagueBanner">
                <p className="LeagueText">LEAGUES</p>
            </div>

        </div>
    );
};

export default Home;