import Head from 'next/head'

export default function CV() {
  return (
    <>
      <Head>
        <title>CV — Surya · Full-Stack Software Engineer</title>
        <meta name="description" content="CV satu halaman Surya — Full-Stack Software Engineer. TypeScript, Next.js, React, Supabase/PostgreSQL, REST API, business systems." />
        <style>{`
          .sheet{max-width:900px;margin:0 auto}
          .cvline{border-top:1px solid var(--line);padding-top:.55rem;margin-top:.55rem}
          .lbl{font-family:"Geist Mono",monospace;font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:var(--dim)}
          .cv-h2{font-family:"Bricolage Grotesque",sans-serif;font-weight:700;font-size:.86rem;letter-spacing:.01em;
            border-bottom:2px solid var(--lime);display:inline-block;padding-bottom:.15rem;margin-bottom:.6rem}

          @media print{
            @page{size:A4;margin:11mm 12mm}
            .no-print{display:none !important}
            .aurora,.noise{display:none !important}
            html,body{background:#fff !important;color:#111 !important}
            .sheet{max-width:none}
            h1,h2,h3,strong,.cv-h2{color:#000 !important}
            .lbl{color:#666 !important}
            p,li,span,div{color:#2a2a2a !important}
            .cv-h2{border-bottom:2px solid #111 !important}
            .cvline{border-top:1px solid #d4d4d4 !important}
            .chip{border:1px solid #c9c9c9 !important;color:#333 !important;padding:.08rem .38rem !important;font-size:6.4pt !important;border-radius:3px}
            a{color:#111 !important}
            body{font-size:8.1pt;line-height:1.32}
            .cv-name{font-size:25pt !important}
            .cv-role{font-size:9pt !important}
            .cv-h2{font-size:8.4pt}
            .tiny{font-size:7.2pt}
            .pgap{margin-bottom:7pt !important}
            .accent{color:#111 !important}
          }
        `}</style>
      </Head>

      <header className="sticky top-0 z-50 no-print">
        <div className="mx-auto max-w-[1100px] px-5 pt-4">
          <div className="glass rounded-full h-14 px-5 flex items-center justify-between">
            <span className="text-[13px] text-[#a1a1aa] hidden sm:block">Tekan tombol → lalu pilih “Save as PDF”</span>
            <button onClick={() => window.print()} className="ml-auto text-[13px] font-medium px-4 py-2 rounded-full text-[#060607]" style={{background:'var(--lime)'}}>↓ Download PDF</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-5 py-12 print:py-0 print:px-0">
        <div className="sheet">

          <div className="flex flex-wrap items-end justify-between gap-4 pgap">
            <div>
              <h1 className="cv-name text-5xl font-extrabold">SURYA</h1>
              <p className="cv-role text-base mt-1" style={{color:'var(--lime)'}}><span className="accent">Full-Stack Software Engineer</span></p>
              <p className="tiny text-xs text-[#a1a1aa] mt-1">TypeScript · Next.js · React · Supabase/PostgreSQL · REST API · Business Systems</p>
            </div>
            <div className="tiny text-xs text-[#a1a1aa] mono leading-relaxed sm:text-right">
              085603324143<br/>
              ersetdigital@gmail.com<br/>
              github.com/ersetdigital-sudo
            </div>
          </div>

          <section className="pgap mt-6">
            <div className="cv-h2">PROFESSIONAL SUMMARY</div>
            <p className="text-[13px] text-[#a1a1aa] leading-relaxed">
              Full-Stack Software Engineer dengan pengalaman hands-on mengembangkan aplikasi web production, didukung lebih dari 10 tahun pengalaman membangun dan mengelola bisnis e-commerce. Terbiasa menangani proses end-to-end: requirement analysis, system design, database design, business logic, frontend, backend/API, third-party integration, authentication, testing, deployment, monitoring, dan maintenance. Pengalaman sebagai founder dengan tim hingga 30 karyawan serta volume hingga 1.000 pesanan per hari memperkuat kemampuan memahami masalah bisnis, mengurangi pekerjaan manual, dan membangun sistem yang mendukung operasional nyata.
            </p>
          </section>

          <section className="pgap mt-6">
            <div className="cv-h2">TECHNICAL SKILLS</div>
            <div className="grid sm:grid-cols-2 gap-x-8">
              <div>
                <div className="cvline"><span className="lbl">Languages</span><p className="text-[12.5px] text-[#a1a1aa]">TypeScript · JavaScript · HTML · CSS</p></div>
                <div className="cvline"><span className="lbl">Frontend</span><p className="text-[12.5px] text-[#a1a1aa]">React · Next.js · Tailwind CSS · shadcn/ui · Framer Motion · Recharts</p></div>
                <div className="cvline"><span className="lbl">Backend &amp; Architecture</span><p className="text-[12.5px] text-[#a1a1aa]">Next.js API Routes · REST API · Business Logic · Server-Side Validation · CRUD · Data Pipeline</p></div>
                <div className="cvline"><span className="lbl">Database</span><p className="text-[12.5px] text-[#a1a1aa]">PostgreSQL · Supabase · Database Design · Query Design · Row Level Security (RLS)</p></div>
              </div>
              <div>
                <div className="cvline"><span className="lbl">Auth &amp; Security</span><p className="text-[12.5px] text-[#a1a1aa]">Supabase Auth · RBAC · Middleware Protection · Access Management</p></div>
                <div className="cvline"><span className="lbl">Integrations</span><p className="text-[12.5px] text-[#a1a1aa]">J&amp;T Express API · RajaOngkir API · Fonnte WhatsApp API · WhatsApp Integration · Excel Processing</p></div>
                <div className="cvline"><span className="lbl">Tools &amp; Deployment</span><p className="text-[12.5px] text-[#a1a1aa]">Git · GitHub · Vercel · GitHub Actions · @react-pdf/renderer · SheetJS (xlsx) · Cloudinary</p></div>
                <div className="cvline"><span className="lbl">Automation</span><p className="text-[12.5px] text-[#a1a1aa]">Automated WhatsApp notification · GitHub Actions cron job · Excel → PostgreSQL pipeline</p></div>
              </div>
            </div>
          </section>

          <section className="pgap mt-6">
            <div className="cv-h2">PROFESSIONAL EXPERIENCE</div>

            <div className="cvline">
              <div className="flex flex-wrap justify-between gap-2">
                <strong className="text-[13.5px]">OOS Solutions — Software Engineer (Coding Partner)</strong>
                <span className="mono tiny text-xs text-[#71717a]">2026 – Present</span>
              </div>
              <ul className="text-[12.5px] text-[#a1a1aa] mt-1 space-y-0.5">
                <li>— OOS SHOP: platform jasa instalasi plugin WordPress dan custom website untuk klien UMKM.</li>
                <li>— NexaPlus: digital agency untuk tools AI dan jasa web bagi UMKM Indonesia.</li>
                <li>— Structured data serta SEO, GEO, dan AEO audit untuk website client; coding pada game project client.</li>
              </ul>
            </div>

            <div className="cvline">
              <div className="flex flex-wrap justify-between gap-2">
                <strong className="text-[13.5px]">TNT Sport Apparel — Software Engineer &amp; Marketplace Specialist</strong>
                <span className="mono tiny text-xs text-[#71717a]">2026 – Present</span>
              </div>
              <ul className="text-[12.5px] text-[#a1a1aa] mt-1 space-y-0.5">
                <li>— Website e-commerce dan katalog dari nol dengan 10 kategori produk serta landing page khusus tiap kategori.</li>
                <li>— Customer order flow, product catalog, dan integrasi komunikasi melalui WhatsApp.</li>
                <li>— Order tracking system dengan 11 tahap produksi serta admin dashboard monitoring status order.</li>
                <li>— Automated WhatsApp notification (Fonnte WhatsApp API) berdasarkan perubahan status produksi.</li>
                <li>— Scheduled deadline reminder H-3, H-2, H-1 via GitHub Actions cron job.</li>
                <li>— Dashboard pembukuan: omzet, HPP, biaya, net profit, tren penjualan, dan produk terlaris.</li>
              </ul>
              <p className="text-[12.5px] text-[#71717a] mt-1 mono tiny">Focus: Full-Stack Development · E-Commerce · Order Tracking · REST/API Integration · WhatsApp Automation · Dashboard</p>
            </div>

            <div className="cvline">
              <div className="flex flex-wrap justify-between gap-2">
                <strong className="text-[13.5px]">Freelance Web &amp; Software Development</strong>
                <span className="mono tiny text-xs text-[#71717a]">2026 – Present</span>
              </div>
              <ul className="text-[12.5px] text-[#a1a1aa] mt-1 space-y-0.5">
                <li>— Aplikasi rental mobil dan kebutuhan PWA (Erlangga Rental Mobil); platform tour and travel (Octafkreasi).</li>
                <li>— Sistem POS dan inventory (Warung Efge); laptop store POS dan business management system.</li>
                <li>— Aplikasi POS toko sembako menggunakan vanilla JavaScript.</li>
              </ul>
            </div>

            <div className="cvline">
              <div className="flex flex-wrap justify-between gap-2">
                <strong className="text-[13.5px]">Chemz Shop — Founder &amp; Business Owner</strong>
                <span className="mono tiny text-xs text-[#71717a]">2015 – 2025</span>
              </div>
              <ul className="text-[12.5px] text-[#a1a1aa] mt-1 space-y-0.5">
                <li>— Bisnis e-commerce dari nol hingga 2025: tim hingga 30 karyawan, hingga 1.000 pesanan/bulan tanpa bottleneck.</li>
                <li>— Internal dashboard untuk tracking return, packing, dan operasional harian; omzet stabil Rp150–200 juta/bulan.</li>
              </ul>
            </div>
          </section>

          <section className="pgap mt-6">
            <div className="cv-h2">SELECTED PROJECTS</div>
            <div className="cvline">
              <strong className="text-[13.5px]">SAMAQU — E-Commerce &amp; Business System</strong> <span className="mono tiny text-xs text-[#71717a]">· 2026</span>
              <p className="text-[12.5px] text-[#a1a1aa]">Catalog bertingkat (kain/warna/series), fitur Create Your Price, custom checkout dengan bukti transfer &amp; voucher, admin panel CRUD, integrasi J&amp;T Express API dan RajaOngkir API V2 (district mapping, caching, server-side verification).</p>
            </div>
            <div className="cvline">
              <strong className="text-[13.5px]">Dashboard Monitoring Registrasi Mahasiswa — UT Majene</strong> <span className="mono tiny text-xs text-[#71717a]">· 2026</span>
              <p className="text-[12.5px] text-[#a1a1aa]">Pipeline Excel → PostgreSQL (Supabase) → analytics dashboard; modul Data/Ranking SALUT, Charts and Analytics, Reports; filtering, export Excel/PDF, print; Supabase Auth, RBAC admin/viewer, middleware protection, RLS.</p>
            </div>
            <div className="cvline">
              <strong className="text-[13.5px]">Erlangga Rental Mobil — Rental Management System</strong> <span className="mono tiny text-xs text-[#71717a]">· 2026 · Production</span>
              <p className="text-[12.5px] text-[#a1a1aa]">Booking &amp; kontrak sewa, manajemen armada dan pelanggan dengan scan KTP via OCR (OCR.space + Cloudinary), blacklist otomatis, denda keterlambatan otomatis, pembayaran dengan nota thermal 80mm &amp; PDF, QRIS, pengeluaran operasional, laporan bulanan/tahunan (timezone-safe Asia/Jakarta). Next.js 15, React 19, Supabase Auth + RLS, PWA, GitHub Actions CI.</p>
            </div>
            <div className="cvline">
              <strong className="text-[13.5px]">Laptop Store Management System</strong> <span className="mono tiny text-xs text-[#71717a]">· 2026</span>
              <p className="text-[12.5px] text-[#a1a1aa]">POS &amp; business management: service tracking dengan stock deduction otomatis, laptop sales, inventory, purchasing dengan stock rollback, invoicing, financial reporting, PDF via @react-pdf/renderer.</p>
            </div>
            <div className="cvline">
              <strong className="text-[13.5px]">Game Top-Up Platform Network</strong> <span className="mono tiny text-xs text-[#71717a]">· 2026 – Present</span>
              <p className="text-[12.5px] text-[#a1a1aa]">Network 20 website top-up game dengan reusable architecture; full admin panel Noryxa Digital (categories, pricing, ranking, tags, orders, payments, promo, settings, auth) dan catalog Mobile/PC Games.</p>
            </div>
            <div className="cvline">
              <strong className="text-[13.5px]">Eira Project — Fantasy Jersey E-Commerce</strong> &amp; <strong className="text-[13.5px]">Warung Efge — POS &amp; Inventory</strong> <span className="mono tiny text-xs text-[#71717a]">· 2026</span>
              <p className="text-[12.5px] text-[#a1a1aa]">Eira: catalog Supabase, admin panel dengan auth, order flow via WhatsApp, Next.js 16/React 19/Framer Motion/Vercel. Warung Efge: POS barcode, pembayaran tunai/QRIS/transfer/EDC/bon, debt management, PDF thermal receipt, role Owner/Admin/Kasir.</p>
            </div>
          </section>

          <section className="mt-6">
            <div className="cv-h2">EDUCATION &amp; WORKFLOW</div>
            <div className="cvline">
              <p className="text-[12.5px] text-[#a1a1aa]"><strong className="text-white">Formal:</strong> Sekolah Menengah Pertama (SMP). <strong className="text-white">Professional Development:</strong> Self-taught Full-Stack Software Engineering melalui pengalaman hands-on mengembangkan aplikasi web production, e-commerce, POS, business system, API integration, database, deployment, dan automation.</p>
              <p className="text-[12.5px] text-[#a1a1aa] mt-1 mono tiny">Requirement Analysis → Planning → System Design → Development → API Integration → Testing → Debugging → Security Validation → Deployment → Production Monitoring → Maintenance</p>
              <p className="text-[12.5px] text-[#a1a1aa] mt-1"><strong className="text-white">Work Type:</strong> Full-time · Freelance · Client Projects.</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="no-print border-t border-white/8 py-8 mt-10">
        <div className="mx-auto max-w-[1100px] px-5 flex flex-col sm:flex-row gap-2 justify-between mono text-[11px] text-[#71717a]">
          <span>© 2026 Surya — Full-Stack Software Engineer</span>
          <a href="/" className="hover:text-white transition">← kembali ke beranda</a>
        </div>
      </footer>
    </>
  )
}
