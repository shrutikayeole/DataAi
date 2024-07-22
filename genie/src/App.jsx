// src/App.jsx or wherever your routes are defined

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AIPage from './pages/ai';
import UploadPage from './pages/UploadPage';
import RetailerPage from './pages/RetailerPage';
import SpeechPage from './pages/SpeechPage';
import Dashboard from './pages/Dashboard';
import MLPage from './pages/MlPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MLPage/>} />
      <Route path="/" element={<Dashboard/>} />
      <Route path="/" element={<SpeechPage/>} />
      <Route path="/" element={<AIPage />} />
      <Route path="/" element={<RetailerPage />} />
      <Route path="/" element={<UploadPage />} />
      <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
