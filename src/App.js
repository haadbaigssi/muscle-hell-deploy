import Navbar from './LandingPage/navbar';
import React from 'react';
import {Grid} from '@material-ui/core'
import LandingPage from './LandingPage/landingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Subscription from './Subscription/subscription'
import Contact from './contact/contact'
import Team from './team/team'
function App() {
  return (
    <Router>
      <Grid container>
        <Grid item xs={12}>
          <Navbar/>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/subscription" exact component={Subscription} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/ourteam" exact component={Team} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
