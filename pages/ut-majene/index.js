import CaseShell from '../../components/CaseShell'

export default function UtMajene() {
  return (
    <CaseShell
      title="Dashboard Registrasi Mahasiswa UT Majene — Case Study · Surya"
      description="Studi kasus dashboard monitoring registrasi mahasiswa UT Majene: pipeline Excel ke PostgreSQL via Supabase, analytics dashboard, reporting, RBAC dan Row Level Security."
    >
      <section className="pt-16 md:pt-24 pb-14">
        <div className="kicker mb-6">Case Study · 2026 · Client / Institutional Project</div>
        <h1 className="text-[9vw] md:text-[5rem] font-extrabold leading-[.92]">Dashboard Registrasi<br/><span className="outline-word">Mahasiswa — UT Majene</span></h1>
        <p className="mt-7 text-lg md:text-2xl text-[#a1a1aa] max-w-3xl leading-snug">
          Dashboard monitoring registrasi mahasiswa yang mengubah data Excel menjadi data pipeline,
          analytics dashboard, dan reporting system berbasis web.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <span className="chip">Data Pipeline</span><span className="chip">Analytics Dashboard</span><span className="chip">Supabase/PostgreSQL</span><span className="chip">RBAC</span><span className="chip">RLS</span><span className="chip">Reporting</span>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-5 pb-20">
        <div className="tile tile-static p-6"><div className="kicker mb-2">Peran</div><p className="text-sm text-[#f5f5f4]">Full-Stack Developer (solo)</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tahun</div><p className="text-sm text-[#f5f5f4]">2026 — production &amp; maintenance</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tipe</div><p className="text-sm text-[#f5f5f4]">Client / Institutional</p></div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Konteks<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 space-y-4 text-[#a1a1aa] leading-relaxed">
          <p>Data registrasi mahasiswa awalnya hidup di file Excel. Untuk monitoring — admisi, pembayaran, registrasi, realisasi mahasiswa baru, dan performa SALUT — data itu perlu jadi sesuatu yang bisa dibaca cepat, difilter, dan diekspor, bukan dibuka satu-satu per file.</p>
          <p>Solusinya adalah mengubah alurnya menjadi pipeline: upload → parsing → transformation → PostgreSQL → dashboard, dengan akses yang dibedakan antara admin dan viewer.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Alur data<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="step"><div className="mono text-xs" style={{color:'var(--lime)'}}>01 — Upload</div><p className="text-sm text-[#a1a1aa] mt-1">File Excel diunggah lewat aplikasi, diproses dengan SheetJS.</p></div>
          <div className="step"><div className="mono text-xs" style={{color:'var(--lime)'}}>02 — Parsing &amp; transformation</div><p className="text-sm text-[#a1a1aa] mt-1">Data dibersihkan dan dipetakan ke struktur tabel yang konsisten.</p></div>
          <div className="step"><div className="mono text-xs" style={{color:'var(--lime)'}}>03 — PostgreSQL via Supabase</div><p className="text-sm text-[#a1a1aa] mt-1">Disimpan sebagai sumber data tunggal untuk seluruh modul.</p></div>
          <div className="step"><div className="mono text-xs" style={{color:'var(--lime)'}}>04 — Dashboard &amp; reports</div><p className="text-sm text-[#a1a1aa] mt-1">Visualisasi dengan Recharts, plus filtering, export Excel/PDF, dan print.</p></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Modul<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="feat"><span className="num">01</span><div><h3 className="font-semibold">Monitoring utama</h3><p className="text-sm text-[#a1a1aa] mt-1">Dashboard untuk admisi, pembayaran, registrasi, realisasi mahasiswa baru, dan performa SALUT.</p></div></div>
          <div className="feat"><span className="num">02</span><div><h3 className="font-semibold">Data SALUT &amp; Ranking SALUT</h3><p className="text-sm text-[#a1a1aa] mt-1">Modul khusus untuk melihat dan memeringkat performa SALUT.</p></div></div>
          <div className="feat"><span className="num">03</span><div><h3 className="font-semibold">Data Table</h3><p className="text-sm text-[#a1a1aa] mt-1">Tampilan tabular dengan filtering untuk penelusuran data detail.</p></div></div>
          <div className="feat"><span className="num">04</span><div><h3 className="font-semibold">Charts and Analytics</h3><p className="text-sm text-[#a1a1aa] mt-1">Visualisasi tren dan komposisi data menggunakan Recharts.</p></div></div>
          <div className="feat"><span className="num">05</span><div><h3 className="font-semibold">Reports</h3><p className="text-sm text-[#a1a1aa] mt-1">Export Excel/PDF dan print functionality untuk kebutuhan pelaporan.</p></div></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Akses &amp; keamanan<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
          <div className="tile tile-static p-6"><div className="kicker mb-2">Supabase Auth</div><p className="text-sm text-[#a1a1aa]">Autentikasi pengguna untuk seluruh aplikasi.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Role-based access</div><p className="text-sm text-[#a1a1aa]">Pemisahan hak akses admin dan viewer.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Middleware protection</div><p className="text-sm text-[#a1a1aa]">Route dilindungi sebelum halaman dirender.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Row Level Security</div><p className="text-sm text-[#a1a1aa]">Pembatasan akses diterapkan langsung di level database.</p></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Setelah rilis<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 text-[#a1a1aa] leading-relaxed">
          <p>Menangani production deployment, maintenance, dan improvement lanjutan berdasarkan kebutuhan monitoring yang berkembang.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="tile tile-static p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Punya data yang masih<br/>tersebar di Excel?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/6285603324143" className="px-7 py-4 rounded-full text-sm font-semibold text-[#060607]" style={{background:'var(--lime)'}}>WhatsApp 085603324143</a>
            <a href="/laptop-store" className="px-7 py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Case study berikutnya →</a>
          </div>
        </div>
      </section>
    </CaseShell>
  )
}