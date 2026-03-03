import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Play, Pause, SkipForward, SkipBack, Heart, Shuffle, Repeat1, MoreHorizontal, X, Info, User, Share2 } from "lucide-react"; 
import "./LyricsOverlay.css";

const LyricsOverlay = ({ 
    isOpen, onClose, lyrics, activeIndex, isPlaying, togglePlay, prevTrack, nextTrack,
    mode, currentMode, isLiked, toggleLike, isShuffle, toggleShuffle, isRepeat, toggleRepeat, currentTrack 
}) => {
    const scrollRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false); // Локальное состояние для меню оверлея

    useEffect(() => {
        if (isOpen && scrollRef.current) {
            const lines = scrollRef.current.querySelectorAll('.lyric-line-large');
            const activeElement = lines[activeIndex];
            
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [activeIndex, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="lyrics-overlay-container">
            
            {/* Кнопка закрыть */}
            <button className="close-lyrics-btn" onClick={onClose}>
                <ChevronDown size={40} />
            </button>

            {/* НОВОЕ: Название текущего режима по центру сверху */}
            <div className="overlay-top-title" style={{ color: mode.color }}>
                {mode.subtitle}
            </div>

            {/* Зона текста */}
            <div className="lyrics-scroll-area" ref={scrollRef}>
                <div className="spacer"></div>
                
                {lyrics.map((line, index) => (
                    <div 
                        key={index} 
                        className={`lyric-line-large ${index === activeIndex ? 'active' : ''}`}
                    >
                        {line}
                    </div>
                ))}
                
                <div className="spacer"></div>
            </div>

            {/* ПОДВАЛ */}
            <div className="lyrics-footer">
                
                {/* Левая часть: Инфо */}
                <div className="footer-side left">
                    <div className="lyrics-mini-cover"></div>
                    <div className="lyrics-track-info">
                        <span className="lyrics-title">{currentTrack.title}</span>
                        <span className="lyrics-artist">{currentTrack.artist}</span>
                    </div>
                </div>

                {/* Центральная часть: Плеер */}
                <div className="footer-center">
                    <button className="lyrics-nav-btn" onClick={prevTrack}>
                        <SkipBack size={28} />
                    </button>

                    <button className="lyrics-play-btn" onClick={togglePlay}>
                        {isPlaying ? (
                            <Pause size={32} fill="black" stroke="black" />
                        ) : (
                            <Play size={32} fill="black" stroke="black" style={{marginLeft: '4px'}} />
                        )}
                    </button>

                    <button className="lyrics-nav-btn" onClick={nextTrack}>
                        <SkipForward size={28} />
                    </button>
                </div>

                {/* НОВОЕ: Правая часть: Действия (Лайк, Репит, Меню) */}
                <div className="footer-side right">
                    
                    <button className={`overlay-icon-action ${isLiked ? 'liked' : ''}`} onClick={toggleLike}>
                        <Heart size={24} fill={isLiked ? "#FF2E4C" : "none"}/>
                    </button>
                    
                    {currentMode === 1 && (
                        <button className={`overlay-icon-action ${isShuffle ? 'active' : ''}`} onClick={toggleShuffle}>
                            <Shuffle size={24} />
                        </button> 
                    )}
                    
                    <button className={`overlay-icon-action ${isRepeat ? 'active' : ''}`} onClick={toggleRepeat}>
                        <Repeat1 size={24} />
                    </button>

                    <div style={{ position: 'relative' }}> 
                        <button className={`overlay-icon-action ${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <X size={24} /> : <MoreHorizontal size={24} />}
                        </button>

                        {/* Выпадающее меню */}
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
                
            </div>
            
        </div>
    );
};

export default LyricsOverlay;