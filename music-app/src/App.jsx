import React, { useState, useEffect } from 'react';
import Header from './components/header';
import MainPlay from './components/main-play';
import Player from './components/Player';
import LyricsOverlay from './components/LyricsOverlay';
import NewReleases from './components/NewReleases';

const MOCK_TRACKS = [
  { 
    title: "Midnight City", 
    artist: "M83", 
    lyrics: ["Waiting in the car", "Waiting for a ride in the dark", "The night city grows", "Look at the horizon glow", "Midnight city..."] 
  },
  { 
    title: "Blinding Lights", 
    artist: "The Weeknd", 
    lyrics: ["I've been tryna call", "I've been on my own for long enough", "Maybe you can show me how to love", "I said, ooh, I'm blinded by the lights"] 
  },
  { 
    title: "Nightcall", 
    artist: "Kavinsky", 
    lyrics: ["I'm giving you a night call to tell you how I feel", "I want to drive you through the night, down the hills", "I'm gonna tell you something you don't want to hear"] 
  }
];

const MODES = [
  { id: 'style', title: 'YOUR STYLE', subtitle: 'AI WAVE', description: 'Бесконечный поток', color: 'var(--accent)' },
  { id: 'favourite', title: 'YOUR FAVOURITE', subtitle: 'LIKED SONGS', description: 'Твои лайки', color: '#FF00F5' }
];

const MOCK_RELEASES = [
  { 
    id: 1, 
    title: "After Hours", 
    artist: "The Weeknd", 
    coverImage: "https://avatars.mds.yandex.net/i?id=ce810d78af12c9e879debb311cfc89be9a8d545b-4607687-images-thumbs&n=13", 
    artistImage: "https://avatars.mds.yandex.net/get-entity_search/2403345/1237874445/S600xU_2x" 
  },
  { 
    id: 2, 
    title: "Random Access", 
    artist: "Daft Punk", 
    coverImage: "https://avatars.mds.yandex.net/i?id=3c77ead09ec0999ea2859900fe16765d2cdc0b19-5315583-images-thumbs&n=13", 
    artistImage: "https://avatars.mds.yandex.net/i?id=3c77ead09ec0999ea2859900fe16765d2cdc0b19-5315583-images-thumbs&n=13" 
  },
  { 
    id: 3, 
    title: "Убивай меня нежно", 
    artist: "krizis", 
    coverImage: "https://avatars.mds.yandex.net/i?id=5bbcaf4524218a5f026360964f8004155d2b4e4a-8565700-images-thumbs&n=13", 
    artistImage: "https://avatars.mds.yandex.net/i?id=fdf02e60255631f848ec12eeddd7266f50f4c34a-5859076-images-thumbs&n=13" 
  },
  { 
    id: 4, 
    title: "Simulation", 
    artist: "Muse", 
    coverImage: "https://images.unsplash.com/photo-1459749411177-8c275341e5dd?w=400&q=80", 
    artistImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" 
  },
  { 
    id: 5, 
    title: "Plastic Beach", 
    artist: "Gorillaz", 
    coverImage: "https://images.unsplash.com/photo-1514525253440-b393452e8d03?w=400&q=80", 
    artistImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80" 
  },
  { 
    id: 6, 
    title: "Currents", 
    artist: "Tame Impala", 
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80", 
    artistImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80" 
  }
];

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  
  const [currentMode, setCurrentMode] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const [showLyrics, setShowLyrics] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const currentTrack = MOCK_TRACKS[currentTrackIndex];
  const mode = MODES[currentMode];

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1 >= MOCK_TRACKS.length ? 0 : prev + 1));
    setIsPlaying(true);
    setActiveLineIndex(0); 
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? MOCK_TRACKS.length - 1 : prev - 1));
    setIsPlaying(true);
    setActiveLineIndex(0); 
  };

  const changeMode = (index) => {
    if (currentMode !== index) {
        setCurrentMode(index);
        setIsPlaying(false);
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveLineIndex((prev) => prev + 1 >= currentTrack.lyrics.length ? 0 : prev + 1);
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  return (
    <div className="app-container">
      <Header />
      
      <main style={{ padding: '0 40px', paddingBottom: '120px' }}>
        <MainPlay 
          isPlaying={isPlaying} togglePlay={togglePlay} prevTrack={prevTrack} nextTrack={nextTrack} currentTrack={currentTrack}
          mode={mode} currentMode={currentMode} changeMode={changeMode}
          isLiked={isLiked} toggleLike={() => setIsLiked(!isLiked)}
          isShuffle={isShuffle} toggleShuffle={() => setIsShuffle(!isShuffle)}
          isRepeat={isRepeat} toggleRepeat={() => setIsRepeat(!isRepeat)}
          onOpenLyrics={() => setShowLyrics(true)} 
        />

        <NewReleases releases={MOCK_RELEASES} />
      </main>

      <Player 
        isPlaying={isPlaying} togglePlay={togglePlay} prevTrack={prevTrack} nextTrack={nextTrack} currentTrack={currentTrack}
        isLiked={isLiked} toggleLike={() => setIsLiked(!isLiked)}
        onOpenLyrics={() => setShowLyrics(true)} 
        mode={mode} currentMode={currentMode} changeMode={changeMode} 
        isShuffle = {isShuffle} toggleShuffle={() => setIsShuffle(!isShuffle)} 
        isRepeat = {isRepeat} toggleRepeat = {() => setIsRepeat(!isRepeat)}
      />

      <LyricsOverlay 
          isOpen={showLyrics} onClose={() => setShowLyrics(false)} 
          lyrics={currentTrack.lyrics} activeIndex={activeLineIndex} currentTrack={currentTrack}
          isPlaying={isPlaying} togglePlay={togglePlay} prevTrack={prevTrack} nextTrack={nextTrack}
          mode={mode} currentMode={currentMode}
          isLiked={isLiked} toggleLike={() => setIsLiked(!isLiked)}
          isShuffle={isShuffle} toggleShuffle={() => setIsShuffle(!isShuffle)}
          isRepeat={isRepeat} toggleRepeat={() => setIsRepeat(!isRepeat)}
      />
    </div>
  );
}

export default App;