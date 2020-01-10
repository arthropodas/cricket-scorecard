import React from 'react';
import { Router, Route } from 'react-router-dom';
import ScoreCard from './componets';
import Team1 from './componets/Squad/Team1';
import Team2 from './componets/Squad/Team2';
import history from './history';
import UpcomingMatches from './UpcomingMatches';

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={ScoreCard} />
        <Route path="/RSA" component={Team1} />
        <Route path="/ENG" component={Team2} />
        <Route path="/matches" component={UpcomingMatches} />
      </div>
    </Router>
  );
}

export default App;
