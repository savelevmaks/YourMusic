import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './components/header';
import Register from './components/Register';
import ProfilePage from './pages/ProfilePage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const path = location.pathname.toLowerCase(); 
  const isAuthPage = path.includes('/auth') || path.includes('/register') || path.includes('/profile');

  return (
    <div className='app-container'>

      {!isAuthPage && <Header isAuthenticated={isAuthenticated} />}

      
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;