import React from "react";
import "./NewReleaseCard.css";
import { Play, Heart, Plus } from "lucide-react";

const NewReleaseCard = ({ title, artist, coverImage, artistImage, isActive, onClick }) => {
    return (
        <div className={`release-card ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="cover-container" style={{ backgroundImage: `url(${coverImage})` }}>
                
                {/* СЛОЙ 2: Градиент (всегда виден) */}
                <div className="card-gradient"></div>

                {/* СЛОЙ 3: Оверлей с кнопками (появляется при наведении) */}
                <div className="hover-overlay">
                    
                    {/* Кнопка Play строго по центру */}
                    <button className="action-btn play-btn">
                        <Play size={24} fill="black" stroke="black" />
                    </button>

                    <div className="action-buttons">
                        <button className="minimal-icon-btn">
                            <Heart size={24} strokeWidth={1.5} />
                        </button>
                        <button className="minimal-icon-btn">
                            <Plus size={26} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* СЛОЙ 4: Инфо (всегда поверх всего, в самом низу) */}
                <div className="info-layer">
                    <div className="artist-avatar" style={{ backgroundImage: `url(${artistImage})` }}></div>
                    <div className="text-content">
                        <span className="track-title">{title}</span>
                        <span className="track-artist">{artist}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewReleaseCard;