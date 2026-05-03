// Wishes — birthday wish form (localStorage) + final love letter.

import { useState as useWishState, useEffect as useWishEffect } from 'react';
import { Heart } from './icons.jsx';

function Wishes(){
  const [name, setName] = useWishState('');
  const [msg, setMsg] = useWishState('');
  const [wishes, setWishes] = useWishState([]);

  useWishEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('snehaWishes') || '[]');
      const seed = saved.length ? saved : [
        { name:'Amma', msg:'Happy birthday kanna ma. Don\'t skip dinner. Eat properly. Call me.', t: Date.now()-3600000*4 },
        { name:'Naaz', msg:'Birthday girl!! No autos today. WE ARE TAKING MY CAR. (jk we both know what will happen.)', t: Date.now()-3600000*2 },
        { name:'Nutella Jar (anonymous)', msg:'I have served you well. Refill me.', t: Date.now()-3600000 },
      ];
      setWishes(seed);
      if (!saved.length) localStorage.setItem('snehaWishes', JSON.stringify(seed));
    } catch(e){}
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    const next = [{ name: name.trim(), msg: msg.trim(), t: Date.now() }, ...wishes];
    setWishes(next);
    try { localStorage.setItem('snehaWishes', JSON.stringify(next)); } catch(e){}
    setName(''); setMsg('');
  };

  const fmt = (t) => {
    const m = Math.floor((Date.now() - t)/60000);
    if (m < 1) return 'just now';
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m/60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h/24)}d ago`;
  };

  return (
    <section id="letter" style={{padding:'120px 0', position:'relative', overflow:'hidden'}}>
      {/* sparkles */}
      <div className="sparkle" style={{top:60, left:'10%'}}></div>
      <div className="sparkle" style={{top:'40%', right:'8%', animationDelay:'.8s'}}></div>
      <div className="sparkle" style={{bottom:120, left:'18%', animationDelay:'1.4s'}}></div>

      <div className="wrap" style={{maxWidth:1080}}>
        {/* The letter */}
        <div style={{
          background:'#fff', border:'1.5px solid var(--ink)', borderRadius:18,
          padding:'48px clamp(24px,5vw,64px)', boxShadow:'12px 12px 0 var(--pink)',
          position:'relative', maxWidth:820, margin:'0 auto 80px'
        }}>
          <div style={{position:'absolute', top:-18, left:'50%', transform:'translateX(-50%)', background:'var(--cream)', padding:'4px 16px', border:'1.5px solid var(--ink)', borderRadius:999, fontSize:11, letterSpacing:'.22em', fontFamily:"'JetBrains Mono',monospace", textTransform:'uppercase'}}>
            Letter № 1 · 06.05.{new Date().getFullYear()}
          </div>

          <span className="eyebrow">CH. 06 · The Real One</span>
          <h2 className="h-display" style={{fontSize:'clamp(34px,5vw,64px)', margin:'10px 0 24px', lineHeight:1}}>
            A letter, with the <em>jokes paused</em>.
          </h2>

          <p className="serif-i" style={{fontSize:'clamp(20px,2.2vw,26px)', lineHeight:1.5, color:'var(--ink)', margin:'0 0 18px'}}>
            Sneha,
          </p>
          <div style={{fontSize:17, lineHeight:1.75, color:'var(--ink-soft)'}}>
            <p style={{margin:'0 0 14px'}}>
              I built this whole thing to roast you, and I think I just ended up writing a love letter
              with sound effects. That tracks. That's how it always goes with you — I sit down to be
              clever and you turn it into something soft.
            </p>
            <p style={{margin:'0 0 14px'}}>
              The autos, the waffles, the murukku, the bags, the dresses — those aren't quirks I tolerate.
              They're how I know it's you. They're the way the room rearranges itself when you walk in.
              I wouldn't change a single one. (Except maybe the wardrobe, for purely structural reasons.)
            </p>
            <p style={{margin:'0 0 14px'}}>
              You make ordinary days feel like a small festival. You laugh too loud in restaurants and
              I love that. You text me from the next room and I love that too. You are kind to people
              who can do nothing for you, and that is the quietest, best thing about you — the part no
              roast could ever touch.
            </p>
            <p style={{margin:'0 0 18px'}}>
              Happy birthday, my favorite person. Thank you for picking me. I'll keep the Nutella stocked,
              the auto fare ready, and the pink dress on standby. For as long as you'll have me.
            </p>
            <div className="hand" style={{fontSize:42, color:'var(--pink)', lineHeight:1}}>
              All my love,<br/>Sidharth ♡
            </div>
          </div>
        </div>

        {/* Wish wall */}
        <div style={{textAlign:'center', marginBottom:24}}>
          <span className="eyebrow">CH. 07 · The Wish Wall</span>
          <h2 className="h-display" style={{margin:'10px 0 8px'}}>
            Leave Sneha a <em>birthday wish</em>.
          </h2>
          <p className="serif-i" style={{fontSize:22, color:'var(--ink-soft)', margin:0, lineHeight:1.4}}>
            (saved right here in your browser — she'll read every one.)
          </p>
        </div>

        <div className="grid cols-2" style={{gap:30, alignItems:'start'}}>
          {/* Form */}
          <form onSubmit={submit} className="card" style={{padding:28, background:'var(--blush)'}}>
            <div className="stack" style={{gap:14}}>
              <div>
                <label>Your name</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="amma / aishu / waffle guy / ..." style={{marginTop:6}}/>
              </div>
              <div>
                <label>Your wish</label>
                <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={5} placeholder="say something nice. roast her if you must. she'll laugh." style={{marginTop:6, resize:'vertical'}}/>
              </div>
              <button type="submit" className="btn pink" style={{alignSelf:'flex-start'}}>
                <Heart size={14} color="#fff"/> Pin to the wall
              </button>
            </div>
          </form>

          {/* Wish list */}
          <div className="stack" style={{gap:14, maxHeight:520, overflow:'auto', paddingRight:6}}>
            {wishes.length === 0 && (
              <div className="card" style={{padding:24, textAlign:'center'}}>
                <p className="serif-i" style={{fontSize:20, margin:0, color:'var(--ink-soft)'}}>be the first to wish her ✦</p>
              </div>
            )}
            {wishes.map((w, i) => (
              <div key={i} className="card" style={{
                padding:22,
                background: i%3===0 ? 'var(--cream)' : i%3===1 ? 'var(--mint)' : '#fff',
                transform: `rotate(${(i%2===0?-.4:.5)}deg)`
              }}>
                <div className="row" style={{justifyContent:'space-between', alignItems:'baseline'}}>
                  <span className="serif" style={{fontSize:22}}>{w.name}</span>
                  <span className="mono" style={{fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--ink-soft)'}}>{fmt(w.t)}</span>
                </div>
                <p style={{margin:'8px 0 0', fontSize:15, lineHeight:1.55, color:'var(--ink-soft)'}}>{w.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishes;
