import React from "react";

import iconRight from "../../images/Scores/Icon-Right.svg";
import iconLeft from "../../images/Scores/Icon-Left.svg";

import "./Scores.css";

function Scores({ data }) {
  const leagues = data.leagues.map((league) => (
    <div className="matches">
      <h1>{league.title}</h1>
      {league.matches.map((match) => (
        <div className="match">
          <div className="team-score">
            <div className="team-info">
              <p className="team-city">{match.team1.city}</p>
              <p className="team-name">{match.team1.name}</p>
            </div>
            <p className="match-score">{match.team1.score}</p>
          </div>
          <p className="match-colon">:</p>
          <div className="team-score">
            <p className="match-score">{match.team2.score}</p>
            <div className="team-info">
              <p className="team-city">{match.team2.city}</p>
              <p className="team-name">{match.team2.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="scores">
      <div className="top-scores">
        <img src={iconLeft} alt="icon left" className="icon-left" />
        <div className="title-scores ">
          <p className="title-scores-main">TODAY</p>
          <p className="title-scores-extra">April 22, 2015</p>
        </div>
        <img src={iconRight} alt="icon right" className="icon-right" />
      </div>

      {leagues}
    </div>
  );
}

export default Scores;
