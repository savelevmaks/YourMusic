import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './components/header';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  // console.log("РЕАКТ ВИДИТ ТАКОЙ ПУТЬ:", location.pathname); 
  const isAuthPage = location.pathname.includes('/Auth');

  return (
    <div className='app-container'>

      {!isAuthPage && <Header isAuthenticated={isAuthenticated} />}
      
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth setIsAuthenticated={setIsAuthenticated}/>} />
      </Routes>
    </div>
  );
}

export default App;