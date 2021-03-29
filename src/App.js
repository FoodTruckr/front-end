import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';

// pick a theme of your choice
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <h1>Hey whatsup.</h1>
    </ThemeProvider>
  </div>
);

export default App;
