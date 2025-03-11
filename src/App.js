import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import Gestione from './pages/gestione';
import AutomezzoFilialeDetails from './pages/automezzoFilialeDetails';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gestione" element={<Gestione />} />
            <Route path="/automezzo/:codice" element={<AutomezzoFilialeDetails />} />
            <Route path="/filiale/:codice" element={<AutomezzoFilialeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
