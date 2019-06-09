import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
