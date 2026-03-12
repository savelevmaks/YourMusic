import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "./Register";
import { Eye, EyeOff } from "lucide-react";

const Login = ( {handleLogin} ) => {

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className='login-container'>
            <h1>Вход</h1>
            <form onSubmit={onSubmit} className="login-form">
                <label>Почта:</label>
                <input type="email" placeholder='Ваша почта' required/>
                <label>Пароль:</label>
                <div className='password-container'>
                    <div className="password-input-wrapper">
                        <input type={showPassword ? "text" : "password"} placeholder='Ваш пароль' required/>
                        <button type="button" className="toggle-visibility" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id='save-password' />
                        <label htmlFor='save-password' style={{ cursor: 'pointer' }}>Запомнить пароль</label>
                    </div>
                </div>
                <div className='bottom-container'>
                    <Link to="/Register">Зарегистрироваться</Link>
                    <a href="#">Забыли пароль?</a>
                </div>

                <div className='login-button-container'>
                    <button type="submit" className="login-button">Войти</button>
                </div>
            </form>
        </div>
    );
    
};

export default Login;