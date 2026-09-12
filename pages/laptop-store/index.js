import CaseShell from '../../components/CaseShell'

export default function LaptopStore() {
  return (
    <CaseShell
      title="Laptop Store Management System — Case Study · Surya"
      description="Studi kasus POS dan business management untuk toko laptop: service, sales, sparepart, purchasing, inventory, invoicing, dan financial reporting dalam satu dashboard."
    >
      <section className="pt-16 md:pt-24 pb-14">
        <div className="kicker mb-6">Case Study · 2026 · Software Engineering Project</div>
        <h1 className="text-[10vw] md:text-[5.5rem] font-extrabold leading-[.92]">Laptop Store<br/><span className="outline-word">Management System</span></h1>
        <p className="mt-7 text-lg md:text-2xl text-[#a1a1aa] max-w-3xl leading-snug">
          Sistem POS dan business management untuk toko laptop yang mengintegrasikan service, laptop sales,
          sparepart, purchasing, inventory, invoicing, dan financial reporting dalam satu dashboard.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <span className="chip">POS</span><span className="chip">Service Management</span><span className="chip">Inventory</span><span className="chip">Purchasing</span><span className="chip">Sales</span><span className="chip">Financial Reporting</span><span className="chip">RBAC</span><span className="chip">Business Automation</span>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-5 pb-20">
        <div className="tile tile-static p-6"><div className="kicker mb-2">Peran</div><p className="text-sm text-[#f5f5f4]">Full-Stack Developer (solo)</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tahun</div><p className="text-sm text-[#f5f5f4]">2026</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tipe</div><p className="text-sm text-[#f5f5f4]">Software Engineering Project</p></div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Konteks<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 space-y-4 text-[#a1a1aa] leading-relaxed">
          <p>Toko laptop menjalankan beberapa lini sekaligus: jasa service, penjualan unit, penjualan sparepart, dan pembelian dari supplier. Kalau tiap lini dicatat terpisah, stok dan angka keuangan gampang tidak sinkron.</p>
          <p>Sistem ini menyatukan semuanya dalam satu dashboard, dengan stok dan laporan keuangan yang ikut bergerak otomatis setiap kali ada transaksi.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Modul inti<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="feat"><span className="num">01</span><div><h3 className="font-semibold">Business analytics dashboard</h3><p className="text-sm text-[#a1a1aa] mt-1">Omzet, profit, operational expenses, monthly sales trends, profit per category, top products, dan top customers.</p></div></div>
          <div className="feat"><span className="num">02</span><div><h3 className="font-semibold">Service management</h3><p className="text-sm text-[#a1a1aa] mt-1">Status tracking, pengurangan stok sparepart otomatis, PDF service note, dan WhatsApp notification.</p></div></div>
          <div className="feat"><span className="num">03</span><div><h3 className="font-semibold">Laptop sales</h3><p className="text-sm text-[#a1a1aa] mt-1">Multi-item cart, down payment, warranty, dan bonus.</p></div></div>
          <div className="feat"><span className="num">04</span><div><h3 className="font-semibold">Inventory management</h3><p className="text-sm text-[#a1a1aa] mt-1">Sparepart dan unit laptop dengan stock mutation, adjustment, category, serta low-stock alert.</p></div></div>
          <div className="feat"><span className="num">05</span><div><h3 className="font-semibold">Purchase management</h3><p className="text-sm text-[#a1a1aa] mt-1">Transaksi supplier multi-item, automatic receipt number, stock and expense update, PDF receipt, serta pembatalan transaksi dengan automatic stock rollback.</p></div></div>
          <div className="feat"><span className="num">06</span><div><h3 className="font-semibold">Sales &amp; invoice</h3><p className="text-sm text-[#a1a1aa] mt-1">Untuk unit laptop, sparepart, dan transaksi multi-item.</p></div></div>
          <div className="feat"><span className="num">07</span><div><h3 className="font-semibold">Financial reporting</h3><p className="text-sm text-[#a1a1aa] mt-1">Net profit harian, bulanan, dan tahunan serta profit and loss detail.</p></div></div>
          <div className="feat"><span className="num">08</span><div><h3 className="font-semibold">Operasional &amp; akses</h3><p className="text-sm text-[#a1a1aa] mt-1">Operational expense tracking, customer integration, RBAC, Supabase Auth, PostgreSQL, dan RLS.</p></div></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Automation<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
          <div className="tile tile-static p-6"><div className="kicker mb-2">Stok otomatis</div><p className="text-sm text-[#a1a1aa]">Service memotong stok sparepart, pembelian menambah stok, dan pembatalan transaksi melakukan rollback stok secara otomatis.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Dokumen PDF</div><p className="text-sm text-[#a1a1aa]">Service note dan receipt digenerate langsung dari aplikasi menggunakan <span className="mono text-xs">@react-pdf/renderer</span>.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">WhatsApp notification</div><p className="text-sm text-[#a1a1aa]">Pemberitahuan ke pelanggan mengikuti perubahan status service.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Laporan keuangan</div><p className="text-sm text-[#a1a1aa]">Net profit dan profit-loss terbentuk dari transaksi berjalan, bukan input manual terpisah.</p></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Tech stack<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 flex flex-wrap gap-2 items-start">
          <span className="chip">Next.js 16</span><span className="chip">React 19</span><span className="chip">TypeScript</span><span className="chip">Supabase/PostgreSQL</span><span className="chip">Supabase Auth</span><span className="chip">RLS</span><span className="chip">Tailwind CSS 4</span><span className="chip">shadcn/ui</span><span className="chip">Recharts</span><span className="chip">@react-pdf/renderer</span>
        </div>
      </section>

      <section className="pb-24">
        <div className="tile tile-static p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Mau sistem POS<br/>untuk bisnis kamu?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/6285603324143" className="px-7 py-4 rounded-full text-sm font-semibold text-[#060607]" style={{background:'var(--lime)'}}>WhatsApp 085603324143</a>
            <a href="/erlangga-rental" className="px-7 py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Lihat case study Erlangga Rental →</a>
          </div>
        </div>
      </section>
    </CaseShell>
  )
}