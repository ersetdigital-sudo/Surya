import CaseShell from '../../components/CaseShell'

export default function ErlanggaRental() {
  return (
    <CaseShell
      title="Erlangga Rental Mobil — Case Study · Surya"
      description="Studi kasus sistem manajemen rental mobil berbasis web: booking, kontrak sewa, OCR KTP, blacklist otomatis, denda keterlambatan, nota thermal 80mm, QRIS, dan laporan keuangan. Next.js 15, Supabase, PWA."
    >
      <section className="pt-16 md:pt-24 pb-14">
        <div className="kicker mb-6">Case Study · 2026 · Client Project — Production</div>
        <h1 className="text-[10vw] md:text-[5.5rem] font-extrabold leading-[.92]">Erlangga<br/><span className="outline-word">Rental Mobil</span></h1>
        <p className="mt-7 text-lg md:text-2xl text-[#a1a1aa] max-w-3xl leading-snug">
          Satu aplikasi untuk menjalankan operasional harian rental mobil: dari booking dan kontrak sewa,
          sampai nota thermal dan laporan keuangan bulanan. Dipakai langsung dari HP, di lapangan.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <span className="chip">Booking System</span><span className="chip">OCR KTP</span><span className="chip">Blacklist</span><span className="chip">Denda Otomatis</span><span className="chip">Nota Thermal 80mm</span><span className="chip">QRIS</span><span className="chip">Laporan Keuangan</span><span className="chip">PWA</span>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-5 pb-20">
        <div className="tile tile-static p-6"><div className="kicker mb-2">Peran</div><p className="text-sm text-[#f5f5f4]">Full-Stack Developer (solo)</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Status</div><p className="text-sm text-[#f5f5f4]">Production — dipakai operasional harian</p></div>
        <div className="tile tile-static p-6"><div className="kicker mb-2">Tipe</div><p className="text-sm text-[#f5f5f4]">Client Project / Rental Mobil</p></div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Konteks<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 space-y-4 text-[#a1a1aa] leading-relaxed">
          <p>Usaha rental mobil punya masalah yang khas: data pelanggan ditulis ulang dari KTP, kontrak dan nota dicetak manual, pelanggan bermasalah cuma diingat-ingat, dan denda keterlambatan dihitung pakai feeling. Di akhir bulan, laba bersih jadi tebakan.</p>
          <p>Sistem ini menutup seluruh alur itu dalam satu aplikasi: armada, pelanggan, booking, pembayaran, pengeluaran, sampai laporan — semuanya saling terhubung, sehingga satu transaksi langsung mengubah status mobil, kas, dan laporan sekaligus.</p>
          <p>Karena dipakai di lapangan, aplikasi dibangun <strong className="text-[#f5f5f4]">mobile-first</strong> dan berjalan sebagai PWA: bisa di-install ke home screen HP dan terasa seperti aplikasi native, tanpa perlu upload ke store.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Modul inti<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="feat"><span className="num">01</span><div><h3 className="font-semibold">Autentikasi &amp; proteksi route</h3><p className="text-sm text-[#a1a1aa] mt-1">Multi-user admin dengan Supabase Auth; seluruh route privat dijaga middleware Next.js, password dikelola sepenuhnya oleh Auth provider.</p></div></div>
          <div className="feat"><span className="num">02</span><div><h3 className="font-semibold">Dashboard operasional</h3><p className="text-sm text-[#a1a1aa] mt-1">Ringkasan real-time: armada tersedia dan sedang disewa, booking aktif, serta pendapatan bulan berjalan.</p></div></div>
          <div className="feat"><span className="num">03</span><div><h3 className="font-semibold">Manajemen armada</h3><p className="text-sm text-[#a1a1aa] mt-1">CRUD mobil beserta tarif harian, status ketersediaan, dan foto unit (upload maupun URL).</p></div></div>
          <div className="feat"><span className="num">04</span><div><h3 className="font-semibold">Data pelanggan + scan KTP</h3><p className="text-sm text-[#a1a1aa] mt-1">CRUD pelanggan dengan NIK unik. Foto KTP diunggah, OCR membaca NIK, nama, dan alamat — form terisi sendiri, tidak perlu ketik ulang.</p></div></div>
          <div className="feat"><span className="num">05</span><div><h3 className="font-semibold">Blacklist otomatis</h3><p className="text-sm text-[#a1a1aa] mt-1">Daftar pelanggan bermasalah; ketika NIK yang terdaftar muncul di form booking, sistem langsung memberi peringatan sebelum transaksi jalan.</p></div></div>
          <div className="feat"><span className="num">06</span><div><h3 className="font-semibold">Booking &amp; kontrak sewa</h3><p className="text-sm text-[#a1a1aa] mt-1">Pilih mobil dan pelanggan, durasi serta total biaya terhitung otomatis mengikuti tarif unit.</p></div></div>
          <div className="feat"><span className="num">07</span><div><h3 className="font-semibold">Denda keterlambatan</h3><p className="text-sm text-[#a1a1aa] mt-1">Denda per jam dihitung otomatis saat pengembalian, dengan tarif yang bisa diatur dari halaman pengaturan.</p></div></div>
          <div className="feat"><span className="num">08</span><div><h3 className="font-semibold">Pembayaran, nota &amp; QRIS</h3><p className="text-sm text-[#a1a1aa] mt-1">Status Lunas/Belum Bayar, cetak nota thermal 80mm dan PDF, serta halaman QRIS untuk pembayaran cashless.</p></div></div>
          <div className="feat"><span className="num">09</span><div><h3 className="font-semibold">Pengeluaran operasional</h3><p className="text-sm text-[#a1a1aa] mt-1">Servis, pajak, oli, dan biaya lain dicatat sebagai pengeluaran sehingga laba bersih terbentuk dari angka nyata.</p></div></div>
          <div className="feat"><span className="num">10</span><div><h3 className="font-semibold">Laporan</h3><p className="text-sm text-[#a1a1aa] mt-1">Laporan bulanan, tahunan, pengeluaran, dan riwayat rental — siap cetak, dengan filter waktu terkunci ke zona Asia/Jakarta.</p></div></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Catatan teknis<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
          <div className="tile tile-static p-6"><div className="kicker mb-2">OCR KTP</div><p className="text-sm text-[#a1a1aa]">Integrasi OCR.space dengan Cloudinary: gambar dikompres di server sebelum dikirim ke OCR, lalu parser custom mengurai NIK, nama, dan alamat berlapis (RT/RW, kelurahan/desa, kecamatan, kabupaten).</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Timezone safety</div><p className="text-sm text-[#a1a1aa]">Filter dashboard dan laporan dikunci ke <span className="mono text-xs">Asia/Jakarta</span> supaya tidak terjadi timezone drift antara server UTC dan waktu lokal — laporan "bulan ini" benar-benar bulan ini.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Keamanan berlapis</div><p className="text-sm text-[#a1a1aa]">Row Level Security aktif di semua tabel, ditambah middleware auth di level route. Kredensial Cloudinary dan OCR hanya hidup di server, tidak pernah sampai ke browser.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Nota thermal 80mm</div><p className="text-sm text-[#a1a1aa]">Cetak lewat <span className="mono text-xs">window.open</span> + CSS <span className="mono text-xs">@page</span>, diuji iteratif langsung dengan printer thermal fisik sampai hasil cetaknya rapi.</p></div>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Arsitektur<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8">
          <div className="tile tile-static p-6 overflow-x-auto"><pre className="mono text-[11px] leading-relaxed text-[#a1a1aa]">{`Browser (PWA)
  Next.js App Router · React 19 · Tailwind · lucide
        |                              |
   Server Components / Actions    Route Handlers
        v                              v
Next.js Server
  middleware.ts (auth guard) · /api/ocr-ktp · /api/upload-*
        |                              |
   Supabase                       Cloudinary
   Postgres + RLS                 upload + transform
   Auth (admin)                        |
                                    OCR.space
                                    ekstraksi KTP`}</pre></div>
          <p className="text-sm text-[#a1a1aa] mt-5">Auth guard berjalan di middleware, pekerjaan berat (OCR, upload) diproses lewat route handler di server, dan database menjaga dirinya sendiri lewat RLS — jadi tidak ada jalur pintas dari sisi klien.</p>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Tech stack<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 flex flex-wrap gap-2 items-start">
          <span className="chip">Next.js 15 (App Router)</span><span className="chip">React 19</span><span className="chip">TypeScript strict</span><span className="chip">Tailwind CSS 3.4</span><span className="chip">Supabase/PostgreSQL</span><span className="chip">Supabase Auth (@supabase/ssr)</span><span className="chip">Row Level Security</span><span className="chip">Cloudinary</span><span className="chip">OCR.space</span><span className="chip">lucide-react</span><span className="chip">PWA</span><span className="chip">GitHub Actions CI</span><span className="chip">Vercel</span>
        </div>
      </section>

      <section className="pb-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><h2 className="text-3xl font-bold">Quality<span style={{color:'var(--lime)'}}>.</span></h2></div>
        <div className="md:col-span-8 grid sm:grid-cols-3 gap-5">
          <div className="tile tile-static p-6"><div className="kicker mb-2">Typecheck</div><p className="text-sm text-[#a1a1aa]"><span className="mono text-xs">tsc --noEmit</span> lolos tanpa error, TypeScript strict.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">CI</div><p className="text-sm text-[#a1a1aa]">GitHub Actions menjalankan typecheck dan build di setiap push dan pull request.</p></div>
          <div className="tile tile-static p-6"><div className="kicker mb-2">Zero secret</div><p className="text-sm text-[#a1a1aa]">Tidak ada kredensial di repository — semuanya lewat environment variables.</p></div>
        </div>
      </section>

      <section className="pb-24">
        <div className="tile tile-static p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Punya operasional<br/>yang masih manual?</h2>
          <p className="text-[#a1a1aa] mt-5 max-w-xl mx-auto text-sm">Booking, stok, nota, sampai laporan keuangan bisa jalan dari satu sistem. Ceritakan alur bisnisnya, saya bantu petakan dan bangun.</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3">
            <a href="https://wa.me/6285603324143" className="inline-flex w-full sm:w-auto items-center justify-center text-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-[#060607]" style={{background:'var(--lime)'}}>WhatsApp 085603324143</a>
            <a href="/samaqu" className="inline-flex w-full sm:w-auto items-center justify-center text-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Lihat case study SAMAQU →</a>
          </div>
        </div>
      </section>
    </CaseShell>
  )
}