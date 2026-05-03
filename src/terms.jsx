// Terms & Conditions — fake-legal document, expandable clauses, signable.

import { useState as useTermsState } from 'react';

function Terms(){
  const [openIdx, setOpenIdx] = useTermsState(0);
  const [signed, setSigned] = useTermsState(typeof localStorage !== 'undefined' && localStorage.getItem('snehaSigned') === 'true');

  const clauses = [
    {
      n:'§1', title:'DECLARATION OF AFFECTION', summary:'Preamble — on the nature of this document and the state of the dishes.',
      body:[
        'I, the Husband, being of sound mind and slightly sore hands from washing dishes, hereby declare my unconditional love for My Darling. This document is not a complaint. It is a testament. A love language in legal format, because she will only read it if it looks official.',
        '— I genuinely love her. I just also genuinely wash a lot of vessels.',
      ]
    },
    {
      n:'§2', title:'THE VESSEL WASHING AGREEMENT', summary:'On the quiet, seamless, and fully undocumented transfer of domestic duties.',
      body:[
        'My Darling did, at various points in our marriage, propose a fair division of labour — she would wash all vessels in exchange for being relieved of cooking duties. The Husband accepted in good faith.',
        'Over time, however, this responsibility was quietly, seamlessly, and without formal notice transferred to him via the advanced technique of simply not doing it, accompanied by a very peaceful expression. The Husband is now the de facto vessel-washing department and has made peace with this. The vessels are clean. We move on.',
      ]
    },
    {
      n:'§3', title:'THE BITING AGREEMENT', summary:'On elevated happiness and its entirely affectionate physical expressions.',
      body:[
        'My Darling reserves and actively exercises the right to bite the Husband upon experiencing elevated levels of happiness, affection, or general delight.',
        'The Husband acknowledges that being bitten is, in fact, a privilege — it means she is happy, and he would not trade it. He shall take all reasonable steps to keep My Darling in a state of joy so as to remain within biting range. A wife who bites is a wife who loves. This is now a core marital KPI.',
      ]
    },
    {
      n:'§4', title:'THE MOBILITY AND BODY ACTIVITY CLAUSE', summary:'On sovereign rights to comfortable horizontal existence.',
      body:[
        'My Darling has an established and well-documented preference for remaining seated or in horizontal position, or otherwise comfortable at any given hour of the day, and the Husband recognises this as her sovereign right as Queen of the Household.',
        'Voluntary movement may occur at her own discretion — known triggers include food being ready, a good show ending, or the Husband failing to find something directly in front of him. All other requests for movement shall be submitted with patience and low expectations.',
      ]
    },
    {
      n:'§5', title:'THE SENSIBLE STATEMENT DOCTRINE', summary:'All statements issued by My Darling are binding, valid, and well-reasoned.',
      body:[
        'All statements issued by My Darling are, by marital law, to be received as sensible, thoughtful, and well-reasoned regardless of their apparent relationship to logic, physics, or established fact.',
        'Upon receiving any such statement, the Husband shall nod thoughtfully, respond with "that makes sense," and under no circumstances say "how? It won\'t work." The Husband has accepted this protocol entirely. It has saved him many evenings. She has also, on multiple occasions, turned out to be right. He has stopped questioning.',
      ]
    },
    {
      n:'§6', title:'THE TIGHT TIMELINE PROTOCOL', summary:'On plans of remarkable ambition and physics-optional deadlines.',
      body:[
        'My Darling is a visionary who regularly devises plans of remarkable ambition to be completed within timeframes that politely ignore the laws of time, traffic, and human biology — presented each time with supreme confidence and zero doubt.',
        'The Husband shall express enthusiasm, ask no logistical questions, and begin getting ready immediately since that buffer will be needed. In the event the plan does not succeed, contributing factors shall be recorded as traffic, other people, and the general unreliability of the external world. The plan itself shall be remembered as excellent.',
      ]
    },
    {
      n:'§7', title:'FINAL DECLARATION', summary:'The one right that supersedes all others — to love her exactly as she is.',
      body:[
        'The Husband retains one right above all others — to love My Darling exactly as she is: vessel-delegating, bite-happy, throne-guarding, timeline-optimistic, and gloriously, entirely herself.',
        'He signed up for all of this. He would sign up again, immediately, without reading the fine print. My Darling is the best thing to have ever happened to him — chaos, bite marks, dishes, impossible timelines, and all.',
        'This document is binding in the court of love and in no other court. Drafted with devotion, a little exhaustion, and a whole lot of affection. To My Darling — who will probably delegate reading this too. I love you anyway.',
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
