import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Header />
        <MainSection />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
