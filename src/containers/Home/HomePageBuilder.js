import React from 'react';

import { useEffect, useState } from "react";
import axios from "axios";

import './Home.css';
import './../../components/Navbar/Navbar'
// import teamData from "../../resources/top_20_teams.json"
// import playerData from "../../resources/top_20_players.json"
// import leagueData from "../../resources/league.json"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from './../../components/Navbar/Navbar';

const HomePageBuilder = (props) => {
  let carouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
  };

  const [teamData, setTeamData] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);

  // for local testing use localhost:8080 or use the imported JSON abovw

  const getTeamData = async () => {
    const { data } = await axios.get(
      "https://football-rater.herokuapp.com/api/v2/team/top-20"
    );
    setTeamData(data);
    console.log(data);
  };

  const getPlayerData = async () => {
    const { data } = await axios.get(
      "https://football-rater.herokuapp.com/api/v2/player/top-20"
    );
    setPlayerData(data);
    console.log(data);
  };

  const getLeagueData = async () => {
    const { data } = await axios.get(
      "https://football-rater.herokuapp.com/api/v2/league/all"
    );
    setLeagueData(data);
    console.log(data);
  };

  useEffect(() => {
    getTeamData();
    getPlayerData();
    getLeagueData();
  }, []);

  const teamList = [];
  teamData.forEach((el) => {
    let imgURL = el.logo.split("/");
    imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5];
    teamList.push(
      <div className="team-item" key={el.teamName}>
        <p>{el.teamName}</p>
        <img src={imgURL} alt="" />
        <p>{el.rating}</p>
      </div>
    );
  });

  const playerList = [];
  playerData.forEach((el) => {
    let imgURL = el.image.split("/");
    imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5];
    playerList.push(
      <div className="player-item" key={el.combinedName + el.teamName}>
        <p>{el.combinedName}</p>
        <p>{el.teamName}</p>
        <img src={imgURL} alt="" />
        <p>{el.rating}</p>
      </div>
    );
  });

  const leagueList = [];
  leagueData.forEach((el) => {
    let imgURL = el.image.split("/");
    imgURL = "https://drive.google.com/uc?export=view&id=" + imgURL[5];
    leagueList.push(
      <div key={el.league}>
        <p>{el.league}</p>
        <img src={imgURL} alt="" />
      </div>
    );
  });

  return (
    <div className="main">
      
      <Navbar />
      <div className="line" />
      <div className="Banner">
        <p className="FansText">FANS</p>
        <p className="RaterText">RATER</p>
      </div>

      <div className="line" />

      <div className="TeamBanner">
        <p className="TeamText">TOP TEAMS</p>
        <Slider className="team-carousel" {...carouselSettings}>
          {teamList}
        </Slider>
      </div>

      <div className="line" />
      <div className="PlayerBanner">
        <p className="PlayerText">TOP PLAYERS</p>
        <Slider className="carousel" {...carouselSettings}>
          {playerList}
        </Slider>
      </div>

      <div className="line" />

      <div className="LeagueBanner">
        <p className="LeagueText">LEAGUES</p>
        {leagueList}
      </div>
    </div>
  );
};

export default HomePageBuilder;
