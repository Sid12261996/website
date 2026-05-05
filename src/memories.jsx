// Memories — masonry-ish polaroid wall with witty captions.

function Memories(){
  const items = [
    { cap: "the time you negotiated an auto fare for 11 minutes to save ₹15.", tilt:-2.4, tag:"auto·08:42pm", h:'tall', img:'/images/memories/auto-negotiation.jpeg' },
    { cap: "exhibit B: the legendary midnight waffle, photographed against your will.", tilt:1.6, tag:"waffle·12:14am", h:'short', img:'/images/memories/midnight-waffle.jpeg' },
    { cap: "you said 'just one shop' and we left four hours later, with three handbags.", tilt:-1.1, tag:"shopping·sat", h:'tall', img:'/images/memories/shopping-bags.jpeg' },
    { cap: "the murukku haul. you swore it would last a week. it did not.", tilt:2.2, tag:"snack·tue", h:'short', img:'/images/memories/murukku-haul.jpeg' },
    { cap: "'I have nothing to wear' — taken inside the wardrobe.", tilt:-2.0, tag:"wardrobe·am", h:'tall', img:'/images/memories/wardrobe.jpeg' },
    { cap: "fifth coffee of the day. it was 10 a.m. she was not sorry.", tilt:1.0, tag:"coffee·always", h:'short', img:'/images/memories/coffee-obs.jpeg' },
    { cap: "you, asleep, holding the empty Nutella jar protectively.", tilt:-.6, tag:"02·17am", h:'tall', img:'/images/memories/nutella-sleep.jpeg' },
    { cap: "the day you wore the same dress twice. iconic. record-breaking.", tilt:2.6, tag:"never·again", h:'short', img:'/images/memories/same-dress.jpeg' },
  ];

  return (
    <section id="memories" style={{padding:'100px 0', background:'linear-gradient(180deg, transparent 0%, var(--blush) 30%, var(--blush) 70%, transparent 100%)', position:'relative'}}>
      <div className="wrap">
        <div className="row" style={{justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:24}}>
          <div>
            <span className="eyebrow">CH. 02 · The Archive</span>
            <h2 className="h-display" style={{margin:'10px 0 0'}}>
              Photographic <em>evidence</em>.
            </h2>
          </div>
          <p className="serif-i" style={{maxWidth:420, fontSize:22, color:'var(--ink-soft)', margin:0, lineHeight:1.4}}>
            A loose, tilted, totally unorganized scrapbook — exactly how we live.
          </p>
        </div>

        <div style={{marginTop:46, columnCount:1, columnGap:24}}>
          <style>{`
            .gallery{column-count:1; column-gap:24px}
            @media(min-width:640px){.gallery{column-count:2}}
            @media(min-width:980px){.gallery{column-count:3}}
            .gallery > *{break-inside:avoid; margin-bottom:28px; display:block}
          `}</style>
          <div className="gallery">
            {items.map((it, i) => (
              <div key={i} className="polaroid" style={{transform:`rotate(${it.tilt}deg)`, transition:'transform .3s ease, box-shadow .3s ease'}}
                onMouseEnter={e => {e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)'; e.currentTarget.style.boxShadow='0 30px 50px -20px rgba(31,20,16,.35), 0 4px 0 rgba(31,20,16,.06)'}}
                onMouseLeave={e => {e.currentTarget.style.transform = `rotate(${it.tilt}deg)`; e.currentTarget.style.boxShadow=''}}
              >
                <div className="tape" style={{background:i%2 ? 'rgba(229,68,122,.45)' : 'rgba(244,201,93,.7)'}}></div>
                <div className="frame" style={{aspectRatio: it.h==='tall' ? '4/5' : '1/1'}}>
                  <img src={it.img} alt={it.tag} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                </div>
                <div className="cap">{it.cap}</div>
              </div>
            ))}

            {/* video placeholder card */}
            <div className="polaroid" style={{transform:'rotate(-1.2deg)', background:'var(--ink)', color:'var(--cream)'}}>
              <div className="tape" style={{background:'rgba(184,220,196,.6)'}}></div>
              <div className="frame" style={{aspectRatio:'4/5', background:'#2a1d18'}}>
                <video src="/images/memories/funny-video.mp4" controls style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              </div>
              <div className="cap" style={{color:'#fff'}}>the video that made everyone stop mid-scroll. you know which one.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memories;
