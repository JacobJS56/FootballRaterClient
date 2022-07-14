import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import top20 from '../../resources/top_20_players.json'; 

import "./IndividualPlayer.css";
class IndividualPlayerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.playerID = GetExtension();

    //Wrong code for using preloaded json
    for (let i = 0; i < top20.length; i++) {
        const player = top20[i];
        if (this.state.playerID == player.id) {
            this.state.player = player;
            break;
        }
        else{
            this.state.player = {
                //The object from Spring backend
          
                //Test Object
                firstName: "Marcus",
                lastName: "Rashford",
                shirtNumber: 10,
                teamID: 3,
                teamName: "Man United",
                competitons: [{ 1: "PremierLeague" }, { 2: "ChampionsLeague" }],
                rating: 1,
                ratingList: [
                  { "1,1,PremierLeague": 9.5 },
                  { "1,2,PremierLeague": 5 },
                  { "1,1,ChampionsLeague": 9.5 },
                ],
              }
        }
        
    }
    console.log(this.state.player)
  }

  render() {
    return (
      <div>
        <Navbar />

        <h1>(PAGE BANNER) Individual Players Page: {this.state.playerID}</h1>
        <div id="PlayerWrapper">
          <h2>
            {this.state.player.firstName}{" "}
            <em id="LastName">{this.state.player.lastName}</em> </h2>
            <p>Shirt No: {this.state.player.shirtNumber}</p>
            <p>Plays for: {this.state.player.teamName}</p>
            <img src={this.state.player.image} />
            <p>Rating: {this.state.player.rating}</p>
        </div>
      </div>
    );
  }
}

function GetExtension() {
  var fullpath = window.location.hash;
  var splitPath = fullpath.split("/");
  return splitPath[splitPath.length - 1];
}

IndividualPlayerPage.propTypes = {};

export default IndividualPlayerPage;
