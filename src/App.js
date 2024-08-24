import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OneBoxScreen from './components/OneBoxScreen';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/onebox" element={<OneBoxScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
