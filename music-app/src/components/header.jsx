import React from "react";
import { Search, User } from "lucide-react";
import './header.css';

const Header = () => {
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
                <button className="icon-btn">
                    <Search size={24}></Search>
                </button>
                <button className="icon-btn">
                    <User size={24}></User>
                </button>
            </div>

        </header>
    )
}

export default Header;