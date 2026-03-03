import React from "react";
import "./Player.css";
import { 
    Play, Pause, SkipBack, SkipForward, 
    Heart, Volume2, Maximize2, ListMusic, 
    TextAlignCenter, Shuffle, Repeat1
} from "lucide-react";

const Player = ({ 
    isPlaying, togglePlay, nextTrack, prevTrack, currentTrack, 
    isLiked, toggleLike, onOpenLyrics, 
    currentMode, isShuffle, isRepeat, toggleShuffle, toggleRepeat
}) => {
    return (
        
        <div className="global-player-container">
            
            <div className="player-progress-area">
                <div className="progress-bg">
                    <div className="progress-fill" style={{ width: '45%' }}></div> 
                    <div className="progress-handle" style={{ left: '45%' }}></div>
                </div>
            </div>

            <div className="player-content">
                
                <div className="player-section left">
                    <div className="player-cover">
                    </div>
                    <div className="player-track-info">
                        <span className="player-title">{currentTrack.title}</span>
                        <span className="player-artist">{currentTrack.artist}</span>
                    </div>
                </div>

                <div className="player-section center">
                    <button className="player-control-btn secondary" onClick={prevTrack}>
                        <SkipBack size={20} />
                    </button>
                    
                    <button className="player-control-btn primary" onClick={togglePlay}>
                        {isPlaying ? (
                            <Pause size={24} fill="black" stroke="black" />
                        ) : (
                            <Play size={24} fill="black" stroke="black" style={{marginLeft: '2px'}} />
                        )}
                    </button>
                    
                    <button className="player-control-btn secondary" onClick={nextTrack}>
                        <SkipForward size={20} />
                    </button>
                </div>

                <div className="player-section right">
                    
                    <button className="player-action-btn" onClick={onOpenLyrics} title="Текст песни">
                        <TextAlignCenter size={20} />
                    </button>

                    <button 
                        className={`player-action-btn ${isLiked ? 'liked' : ''}`} 
                        onClick={toggleLike}
                    >
                        <Heart size={20} fill={isLiked ? "#FF2E4C" : "none"} />
                    </button>

                    
                     {currentMode === 1 && (
                       <button className={`player-action-btn ${isShuffle ? 'active' : ''}`} onClick={toggleShuffle}>
                            <Shuffle size={20} />
                        </button> 
                    )}
                    
                    <button className={`player-action-btn ${isRepeat ? 'active' : ''}`} onClick={toggleRepeat}>
                        <Repeat1 size={20} />
                    </button>

                    <div className="player-divider"></div>

                    <div className="volume-wrapper">
                        <Volume2 size={20} color="rgba(255,255,255,0.6)" />
                        <div className="volume-slider">
                            <div className="volume-fill" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Player;