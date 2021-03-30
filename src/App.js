import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';

// pick a theme of your choice
import original from 'react95/dist/themes/original';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import { Route } from 'react-router-dom';
import { Hourglass } from 'react95';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
// original Windows95 font (optionally)

const App = () => (
  <div className="App">
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <NavBar />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
    </ThemeProvider>
  </div>
);

export default App;
