// src/App.jsx or wherever your routes are defined

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AIPage from './pages/ai';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai" element={<AIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
