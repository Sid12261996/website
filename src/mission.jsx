// Mission Statement — playful corporate-style commitment doc.

import { Auto, Waffle, Murukku, Handbag, Dress, Heart } from './icons.jsx';

function Mission(){
  const pledges = [
    { num:'01', title:'Auto Sovereignty', body:'You shall never be denied an auto-rickshaw, even when one is objectively the worse option. I will not say "the car is right there." I have learned.', icon:<Auto size={56}/> },
    { num:'02', title:'Waffle Continuity Plan', body:'Nutella shall not run out. A backup jar lives behind the dal. The 24-hour waffle place has been pre-vetted, GPS-pinned, and emotionally scouted.', icon:<Waffle size={56}/> },
    { num:'03', title:'Murukku & Chips Reserve', body:'A strategic stash in the top-left cabinet at all times. Re-stocked silently. Crunchiness audited weekly. No questions asked at checkout.', icon:<Murukku size={56}/> },
    { num:'04', title:'Reasonable Handbag Tolerance', body:'I will neither count them nor question them. The phrase "but you have one like this" is hereby retired. Storage solutions will be invented as needed.', icon:<Handbag size={56}/> },
    { num:'05', title:'Wardrobe Validation Service', body:'When you say "I have nothing to wear," I will not gesture at the wardrobe. I will ask "what mood?" and pretend to deliberate. The pink one is always a safe bet.', icon:<Dress size={56}/> },
    { num:'06', title:'General Adoration', body:'Above all: to keep being slightly amazed by you, daily, for the rest of our extremely fortunate lives. To laugh at your jokes (even the bad ones). Especially the bad ones.', icon:<Heart size={48}/> },
  ];

  return (
    <section id="mission" style={{padding:'120px 0', position:'relative'}}>
      <div className="wrap">
        <div style={{textAlign:'center', maxWidth:880, margin:'0 auto 50px'}}>
          <span className="eyebrow">CH. 03 · The Pledge</span>
          <h2 className="h-display" style={{margin:'10px 0 14px'}}>
            Sidharth's <em>Six</em>-Point<br/> Mission Statement.
          </h2>
          <p className="serif-i" style={{fontSize:'clamp(20px,2vw,26px)', color:'var(--ink-soft)', margin:0, lineHeight:1.4}}>
            Filed lovingly with the household. Reviewed annually on May 6th. Non-negotiable.
          </p>
        </div>

        <div className="grid cols-2" style={{gap:24}}>
          {pledges.map((p,i) => (
            <div key={p.num} className="card" style={{padding:28, background: i%2 ? 'var(--cream)' : 'var(--blush)'}}>
              <div className="row" style={{justifyContent:'space-between', alignItems:'flex-start'}}>
                <div style={{
                  fontFamily:"'DM Serif Display',serif",
                  fontSize:64, lineHeight:.9, color:'var(--pink)'
                }}>{p.num}</div>
                <div>{p.icon}</div>
              </div>
              <h3 className="serif" style={{fontSize:30, margin:'14px 0 8px', lineHeight:1}}>{p.title}</h3>
              <p style={{margin:0, fontSize:15, lineHeight:1.6, color:'var(--ink-soft)'}}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Signature block */}
        <div className="card" style={{marginTop:40, background:'var(--ink)', color:'var(--cream)', padding:36, textAlign:'center'}}>
          <span className="eyebrow" style={{color:'#d9bfa7'}}>Signed, sealed, slightly embarrassing</span>
          <div className="hand" style={{fontSize:64, color:'var(--pink)', lineHeight:1, marginTop:14}}>
            — Sidharth
          </div>
          <div className="mono" style={{fontSize:11, letterSpacing:'.2em', marginTop:10, opacity:.7}}>
            EFFECTIVE: 06·05·{new Date().getFullYear()} · JURISDICTION: WHEREVER YOU ARE · APPEAL: NONE
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
