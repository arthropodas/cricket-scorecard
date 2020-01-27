import React from 'react';
import { Router, Route } from 'react-router-dom';
import ScoreCard from './componets';
import Team1 from './componets/Squad/Team1';
import Team2 from './componets/Squad/Team2';
import history from './history';
import UpcomingMatches from './UpcomingMatches';
import Player from './PlayerProfile/Player';
<<<<<<< HEAD
import PlayerRsa from './PlayerProfile/PlayerRsa';
import PlayerEng from './PlayerProfile/PlayerEng';
import Captain from './PlayerProfile/Captain';
import Keeper from './PlayerProfile/Keeper';
import AllRounder from './PlayerProfile/AllRounder';
import Bowler from './PlayerProfile/Bowler';
import Batsman  from './PlayerProfile/Batsman';
=======
>>>>>>> fb233cecd10d6cfe1801dbdd8d5b2d40efeed48c

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={ScoreCard} />
        <Route path="/RSA" component={Team1} />
        <Route path="/ENG" component={Team2} />
        <Route path="/matches" component={UpcomingMatches} />
        <Route path="/profile" component={Player} />
<<<<<<< HEAD
        <Route path="/Amla" component={PlayerRsa} />
        <Route path="/Anderson" component={PlayerEng} />
        <Route path="/cap" component={Captain} />
        <Route path="/deKock" component={Keeper} />
        <Route path="/allrounders" component={AllRounder} />
        <Route path="/bowlers" component={Bowler} />
        <Route path="/batsman" component={Batsman} />
=======
>>>>>>> fb233cecd10d6cfe1801dbdd8d5b2d40efeed48c
      </div>
    </Router>
  );
}

export default App;
