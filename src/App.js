import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';

// pick a theme of your choice

import original from 'react95/dist/themes/original';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import DinerLanding from './components/DinerLanding';
import OperatorLanding from './components/OperatorLanding';
import SingleTruck from './components/SingleTruck';
import { PrivateRoute } from './utils/PrivateRoute';
import FavoriteBar from './components/FavoriteBar';

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
      <PrivateRoute path="/diner" component={FavoriteBar} />
      <PrivateRoute exact path="/diner" component={DinerLanding} />
      <PrivateRoute exact path="/operator" component={OperatorLanding} />
      <PrivateRoute exact path="/diner/:truckId" component={SingleTruck} />
      <PrivateRoute path="/operator/:truckId" component={SingleTruck} />
    </ThemeProvider>
  </div>
);

export default App;
