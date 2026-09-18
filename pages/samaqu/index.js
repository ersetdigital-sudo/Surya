import CaseShell from '../../components/CaseShell'

export default function Samaqu() {
  return (
    <CaseShell
      title="SAMAQU — Case Study · Surya"
      description="Studi kasus SAMAQU: platform e-commerce menswear muslim dengan katalog bertingkat, Create Your Price, checkout multi-step, voucher, verifikasi pembayaran manual, stok atomik, admin dashboard, serta integrasi J&T Express dan RajaOngkir API V2."
    >
      <section className="pt-16 md:pt-24 pb-14">
        <div className="kicker mb-6">Case Study · 2026 · Freelance / Client Project</div>
        <h1 className="text-[13vw] md:text-[6.5rem] font-extrabold leading-[.9]">SAMAQU</h1>
        <p className="mt-6 text-lg md:text-2xl text-[#a1a1aa] max-w-3xl leading-snug">
          Platform e-commerce production untuk brand menswear muslim — Thobe, Kandora, Koko, Vest, dan Kabak —
          mulai dari katalog bertingkat, custom pricing, checkout, verifikasi pembayaran, voucher, sampai
          integrasi multi-kurir.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <a href="https://www.samaqu.id/" target="_blank" rel="noopener noreferrer" className="chip" style={{color:'var(--lime)',borderColor:'rgba(217,242,74,.35)'}}>samaqu.id ↗</a>
          <span className="chip">E-Commerce</span><span className="chip">Catalog Bertingkat</span><span className="chip">Create Your Price</span><span className="chip">Voucher</span><span className="chip">Multi-Courier</span><span className="chip">next-intl</span><span className="chip">Meta Pixel</span>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-5 pb-20">
        <div className="tile tile-static p-6"><div className="kicker mb-2">Peran</div><p className="text-sm text-[#f5f5f4]">Full-Stack Developer (solo)</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Status</div><p className="text-sm text-[#f5f5f4]">Production — live di samaqu.id</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tipe</div><p className="text-sm text-[#f5f5f4]">Freelance / Client Project</p></div>
      </section>

      {/* Tangkapan layar diambil langsung dari samaqu.id versi production (bukan mockup).
          Gambar disimpan sebagai JPEG ~40-100 KB di public/projects/samaqu supaya halaman
          tetap ringan, dan yang di bawah fold pakai loading="lazy". */}
      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold">Galeri<span style={{color:'var(--lime)'}}>.</span></h2>
          <p className="text-sm text-[#71717a] mt-4 leading-relaxed">Tangkapan layar langsung dari situs production, bukan mockup.</p>
        </div>
        <div className="md:col-span-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <figure className="sm:col-span-2 tile">
              <img src="/projects/samaqu/01-home.jpg" alt="Halaman utama SAMAQU: hero busana muslim pria premium dengan tombol Lihat Koleksi dan Create Your Price" width="1440" height="1000" className="block w-full h-auto" />
              <figcaption className="mono text-[11px] text-[#71717a] px-5 py-4 border-t border-white/8">Home — hero &amp; alur pemesanan</figcaption>
            </figure>
            <figure className="tile">
              <img src="/projects/samaqu/02-create-your-price.jpg" alt="Halaman Create Your Price: penjelasan tiga langkah dan penggeser untuk menentukan harga sendiri" width="1440" height="1100" loading="lazy" decoding="async" className="block w-full h-auto" />
              <figcaption className="mono text-[11px] text-[#71717a] px-5 py-4 border-t border-white/8">Create Your Price — pelanggan menentukan harga</figcaption>
            </figure>
            <figure className="tile">
              <img src="/projects/samaqu/03-testimoni.jpg" alt="Halaman testimoni berisi ulasan pelanggan SAMAQU" width="1440" height="1100" loading="lazy" decoding="async" className="block w-full h-auto" />
              <figcaption className="mono text-[11px] text-[#71717a] px-5 py-4 border-t border-white/8">Testimoni customer</figcaption>
            </figure>
            <figure className="sm:col-span-2 tile">
              <img src="/projects/samaqu/04-sama-quran.jpg" alt="Halaman SAMA-QURAN, lini produk turunan dari SAMAQU" width="1440" height="1100" loading="lazy" decoding="async" className="block w-full h-auto" />
              <figcaption className="mono text-[11px] text-[#71717a] px-5 py-4 border-t border-white/8">SAMA-QURAN — lini produk turunan</figcaption>
            </figure>
            <div className="sm:col-span-2 grid sm:grid-cols-3 gap-4 sm:gap-5 items-start">
              <figure className="tile">
                <img src="/projects/samaqu/05-mobile.jpg" alt="Tampilan mobile halaman utama SAMAQU di layar ponsel" width="430" height="900" loading="lazy" decoding="async" className="block w-full h-auto" />
                <figcaption className="mono text-[11px] text-[#71717a] px-5 py-4 border-t border-white/8">Mobile — 430px</figcaption>
              </figure>
              <div className="sm:col-span-2 space-y-4 sm:space-y-5">
                <div className="tile tile-static p-6"><div className="kicker mb-2">Responsive</div><p className="text-sm text-[#a1a1aa]">Seluruh alur — katalog, create your price, sampai checkout — dipakai dari 430px sampai desktop tanpa alur terpisah.</p></div>
                <div className="tile tile-static p-6"><div className="kicker mb-2">Dua jalur order</div><p className="text-sm text-[#a1a1aa]">Pelanggan bisa checkout sendiri lewat website, atau konsultasi ukuran dengan admin via WhatsApp. Keduanya berujung ke order yang sama di dashboard.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Konteks<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 space-y-4 text-[#a1a1aa] leading-relaxed">
          <p>Brand menswear muslim yang menjual Thobe, Kandora, Koko, Vest, Kabak, dan aksesoris. Variasi produknya bertingkat: kategori, jenis kain, series desain, lalu warna dan ukuran — sehingga struktur katalog tidak bisa diselesaikan dengan daftar produk datar biasa.</p>
          <p>Ada dua kebutuhan bisnis yang juga tidak standar. Pertama, fitur <strong className="text-[#f5f5f4]">Create Your Price</strong>: pelanggan boleh menentukan sendiri harga yang mereka bayar. Kedua, pembayaran berjalan manual — transfer bank, QRIS/E-Wallet, dan COD dengan verifikasi bukti — jadi sistem harus tetap rapi tanpa payment gateway.</p>
          <p>Sisanya adalah pekerjaan integrasi: menghitung ongkir dari dua penyedia berbeda, dan membuat order kurir yang benar langsung dari sistem tanpa admin mengetik ulang di panel J&amp;T.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Modul inti<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="feat"><span className="num">01</span><div><h3 className="font-semibold">Katalog produk bertingkat</h3><p className="text-sm text-[#a1a1aa] mt-1">Struktur Category → Jenis Kain → Series → Varian (warna × ukuran). Tabel <span className="mono text-xs">jenis_kain</span> menyimpan metadata kain seperti bahan, tekstur, dan cara perawatan, sementara <span className="mono text-xs">product_images</span> dan <span className="mono text-xs">product_variants</span> menangani media serta stok per varian.</p></div></div>
          <div className="feat"><span className="num">02</span><div><h3 className="font-semibold">Create Your Price (CYP)</h3><p className="text-sm text-[#a1a1aa] mt-1">Pelanggan menentukan sendiri harga beli dalam rentang yang ditentukan. Minimum price disimpan di database dan divalidasi ulang di server sebelum order diterima — bukan hanya dicek di sisi tampilan.</p></div></div>
          <div className="feat"><span className="num">03</span><div><h3 className="font-semibold">Checkout multi-step</h3><p className="text-sm text-[#a1a1aa] mt-1">Alamat tersimpan atau input manual, ongkir dihitung real-time, dan voucher bisa diterapkan langsung di halaman checkout.</p></div></div>
          <div className="feat"><span className="num">04</span><div><h3 className="font-semibold">Pembayaran manual &amp; verifikasi</h3><p className="text-sm text-[#a1a1aa] mt-1">Transfer bank, QRIS/E-Wallet, dan COD. Bukti pembayaran diunggah pelanggan, lalu admin memverifikasi sebelum order masuk proses.</p></div></div>
          <div className="feat"><span className="num">05</span><div><h3 className="font-semibold">Voucher</h3><p className="text-sm text-[#a1a1aa] mt-1">Diskon persentase atau nominal, lengkap dengan batas pemakaian, minimum pembelian, dan pembatasan per nomor WhatsApp.</p></div></div>
          <div className="feat"><span className="num">06</span><div><h3 className="font-semibold">Manajemen order</h3><p className="text-sm text-[#a1a1aa] mt-1">Nomor order berformat <span className="mono text-xs">SMQ-YYYYMMDD-XXX</span>, siklus status <span className="mono text-xs">pending → diproses → dikirim → selesai / dibatalkan</span>, dan nomor AWB J&amp;T tersimpan di record order.</p></div></div>
          <div className="feat"><span className="num">07</span><div><h3 className="font-semibold">Stok atomik</h3><p className="text-sm text-[#a1a1aa] mt-1">Pengurangan stok lewat RPC <span className="mono text-xs">samaqu_decrement_stock</span> dengan row lock <span className="mono text-xs">FOR UPDATE</span>. Kalau ada satu item saja yang gagal divalidasi, seluruh pengurangan di-rollback dan order ditolak.</p></div></div>
          <div className="feat"><span className="num">08</span><div><h3 className="font-semibold">Integrasi J&amp;T Express API</h3><p className="text-sm text-[#a1a1aa] mt-1">Empat endpoint yang menutup siklus pengiriman: Tariff Check, Order Creation beserta AWB, Cancellation dari dashboard admin, dan Tracking.</p></div></div>
          <div className="feat"><span className="num">09</span><div><h3 className="font-semibold">Integrasi RajaOngkir API V2</h3><p className="text-sm text-[#a1a1aa] mt-1">Perhitungan ongkir multi-kurir (JNE, SiCepat, J&amp;T, Ninja, Tiki, dan lainnya), plus pencarian tujuan bertingkat dengan caching di beberapa lapisan.</p></div></div>
          <div className="feat"><span className="num">10</span><div><h3 className="font-semibold">Admin dashboard</h3><p className="text-sm text-[#a1a1aa] mt-1">Tujuh panel operasional: Dashboard, Pesanan, Produk, Pelanggan, Konten Website, Produk Pilihan, dan Pengaturan — termasuk penyedia ongkir, origin pengiriman, dan payment method.</p></div></div>
          <div className="feat"><span className="num">11</span><div><h3 className="font-semibold">Internasionalisasi &amp; tracking</h3><p className="text-sm text-[#a1a1aa] mt-1">Dua bahasa penuh, ID dan EN, lewat <span className="mono text-xs">next-intl</span>. Ditambah Meta Pixel dan CAPI untuk event ViewContent, AddToCart, InitiateCheckout, dan Purchase.</p></div></div>
          <div className="feat"><span className="num">12</span><div><h3 className="font-semibold">Maintenance berkelanjutan</h3><p className="text-sm text-[#a1a1aa] mt-1">Masih berjalan sampai sekarang: bug fixing, responsive improvement, redesign section, dan production maintenance sejak rilis.</p></div></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Alur order<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="tile tile-static p-6 overflow-x-auto"><pre className="mono text-[11px] leading-relaxed text-[#a1a1aa]">{`Halaman produk / keranjang
  └─ CYP aktif? → pelanggan menentukan harga (>= minimum price)
Checkout
  ├─ data pembeli (nama, email, WhatsApp)
  ├─ alamat: tersimpan atau manual
  ├─ ongkir real-time (RajaOngkir atau J&T)
  ├─ payment method (transfer / QRIS / COD)
  └─ voucher (opsional)
Submit order
  └─ validasi server: minimum price · ongkir · stok (atomik)
Order dibuat → AWB J&T digenerate → halaman sukses
Admin: verifikasi pembayaran → proses → kirim → tracking`}</pre></div>
          <p className="text-sm text-[#a1a1aa] mt-5">Titik kritisnya ada di langkah validasi server. Harga dari client, ongkir dari client, dan ketersediaan stok semuanya diperiksa ulang terhadap sumber aslinya sebelum order benar-benar dibuat.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Catatan teknis<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
          <div className="tile tile-static p-6"><div className="kicker mb-2">Validasi server-side</div><p className="text-sm text-[#a1a1aa]">Tiga nilai yang tidak pernah dipercaya dari client: harga CYP, biaya ongkir, dan ketersediaan stok. Server mengambil <span className="mono text-xs">minimum_price</span> langsung dari database dan memverifikasi ongkir lewat API sebelum order dibuat.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Stok atomik</div><p className="text-sm text-[#a1a1aa]">Pengurangan stok dijalankan dalam satu RPC dengan row lock <span className="mono text-xs">FOR UPDATE</span>, sehingga dua pelanggan yang checkout item terakhir di waktu bersamaan tidak bisa membuat stok jadi minus. Kegagalan apa pun otomatis di-rollback.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Dua model auth kurir</div><p className="text-sm text-[#a1a1aa]">Tariff Check dan Order Creation J&amp;T memakai signature <span className="mono text-xs">base64(hex(md5(data + key)))</span> yang kompatibel dengan format PHP, sementara Tracking memakai Basic Auth. Keduanya dipisah per modul supaya tidak tercampur.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Area mapping 7.128 baris</div><p className="text-sm text-[#a1a1aa]">Nama kota dan kecamatan lokal dipetakan ke kode internal J&amp;T — <span className="mono text-xs">sendSiteCode</span>, <span className="mono text-xs">code3</span>, <span className="mono text-xs">destAreaCode</span>, dan <span className="mono text-xs">receiverArea</span> — dengan fallback bertingkat: kecamatan + kota, kecamatan saja, lalu kota saja.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Caching berlapis</div><p className="text-sm text-[#a1a1aa]">Ongkir di-cache in-memory dengan TTL 10 menit, hasil pencarian tujuan disimpan di tabel <span className="mono text-xs">destination_cache</span>, dan <span className="mono text-xs">district_id</span> menempel pada alamat tersimpan. Lookup berulang tidak selalu memanggil API.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Keamanan</div><p className="text-sm text-[#a1a1aa]">RLS aktif di seluruh tabel, akses admin diverifikasi ke tabel <span className="mono text-xs">admins</span> beserta role-nya, kredensial J&amp;T hanya hidup di environment, API key RajaOngkir disimpan di database, dan sesi admin terpisah dari sesi pelanggan.</p></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Arsitektur<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="tile tile-static p-6 overflow-x-auto"><pre className="mono text-[11px] leading-relaxed text-[#a1a1aa]">{`Pelanggan                              Admin
      |                                    |
  Next.js App Router (React 19)
  ├─ (customer)  katalog · cart · checkout · create-your-price · tracking
  ├─ /admin      dashboard · pesanan · produk · pelanggan · konten · pengaturan
  └─ API routes  /api/orders · /api/shipping · /api/jnt · /api/admin
      |                                    |
  Supabase                          Integrasi eksternal
  PostgreSQL + RLS                  J&T Express API   tariff · order · cancel · track
  Auth (admin / pelanggan)          RajaOngkir API V2 ongkir · pencarian tujuan
  destination_cache                 Cloudinary · Meta Pixel + CAPI`}</pre></div>
          <p className="text-sm text-[#a1a1aa] mt-5">Logika bisnis sengaja diletakkan di API routes, bukan di komponen. Klien hanya mengirim niat — server yang memutuskan harga final, biaya kirim final, dan apakah stoknya masih ada.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Tech stack<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 flex flex-wrap gap-2 items-start">
          <span className="chip">Next.js 16 (App Router)</span><span className="chip">React 19</span><span className="chip">TypeScript</span><span className="chip">Tailwind CSS 4</span><span className="chip">Framer Motion</span><span className="chip">Radix UI</span><span className="chip">Supabase/PostgreSQL</span><span className="chip">Supabase Auth</span><span className="chip">Row Level Security</span><span className="chip">Cloudinary</span><span className="chip">J&amp;T Express API</span><span className="chip">RajaOngkir API V2</span><span className="chip">next-intl</span><span className="chip">Meta Pixel + CAPI</span><span className="chip">JsBarcode</span><span className="chip">Vercel</span>
        </div>
      </section>

      <section className="pb-24">
        <div className="tile tile-static p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Butuh sistem e-commerce serupa?</h2>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3">
            <a href="https://wa.me/6285603324143" className="inline-flex w-full sm:w-auto items-center justify-center text-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-[#060607]" style={{background:'var(--lime)'}}>WhatsApp 085603324143</a>
            <a href="/ut-majene" className="inline-flex w-full sm:w-auto items-center justify-center text-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Case study berikutnya →</a>
          </div>
        </div>
      </section>
    </CaseShell>
  )
}
