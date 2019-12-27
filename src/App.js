import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">Testing!</Container>
    </div>
  );
}

export default App;
