// App shell — nav + section composition + marquee + footer.

import Hero from './hero.jsx';
import About from './about.jsx';
import Memories from './memories.jsx';
import VoiceNotes from './voicenotes.jsx';
import Mission from './mission.jsx';
import Testimonials from './testimonials.jsx';
import Terms from './terms.jsx';
import Wishes from './wishes.jsx';

function Nav(){
  return (
    <nav className="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#memories" className="hide-sm">Memories</a>
      <a href="#mission" className="hide-sm">Mission</a>
      <a href="#testimonials" className="hide-sm">Reviews</a>
      <a href="#terms">Terms</a>
      <span className="dot"></span>
      <a href="#letter" style={{background:'var(--pink)', color:'#fff'}}>♡ Letter</a>
    </nav>
  );
}

function Marquee(){
  const items = ['HAPPY BIRTHDAY SNEHA','✦','AUTO BABE','✦','NUTELLA QUEEN','✦','MURUKKU MONARCH','✦','HANDBAG ROYALTY','✦','PINK DRESS, PLEASE','✦'];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" data-screen-label="Marquee">
      <div className="marquee-track">
        {repeated.map((x,i) => x === '✦' ? <i key={i}>✦</i> : <span key={i}>{x}</span>)}
      </div>
    </div>
  );
}

function Footer(){
  return (
    <footer>
      <div style={{maxWidth:560, margin:'0 auto'}}>
        <div className="hand" style={{fontSize:38, color:'var(--pink)', lineHeight:1}}>
          made with love (and zero sleep)
        </div>
        <p className="serif-i" style={{fontSize:20, color:'var(--ink-soft)', margin:'14px 0 0', lineHeight:1.5}}>
          sneha.life · a tiny corner of the internet entirely about one person, by one person who is, all things considered, very lucky.
        </p>
        <div style={{margin:'28px 0 0', padding:'20px 24px', background:'var(--blush)', border:'1.5px solid var(--ink)', borderRadius:14, display:'inline-block', textAlign:'left'}}>
          <div className="mono" style={{fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--ink-soft)', marginBottom:8}}>special thanks</div>
          <div className="hand" style={{fontSize:24, color:'var(--ink)', lineHeight:1.3}}>
            Suma chechi ✦
          </div>
          <p style={{margin:'6px 0 0', fontSize:14, lineHeight:1.6, color:'var(--ink-soft)'}}>
            for the roast ideas, the content brainstorming, and being personally responsible for making this website at least 40% funnier than it had any right to be. sneha is lucky to have you. so is this website.
          </p>
        </div>
        <div className="mono" style={{fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', marginTop:24, color:'var(--ink-soft)'}}>
          © {new Date().getFullYear()} · sidharth × sneha · all rights and wrongs reserved
        </div>
      </div>
    </footer>
  );
}

function App(){
  return (
    <>
      <Nav />
      <main>
        <div data-screen-label="01 Hero"><Hero /></div>
        <div data-screen-label="02 About"><About /></div>
        <Marquee />
        <div data-screen-label="03 Memories"><Memories /></div>
        <div data-screen-label="04 Voice Notes"><VoiceNotes /></div>
        <div data-screen-label="05 Mission"><Mission /></div>
        <div data-screen-label="06 Testimonials"><Testimonials /></div>
        <div data-screen-label="07 Terms"><Terms /></div>
        <div data-screen-label="08 Letter & Wishes"><Wishes /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
