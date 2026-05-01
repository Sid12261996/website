// Terms & Conditions — fake-legal document, expandable clauses, signable.

import { useState as useTermsState } from 'react';

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

export default Terms;
