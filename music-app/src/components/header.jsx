import React from "react";
import { Search, User } from "lucide-react";
import './header.css';
import { Link } from "react-router-dom";

const Header = ( {isAuthenticated} ) => {
    return (
        <header className="header">

            <div className="logo">
                Your<span>.Music</span>
            </div>

            <nav className="nav-links">
                <a href="#" className="nav-link active">Главная</a>
                <a href="#" className="nav-link">Тренды</a>
                <a href="#" className="nav-link">Любимое</a>
            </nav>

            <div className="user-actions">
                { isAuthenticated ? (
                    <>
                        <button className="icon-btn">
                            <User size={24}></User>
                        </button>
                    </>
                ) : (
                    <Link to="/Auth" className="nav-link login">Войти</Link>
                )}
                <button className="icon-btn">
                    <Search size={24}></Search>
                </button>
                
            </div>

        </header>
    )
}

export default Header;