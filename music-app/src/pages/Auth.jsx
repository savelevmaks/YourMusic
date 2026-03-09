import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';


const Auth = ({ setIsAuthenticated }) => {
    const navigate = useNavigate(); 
    const handleLogin = () => {
        setIsAuthenticated(true); 
        navigate('/'); 
    };

    return (
        <Login handleLogin={handleLogin} />
    );
};

export default Auth;