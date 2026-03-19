import React from "react";
import { Search, User } from "lucide-react";
import './header.css';
import { Link, useLocation } from "react-router-dom";

const Header = ( {isAuthenticated} ) => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="header">

            <div className="logo">
                <Link to="/">Your<span>.Music</span></Link>
            </div>

            <nav className="nav-links">
                <Link
                    to="/" className={`nav-link ${currentPath === "/" ? "active" : ""}`}>
                    Главная
                </Link>
                <a href="#" className="nav-link">Тренды</a>
                <a href="#" className="nav-link">Любимое</a>
            </nav>

            <div className="user-actions">
                { isAuthenticated ? (
                    <>
                    <Link to="/ProfilePage">
                        <button className="icon-btn">
                            <User size={24}></User>
                        </button>
                    </Link>
                        
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