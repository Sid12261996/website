
// ===== src/icons.jsx =====
// Custom thematic SVG motifs. Kept simple — no faces, no complex illustration.

const Auto = ({size=120, color="#1F1410", accent="#F4C95D", ...rest}) => (
  <svg viewBox="0 0 200 130" width={size} height={size*130/200} {...rest}>
    {/* canopy */}
    <path d="M30,55 Q40,15 100,15 Q160,15 170,55 L170,80 L30,80 Z" fill={accent} stroke={color} strokeWidth="3"/>
    <rect x="35" y="55" width="130" height="6" fill={color}/>
    {/* body */}
    <rect x="40" y="60" width="120" height="35" rx="6" fill="#F2C9CF" stroke={color} strokeWidth="3"/>
    {/* windshield */}
    <path d="M55,55 L70,30 L130,30 L145,55 Z" fill="#cfe9f0" stroke={color} strokeWidth="2.5"/>
    <line x1="100" y1="30" x2="100" y2="55" stroke={color} strokeWidth="2"/>
    {/* door split */}
    <line x1="100" y1="60" x2="100" y2="95" stroke={color} strokeWidth="2"/>
    {/* light */}
    <circle cx="160" cy="72" r="4" fill="#fff" stroke={color} strokeWidth="2"/>
    {/* wheels */}
    <circle cx="60" cy="100" r="14" fill={color}/>
    <circle cx="60" cy="100" r="6" fill="#ddd"/>
    <circle cx="140" cy="100" r="14" fill={color}/>
    <circle cx="140" cy="100" r="6" fill="#ddd"/>
    {/* exhaust puff */}
    <circle cx="22" cy="85" r="5" fill="#fff" opacity=".7"/>
    <circle cx="14" cy="78" r="4" fill="#fff" opacity=".5"/>
    <circle cx="8" cy="88" r="3" fill="#fff" opacity=".4"/>
  </svg>
);

