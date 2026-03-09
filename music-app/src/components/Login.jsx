import React from "react";
import "./Login.css";

const Login = ( {handleLogin} ) => {

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
                    <input type="password" placeholder='Ваш пароль' required/>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id='save-password' />
                        <label htmlFor='save-password' style={{ cursor: 'pointer' }}>Запомнить пароль</label>
                    </div>
                </div>
                <div className='bottom-container'>
                    <a href="#">Зарегистрироваться</a>
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