import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Router from './routes/Router';
import { AuthContextProvider } from './context/Auth';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}
export default App;
