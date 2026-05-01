// Testimonials — carousel of fake-but-wholesome quotes.

import { useState as useTState } from 'react';
import { Auto, Waffle, Murukku, Dress, Handbag, Heart } from './icons.jsx';

function Testimonials(){
  const quotes = [
    {
      who: "Ramesh Bhaiya",
      role: "Auto driver, Sneha's preferred chariot",
      avatar: "#F4C95D",
      icon: <Auto size={48}/>,
      stars: 5,
      text: "Madam waits for MY auto only. Other autos pass — she shakes her head. I don't even put meter sometimes. We just talk about traffic on Outer Ring Road. She is family. Sir, please don't take her in your car. It hurts my business.",
    },
    {
      who: "The Night Waffle Guy",
      role: "Belgian Bites · 24 hr · Branch #4",
      avatar: "#5C3A1E",
      icon: <Waffle size={48}/>,
      stars: 5,
      text: "12:14 am. Same order. Extra Nutella, light powder sugar, double tissue. I have her order pre-typed in my POS. When she stops ordering, I will know something is wrong with the world. Wishing her the warmest, gooiest birthday.",
    },
    {
      who: "Murukku Uncle",
      role: "Sri Ganesh Snacks, second aisle",
      avatar: "#B8DCC4",
      icon: <Murukku size={48}/>,
      stars: 5,
      text: "She buys 500g and finishes before reaching home. I have asked her to please pace herself. She does not listen. She is my best customer and also my biggest concern. Happy birthday ma. Try the new ribbon pakoda also.",
    },
    {
      who: "The Wardrobe",
      role: "An overworked piece of furniture",
      avatar: "#FF6FA1",
      icon: <Dress size={48}/>,
      stars: 4,
      text: "I am tired. The hinges have seen things. Every morning she opens me, stares for 14 minutes, declares she has 'nothing to wear,' and slams me shut. I contain 47 dresses. I have counted. Please. Donate one. Just one.",
    },
    {
      who: "Brand X Handbags",
      role: "Loyalty Program · Diamond Tier",
      avatar: "#E5447A",
      icon: <Handbag size={48}/>,
      stars: 5,
      text: "Mrs. Sneha is in our top 0.3% of customers globally. We have actually named an internal SKU after her. We would like to extend our warmest birthday wishes — and a quiet warning to her husband about our upcoming sale next week.",
    },
    {
      who: "Sidharth",
      role: "Husband · biased · obsessed",
      avatar: "#FCE7E0",
      icon: <Heart size={40}/>,
      stars: 5,
      text: "10/10. Would marry again. Would also probably lose the same arguments again. Highly recommend, especially the laugh. Slightly chaotic packaging, comes with one (1) lifetime of joy. No returns accepted; none desired.",
    },
  ];

  const [idx, setIdx] = useTState(0);
  const t = quotes[idx];

  return (
    <section id="testimonials" style={{padding:'120px 0', background:'var(--ink)', color:'var(--cream)', position:'relative'}}>
      <div className="wrap">
        <div className="row" style={{justifyContent:'space-between', alignItems:'flex-end', marginBottom:36, flexWrap:'wrap', gap:20}}>
          <div>
            <span className="eyebrow" style={{color:'#d9bfa7'}}>CH. 04 · Character Witnesses</span>
            <h2 className="h-display" style={{margin:'10px 0 0', color:'var(--cream)'}}>
              Testimonials, <em>under oath</em>.
            </h2>
          </div>
          <p className="serif-i" style={{maxWidth:380, fontSize:22, color:'#d9bfa7', margin:0, lineHeight:1.4}}>
            Collected from those most affected by Sneha's existence. Verified at 5 stars (one wardrobe abstained).
          </p>
        </div>

        <div style={{
          background:'var(--cream)', color:'var(--ink)', borderRadius:24, padding:'48px 48px 36px',
          position:'relative', boxShadow:'10px 10px 0 rgba(229,68,122,.4)'
        }}>
          {/* big quote mark */}
          <div className="serif" style={{position:'absolute', top:-30, left:30, fontSize:160, color:'var(--pink)', lineHeight:1}}>"</div>

          <div className="row" style={{gap:18, marginBottom:18}}>
            <div style={{
              width:64, height:64, borderRadius:'50%', background:t.avatar,
              border:'2px solid var(--ink)', display:'flex', alignItems:'center', justifyContent:'center'
            }}>
              {t.icon}
            </div>
            <div>
              <div className="serif" style={{fontSize:26, lineHeight:1.1}}>{t.who}</div>
              <div className="mono" style={{fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--ink-soft)', marginTop:4}}>{t.role}</div>
            </div>
            <div style={{marginLeft:'auto'}}>
              {Array.from({length:5}).map((_,i) => (
                <span key={i} style={{color: i<t.stars ? 'var(--yellow)' : '#ddd', fontSize:22}}>★</span>
              ))}
            </div>
          </div>

          <p className="serif-i" style={{fontSize:'clamp(20px,2.4vw,28px)', lineHeight:1.45, margin:0}}>
            {t.text}
          </p>

          <div className="row" style={{justifyContent:'space-between', marginTop:32, paddingTop:20, borderTop:'1px solid var(--line)'}}>
            <div className="row" style={{gap:6}}>
              {quotes.map((_,i)=>(
                <button key={i} onClick={()=>setIdx(i)} style={{
                  width: i===idx ? 28 : 10, height:10, borderRadius:5,
                  background: i===idx ? 'var(--ink)' : 'var(--line)',
                  border:'none', cursor:'pointer', transition:'all .3s ease', padding:0
                }} aria-label={`Quote ${i+1}`} />
              ))}
            </div>
            <div className="row" style={{gap:8}}>
              <button className="btn ghost" onClick={()=>setIdx((idx-1+quotes.length)%quotes.length)} style={{padding:'10px 16px'}}>← Prev</button>
              <button className="btn pink" onClick={()=>setIdx((idx+1)%quotes.length)} style={{padding:'10px 16px'}}>Next →</button>
            </div>
          </div>
        </div>

        <div className="hand" style={{textAlign:'center', marginTop:30, fontSize:24, color:'#d9bfa7'}}>
          ✦ all parties consented (probably) ✦
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
