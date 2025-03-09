import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import { getAutomezzi, getFiliali} from './services/apiServices';
import Gestione from './pages/gestione';
import AutomezzoFilialeDetails from './pages/automezzoFilialeDetails';
import Header from './components/header';

function App() {
  const [automezzi, setAutomezzi] = useState([]);
  const [filiali, setFiliali] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const automezziData = await getAutomezzi();
        setAutomezzi(automezziData);
        const filialiData = await getFiliali();
        setFiliali(filialiData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);



  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gestione" element={<Gestione automezzi={automezzi} filiali={filiali} />} />
            <Route path="/automezzo/:codice" element={<AutomezzoFilialeDetails />} />
            <Route path="/filiale/:codice" element={<AutomezzoFilialeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
