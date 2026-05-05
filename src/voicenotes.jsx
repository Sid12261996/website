import { useRef, useState, useEffect } from 'react';

// Drop any .mp3 into src/audios/ — it appears here automatically
const audioModules = import.meta.glob('./audios/*.mp3', { eager: true, query: '?url', import: 'default' });

const VOICE_NOTES = Object.entries(audioModules).map(([path, url]) => {
  const filename = path.split('/').pop().replace('.mp3', '');
  const name = filename.split('(')[0].trim(); // strip "(naatinn)" suffixes etc.
  return { name, url };
});

const COLORS = ['blush', 'mint', 'yellow'];
const TILTS  = [-1.8, 1.4, -0.9, 2.1, -1.5, 1.0];

function fmt(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function VoiceCard({ name, url, color, tilt }) {
  const audioRef = useRef(null);
  const [playing, setPlaying]   = useState(false);
  const [current, setCurrent]   = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const onTime  = () => setCurrent(audio.currentTime);
    const onMeta  = () => setDuration(audio.duration);
    const onEnded = () => { setPlaying(false); setCurrent(0); audio.currentTime = 0; };
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (playing) { audio.pause(); setPlaying(false); }
    else         { audio.play();  setPlaying(true);  }
  }

  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div
      className={`card ${color} voice-card`}
      style={{ transform: `rotate(${tilt}deg)` }}
      {...(playing ? { 'data-playing': '' } : {})}
    >
      <audio ref={audioRef} src={url} preload="metadata" />
      <div className="hand" style={{ fontSize: 26, marginBottom: 16 }}>
        from {label} ♡
      </div>
      <div className="voice-player">
        <button className="voice-play-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
          {playing
            ? <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><rect x="4" y="3" width="4" height="14" rx="1"/><rect x="12" y="3" width="4" height="14" rx="1"/></svg>
            : <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3l13 7-13 7V3z"/></svg>
          }
        </button>
        <div className="waveform">
          {[1,2,3,4,5].map(i => <div key={i} className="bar" />)}
        </div>
        <div className="mono voice-time">{fmt(current)} / {fmt(duration)}</div>
      </div>
    </div>
  );
}

export default function VoiceNotes() {
  return (
    <section id="voice-notes" style={{ padding: '120px 0' }}>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: 14 }}>messages from the people who matter</div>
        <h2 className="h-display" style={{ margin: '0 0 48px' }}>
          voice notes<br /><em>from the tribe</em>
        </h2>
        <div className="voice-grid">
          {VOICE_NOTES.map(({ name, url }, i) => (
            <VoiceCard
              key={url}
              name={name}
              url={url}
              color={COLORS[i % COLORS.length]}
              tilt={TILTS[i % TILTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
