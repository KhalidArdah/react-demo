import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import { Router } from "@reach/router";
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Router>
          <MainSection default path="/"/>
          <Login path="/login"/>
        </Router>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