const Waffle = ({size=120, drip=true, ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="#F4C95D"/>
        <rect width="20" height="2" y="0" fill="#5C3A1E" opacity=".5"/>
        <rect width="2" height="20" x="0" fill="#5C3A1E" opacity=".5"/>
      </pattern>
    </defs>
    <rect x="14" y="14" width="92" height="80" rx="10" fill="url(#grid)" stroke="#1F1410" strokeWidth="3"/>
    {drip && (
      <path d="M14,50 Q20,80 26,68 Q32,90 40,72 Q50,100 60,78 Q70,98 82,75 Q92,90 100,70 Q108,84 106,52 L106,30 L14,30 Z" fill="#5C3A1E" stroke="#1F1410" strokeWidth="2.5"/>
    )}
    <circle cx="40" cy="22" r="3" fill="#fff" opacity=".6"/>
    <circle cx="76" cy="40" r="2" fill="#fff" opacity=".5"/>
  </svg>
);

const Handbag = ({size=110, color="#E5447A", ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <path d="M40,40 Q40,18 60,18 Q80,18 80,40" fill="none" stroke="#1F1410" strokeWidth="3"/>
    <rect x="22" y="40" width="76" height="64" rx="10" fill={color} stroke="#1F1410" strokeWidth="3"/>
    <rect x="22" y="50" width="76" height="3" fill="#1F1410" opacity=".25"/>
    <rect x="55" y="62" width="10" height="14" rx="2" fill="#F4C95D" stroke="#1F1410" strokeWidth="2"/>
  </svg>
);

const Murukku = ({size=110, ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <g fill="none" stroke="#7A4A22" strokeWidth="6" strokeLinecap="round">
      <circle cx="60" cy="60" r="42"/>
      <circle cx="60" cy="60" r="30"/>
      <circle cx="60" cy="60" r="18"/>
      <path d="M60,18 L60,102 M18,60 L102,60 M30,30 L90,90 M90,30 L30,90"/>
    </g>
    <g fill="#E5447A">
      <circle cx="60" cy="14" r="3"/>
      <circle cx="60" cy="106" r="3"/>
      <circle cx="14" cy="60" r="3"/>
      <circle cx="106" cy="60" r="3"/>
    </g>
  </svg>
);

const Dress = ({size=110, color="#FF6FA1", ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <path d="M48,18 L72,18 L78,38 L98,108 L22,108 L42,38 Z" fill={color} stroke="#1F1410" strokeWidth="3"/>
    <path d="M48,18 Q60,28 72,18" fill="none" stroke="#1F1410" strokeWidth="3"/>
    <path d="M42,38 Q60,52 78,38" fill="none" stroke="#1F1410" strokeWidth="2" opacity=".5"/>
    <circle cx="60" cy="62" r="3" fill="#1F1410"/>
    <circle cx="60" cy="76" r="3" fill="#1F1410"/>
  </svg>
);

const Heart = ({size=24, color="#E5447A", ...rest}) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...rest}>
    <path d="M12,21 C12,21 3,14 3,8.5 C3,5.4 5.4,3 8.5,3 C10.3,3 11.7,4 12,5 C12.3,4 13.7,3 15.5,3 C18.6,3 21,5.4 21,8.5 C21,14 12,21 12,21 Z" fill={color} stroke="#1F1410" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const Sparkle = ({size=18, color="#F4C95D", ...rest}) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...rest}>
    <path d="M12,2 L13.5,10.5 L22,12 L13.5,13.5 L12,22 L10.5,13.5 L2,12 L10.5,10.5 Z" fill={color} stroke="#1F1410" strokeWidth="1"/>
  </svg>
);

const Cake = ({size=120, ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <rect x="20" y="60" width="80" height="38" rx="4" fill="#FCE7E0" stroke="#1F1410" strokeWidth="3"/>
    <path d="M20,72 Q30,82 40,72 Q50,82 60,72 Q70,82 80,72 Q90,82 100,72" fill="none" stroke="#E5447A" strokeWidth="3"/>
    <rect x="56" y="38" width="8" height="22" fill="#F4C95D" stroke="#1F1410" strokeWidth="2"/>
    <path d="M60,30 Q57,34 60,38 Q63,34 60,30 Z" fill="#E5447A"/>
  </svg>
);

Object.assign(window, { Auto, Waffle, Handbag, Murukku, Dress, Heart, Sparkle, Cake });


// ===== src/hero.jsx =====
// Hero — full-bleed birthday landing with an auto-rickshaw that drives across on scroll.

const { useEffect, useState, useRef } = React;

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

window.Hero = Hero;


// ===== src/about.jsx =====
// About + Quirks — five thematic cards for her five (lovingly roasted) trademarks.

function QuirkCard({ icon, title, kicker, body, accent, tilt }){
  return (
    <div className="card" style={{
      background:'var(--cream)',
      transform:`rotate(${tilt}deg)`,
      transition:'transform .3s ease'
    }}
    onMouseEnter={e => e.currentTarget.style.transform='rotate(0deg) translateY(-4px)'}
    onMouseLeave={e => e.currentTarget.style.transform=`rotate(${tilt}deg)`}
    >
      <div className="row" style={{justifyContent:'space-between', alignItems:'flex-start'}}>
        <span className="chip" style={{background:accent, borderColor:'var(--ink)'}}>{kicker}</span>
        <div>{icon}</div>
      </div>
      <h3 className="serif" style={{fontSize:34, lineHeight:1, margin:'18px 0 10px'}}>{title}</h3>
      <p style={{margin:0, fontSize:15, lineHeight:1.55, color:'var(--ink-soft)'}}>{body}</p>
    </div>
  );
}

function About(){
  return (
    <section id="about" style={{padding:'120px 0 80px', position:'relative'}}>
      <div className="wrap">
        <div className="row" style={{justifyContent:'space-between', alignItems:'flex-end', marginBottom:32, flexWrap:'wrap'}}>
          <div style={{maxWidth:760}}>
            <span className="eyebrow">CH. 01 · The Subject</span>
            <h2 className="h-display" style={{margin:'10px 0 0'}}>
              An <em>incomplete</em> field guide<br/>to my favorite person.
            </h2>
          </div>
          <div className="hand" style={{fontSize:26, color:'var(--ink-soft)', maxWidth:340, lineHeight:1.2}}>
            warning: contains gentle roasting, written by a man who knows he'll have to apologize for at least three of these.
          </div>
        </div>

        {/* Bio */}
        <div className="grid cols-2" style={{gap:30, marginTop:30}}>
          <div>
            <div className="polaroid" style={{transform:'rotate(-2deg)', maxWidth:380}}>
              <div className="tape"></div>
              <div className="frame">
                <div className="stripe">
                  <div>
                    <div style={{fontSize:13,letterSpacing:'.2em'}}>[ PORTRAIT ]</div>
                    <div style={{textTransform:'none',fontSize:11,opacity:.7,marginTop:4}}>
                      Sneha · 4:5 · personal photo
                    </div>
                  </div>
                </div>
              </div>
              <div className="cap">my whole entire universe (and her three handbags).</div>
            </div>
          </div>
          <div>
            <p className="serif-i" style={{fontSize:'clamp(22px,2.4vw,30px)', lineHeight:1.4, margin:'0 0 18px'}}>
              "Sneha is the kind of person who will reject a perfectly good Uber for an
              auto-rickshaw two streets away — and then call you to say <span style={{color:'var(--pink)'}}>'no traffic, I told you.'"</span>
            </p>
            <p style={{fontSize:16, lineHeight:1.65, color:'var(--ink-soft)', margin:'0 0 12px'}}>
              She is, in no particular order: the loudest laugh in any room, the worst at
              keeping snacks for later, the best at remembering exactly how I lost an argument
              in 2019, and the only person on earth who can say "I have nothing to wear" while
              standing next to a wardrobe that physically cannot close.
            </p>
            <p style={{fontSize:16, lineHeight:1.65, color:'var(--ink-soft)', margin:'0 0 12px'}}>
              On paper she's brilliant, organized, and impressive. In real life she's negotiating
              with auto drivers at 11 p.m. for a fare difference of ₹20, on principle, while a
              waffle cools in her other hand.
            </p>
            <p style={{fontSize:16, lineHeight:1.65, color:'var(--ink-soft)', margin:0}}>
              She is, in every way that matters, my favorite human. This is her birthday. This is
              her website. Read on at your own risk — she will absolutely be quoting it back at me.
            </p>
            <div className="hand" style={{fontSize:28, marginTop:18, color:'var(--pink)'}}>
              — Sidharth, certifiably smitten ✦
            </div>
          </div>
        </div>

        {/* Quirk cards */}
        <div style={{marginTop:70}}>
          <span className="eyebrow">CH. 01.5 · Documented Quirks</span>
          <h3 className="h-display" style={{fontSize:'clamp(28px,4vw,52px)', margin:'8px 0 28px'}}>
            Exhibits <em>A</em> through <em>E</em>.
          </h3>

          <div className="grid cols-3" style={{gap:24}}>
            <QuirkCard
              icon={<Auto size={70}/>}
              kicker="EXHIBIT A"
              title="The Auto Loyalty Program"
              body="Has a personal relationship with every auto driver in a 5-km radius. Refuses to sit in our own car. Quote: 'auto is faster, you don't understand traffic.' I do, in fact, understand traffic."
              accent="#F4C95D"
              tilt={-1.5}
            />
            <QuirkCard
              icon={<Waffle size={70}/>}
              kicker="EXHIBIT B"
              title="Midnight Nutella Protocol"
              body="At 11:47 p.m., the craving hits. By 11:52, I am putting on shoes. The waffle must be warm, the Nutella generous, the man delivering it judged silently. This has happened on a Tuesday. It will happen again."
              accent="#FCE7E0"
              tilt={1.2}
            />
            <QuirkCard
              icon={<Murukku size={70}/>}
              kicker="EXHIBIT C"
              title="Murukku as a Side Dish"
              body="Biryani? Murukku on the side. Pasta? Murukku on the side. A nice salad? You guessed it — murukku, and a small judgment of the salad. Chips work too. The crunch must be present, or the meal does not count."
              accent="#B8DCC4"
              tilt={-0.8}
            />
            <QuirkCard
              icon={<Handbag size={70}/>}
              kicker="EXHIBIT D"
              title="The Handbag Multiverse"
              body="Owns one (1) bag for every plausible occasion, and seven (7) for occasions that have not yet been invented. Brings a different one to dinner each time. I have stopped counting. The closet has stopped breathing."
              accent="#FF6FA1"
              tilt={1.6}
            />
            <QuirkCard
              icon={<Dress size={70}/>}
              kicker="EXHIBIT E"
              title="'I Have Nothing To Wear'"
              body="Said while visibly standing inside an overflowing wardrobe. A philosophical position, not a factual claim. I have learned not to argue. I have learned to nod. I have learned to ask 'do you want the pink one?'"
              accent="#FCE7E0"
              tilt={-1.2}
            />
            <div className="card brown" style={{transform:'rotate(.6deg)'}}>
              <span className="chip" style={{background:'var(--yellow)', borderColor:'var(--ink)', color:'var(--ink)'}}>BONUS</span>
              <h3 className="serif" style={{fontSize:32, lineHeight:1, margin:'18px 0 10px'}}>
                & one (1) heart of gold.
              </h3>
              <p style={{margin:0, fontSize:15, lineHeight:1.55, opacity:.9}}>
                For all the chaos above — she is the softest person I know. Remembers everyone's
                birthdays. Texts your mom on Diwali. Cries at dog reels. Kind in ways the
                internet doesn't reward. The roast is the wrapping paper; this is the gift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;


// ===== src/memories.jsx =====
// Memories — masonry-ish polaroid wall with witty captions.

function Memories(){
  const items = [
    { cap: "the time you negotiated an auto fare for 11 minutes to save ₹15.", tilt:-2.4, tag:"auto·08:42pm", h:'tall' },
    { cap: "exhibit B: the legendary midnight waffle, photographed against your will.", tilt:1.6, tag:"waffle·12:14am", h:'short' },
    { cap: "you said 'just one shop' and we left four hours later, with three handbags.", tilt:-1.1, tag:"shopping·sat", h:'tall' },
    { cap: "the murukku haul. you swore it would last a week. it did not.", tilt:2.2, tag:"snack·tue", h:'short' },
    { cap: "'I have nothing to wear' — taken inside the wardrobe.", tilt:-2.0, tag:"wardrobe·am", h:'tall' },
    { cap: "auto driver bhaiya — honorary family member since 2022.", tilt:1.0, tag:"friend·forever", h:'short' },
    { cap: "you, asleep, holding the empty Nutella jar protectively.", tilt:-.6, tag:"02·17am", h:'tall' },
    { cap: "the day you wore the same dress twice. iconic. record-breaking.", tilt:2.6, tag:"never·again", h:'short' },
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
                  <div className="stripe">
                    <div>
                      <div style={{fontSize:11, letterSpacing:'.2em'}}>[ PHOTO ]</div>
                      <div style={{textTransform:'none', fontSize:10, opacity:.7, marginTop:4, letterSpacing:'.04em'}}>{it.tag}</div>
                    </div>
                  </div>
                </div>
                <div className="cap">{it.cap}</div>
              </div>
            ))}

            {/* video placeholder card */}
            <div className="polaroid" style={{transform:'rotate(-1.2deg)', background:'var(--ink)', color:'var(--cream)'}}>
              <div className="tape" style={{background:'rgba(184,220,196,.6)'}}></div>
              <div className="frame" style={{aspectRatio:'4/5', background:'#2a1d18'}}>
                <div className="stripe" style={{background:'repeating-linear-gradient(135deg, rgba(255,255,255,.06) 0 8px, transparent 8px 16px), linear-gradient(180deg, #2a1d18, #1F1410)', color:'#d9bfa7'}}>
                  <div>
                    <div style={{fontSize:32}}>▶</div>
                    <div style={{marginTop:8, fontSize:11, letterSpacing:'.2em'}}>[ VIDEO PLACEHOLDER ]</div>
                    <div style={{textTransform:'none', fontSize:10, opacity:.7, marginTop:4}}>that one where you laughed for 4 minutes straight</div>
                  </div>
                </div>
              </div>
              <div className="cap" style={{color:'#fff'}}>insert your funniest 30 seconds here.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Memories = Memories;


// ===== src/mission.jsx =====
// Mission Statement — playful corporate-style commitment doc.

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

window.Mission = Mission;


// ===== src/testimonials.jsx =====
// Testimonials — carousel of fake-but-wholesome quotes.

const { useState: useTState } = React;

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

window.Testimonials = Testimonials;


// ===== src/terms.jsx =====
// Terms & Conditions — fake-legal document, expandable clauses, signable.

const { useState: useTermsState } = React;

function Terms(){
  const [openIdx, setOpenIdx] = useTermsState(0);
  const [signed, setSigned] = useTermsState(typeof localStorage !== 'undefined' && localStorage.getItem('snehaSigned') === 'true');

  const clauses = [
    {
      n:'§1', title:'AUTO-RICKSHAW USAGE RIGHTS', summary:'Defines the inalienable right to flag down any auto.',
      body:[
        'The Party of the First Part (hereafter "Sneha") shall, at all times and in all weather conditions including but not limited to monsoon, post-monsoon, the brief illusion of winter, and the 11 months of summer, retain the absolute and unconditional right to summon, board, and travel by auto-rickshaw.',
        'The Party of the Second Part (hereafter "Sidharth") hereby waives any and all objections to said auto, including objections grounded in: (a) the existence of a perfectly functional family vehicle, (b) the existence of an Uber within 90 seconds, or (c) "but it is raining."',
        'Negotiation of fare with the auto driver shall be considered a recreational activity and shall not be interrupted, sped up, or sighed at.',
      ]
    },
    {
      n:'§2', title:'NUTELLA WAFFLE DELIVERY OBLIGATIONS', summary:'Specifies hours, jar quantity, and toppings.',
      body:[
        'Sidharth shall maintain a minimum of two (2) sealed jars of Nutella on the premises at all times. One jar shall be designated "the active jar"; the second shall be a strategic reserve, untouched, like a heart in a glass case.',
        'Between the hours of 22:00 and 03:00 (hereafter "the Witching Window"), if Sneha articulates a craving — verbally, telepathically, or via that particular look — Sidharth shall procure or prepare one (1) Nutella waffle within forty-five (45) minutes.',
        'The waffle shall be: warm, generously sauced, and delivered without commentary on caloric content, frequency, or "didn\'t you have one yesterday."',
      ]
    },
    {
      n:'§3', title:'MURUKKU & CHIPS CONSUMPTION POLICY', summary:'On the inalienable right to crunch alongside any meal.',
      body:[
        'Murukku, ribbon pakoda, kara sev, and any crunchy savoury circular product (collectively "the Crunch") shall be permitted as a side dish to any main course, including but not limited to: biryani, pasta, soup, dessert, breakfast cereal, and other crunchy items.',
        'Sidharth shall not, under any circumstance, finish the last piece in the bag without first verifying — with eye contact and verbal confirmation — that Sneha does not want it. He has tried this once. He will not try it again.',
      ]
    },
    {
      n:'§4', title:'HANDBAG ACQUISITION BUDGET', summary:'There is no budget. The clause exists for legal completeness.',
      body:[
        'No upper limit is hereby established for the procurement of handbags, totes, slings, clutches, crossbodies, satchels, or any item that holds other items.',
        'Sidharth shall not utter, suggest, or imply the phrase "do you really need another one." This phrase is, by mutual agreement, deleted from the marital vocabulary, retroactive to 2019.',
        'Storage solutions for new handbags shall be Sidharth\'s sole responsibility. The closet shall expand as required.',
      ]
    },
    {
      n:'§5', title:'WARDROBE & DRESS HOARDING RIGHTS', summary:'On the legitimacy of "I have nothing to wear."',
      body:[
        'The statement "I have nothing to wear" shall be treated as a declaration of mood, not a description of inventory. No counter-evidence (e.g. gesturing at the visibly overflowing wardrobe) shall be admissible.',
        'Sidharth\'s only sanctioned response is: a thoughtful pause, followed by "what mood are we going for?" The follow-up suggestion of "the pink one" is permitted and statistically successful.',
      ]
    },
    {
      n:'§6', title:'GENERAL CLAUSES', summary:'Hugs, laughter, and other miscellaneous obligations.',
      body:[
        'Sidharth shall, in perpetuity, find Sneha\'s laugh to be the funniest sound on earth. He shall continue to laugh at her jokes even when he has heard them. Especially when he has heard them.',
        'No clause in this document shall be interpreted strictly. The entire document is a love letter wearing a tie.',
        'This agreement is governed by the laws of our home, our jokes, and our shared Google Calendar. It supersedes all previous agreements except the original one made on the day we met.',
      ]
    },
  ];

  const sign = () => {
    try { localStorage.setItem('snehaSigned', 'true'); } catch(e){}
    setSigned(true);
  };
  const unsign = () => {
    try { localStorage.removeItem('snehaSigned'); } catch(e){}
    setSigned(false);
  };

  return (
    <section id="terms" style={{padding:'120px 0 80px', background:'var(--paper)', position:'relative'}}>
      <div className="wrap" style={{maxWidth:980}}>
        <div style={{textAlign:'center', marginBottom:40}}>
          <span className="eyebrow">CH. 05 · The Fine Print</span>
          <h2 className="h-display" style={{margin:'10px 0 14px'}}>
            Terms &amp; <em>Conditions</em><br/>of Marriage to Sneha.
          </h2>
          <p className="mono" style={{fontSize:11, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--ink-soft)', margin:0}}>
            Doc #SNEHA-001 · Rev. May 2026 · CONFIDENTIAL · LOL
          </p>
        </div>

        <div style={{background:'#fff', border:'1.5px solid var(--ink)', borderRadius:14, padding:'8px 0', boxShadow:'8px 8px 0 var(--ink)'}}>
          {clauses.map((c, i) => {
            const open = openIdx === i;
            return (
              <div key={c.n} style={{borderBottom: i<clauses.length-1 ? '1px solid var(--line)' : 'none'}}>
                <button onClick={()=>setOpenIdx(open ? -1 : i)} style={{
                  width:'100%', textAlign:'left', background:'transparent', border:'none', padding:'22px 28px', cursor:'pointer',
                  display:'flex', alignItems:'center', gap:18, fontFamily:'inherit'
                }}>
                  <span className="mono" style={{fontSize:13, color:'var(--pink)', fontWeight:700, minWidth:32}}>{c.n}</span>
                  <span style={{flex:1}}>
                    <div className="serif" style={{fontSize:22, lineHeight:1.1}}>{c.title}</div>
                    <div style={{fontSize:13, color:'var(--ink-soft)', marginTop:4}}>{c.summary}</div>
                  </span>
                  <span style={{
                    width:32,height:32,borderRadius:'50%',border:'1.5px solid var(--ink)',
                    display:'inline-flex',alignItems:'center',justifyContent:'center',
                    transform: open ? 'rotate(45deg)' : 'rotate(0)', transition:'transform .25s ease',
                    fontSize:18, fontFamily:"'DM Serif Display',serif"
                  }}>+</span>
                </button>
                {open && (
                  <div style={{padding:'0 28px 26px 78px'}}>
                    {c.body.map((p, j) => (
                      <p key={j} style={{margin:'0 0 12px', fontSize:15, lineHeight:1.65, color:'var(--ink-soft)'}}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Signature panel */}
        <div className="card" style={{marginTop:32, padding:32, background: signed ? 'var(--mint)' : 'var(--cream)'}}>
          <div className="row" style={{justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:20}}>
            <div style={{maxWidth:560}}>
              <span className="eyebrow">SIGNATURE BLOCK</span>
              <h3 className="serif" style={{fontSize:30, margin:'8px 0 6px', lineHeight:1.05}}>
                {signed ? 'Filed and notarized by one (1) very smitten husband.' : 'Sidharth, you may now sign.'}
              </h3>
              <p style={{margin:0, fontSize:15, color:'var(--ink-soft)', lineHeight:1.5}}>
                {signed
                  ? "Your signature is on record. Sneha will be notified. There is no escape clause. There never was."
                  : "By clicking below, Sidharth affirms that he has read, understood, and probably already broken at least one of these clauses (probably §3)."}
              </p>
            </div>
            <div style={{textAlign:'right'}}>
              {signed ? (
                <>
                  <div className="hand" style={{fontSize:54, color:'var(--pink)', lineHeight:1}}>Sidharth ♡</div>
                  <div className="mono" style={{fontSize:11, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--ink-soft)', marginTop:6}}>SIGNED · {new Date().toLocaleDateString()}</div>
                  <button onClick={unsign} className="btn ghost" style={{marginTop:14, fontSize:12, padding:'8px 14px'}}>↺ amend agreement</button>
                </>
              ) : (
                <button className="btn pink" onClick={sign} style={{fontSize:15, padding:'16px 24px'}}>
                  ✒ Sign as Sidharth
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Terms = Terms;


// ===== src/wishes.jsx =====
// Wishes — birthday wish form (localStorage) + final love letter.

const { useState: useWishState, useEffect: useWishEffect } = React;

function Wishes(){
  const [name, setName] = useWishState('');
  const [msg, setMsg] = useWishState('');
  const [wishes, setWishes] = useWishState([]);

  useWishEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('snehaWishes') || '[]');
      const seed = saved.length ? saved : [
        { name:'Amma', msg:'Happy birthday kanna ma. Don\'t skip dinner. Eat properly. Call me.', t: Date.now()-3600000*4 },
        { name:'Best Friend Aishu', msg:'Birthday girl!! No autos today. WE ARE TAKING MY CAR. (jk we both know what will happen.)', t: Date.now()-3600000*2 },
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

window.Wishes = Wishes;


// ===== src/app.jsx =====
// App shell — nav + section composition + marquee + footer.

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
        <div data-screen-label="04 Mission"><Mission /></div>
        <div data-screen-label="05 Testimonials"><Testimonials /></div>
        <div data-screen-label="06 Terms"><Terms /></div>
        <div data-screen-label="07 Letter & Wishes"><Wishes /></div>
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

