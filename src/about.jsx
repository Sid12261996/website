// About + Quirks — five thematic cards for her five (lovingly roasted) trademarks.

import { Auto, Waffle, Murukku, Handbag, Dress } from './icons.jsx';

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

export default About;
