// src/App.jsx or wherever your routes are defined

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AIPage from './pages/ai';
import UploadPage from './pages/UploadPage';
import RetailerPage from './pages/RetailerPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AIPage />} />
      <Route path="/" element={<RetailerPage />} />
      <Route path="/" element={<UploadPage />} />
      <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
