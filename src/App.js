//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import ButtonRow from "./ButtonRow";

const App = () => {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const initialTime = 5;
  const [time, setTime] = useState(initialTime);
  const [quarter, setQuarter] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow
          homeScore={homeScore}
          awayScore={awayScore}
          time={time}
          setTime={setTime}
          quarter={quarter}
          setQuarter={setQuarter}
        />
        <BottomRow time={time} quarter={quarter} setQuarter={setQuarter} />
        <ButtonRow
          homeScore={homeScore}
          setHomeScore={setHomeScore}
          awayScore={awayScore}
          setAwayScore={setAwayScore}
          setQuarter={setQuarter}
        />
      </section>
    </div>
  );
};

export default App;
