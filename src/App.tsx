import React from 'react';
import { Header } from '@core/components';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '@constants';
import AppRouter from './AppRouter';

const AppWihtStyles = styled.div`
  font-family: 'ComfortaaRegular';
  box-sizing: border-box;

`;

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppWihtStyles >
          <Header />
          <AppRouter/>
        </AppWihtStyles>
      </ThemeProvider>

    </Router>
  );
};

export default App;
