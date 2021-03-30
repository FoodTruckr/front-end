import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';

// pick a theme of your choice
import original from 'react95/dist/themes/original';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
// original Windows95 font (optionally)

const App = () => (
  <div className="App">
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <NavBar />
      <Landing />
    </ThemeProvider>
  </div>
);

export default App;
