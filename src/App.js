import React from 'react';
import { Router, Route } from 'react-router-dom';
import ScoreCard from './componets';
import Team1 from './componets/Squad/Team1';
import Team2 from './componets/Squad/Team2';
import history from './history';
import UpcomingMatches from './UpcomingMatches';
<<<<<<< HEAD
import Player from './PlayerProfile/Player';
=======
>>>>>>> 7594219bc9143ad8e96ace14c1258ca5bce66a74

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={ScoreCard} />
        <Route path="/RSA" component={Team1} />
        <Route path="/ENG" component={Team2} />
        <Route path="/matches" component={UpcomingMatches} />
<<<<<<< HEAD
        <Route path="/profile" component={Player} />
=======
>>>>>>> 7594219bc9143ad8e96ace14c1258ca5bce66a74
      </div>
    </Router>
  );
}

export default App;
