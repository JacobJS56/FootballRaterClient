import React from 'react';

import './Home.css';
import teamData from "../../resources/top_20_teams.json"
import playerData from "../../resources/top_20_players.json"
import leagueData from "../../resources/league.json"
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

    teamData.forEach((el)=>{
        let imgURL = el.logo.split('/')
        imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5]

        
        teamList.push(
            <div className="team-item">
                <p>{el.teamName}</p>
                <img src={imgURL} alt="image" />
                <p>{el.rating}</p>
            </div>)
    })

    const playerList = []

    playerData.forEach((el)=>{
        let imgURL = el.image.split('/')
        imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5]

        playerList.push(
            <div className="player-item">
                <p>{el.combinedName}</p>
                <p>{el.teamName}</p>
                <img src={imgURL} alt="image" />
                <p>{el.rating}</p>
            </div>)
    })

    
    const leagueList = []

    leagueData.forEach((el)=>{
        let imgURL = el.image.split('/')
        imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5]

        
        leagueList.push(
            <div>
                <p>{el.league}</p>
                <img src={imgURL} alt="image" />
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
                <Slider className="team-carousel" {...settings}>
                    {teamList}
                </Slider>
            </div>

            <div className="line"/>
            <div className="PlayerBanner">
                <p className="PlayerText">TOP PLAYERS</p>
                <Slider className="carousel" {...settings}>
                    {playerList}
                </Slider>
            </div>

            <div className="line"/>

            <div className="LeagueBanner">
                <p className="LeagueText">LEAGUES</p>
                {leagueList}
            </div>

        </div>
    );
};

export default Home;