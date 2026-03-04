import React from "react";
import "./NewReleaseCard.css";
import { Play, Heart, Plus } from "lucide-react";

const NewReleaseCard = ({ title, artist, coverImage, artistImage, isActive, onClick }) => {
    return (
        <div className={`release-card ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="cover-container" style={{ backgroundImage: `url(${coverImage})` }}>
                
                <div className="card-gradient"></div>
                <div className="hover-overlay">
                    
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