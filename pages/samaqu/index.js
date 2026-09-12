import CaseShell from '../../components/CaseShell'

export default function Samaqu() {
  return (
    <CaseShell
      title="SAMAQU — Case Study · Surya"
      description="Studi kasus SAMAQU: e-commerce menswear muslim dengan catalog bertingkat, fitur Create Your Price, custom checkout, admin panel, dan integrasi J&T Express serta RajaOngkir API V2."
    >
      <section className="pt-16 md:pt-24 pb-14">
        <div className="kicker mb-6">Case Study · 2026 · Freelance / Client Project</div>
        <h1 className="text-[13vw] md:text-[6.5rem] font-extrabold leading-[.9]">SAMAQU</h1>
        <p className="mt-6 text-lg md:text-2xl text-[#a1a1aa] max-w-3xl leading-snug">
          Website e-commerce untuk brand menswear muslim dengan fokus pada catalog system, custom pricing,
          checkout, admin panel, payment workflow, dan courier integration.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <span className="chip">E-Commerce</span><span className="chip">Catalog System</span><span className="chip">Custom Pricing</span><span className="chip">REST API</span><span className="chip">Multi-Courier Integration</span>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-5 pb-20">
        <div className="tile tile-static p-6"><div className="kicker mb-2">Peran</div><p className="text-sm text-[#f5f5f4]">Full-Stack Developer (solo)</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tahun</div><p className="text-sm text-[#f5f5f4]">2026 — masih maintenance</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tipe</div><p className="text-sm text-[#f5f5f4]">Freelance / Client Project</p></div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Konteks<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 space-y-4 text-[#a1a1aa] leading-relaxed">
          <p>Brand menswear muslim yang menjual produk dengan variasi bertingkat — jenis kain, warna, dan series — sehingga struktur katalog tidak bisa diselesaikan dengan daftar produk datar biasa.</p>
          <p>Selain itu, proses pembelian butuh fleksibilitas harga (fitur <span className="text-white">Create Your Price</span>), pembayaran manual transfer dengan verifikasi bukti, serta perhitungan ongkir dan pembuatan order kurir yang akurat langsung dari sistem.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Yang saya bangun<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="feat"><span className="num">01</span><div><h3 className="font-semibold">Product catalog bertingkat</h3><p className="text-sm text-[#a1a1aa] mt-1">Struktur katalog berdasarkan jenis kain, warna, dan series.</p></div></div>
          <div className="feat"><span className="num">02</span><div><h3 className="font-semibold">Fitur Create Your Price</h3><p className="text-sm text-[#a1a1aa] mt-1">Diimplementasikan konsisten dari product page hingga cart, checkout, dan admin order detail.</p></div></div>
          <div className="feat"><span className="num">03</span><div><h3 className="font-semibold">Custom checkout</h3><p className="text-sm text-[#a1a1aa] mt-1">Manual transfer, upload bukti pembayaran, voucher, dan payment settings.</p></div></div>
          <div className="feat"><span className="num">04</span><div><h3 className="font-semibold">Admin panel</h3><p className="text-sm text-[#a1a1aa] mt-1">CRUD produk dan testimoni untuk pengelolaan konten toko.</p></div></div>
          <div className="feat"><span className="num">05</span><div><h3 className="font-semibold">Integrasi J&amp;T Express API</h3><p className="text-sm text-[#a1a1aa] mt-1">Tariff check, order, cancellation, dan tracking.</p></div></div>
          <div className="feat"><span className="num">06</span><div><h3 className="font-semibold">Integrasi RajaOngkir API V2</h3><p className="text-sm text-[#a1a1aa] mt-1">Perhitungan ongkir, district mapping, caching, dan server-side verification.</p></div></div>
          <div className="feat"><span className="num">07</span><div><h3 className="font-semibold">Maintenance berkelanjutan</h3><p className="text-sm text-[#a1a1aa] mt-1">Bug fixing, responsive improvement, redesign section, dan production maintenance.</p></div></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Catatan teknis<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 space-y-6">
          <div className="tile tile-static p-7">
            <div className="kicker mb-3">Shipping &amp; courier</div>
            <p className="text-sm text-[#a1a1aa]">Dua integrasi kurir dipakai berdampingan: RajaOngkir V2 untuk perhitungan ongkir dengan district mapping dan caching, lalu J&amp;T Express API untuk pembuatan order, pembatalan, dan tracking. Verifikasi dilakukan di sisi server supaya harga ongkir tidak bisa dimanipulasi dari client.</p>
          </div>
          <div className="tile tile-static p-7">
            <div className="kicker mb-3">Custom pricing</div>
            <p className="text-sm text-[#a1a1aa]">Create Your Price menyentuh hampir semua lapisan aplikasi — product page, cart, checkout, sampai detail order di admin — sehingga nilainya harus konsisten dan tervalidasi di setiap tahap, bukan hanya di tampilan.</p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="tile tile-static p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Butuh sistem e-commerce serupa?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/6285603324143" className="px-7 py-4 rounded-full text-sm font-semibold text-[#060607]" style={{background:'var(--lime)'}}>WhatsApp 085603324143</a>
            <a href="/ut-majene" className="px-7 py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Case study berikutnya →</a>
          </div>
        </div>
      </section>
    </CaseShell>
  )
}