import React from "react";

import "./Scores.css";

function Scores({ data }) {
  const leagues = data.leagues.map((league) => (
    <div>
      <h1>{league.title}</h1>
      {league.matches.map((match) => (
        <div>
          <div>
            {match.team1.name}
            {match.team1.city}
            {match.team1.score}
          </div>
          <div>
            {match.team2.name}
            {match.team2.city}
            {match.team2.score}
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="scores">
      <div>
        <span>arrow left</span>

        <h1>
          Title <br /> April 22, 2015
        </h1>
        <span>arrow right</span>
      </div>

      {leagues}
    </div>
  );
}

export default Scores;
