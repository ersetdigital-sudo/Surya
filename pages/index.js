import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    const onDown = (e) => {
      const t = e.target
      if (t instanceof Element && (t.closest('#mobile-nav') || t.closest('[aria-controls="mobile-nav"]'))) return
      close()
    }
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!window.gsap) return;
    gsap.registerPlugin(ScrollTrigger);

    if(!reduce && window.Lenis){
      const lenis = new Lenis({ duration:1.05, smoothWheel:true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t=>lenis.raf(t*1000));
      gsap.ticker.lagSmoothing(0);
      document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click',e=>{
          const el=document.querySelector(a.getAttribute('href'));
          if(el){ e.preventDefault(); lenis.scrollTo(el,{offset:-80}); }
        });
      });
    }

    gsap.to('#prog',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.2}});

    const cur=document.getElementById('cur'), dot=document.getElementById('curdot');
    if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
      const xs=gsap.quickTo(cur,'x',{duration:.5,ease:'power3'}), ys=gsap.quickTo(cur,'y',{duration:.5,ease:'power3'});
      const xd=gsap.quickTo(dot,'x',{duration:.08,ease:'power3'}), yd=gsap.quickTo(dot,'y',{duration:.08,ease:'power3'});
      window.addEventListener('pointermove',e=>{ xs(e.clientX); ys(e.clientY); xd(e.clientX); yd(e.clientY); });
      document.querySelectorAll('a,button,.tile').forEach(el=>{
        el.addEventListener('pointerenter',()=>gsap.to(cur,{scale:1.9,borderColor:'rgba(217,242,74,.9)',duration:.3}));
        el.addEventListener('pointerleave',()=>gsap.to(cur,{scale:1,borderColor:'rgba(217,242,74,.7)',duration:.3}));
      });
    }

    document.querySelectorAll('.split').forEach(el=>{
      el.innerHTML = el.textContent.trim().split('').map(c=>
        c===' ' ? '<span class="ltr">&nbsp;</span>' : '<span class="ltr">'+c+'</span>').join('');
    });
    gsap.from('.split .ltr',{yPercent:118,opacity:0,duration:1.1,ease:'expo.out',stagger:{each:.032},delay:.15});
    gsap.from('#term',{y:34,opacity:0,duration:1,ease:'power3.out',delay:.55});
    gsap.from('.mag',{y:18,opacity:0,duration:.55,ease:'power3.out',stagger:.06,delay:.45});

    const out=document.getElementById('termout');
    const lines=[
      '<span class="tok-c">$</span> npm run build <span class="tok-c"># next build</span>',
      '<span class="tok-s">✓</span> compiled successfully',
      '<span class="tok-c">$</span> supabase db push <span class="tok-c"># rls policies</span>',
      '<span class="tok-s">✓</span> 11 policies applied',
      '<span class="tok-c">$</span> vercel deploy <span class="tok-k">--prod</span>',
      '<span class="tok-s">✓</span> production ready'
    ];
    let li=0, ci=0, buf='';
    function strip(h){return h.replace(/<[^>]*>/g,'');}
    function type(){
      if(li>=lines.length){ setTimeout(()=>{ out.innerHTML=''; buf=''; li=0; ci=0; type(); }, 2600); return; }
      const raw=strip(lines[li]);
      if(ci<=raw.length){
        out.innerHTML = buf + lines[li].replace(raw, raw.slice(0,ci));
        ci++; setTimeout(type, 26);
      } else {
        buf += lines[li] + '<br/>'; li++; ci=0; setTimeout(type, 380);
      }
    }
    if(!reduce) type(); else out.innerHTML = lines.join('<br/>');

    gsap.utils.toArray('.rv').forEach(el=>{
      gsap.fromTo(el,{y:34,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out',
        scrollTrigger:{trigger:el,start:'top 88%'}});
      el.classList.add('in');
    });

    gsap.utils.toArray('section h2').forEach(h=>{
      gsap.from(h,{y:26,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 88%'}});
    });

    const counterTweens=[];
    const setupCounters = () => {
      document.querySelectorAll('.count').forEach((el,i)=>{
        const to=+el.dataset.to, suf=el.dataset.suffix||'', sep=el.dataset.sep;
        const nf=sep?new Intl.NumberFormat('id-ID'):null;
        const fmt=n=>(nf?nf.format(n):n)+suf;
        if(reduce){ el.textContent=fmt(to); return; }
        const o={v:0};
        counterTweens.push(gsap.to(o,{v:to,duration:1.8,ease:'power2.out',delay:i*.12,
          scrollTrigger:{trigger:el,start:'top 90%',once:true},
          onUpdate(){ el.textContent=fmt(Math.round(o.v)); }}));
      });
    };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve())
      .then(() => { setupCounters(); ScrollTrigger.refresh(); });

    gsap.utils.toArray('.row').forEach((r,i)=>{
      gsap.from(r,{x:-26,opacity:0,duration:.75,ease:'power3.out',
        scrollTrigger:{trigger:r,start:'top 90%'},delay:(i%3)*.05});
    });

    gsap.to('.aurora',{yPercent:12,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:1}});
    gsap.utils.toArray('.marq').forEach(m=>{
      gsap.to(m,{x:'-4%',ease:'none',scrollTrigger:{trigger:m,start:'top bottom',end:'bottom top',scrub:.6}});
    });

    document.querySelectorAll('.tile').forEach(t=>{
      t.addEventListener('pointermove',e=>{
        const r=t.getBoundingClientRect();
        t.style.setProperty('--mx',(e.clientX-r.left)+'px');
        t.style.setProperty('--my',(e.clientY-r.top)+'px');
        if(reduce) return;
        const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
        gsap.to(t,{rotateY:px*5,rotateX:-py*5,transformPerspective:900,duration:.5,ease:'power2.out'});
      });
      t.addEventListener('pointerleave',()=>gsap.to(t,{rotateY:0,rotateX:0,duration:.6,ease:'power2.out'}));
    });

    if(!reduce) document.querySelectorAll('.mag').forEach(b=>{
      b.addEventListener('pointermove',e=>{
        const r=b.getBoundingClientRect();
        gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.28,y:(e.clientY-r.top-r.height/2)*.4,duration:.4,ease:'power3.out'});
      });
      b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'}));
    });

    return () => {
      counterTweens.forEach(t=>{ if(t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
    };
  }, [])

  return (
    <>
      <Head>
        <title>Surya — Full-Stack Software Engineer</title>
        <meta name="description" content="Full-Stack Software Engineer. TypeScript, Next.js, React, Supabase/PostgreSQL. Membangun e-commerce, POS, dashboard, dan automation untuk bisnis nyata." />
      </Head>

      <header className="site-head">
        <div className={`nav-scrim ${menuOpen ? 'open' : ''}`} onClick={()=>setMenuOpen(false)} aria-hidden="true"></div>
        <div className="relative z-50 mx-auto max-w-[1200px] px-4 sm:px-5 pt-4">
          <div className="glass relative rounded-[26px] md:rounded-full h-14 px-4 sm:px-5 flex items-center justify-between gap-3">
            <a href="#top" className="md:hidden text-[13px] font-semibold tracking-tight whitespace-nowrap">SURYA<span style={{color:'var(--lime)'}}>.</span></a>
            <nav aria-label="Navigasi utama" className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-[13px]">
              <a href="#about" className="px-3 py-2 rounded-full text-[#a1a1aa] hover:text-white hover:bg-white/5 transition">About</a>
              <a href="#stack" className="px-3 py-2 rounded-full text-[#a1a1aa] hover:text-white hover:bg-white/5 transition">Stack</a>
              <a href="#work" className="px-3 py-2 rounded-full text-[#a1a1aa] hover:text-white hover:bg-white/5 transition">Work</a>
              <a href="#exp" className="px-3 py-2 rounded-full text-[#a1a1aa] hover:text-white hover:bg-white/5 transition">Experience</a>
            </nav>
            <div className="ml-auto hidden md:flex items-center gap-2">
              <a href="/cv" className="inline-flex h-11 items-center text-[13px] px-4 rounded-full border border-white/12 hover:bg-white/5 transition whitespace-nowrap">↓ CV</a>
              <a href="#contact" className="inline-flex h-11 items-center text-[13px] font-medium px-4 rounded-full text-[#060607] whitespace-nowrap" style={{background:'var(--lime)'}}>Hire me</a>
            </div>
            <div className="ml-auto flex md:hidden items-center gap-2">
              <a href="#contact" onClick={()=>setMenuOpen(false)} className="inline-flex h-11 items-center text-[13px] font-medium px-4 rounded-full text-[#060607] whitespace-nowrap" style={{background:'var(--lime)'}}>Hire me</a>
              <button type="button" onClick={()=>setMenuOpen(o=>!o)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 hover:bg-white/5 active:bg-white/10 transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  {menuOpen
                    ? <><path d="M5.5 5.5l13 13" /><path d="M18.5 5.5l-13 13" /></>
                    : <><path d="M4 7.5h16" /><path d="M4 12h16" /><path d="M4 16.5h16" /></>}
                </svg>
              </button>
            </div>
          </div>

          <nav id="mobile-nav" aria-label="Navigasi mobile" className={`mnav ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
            <a href="#stack" onClick={()=>setMenuOpen(false)}>Stack</a>
            <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a>
            <a href="#exp" onClick={()=>setMenuOpen(false)}>Experience</a>
            <a href="/cv" onClick={()=>setMenuOpen(false)}>↓ Download CV</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="mx-auto max-w-[1200px] px-5 pt-16 md:pt-28 pb-14">
          <div className="flex items-center gap-3 mb-8 rv in">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full opacity-60" style={{background:'var(--lime)'}}></span><span className="relative rounded-full h-2 w-2" style={{background:'var(--lime)'}}></span></span>
            <span className="kicker">Available · Full-time &amp; Freelance · Indonesia</span>
          </div>

          <h1 className="text-[15vw] md:text-[9.5rem] font-extrabold leading-[.88]">
            <span className="block split">FULL-STACK</span>
            <span className="block outline-word split">ENGINEER</span>
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 term" id="term">
              <div className="term-bar"><span className="term-dot"></span><span className="term-dot"></span><span className="term-dot"></span><span className="mono text-[11px] text-[#71717a] ml-2">surya@production — zsh</span></div>
              <div className="term-body"><span id="termout"></span><span className="caret"></span></div>
            </div>
            <div className="md:col-span-7 md:pl-4">
              <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
              Saya <span className="text-white font-medium">Surya</span> — Full-Stack Software Engineer yang membangun aplikasi web production untuk e-commerce dan business systems. Saya menangani proses end-to-end mulai dari database design, business logic, frontend, backend/API, authentication, deployment, hingga maintenance. Didukung <span className="text-white">lebih dari 10 tahun</span> pengalaman menjalankan bisnis e-commerce sendiri, saya membangun software yang dirancang untuk menyelesaikan masalah operasional nyata, bukan sekadar demo.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8">
                <a href="#work" className="mag inline-flex items-center justify-center text-center px-6 py-3.5 rounded-full text-sm font-semibold text-[#060607]" style={{background:'var(--lime)'}}>Lihat pekerjaan saya →</a>
                <a href="https://wa.me/6285603324143" className="mag inline-flex items-center justify-center text-center px-6 py-3.5 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">WhatsApp</a>
                <a href="/cv" className="mag inline-flex items-center justify-center text-center px-6 py-3.5 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Download CV</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 border-y border-white/8 marq-wrap">
          <div className="marq mono text-sm text-[#71717a]">
            <span>TypeScript</span><span style={{color:'var(--lime)'}}>✳</span><span>Next.js</span><span style={{color:'var(--lime)'}}>✳</span><span>React</span><span style={{color:'var(--lime)'}}>✳</span><span>Supabase</span><span style={{color:'var(--lime)'}}>✳</span><span>PostgreSQL</span><span style={{color:'var(--lime)'}}>✳</span><span>Tailwind CSS</span><span style={{color:'var(--lime)'}}>✳</span><span>REST API</span><span style={{color:'var(--lime)'}}>✳</span><span>RBAC &amp; RLS</span><span style={{color:'var(--lime)'}}>✳</span><span>Business Automation</span><span style={{color:'var(--lime)'}}>✳</span>
            <span>TypeScript</span><span style={{color:'var(--lime)'}}>✳</span><span>Next.js</span><span style={{color:'var(--lime)'}}>✳</span><span>React</span><span style={{color:'var(--lime)'}}>✳</span><span>Supabase</span><span style={{color:'var(--lime)'}}>✳</span><span>PostgreSQL</span><span style={{color:'var(--lime)'}}>✳</span><span>Tailwind CSS</span><span style={{color:'var(--lime)'}}>✳</span><span>REST API</span><span style={{color:'var(--lime)'}}>✳</span><span>RBAC &amp; RLS</span><span style={{color:'var(--lime)'}}>✳</span><span>Business Automation</span><span style={{color:'var(--lime)'}}>✳</span>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1200px] px-5 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 tile p-8 md:p-10 rv">
              <div className="kicker mb-6">01 / About</div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-6">Dari operator bisnis<br/>menjadi software engineer.</h2>
              <div className="space-y-4 text-[#a1a1aa] leading-relaxed text-[15px]">
                <p className="text-[#f5f5f4] font-medium">Saya membangun software dari masalah nyata yang harus diselesaikan — bukan sekadar dari requirement yang tertulis di dokumen.</p>
                <p>Terbiasa menangani software development secara end-to-end: requirement analysis, system design, database architecture, business logic, frontend, backend/API, third-party integration, authentication, testing, deployment, monitoring, hingga maintenance.</p>
                <p>Telah membangun berbagai production system, termasuk e-commerce platform, product catalog, POS, inventory system, service management, admin CMS, analytics dashboard, financial reporting, dan business automation.</p>
                <p>Sebelum berfokus pada software engineering, saya menjalankan bisnis e-commerce sendiri selama hampir satu dekade (2015–2024) dan mengelola tim hingga 30 karyawan — menangani volume 3.000–4.000 pcs per bulan, termasuk lonjakan hingga 1.000 pesanan tanpa bottleneck di operasional.</p>
                <p>Pengalaman itu membentuk cara saya membangun software. Bukan cuma paham bagaimana sistem bekerja, tapi juga mengapa sistem itu dibutuhkan, bagaimana tim benar-benar memakainya, dan apa dampaknya ke operasional bisnis.</p>
                <p className="text-[#f5f5f4]">Saya membangun software untuk operasional yang benar-benar berjalan — bukan sekadar demo.</p>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-6">
              <div className="tile p-6 rv"><div className="dsp text-4xl md:text-5xl font-extrabold count" data-to="10" data-suffix="+" style={{color:'var(--lime)'}}>0</div><div className="text-xs text-[#a1a1aa] mt-2">tahun pengalaman bisnis e-commerce</div></div>
              <div className="tile p-6 rv"><div className="dsp text-4xl md:text-5xl font-extrabold count" data-to="20" data-suffix="+">0</div><div className="text-xs text-[#a1a1aa] mt-2">production websites</div><div className="text-[10px] text-[#71717a] mt-0.5">dikembangkan dan dikelola</div></div>
              <div className="tile p-6 rv"><div className="dsp text-4xl md:text-5xl font-extrabold count" data-to="30">0</div><div className="text-xs text-[#a1a1aa] mt-2">karyawan pernah dikelola</div></div>
              <div className="tile p-6 rv"><div className="dsp text-4xl md:text-5xl font-extrabold count" data-to="1000" data-sep="1" style={{color:'var(--violet)'}}>0</div><div className="text-xs text-[#a1a1aa] mt-2">pesanan per hari saat lonjakan</div><div className="text-[10px] text-[#71717a] mt-0.5">tanpa bottleneck operasional</div></div>
              <div className="tile col-span-2 p-6 rv">
                <div className="kicker mb-3">Workflow</div>
                <p className="mono text-[11px] leading-loose text-[#a1a1aa]">Requirement → Planning → System Design → Development → API Integration → Testing → Debugging → Security Validation → Deployment → Monitoring → Maintenance</p>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-[1200px] px-5 pb-24 md:pb-32">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="kicker mb-4">02 / Technical Skills</div>
              <h2 className="text-4xl md:text-6xl font-bold">Stack<span style={{color:'var(--lime)'}}>.</span></h2>
            </div>
            <p className="text-sm text-[#71717a] max-w-xs">Dipakai harian di production, bukan cuma di tutorial.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="tile p-7 rv"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/languages</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">TypeScript</span><span className="chip">JavaScript</span><span className="chip">HTML</span><span className="chip">CSS</span></div></div>
            <div className="tile p-7 rv"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/frontend</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">React</span><span className="chip">Next.js</span><span className="chip">Tailwind CSS</span><span className="chip">shadcn/ui</span><span className="chip">Framer Motion</span><span className="chip">Recharts</span></div></div>
            <div className="tile p-7 rv"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/backend</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">API Routes</span><span className="chip">REST API</span><span className="chip">Business Logic</span><span className="chip">Server-Side Validation</span><span className="chip">CRUD</span><span className="chip">Data Pipeline</span></div></div>
            <div className="tile p-7 rv"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/database</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">PostgreSQL</span><span className="chip">Supabase</span><span className="chip">Database Design</span><span className="chip">Query Design</span><span className="chip">RLS</span></div></div>
            <div className="tile p-7 rv"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/auth &amp; security</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">Supabase Auth</span><span className="chip">RBAC</span><span className="chip">Middleware Protection</span><span className="chip">Access Management</span></div></div>
            <div className="tile p-7 rv"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/integrations</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">J&amp;T Express API</span><span className="chip">RajaOngkir API</span><span className="chip">Fonnte WhatsApp API</span><span className="chip">Excel Processing</span></div></div>
            <div className="tile p-7 rv lg:col-span-3"><div className="mono text-[11px]" style={{color:'var(--lime)'}}>/tools &amp; deployment</div><div className="flex flex-wrap gap-2 mt-4"><span className="chip">Git</span><span className="chip">GitHub</span><span className="chip">Vercel</span><span className="chip">GitHub Actions</span><span className="chip">@react-pdf/renderer</span><span className="chip">SheetJS (xlsx)</span><span className="chip">Cloudinary</span></div></div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1200px] px-5 pb-24 md:pb-32">
          <div className="kicker mb-4">03 / Selected Projects</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-14">Yang sudah<br/>saya bangun<span style={{color:'var(--lime)'}}>.</span></h2>

          <div className="grid md:grid-cols-6 gap-5">
            <article className="tile p-8 md:p-10 md:col-span-6 rv">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="mono text-[11px] text-[#71717a] mb-2">2026 · Freelance / Client Project</div>
                  <h3 className="text-2xl md:text-4xl font-bold">SAMAQU — E-Commerce &amp; Business System</h3>
                </div>
                <a href="/samaqu" className="chip" style={{color:'var(--lime)',borderColor:'rgba(217,242,74,.35)'}}>Baca case study ↗</a>
              </div>
              <p className="text-[15px] text-[#a1a1aa] mt-5 max-w-3xl">Website e-commerce brand menswear muslim: catalog system, custom pricing, checkout, admin panel, payment workflow, dan courier integration.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-2.5 text-sm text-[#a1a1aa]">
                <li>— Product catalog bertingkat: jenis kain, warna, dan series.</li>
                <li>— Fitur Create Your Price dari product page hingga cart, checkout, dan admin order detail.</li>
                <li>— Custom checkout: manual transfer, upload bukti pembayaran, voucher, payment settings.</li>
                <li>— Admin panel untuk CRUD produk dan testimoni.</li>
                <li>— Integrasi J&amp;T Express API: tariff check, order, cancellation, tracking.</li>
                <li>— Integrasi RajaOngkir API V2: ongkir, district mapping, caching, server-side verification.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-7"><span className="chip">E-Commerce</span><span className="chip">Catalog System</span><span className="chip">Custom Pricing</span><span className="chip">REST API</span><span className="chip">Multi-Courier</span></div>
            </article>

            <article className="tile p-8 md:p-10 md:col-span-6 rv">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="mono text-[11px] text-[#71717a] mb-2">2026 · Client Project · Production</div>
                  <h3 className="text-2xl md:text-4xl font-bold">Erlangga Rental Mobil — Booking &amp; Operations</h3>
                </div>
                <a href="/erlangga-rental" className="chip" style={{color:'var(--lime)',borderColor:'rgba(217,242,74,.35)'}}>Baca case study ↗</a>
              </div>
              <p className="text-[15px] text-[#a1a1aa] mt-5 max-w-3xl">Satu aplikasi untuk seluruh operasional rental mobil: booking dan kontrak sewa, armada, pelanggan, pembayaran, sampai laporan keuangan. Mobile-first, dipakai langsung dari HP di lapangan sebagai PWA.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-2.5 text-sm text-[#a1a1aa]">
                <li>— Scan KTP otomatis via OCR: NIK, nama, dan alamat terisi sendiri tanpa ketik ulang.</li>
                <li>— Blacklist otomatis: sistem memperingatkan saat NIK bermasalah muncul di form booking.</li>
                <li>— Booking dengan durasi dan total biaya terhitung otomatis dari tarif unit.</li>
                <li>— Denda keterlambatan per jam dihitung otomatis saat pengembalian.</li>
                <li>— Nota thermal 80mm dan PDF, plus halaman QRIS untuk pembayaran cashless.</li>
                <li>— Laporan bulanan, tahunan, dan pengeluaran dengan zona waktu terkunci Asia/Jakarta.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-7"><span className="chip">Next.js 15</span><span className="chip">OCR KTP</span><span className="chip">PWA</span><span className="chip">Thermal Print</span><span className="chip">RLS</span><span className="chip">GitHub Actions CI</span></div>
            </article>

            <article className="tile p-8 md:col-span-3 rv">
              <div className="mono text-[11px] text-[#71717a] mb-2">2026 · Institutional</div>
              <h3 className="text-2xl font-bold">Dashboard Registrasi Mahasiswa — UT Majene</h3>
              <p className="text-sm text-[#a1a1aa] mt-4">Mengubah data Excel menjadi data pipeline, analytics dashboard, dan reporting system berbasis web.</p>
              <ul className="mt-5 space-y-2 text-sm text-[#a1a1aa]">
                <li>— Pipeline Excel → database → dashboard (upload, parsing, transformation, PostgreSQL via Supabase).</li>
                <li>— Dashboard admisi, pembayaran, registrasi, realisasi mahasiswa baru, performa SALUT.</li>
                <li>— Modul Data SALUT, Ranking SALUT, Data Table, Charts and Analytics, Reports.</li>
                <li>— Filtering, export Excel/PDF, dan print functionality.</li>
                <li>— Supabase Auth, role-based access admin/viewer, middleware protection, RLS.</li>
                <li>— Recharts untuk visualisasi, SheetJS untuk export Excel.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6"><a href="/ut-majene" className="chip" style={{color:'var(--lime)',borderColor:'rgba(217,242,74,.35)'}}>Baca case study ↗</a><span className="chip">Data Pipeline</span><span className="chip">Analytics</span><span className="chip">RBAC</span><span className="chip">RLS</span></div>
            </article>

            <article className="tile p-8 md:col-span-3 rv">
              <div className="mono text-[11px] text-[#71717a] mb-2">2026 · Brand Project</div>
              <h3 className="text-2xl font-bold">Eira Project — Fantasy Jersey E-Commerce</h3>
              <p className="text-sm text-[#a1a1aa] mt-4">E-commerce brand jersey fantasy dengan product catalog custom dan order flow langsung lewat WhatsApp.</p>
              <ul className="mt-5 space-y-2 text-sm text-[#a1a1aa]">
                <li>— Landing page, hero section, brand presentation, product collection showcase.</li>
                <li>— Product catalog Supabase: nama, harga, series, status Available/SOLD OUT.</li>
                <li>— Product detail page dan admin panel dengan authentication serta CRUD.</li>
                <li>— Order flow via WhatsApp CTA dan integrasi Instagram.</li>
                <li>— Responsive UI dan animation dengan Tailwind CSS, shadcn/ui, Framer Motion.</li>
                <li>— Deployment Vercel dengan PostgreSQL via Supabase.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6"><span className="chip">Next.js 16</span><span className="chip">React 19</span><span className="chip">Supabase</span><span className="chip">Vercel</span></div>
            </article>

            <article className="tile p-8 md:col-span-3 rv">
              <div className="mono text-[11px] text-[#71717a] mb-2">2026 · Software Engineering Project</div>
              <h3 className="text-2xl font-bold">Laptop Store Management System</h3>
              <p className="text-sm text-[#a1a1aa] mt-4">POS dan business management: service, laptop sales, sparepart, purchasing, inventory, invoicing, dan financial reporting dalam satu dashboard.</p>
              <ul className="mt-5 space-y-2 text-sm text-[#a1a1aa]">
                <li>— Analytics dashboard: omzet, profit, operational expenses, monthly sales trends, profit per category, top products, top customers.</li>
                <li>— Service management: status tracking, stock deduction otomatis, PDF service note, WhatsApp notification.</li>
                <li>— Laptop sales dengan multi-item cart, down payment, warranty, bonus.</li>
                <li>— Inventory sparepart &amp; unit: stock mutation, adjustment, low-stock alert.</li>
                <li>— Purchase management multi-item, automatic receipt number, PDF receipt, cancellation dengan stock rollback.</li>
                <li>— Financial reporting harian, bulanan, tahunan serta profit and loss detail.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6"><a href="/laptop-store" className="chip" style={{color:'var(--lime)',borderColor:'rgba(217,242,74,.35)'}}>Baca case study ↗</a><span className="chip">POS</span><span className="chip">Inventory</span><span className="chip">Recharts</span><span className="chip">@react-pdf/renderer</span></div>
            </article>

            <article className="tile p-8 md:col-span-3 rv">
              <div className="mono text-[11px] text-[#71717a] mb-2">2026 · Client Project</div>
              <h3 className="text-2xl font-bold">Warung Efge — POS &amp; Inventory</h3>
              <p className="text-sm text-[#a1a1aa] mt-4">Sistem kasir digital all-in-one untuk UMKM: transaksi, inventory, purchasing, customer debt, supplier debt, reporting, dan user access management.</p>
              <ul className="mt-5 space-y-2 text-sm text-[#a1a1aa]">
                <li>— POS dengan barcode scanning dan pembayaran tunai, QRIS, transfer, EDC, serta bon/hutang.</li>
                <li>— Product &amp; inventory multi-unit, kategori, harga grosir/eceran, stock tracking, low-stock/expired alert.</li>
                <li>— Customer debt, supplier purchasing, supplier debt, sales reports, PDF thermal receipt.</li>
                <li>— Multi-user role management: Owner, Admin, Kasir.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6"><span className="chip">POS</span><span className="chip">Debt Management</span><span className="chip">RBAC</span></div>
            </article>

            <article className="tile p-8 md:p-10 md:col-span-6 rv">
              <div className="mono text-[11px] text-[#71717a] mb-2">2026 – Present</div>
              <h3 className="text-2xl md:text-3xl font-bold">Game Top-Up Platform Network — 20 website</h3>
              <p className="text-[15px] text-[#a1a1aa] mt-4 max-w-3xl">Network 20 website top-up game dengan reusable architecture, admin systems, product management, dan brand identity berbeda pada setiap domain.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-2.5 text-sm text-[#a1a1aa]">
                <li>— Full admin panel Noryxa Digital: categories, pricing, ranking, tags, orders, nominal, payments, promo, settings, authentication, profiles.</li>
                <li>— Landing page dan catalog Mobile Games serta PC Games dengan product tagging promo, instant, popular.</li>
                <li>— Multi-site structure dengan reusable components, UI dan brand identity tetap berbeda.</li>
                <li>— Full-stack development, Supabase Auth, product systems, admin CMS, operational tooling.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-7"><span className="chip">Multi-Site Platform</span><span className="chip">Admin CMS</span><span className="chip">Supabase Auth</span></div>
            </article>
          </div>
        </section>

        <section id="exp" className="mx-auto max-w-[1200px] px-5 pb-24 md:pb-32">
          <div className="kicker mb-4">04 / Experience</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Perjalanan kerja<span style={{color:'var(--lime)'}}>.</span></h2>

          <div className="border-b border-white/9">
            <div className="row rv">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 mono text-xs text-[#71717a] pt-1">2026 — Present</div>
                <div className="md:col-span-8">
                  <h3 className="text-xl md:text-2xl font-bold">OOS Solutions <span className="text-[#71717a] font-normal text-base">· Software Engineer (Coding Partner)</span></h3>
                  <p className="text-sm text-[#a1a1aa] mt-2">Pengembangan software untuk brand dan client di bawah OOS Solutions: implementation, maintenance, technical improvement, coding delivery.</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#71717a]">
                    <li>— Mengembangkan dan memelihara OOS SHOP, platform jasa instalasi plugin WordPress dan custom website untuk klien UMKM.</li>
                    <li>— Mengembangkan serta memelihara NexaPlus, digital agency untuk tools AI dan jasa web bagi UMKM Indonesia.</li>
                    <li>— Mengelola structured data serta SEO, GEO, dan AEO audit untuk website client.</li>
                    <li>— Terlibat dalam pengembangan game project untuk client dengan menangani bagian coding.</li>
                  </ul>
                </div>
                <div className="md:col-span-1 arrow text-right" style={{color:'var(--lime)'}}>↗</div>
              </div>
            </div>

            <div className="row rv">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 mono text-xs text-[#71717a] pt-1">2026 — Present</div>
                <div className="md:col-span-8">
                  <h3 className="text-xl md:text-2xl font-bold">TNT Sport Apparel <span className="text-[#71717a] font-normal text-base">· Software Engineer &amp; Marketplace Specialist</span></h3>
                  <p className="text-sm text-[#a1a1aa] mt-2">Awalnya mengembangkan website e-commerce dan katalog sebagai client project, kemudian melanjutkan sebagai bagian dari internal team untuk menangani software development, marketplace, landing page, dan web maintenance.</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#71717a]">
                    <li>— Membangun website e-commerce dan katalog dari nol dengan 10 kategori produk serta landing page khusus untuk setiap kategori.</li>
                    <li>— Mengembangkan customer order flow, product catalog, dan integrasi komunikasi melalui WhatsApp.</li>
                    <li>— Membangun order tracking system dengan 11 tahap produksi serta admin dashboard untuk monitoring status order.</li>
                    <li>— Mengembangkan automated WhatsApp notification menggunakan Fonnte WhatsApp API berdasarkan perubahan status produksi.</li>
                    <li>— Menambahkan scheduled deadline reminder H-3, H-2, dan H-1 menggunakan GitHub Actions cron job.</li>
                    <li>— Membangun dashboard pembukuan untuk omzet, HPP, biaya, net profit, tren penjualan, dan produk terlaris.</li>
                    <li>— Mengembangkan serta memelihara business logic, landing page, responsive UI, dan sistem operasional web.</li>
                  </ul>
                  <p className="mono text-[11px] text-[#71717a] mt-3">Focus: Full-Stack Development · E-Commerce · Order Tracking · REST/API Integration · WhatsApp Automation · Dashboard</p>
                </div>
                <div className="md:col-span-1 arrow text-right" style={{color:'var(--lime)'}}>↗</div>
              </div>
            </div>

            <div className="row rv">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 mono text-xs text-[#71717a] pt-1">2026 — Present</div>
                <div className="md:col-span-8">
                  <h3 className="text-xl md:text-2xl font-bold">Freelance <span className="text-[#71717a] font-normal text-base">· Web &amp; Software Development</span></h3>
                  <p className="text-sm text-[#a1a1aa] mt-2">Proyek client-based paralel: requirement analysis, development, database design, API integration, testing, deployment, production maintenance.</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#71717a]">
                    <li>— Aplikasi rental mobil dan kebutuhan PWA untuk Erlangga Rental Mobil.</li>
                    <li>— Platform tour and travel untuk Octafkreasi.</li>
                    <li>— Sistem POS dan inventory untuk Warung Efge.</li>
                    <li>— Laptop store POS dan business management system.</li>
                    <li>— Aplikasi POS toko sembako menggunakan vanilla JavaScript.</li>
                  </ul>
                </div>
                <div className="md:col-span-1 arrow text-right" style={{color:'var(--lime)'}}>↗</div>
              </div>
            </div>

            <div className="row rv">
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 mono text-xs text-[#71717a] pt-1">2015 — 2025</div>
                <div className="md:col-span-8">
                  <h3 className="text-xl md:text-2xl font-bold">Chemz Shop <span className="text-[#71717a] font-normal text-base">· Founder &amp; Business Owner</span></h3>
                  <p className="text-sm text-[#a1a1aa] mt-2">Menjalankan bisnis e-commerce dari nol hingga 2025: sistem operasional, tim hingga 30 karyawan, volume hingga 1.000 pesanan per hari tanpa bottleneck.</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#71717a]">
                    <li>— Internal dashboard untuk tracking return, packing, dan operasional harian.</li>
                    <li>— Struktur tim berbasis spesialisasi dengan pemahaman alur bisnis end-to-end.</li>
                    <li>— Sistem kerja yang dapat berjalan tanpa pengawasan konstan.</li>
                    <li>— Operasional dengan omzet stabil pada kisaran Rp150–200 juta per bulan.</li>
                  </ul>
                </div>
                <div className="md:col-span-1 arrow text-right" style={{color:'var(--lime)'}}>↗</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-24 md:pb-32 grid md:grid-cols-2 gap-5">
          <div className="tile p-8 rv">
            <div className="kicker mb-5">API &amp; Automation</div>
            <ul className="space-y-2.5 text-sm text-[#a1a1aa]">
              <li>— J&amp;T Express API: tariff check, order, cancellation, tracking, area mapping, production coordination.</li>
              <li>— RajaOngkir API V2: shipping calculation, district mapping, caching, server-side verification.</li>
              <li>— Fonnte WhatsApp API: automated status notification dan deadline reminder.</li>
              <li>— GitHub Actions cron job untuk scheduled automation.</li>
              <li>— Excel → PostgreSQL data pipeline dengan SheetJS dan Supabase.</li>
            </ul>
          </div>
          <div className="tile p-8 rv">
            <div className="kicker mb-5">Education &amp; Approach</div>
            <p className="text-sm text-[#a1a1aa]"><span className="text-white font-medium">Formal:</span> Sekolah Menengah Pertama (SMP).</p>
            <p className="text-sm text-[#a1a1aa] mt-4"><span className="text-white font-medium">Professional Development:</span> Self-taught Full-Stack Software Engineering melalui pengalaman hands-on mengembangkan aplikasi web production, e-commerce, POS, business system, API integration, database, deployment, dan automation.</p>
            <p className="text-sm text-[#a1a1aa] mt-4"><span className="text-white font-medium">AI-Assisted Development:</span> Menggunakan AI coding tools untuk mempercepat implementation dan exploration, dengan tetap mengambil keputusan arsitektur, code review, testing, debugging, security validation, deployment, dan bertanggung jawab penuh atas hasil akhir.</p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1200px] px-4 sm:px-5 pb-24">
          <div className="tile p-6 sm:p-10 md:p-16 text-center rv">
            <div className="kicker mb-4">Open to selected projects</div>
            <div className="mono text-[11px] tracking-[.18em] mb-5" style={{color:'var(--lime)'}}>LET'S BUILD SOMETHING USEFUL</div>
            <h2 className="cta-title font-extrabold">Punya sistem<br/><span className="outline-word">yang ingin dibangun?</span></h2>
            <p className="mt-8 text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">Ceritakan kebutuhan atau tantangan bisnis Anda. Saya siap membantu menerjemahkannya menjadi solusi software yang terstruktur, production-ready, dan mudah dikembangkan.</p>
            <p className="mt-4 text-[#71717a] max-w-xl mx-auto text-sm">Available for full-time roles, freelance projects, and selected client collaborations.</p>
            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3">
              <a href="https://wa.me/6285603324143?text=Halo%20Surya%2C%20saya%20tertarik%20mendiskusikan%20project%20software%20dengan%20Anda." target="_blank" rel="noopener noreferrer" aria-label="Start a conversation via WhatsApp" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-[#060607] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9f24a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060607]" style={{background:'var(--lime)'}}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start a Conversation
              </a>
              <a href="mailto:ersetdigital@gmail.com" aria-label="Send an email to Surya" className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060607]">Send an Email</a>
              <a href="https://github.com/ersetdigital-sudo" target="_blank" rel="noopener noreferrer" aria-label="View Surya's GitHub profile" className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060607]">View GitHub ↗</a>
            </div>
            <p className="mt-8 mono text-[11px] text-[#71717a]">Production systems · Business-focused engineering · End-to-end ownership</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto max-w-[1200px] px-5 flex flex-col sm:flex-row gap-2 justify-between mono text-[11px] text-[#71717a]">
          <span>© 2026 Surya — Full-Stack Software Engineer</span>
          <span>Built for real operations, not just demos.</span>
        </div>
      </footer>
    </>
  )
}
