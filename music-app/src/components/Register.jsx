import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


const Register = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        setError('');
        console.log("Регистрация успешна");
        setIsAuthenticated(true);
        navigate('/'); 
    };

    return (
        <div className='login-container'>
            <h1>Регистрация</h1>
            <form onSubmit={handleRegister} className="login-form">
                <label>Имя пользователя:</label>
                <input type="text" placeholder='Введите имя' required/>
                <label>Почта:</label>
                <input type="email" placeholder='Ваша почта' required/>
                <label>Придумайте пароль:</label>  
                <div className="password-input-wrapper">
                    <input type={showPassword ? "text" : "password"} placeholder='Придумайте пароль' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="button" className="toggle-visibility" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>              
                <label>Повторите пароль:</label>                
                <div className="password-input-wrapper">
                    <input type={showPassword ? "text" : "password"} placeholder='Повторите пароль' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    <button type="button" className="toggle-visibility" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div> 

                {error && <p style={{ color: '#FF2E4C', fontSize: '13px', margin: '-10px 0 10px 0' }}>{error}</p>}
                <div className='bottom-container'>
                    <Link to="/auth">Войти в аккаунт</Link>
                    <a href="#">Забыли пароль?</a>
                </div>

                <div className='login-button-container'>
                    <button type="submit" className="login-button">Создать аккаунт</button>
                </div>
            </form>
        </div>
    );
    
};

export default Register;