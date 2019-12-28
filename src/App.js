import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';

function App() {
  return (
    <Router>
      <NavBar />
      <Container maxWidth="lg">
        <Box mt={3}>
          <Switch>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
