// Hero — full-bleed birthday landing with an auto-rickshaw that drives across on scroll.

import { useEffect, useState, useRef } from 'react';
import { Auto, Heart } from './icons.jsx';

function Hero(){
  const [scroll, setScroll] = useState(0);
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const onS = () => setScroll(window.scrollY);
    window.addEventListener('scroll', onS, {passive:true});
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => { window.removeEventListener('scroll', onS); clearInterval(t); };
  }, []);

  // Birthday countdown — May 6, current year (or next year if past)
  const target = (() => {
    const y = now.getFullYear();
    let d = new Date(y, 4, 6, 0, 0, 0); // May = 4
    if (d - now < -86400000) d = new Date(y+1, 4, 6, 0, 0, 0);
    return d;
  })();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff/86400000);
  const hrs = Math.floor((diff%86400000)/3600000);
  const mins = Math.floor((diff%3600000)/60000);
  const secs = Math.floor((diff%60000)/1000);
  const isToday = (now.getMonth()===4 && now.getDate()===6);

  const autoX = Math.min(scroll * 1.6, 2000);

  return (
    <section id="home" style={{position:'relative', minHeight:'100vh', paddingTop:120, paddingBottom:60, overflow:'hidden'}}>
      {/* corner sparkles */}
      <div className="sparkle" style={{top:140,left:'8%'}}></div>
      <div className="sparkle" style={{top:260,right:'10%',animationDelay:'.6s'}}></div>
      <div className="sparkle" style={{top:'70%',left:'14%',animationDelay:'1.2s'}}></div>
      <div className="sparkle" style={{top:'58%',right:'18%',animationDelay:'.3s'}}></div>

      <div className="wrap" style={{position:'relative'}}>
        <div className="row" style={{justifyContent:'space-between', marginBottom:36}}>
          <div className="row" style={{gap:10}}>
            <Heart size={20}/>
            <span className="mono" style={{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase'}}>sneha.life</span>
          </div>
          <span className="mono" style={{fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--ink-soft)'}}>
            est. the day Sidharth got lucky
          </span>
        </div>

        {/* Eyebrow */}
        <div className="row" style={{gap:14, marginBottom:18}}>
          <span className="chip"><span className="sw" style={{background:'var(--pink)'}}></span>Birthday Edition · Vol. 01</span>
          <span className="chip"><span className="sw" style={{background:'var(--yellow)'}}></span>06 · 05 · {target.getFullYear()}</span>
        </div>

        <h1 className="h-display" style={{maxWidth:1100, margin:'0 0 14px'}}>
          Happy Birthday,<br/>
          <em>Sneha</em> — patron saint<br/>
          of <em>autos</em>, <em>waffles</em><br/>
          &amp; <em>too many handbags</em>.
        </h1>

        <p className="serif-i" style={{fontSize:'clamp(20px,2.4vw,30px)', maxWidth:760, lineHeight:1.35, color:'var(--ink-soft)', margin:'18px 0 0'}}>
          A small, slightly roasted love letter from your husband — built at 2 a.m. while you
          were stress-eating Nutella waffles in bed and pretending not to.
        </p>

        {/* signature row */}
        <div className="row" style={{marginTop:30, gap:18}}>
          <a className="btn pink" href="#letter">
            <Heart size={16} color="#fff"/> Read the love letter
          </a>
          <a className="btn ghost" href="#about">
            Meet the birthday girl <span className="caret"></span>
          </a>
          <span className="hand" style={{fontSize:24, color:'var(--ink-soft)', marginLeft:6}}>
            (yes, I made you a whole website. surprise.)
          </span>
        </div>

        {/* Hero card grid */}
        <div className="grid cols-3" style={{marginTop:60, gap:22}}>
          {/* Big polaroid */}
          <div style={{gridColumn:'span 2', position:'relative'}}>
            <div className="polaroid" style={{transform:'rotate(-1.4deg)', maxWidth:680}}>
              <div className="tape"></div>
              <div className="frame">
                <div className="stripe">
                  <div>
                    <div style={{fontSize:14,letterSpacing:'.2em', marginBottom:6}}>[ DROP A PHOTO HERE ]</div>
                    <div style={{textTransform:'none', fontSize:12, opacity:.7, letterSpacing:'.04em'}}>
                      golden-hour shot of Sneha · 4:5 · ~1200×1500px
                    </div>
                  </div>
                </div>
              </div>
              <div className="cap">
                the only person who can say <i>"five more minutes"</i> for forty-five.
              </div>
            </div>

            {/* small accent polaroid */}
            <div className="polaroid" style={{position:'absolute', right:-10, bottom:-30, width:200, transform:'rotate(6deg)'}}>
              <div className="tape" style={{background:'rgba(229,68,122,.45)'}}></div>
              <div className="frame" style={{aspectRatio:'1/1'}}>
                <div className="stripe" style={{fontSize:9}}>
                  <div>
                    <Auto size={70}/>
                    <div style={{marginTop:4}}>auto · candid</div>
                  </div>
                </div>
              </div>
              <div className="cap" style={{fontSize:18}}>her ride or die ✦</div>
            </div>
          </div>

          {/* Countdown / right column */}
          <div className="stack" style={{gap:18}}>
            <div className="card blush">
              <span className="eyebrow">{isToday ? 'today is the day' : 'countdown to cake'}</span>
              <div className="serif" style={{fontSize:42, lineHeight:1, marginTop:8}}>
                {isToday ? "🎂 it's TODAY 🎂" : (
                  <span>
                    {days}<span style={{fontFamily:"'Instrument Serif',serif",fontStyle:'italic',color:'var(--pink)'}}>d</span>{' '}
                    {String(hrs).padStart(2,'0')}<span style={{fontFamily:"'Instrument Serif',serif",fontStyle:'italic',color:'var(--pink)'}}>h</span>{' '}
                    {String(mins).padStart(2,'0')}<span style={{fontFamily:"'Instrument Serif',serif",fontStyle:'italic',color:'var(--pink)'}}>m</span>{' '}
                    {String(secs).padStart(2,'0')}<span style={{fontFamily:"'Instrument Serif',serif",fontStyle:'italic',color:'var(--pink)'}}>s</span>
                  </span>
                )}
              </div>
              <div className="hand" style={{marginTop:10, fontSize:22, color:'var(--ink-soft)'}}>
                until Sidharth officially fails again at picking out a gift.
              </div>
            </div>

            <div className="card" style={{background:'var(--ink)', color:'var(--cream)'}}>
              <span className="eyebrow" style={{color:'#d9bfa7'}}>certified facts</span>
              <ul className="serif-i" style={{margin:'8px 0 0', paddingLeft:18, fontSize:22, lineHeight:1.5}}>
                <li>Has never refused an auto-rickshaw.</li>
                <li>Owns more bags than days in May.</li>
                <li>Believes Nutella is a food group.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Auto driving across the page on scroll */}
      <div className="auto-drive" style={{
        bottom:30, left:-220, transform:`translateX(${autoX}px)`,
        transition:'transform .05s linear', zIndex:3
      }}>
        <Auto size={140}/>
      </div>

      {/* Scroll cue */}
      <div style={{position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',textAlign:'center',color:'var(--ink-soft)'}}>
        <div className="hand" style={{fontSize:22}}>scroll, my love ↓</div>
      </div>
    </section>
  );
}

export default Hero;
