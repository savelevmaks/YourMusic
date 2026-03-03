import React, { useState } from "react";
import "./main-play.css";
import { Play, Pause, SkipForward, SkipBack, Disc, Radio, Heart, Shuffle, Repeat1, MoreHorizontal, X, Info, User, Share2, TextAlignCenter } from "lucide-react";

const MainPlay = ({ 
    isPlaying, togglePlay, prevTrack, nextTrack, currentTrack,
    mode, currentMode, changeMode,
    isLiked, toggleLike, isShuffle, toggleShuffle, isRepeat, toggleRepeat,
    onOpenLyrics 
}) => {
    
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div className={`main-play-container ${isPlaying ? 'playing' : ''}`}>
            <div className="lava-background">
                <div className="blob blob-1"></div><div className="blob blob-2"></div><div className="blob blob-3"></div>
            </div>
            <div className="glass-overlay"></div>

            <div className="content-layer">
                
                {/* ЛЕВАЯ ЧАСТЬ */}
                <div className="side-block left">
                    <div className="track-cover-placeholder"></div>
                    <div className="track-text">
                        <span className="track-title">{currentTrack.title}</span>
                        <span className="track-artist">{currentTrack.artist}</span>
                    </div>
                </div>

                {/* ЦЕНТР */}
                <div className="center-group">
                    <div className="mix-info">
                        <span className="tag" style={{ color: mode.color}}>{mode.subtitle}</span>
                        <h2 className="fade-in-text" key={mode.title}>{mode.title}</h2>
                        <p className="description">{mode.description}</p>
                    </div>

                    <div className="controls-wrapper">
                        <button className="nav-btn" onClick={prevTrack}><SkipBack size={32} /></button>
                        <button className="play-btn-large" onClick={togglePlay} style={{backgroundColor: mode.color}}>
                            {isPlaying ? <Pause size={40} fill="black" stroke="black" /> : <Play size={40} fill="black" stroke="black" style={{marginLeft: '4px'}} />}
                        </button>
                        <button className="nav-btn" onClick={nextTrack}><SkipForward size={32} /></button>
                    </div>
                </div>

                {/* ПРАВАЯ ЧАСТЬ */}
                <div className="side-block right">
                    <button className={`icon-action ${isLiked ? 'liked' : ''}`} onClick={toggleLike}>
                        <Heart size={24} fill={isLiked ? "#FF2E4C" : "none"}/>
                    </button>
                    
                    {currentMode === 1 && (
                       <button className={`icon-action ${isShuffle ? 'active' : ''}`} onClick={toggleShuffle}>
                            <Shuffle size={24} />
                        </button> 
                    )}
                    
                    <button className={`icon-action ${isRepeat ? 'active' : ''}`} onClick={toggleRepeat}>
                        <Repeat1 size={24} />
                    </button>

                    <button className="icon-action" onClick={onOpenLyrics}>
                        <TextAlignCenter size={24}/>
                    </button>
                            
                    <div style={{ position: 'relative' }}> 
                        <button className={`icon-action ${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <X size={24} /> : <MoreHorizontal size={24} />}
                        </button>
                        {showMenu && (
                        <div className="overlay-context-menu">
                            <div className="overlay-menu-item"><Info size={16} /><span>О треке</span></div>
                            <div className="overlay-menu-item"><User size={16} /><span>К артисту</span></div>
                            <div className="overlay-menu-divider"></div>
                            <div className="overlay-menu-item"><Share2 size={16} /><span>Поделиться</span></div>
                        </div>
                    )}
                    </div>
                </div>

                {/* НИЗ */}
                <div className="bottom-switcher">
                    <div className={`switcher-item ${currentMode === 0 ? 'active' : ''}`} onClick={() => changeMode(0)} style={{ cursor: 'pointer' }}>
                        <Radio size={14} /><span>Your Wave</span>
                    </div>
                    <div className={`switcher-item ${currentMode === 1 ? 'active' : ''}`} onClick={() => changeMode(1)} style={{ cursor: 'pointer' }}>
                        <Disc size={14} /><span>Your Tracks</span>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default MainPlay;