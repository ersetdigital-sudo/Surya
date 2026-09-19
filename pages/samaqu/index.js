import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

/* Halaman ini adalah port langsung dari versi HTML standalone
   (samaqu-case-study/pages/index.html). Markup, class, dan urutannya
   sengaja dibuat identik supaya tampilannya sama persis — jangan
   dirapikan/diringkas tanpa mengecek ulang hasil render-nya.

   CSS-nya ada di styles/samaqu.css (di-scope ke wrapper .sq).
   Gambar case study ada di public/projects/samaqu. */

export default function Samaqu() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const sections = Array.prototype.slice.call(document.querySelectorAll('section'))
    const groups = []

    sections.forEach(function (sec, si) {
      if (si === 0) return // hero tampil langsung, tanpa animasi

      // cari wrapper konten (lewati layer dekoratif absolute)
      let wrap = sec
      const kids = Array.prototype.slice.call(sec.children).filter(function (el) {
        return !/\babsolute\b/.test(el.className)
      })
      if (kids.length === 1) wrap = kids[0]

      let items = Array.prototype.slice.call(wrap.children).filter(function (el) {
        return !/\babsolute\b/.test(el.className) && el.offsetHeight !== 0
      })
      if (items.length < 1) items = [sec]
      groups.push(items)
    })

    const footer = document.querySelector('footer')
    if (footer) groups.push([footer])

    groups.forEach(function (items) {
      items.forEach(function (el, i) {
        el.classList.add('rv')
        el.style.transitionDelay = Math.min(i * 90, 360) + 'ms'
      })
    })

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('rv-in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )

    groups.forEach(function (items) {
      items.forEach(function (el) {
        io.observe(el)
      })
    })

    // pengaman: kalau ada yang belum kebuka setelah load, tampilkan
    const onLoad = function () {
      setTimeout(function () {
        document.querySelectorAll('.rv:not(.rv-in)').forEach(function (el) {
          const r = el.getBoundingClientRect()
          if (r.top < window.innerHeight) el.classList.add('rv-in')
        })
      }, 300)
    }
    window.addEventListener('load', onLoad)

    return function () {
      io.disconnect()
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <>
      <Head>
        <title>SAMAQU — Case Study · Surya</title>
        <meta
          name="description"
          content="Platform e-commerce production untuk brand menswear muslim — katalog bertingkat, Create Your Price, checkout, verifikasi pembayaran, voucher, dan integrasi multi-kurir."
        />
      </Head>

      <main className="sq">
        {/* NAV */}
        <header className="cs-head sticky top-0 z-50 border-b border-white/5 bg-[#070807]/85 backdrop-blur">
          <div className="mx-auto max-w-6xl px-5 md:px-8 h-14 flex items-center justify-between">
            <Link
              href="/#work"
              className="mono text-xs tracking-[.18em] uppercase text-[#a9afa2] hover:text-[#c5f518] transition"
            >
              ← Semua project
            </Link>
            <span className="mono text-xs tracking-[.22em] uppercase hidden sm:block text-[#6d7367]">
              Case Study / SAMAQU
            </span>
            <a href="https://wa.me/6285603324143" className="mono text-xs px-3 py-1.5 rounded-full btn-acc">
              Hire me
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grain opacity-40"></div>
          <div className="absolute inset-0 glow"></div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-28 pb-14">
            <p className="kicker">Case Study · 2026 · Freelance / Client Project</p>
            <h1 className="mt-5 font-bold tracking-[-.04em] leading-[0.9] text-[clamp(3.5rem,13vw,9rem)]">SAMAQU</h1>
            <div className="mt-7 grid lg:grid-cols-12 gap-10 items-start">
              <p className="lg:col-span-7 text-[clamp(1.05rem,2vw,1.35rem)] leading-relaxed text-[#a9afa2]">
                Platform e-commerce production untuk brand menswear muslim — Thobe, Kandora, Koko, Vest, dan Kabak —
                mulai dari katalog bertingkat, custom pricing, checkout, verifikasi pembayaran, voucher, sampai
                integrasi multi-kurir.
              </p>
              <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10">
                <div>
                  <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Peran</p>
                  <p className="mt-1 font-semibold">
                    Full-Stack Developer <span className="text-[#6d7367]">(solo)</span>
                  </p>
                </div>
                <div>
                  <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Status</p>
                  <p className="mt-1 font-semibold text-[#c5f518]">Production — live di samaqu.id</p>
                </div>
                <div>
                  <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Tipe</p>
                  <p className="mt-1 font-semibold">Freelance / Client Project</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href="https://www.samaqu.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="tag tag-acc hover:brightness-125"
              >
                samaqu.id ↗
              </a>
              <span className="tag">E-Commerce</span>
              <span className="tag">Catalog Bertingkat</span>
              <span className="tag">Create Your Price</span>
              <span className="tag">Voucher</span>
              <span className="tag">Multi-Courier</span>
              <span className="tag">next-intl</span>
              <span className="tag">Meta Pixel</span>
            </div>
          </div>

          {/* KPI STRIP */}
          <div className="relative border-y border-white/8 bg-[#0e100e]">
            <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8 kpi">
              <div className="kpi-cell">
                <p className="mono text-[1.7rem] md:text-[2.6rem] leading-none text-[#c5f518]">12</p>
                <p className="mt-2 text-[10.5px] md:text-xs text-[#6d7367] uppercase tracking-[.14em] mono">
                  Modul inti
                </p>
              </div>
              <div className="kpi-cell">
                <p className="mono text-[1.7rem] md:text-[2.6rem] leading-none text-[#c5f518]">7.128</p>
                <p className="mt-2 text-[10.5px] md:text-xs text-[#6d7367] uppercase tracking-[.14em] mono">
                  Baris area mapping
                </p>
              </div>
              <div className="kpi-cell">
                <p className="mono text-[1.7rem] md:text-[2.6rem] leading-none text-[#c5f518]">4</p>
                <p className="mt-2 text-[10.5px] md:text-xs text-[#6d7367] uppercase tracking-[.14em] mono">
                  Endpoint J&amp;T
                </p>
              </div>
              <div className="kpi-cell">
                <p className="mono text-[1.7rem] md:text-[2.6rem] leading-none text-[#c5f518]">430px</p>
                <p className="mt-2 text-[10.5px] md:text-xs text-[#6d7367] uppercase tracking-[.14em] mono">
                  Breakpoint terkecil
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">01 — Galeri</p>
              <h2 className="h2 mt-3">Galeri.</h2>
            </div>
            <p className="max-w-sm text-sm text-[#6d7367]">
              Tangkapan layar langsung dari situs production di <span className="mono text-[#c5f518]">samaqu.id</span>,
              bukan mockup. Klik untuk lihat ukuran penuh.
            </p>
          </div>

          {/* Showcase utama: browser + phone */}
          <div className="mt-12 relative">
            <div className="absolute inset-x-0 top-10 bottom-10 glow pointer-events-none"></div>

            <div className="relative md:pr-[170px] lg:pr-[190px]">
              <a
                href="/projects/samaqu/01-home.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="browser block"
              >
                <div className="browser-bar">
                  <span className="dot" style={{ background: '#ff5f57' }}></span>
                  <span className="dot" style={{ background: '#febc2e' }}></span>
                  <span className="dot" style={{ background: '#28c840' }}></span>
                  <span className="url">samaqu.id</span>
                  <span className="mono text-[10px] text-[#4d5247] hidden sm:block">1440px</span>
                </div>
                <img
                  src="/projects/samaqu/01-home.jpg"
                  className="browser-screen"
                  alt="Halaman utama SAMAQU: hero busana muslim pria premium dengan tombol Lihat Koleksi dan Create Your Price"
                />
              </a>

              {/* Phone: menumpuk di kanan pada desktop, di bawah pada mobile */}
              <div className="device mx-auto mt-8 w-[195px] sm:w-[240px] md:mt-0 md:mx-0 md:absolute md:right-0 md:bottom-[-48px] md:w-[230px] lg:w-[268px]">
                <img
                  src="/projects/samaqu/05-phone-mockup.png"
                  className="block w-full h-auto"
                  alt="Tampilan mobile halaman utama SAMAQU di layar ponsel — 430px"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-14 flex flex-wrap gap-2">
            <span className="tag tag-acc">Home — hero</span>
            <span className="tag">Mobile — 430px</span>
          </div>

          {/* Tiga halaman lain */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div>
              <a
                href="/projects/samaqu/02-create-your-price.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="browser block"
              >
                <div className="browser-bar">
                  <span className="dot" style={{ background: '#ff5f57' }}></span>
                  <span className="dot" style={{ background: '#febc2e' }}></span>
                  <span className="dot" style={{ background: '#28c840' }}></span>
                  <span className="url">samaqu.id/create-your-price</span>
                </div>
                <img
                  src="/projects/samaqu/02-create-your-price.jpg"
                  className="browser-screen"
                  loading="lazy"
                  decoding="async"
                  alt="Halaman Create Your Price: penjelasan tiga langkah dan penggeser untuk menentukan harga sendiri"
                />
              </a>
              <p className="mono text-xs text-[#6d7367] mt-3">Create Your Price</p>
            </div>
            <div>
              <a
                href="/projects/samaqu/03-testimoni.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="browser block"
              >
                <div className="browser-bar">
                  <span className="dot" style={{ background: '#ff5f57' }}></span>
                  <span className="dot" style={{ background: '#febc2e' }}></span>
                  <span className="dot" style={{ background: '#28c840' }}></span>
                  <span className="url">samaqu.id/testimoni</span>
                </div>
                <img
                  src="/projects/samaqu/03-testimoni.jpg"
                  className="browser-screen"
                  loading="lazy"
                  decoding="async"
                  alt="Halaman testimoni berisi ulasan pelanggan SAMAQU"
                />
              </a>
              <p className="mono text-xs text-[#6d7367] mt-3">Testimoni customer</p>
            </div>
            <div>
              <a
                href="/projects/samaqu/04-sama-quran.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="browser block"
              >
                <div className="browser-bar">
                  <span className="dot" style={{ background: '#ff5f57' }}></span>
                  <span className="dot" style={{ background: '#febc2e' }}></span>
                  <span className="dot" style={{ background: '#28c840' }}></span>
                  <span className="url">samaqu.id/sama-quran</span>
                </div>
                <img
                  src="/projects/samaqu/04-sama-quran.jpg"
                  className="browser-screen"
                  loading="lazy"
                  decoding="async"
                  alt="Halaman SAMA-QURAN, lini produk turunan dari SAMAQU"
                />
              </a>
              <p className="mono text-xs text-[#6d7367] mt-3">SAMA-QURAN</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="browser">
              <div className="browser-bar">
                <span className="dot" style={{ background: '#ff5f57' }}></span>
                <span className="dot" style={{ background: '#febc2e' }}></span>
                <span className="dot" style={{ background: '#28c840' }}></span>
                <span className="url">samaqu.id/id/akun/dashboard</span>
                <span className="mono text-[10px] text-[#4d5247] hidden sm:block">1911px</span>
              </div>
              <img
                src="/projects/samaqu/06-dashboard-akun.png"
                className="browser-screen"
                loading="lazy"
                decoding="async"
                alt="Dashboard akun pelanggan SAMAQU: sidebar navigasi, ringkasan pesanan aktif, wishlist, dan total belanja"
              />
            </div>
            <p className="mono text-xs text-[#6d7367] mt-3">
              Dashboard pelanggan — pesanan, wishlist, alamat, panduan ukuran
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="card p-6">
              <p className="num">RESPONSIVE</p>
              <p className="mt-3 text-[#a9afa2] leading-relaxed">
                Seluruh alur — katalog, create your price, sampai checkout — dipakai dari 430px sampai desktop tanpa
                alur terpisah.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">DUA JALUR ORDER</p>
              <p className="mt-3 text-[#a9afa2] leading-relaxed">
                Pelanggan bisa checkout sendiri lewat website, atau konsultasi ukuran dengan admin via WhatsApp.
                Keduanya berujung ke order yang sama di dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* DETAIL PRODUK */}
        <section className="p2 border-y border-white/8 bg-[#0b0d0a] relative overflow-hidden">
          <div className="absolute inset-0 p2-glow"></div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-32">
            <div className="max-w-3xl">
              <p className="kicker">02 — Detail produk</p>
              <h2 className="mt-4 font-bold tracking-[-.035em] leading-[0.95] text-[clamp(2.4rem,7vw,5rem)]">
                Satu layar,
                <br />
                <span className="text-[#d9b25f]">empat lapis</span> keputusan.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-[#a9afa2]">
                Halaman <span className="mono text-[#d9b25f]">/id/katalog/thobe-superblack-jiharkah</span> harus
                menyelesaikan kategori, jenis kain, series, dan varian — lalu menyerahkan keputusan harga ke pelanggan.
                Semuanya tanpa reload.
              </p>
            </div>

            {/* BENTO */}
            <div className="mt-14 grid lg:grid-cols-12 gap-5">
              {/* Foto produk */}
              <div className="lg:col-span-5 lg:row-span-2">
                <div className="p2-photo h-full relative">
                  <img
                    src="/projects/samaqu/07-produk-thobe.png"
                    className="block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-top"
                    loading="lazy"
                    decoding="async"
                    alt="Thobe Superblack Jiharkah"
                  />
                  <div className="absolute left-5 top-5 flex flex-col gap-2">
                    <span className="mono text-[10px] tracking-[.18em] uppercase px-3 py-1.5 rounded-full bg-[#0b0d0a]/85 text-[#d9b25f] backdrop-blur">
                      Thobe · B-01
                    </span>
                    <span className="mono text-[10px] tracking-[.18em] uppercase px-3 py-1.5 rounded-full bg-[#0b0d0a]/85 text-[#f2f4ef] backdrop-blur">
                      Jiharkah
                    </span>
                  </div>
                  <div className="absolute right-5 bottom-5 flex gap-2">
                    <span className="w-12 h-16 rounded-lg overflow-hidden border border-white/40">
                      <img
                        src="/projects/samaqu/08-thumb-1.png"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </span>
                    <span className="w-12 h-16 rounded-lg overflow-hidden border border-white/40">
                      <img
                        src="/projects/samaqu/09-thumb-2.png"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </span>
                    <span className="w-12 h-16 rounded-lg grid place-items-center bg-[#0b0d0a]/85 backdrop-blur mono text-[10px] text-[#f2f4ef]">
                      +8
                    </span>
                  </div>
                </div>
              </div>

              {/* Create Your Price — tile utama */}
              <div className="lg:col-span-7 glass p-5 sm:p-7 md:p-9 relative overflow-hidden">
                <div
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full"
                  style={{ background: 'radial-gradient(circle,rgba(217,178,95,0.22),transparent 70%)' }}
                ></div>
                <div className="relative">
                  <p className="mono text-[11px] uppercase tracking-[.22em] text-[#d9b25f]">Create Your Price</p>
                  <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.1rem)] font-bold tracking-[-.02em] leading-tight">
                    Pelanggan yang menentukan harganya.
                  </h3>

                  <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="chip">
                      <p className="mono text-[10px] uppercase tracking-[.16em] text-[#6d7367]">Minimum</p>
                      <p className="mono text-[1.25rem] mt-1.5 text-[#f2f4ef]">
                        329<span className="text-[#6d7367] text-sm">rb</span>
                      </p>
                    </div>
                    <div className="chip chip-on">
                      <p className="mono text-[10px] uppercase tracking-[.16em] text-[#d9b25f]">★ Rekomendasi</p>
                      <p className="mono text-[1.25rem] mt-1.5 text-[#e7c675]">
                        359<span className="text-[#a08a52] text-sm">rb</span>
                      </p>
                    </div>
                    <div className="chip col-span-2 sm:col-span-1 grid place-items-center">
                      <p className="mono text-[11px] text-[#a9afa2]">Harga lainnya →</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#a9afa2]">
                    Nilai yang dikirim client tidak pernah dipercaya. Server membaca{' '}
                    <span className="mono text-[#d9b25f]">minimum_price</span> langsung dari database dan menolak order
                    apa pun di bawahnya.
                  </p>

                  <div className="mt-7 pt-6 border-t border-white/8 flex flex-wrap items-end gap-5 sm:gap-6">
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[.2em] text-[#6d7367]">Total</p>
                      <p className="mono text-[2.2rem] leading-none mt-1.5 text-[#e7c675]">Rp 359.000</p>
                    </div>
                    <div className="flex gap-2.5 sm:ml-auto">
                      <span className="gold-pill px-5 sm:px-6 py-3 text-sm">Keranjang</span>
                      <span className="ghost-pill px-5 sm:px-6 py-3 text-sm">Pesan via WA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Series + ukuran */}
              <div className="lg:col-span-7 grid sm:grid-cols-5 gap-5">
                <div className="sm:col-span-3 glass-soft p-6">
                  <div className="flex items-center justify-between">
                    <p className="mono text-[10px] uppercase tracking-[.2em] text-[#6d7367]">Series</p>
                    <span className="mono text-[10px] text-[#4d5247]">6 varian</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="chip chip-on flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[#e7c675]">Jiharkah</span>
                      <span className="mono text-[11px] text-[#a08a52]">329rb</span>
                    </div>
                    <div className="chip flex items-center justify-between">
                      <span className="text-[13px]">Imron</span>
                      <span className="mono text-[11px] text-[#6d7367]">344rb</span>
                    </div>
                    <div className="chip flex items-center justify-between">
                      <span className="text-[13px]">Bayati</span>
                      <span className="mono text-[11px] text-[#6d7367]">344rb</span>
                    </div>
                    <div className="chip flex items-center justify-between">
                      <span className="text-[13px]">Nahawand</span>
                      <span className="mono text-[11px] text-[#6d7367]">329rb</span>
                    </div>
                    <div className="chip flex items-center justify-between">
                      <span className="text-[13px]">Karim</span>
                      <span className="mono text-[11px] text-[#6d7367]">344rb</span>
                    </div>
                    <div className="chip flex items-center justify-between">
                      <span className="text-[13px]">Imalah</span>
                      <span className="mono text-[11px] text-[#6d7367]">344rb</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-5">
                  <div className="glass-soft p-6">
                    <p className="mono text-[10px] uppercase tracking-[.2em] text-[#6d7367]">Ukuran</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="sz2">XS</span>
                      <span className="sz2">S</span>
                      <span className="sz2 sz2-on">M</span>
                      <span className="sz2">L</span>
                      <span className="sz2">XL</span>
                    </div>
                  </div>
                  <div className="glass-soft p-6 flex-1">
                    <p className="mono text-[10px] uppercase tracking-[.2em] text-[#6d7367]">Stok</p>
                    <p className="mono text-[2.4rem] leading-none mt-3 text-[#f36458]">05</p>
                    <p className="text-xs text-[#6d7367] mt-2">
                      tersisa · dibaca dari <span className="mono">product_variants</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiga catatan */}
            <div className="mt-5 grid md:grid-cols-3 gap-5">
              <div className="stat-tile">
                <p className="mono text-[10px] uppercase tracking-[.2em] text-[#d9b25f]">Katalog bertingkat</p>
                <p className="mt-3 text-sm leading-relaxed text-[#a9afa2]">
                  Kategori Thobe → jenis kain B-01 → enam series → varian ukuran. Ganti series, harga dasar ikut berubah
                  tanpa pindah halaman.
                </p>
              </div>
              <div className="stat-tile">
                <p className="mono text-[10px] uppercase tracking-[.2em] text-[#d9b25f]">Harga divalidasi ulang</p>
                <p className="mt-3 text-sm leading-relaxed text-[#a9afa2]">
                  Minimum per varian diambil dari database, bukan dari tampilan. Harga bebas pun tetap diperiksa server
                  sebelum order dibuat.
                </p>
              </div>
              <div className="stat-tile">
                <p className="mono text-[10px] uppercase tracking-[.2em] text-[#d9b25f]">Stok atomik</p>
                <p className="mt-3 text-sm leading-relaxed text-[#a9afa2]">
                  Pengurangan stok lewat RPC dengan row lock FOR UPDATE — dua checkout bersamaan tidak bisa membuat stok
                  minus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KONTEKS */}
        <section className="border-y border-white/8 bg-[#0e100e]">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="kicker">03 — Konteks</p>
              <h2 className="h2 mt-3">Konteks.</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[1.05rem] leading-relaxed text-[#a9afa2]">
              <p>
                Brand menswear muslim yang menjual Thobe, Kandora, Koko, Vest, Kabak, dan aksesoris. Variasi produknya
                bertingkat: kategori, jenis kain, series desain, lalu warna dan ukuran — sehingga struktur katalog tidak
                bisa diselesaikan dengan daftar produk datar biasa.
              </p>
              <p>
                Ada dua kebutuhan bisnis yang juga tidak standar. Pertama, fitur{' '}
                <strong className="text-[#c5f518] font-semibold">Create Your Price</strong>: pelanggan boleh menentukan
                sendiri harga yang mereka bayar. Kedua, pembayaran berjalan manual — transfer bank, QRIS/E-Wallet, dan
                COD dengan verifikasi bukti — jadi sistem harus tetap rapi tanpa payment gateway.
              </p>
              <p>
                Sisanya adalah pekerjaan integrasi: menghitung ongkir dari dua penyedia berbeda, dan membuat order kurir
                yang benar langsung dari sistem tanpa admin mengetik ulang di panel J&amp;T.
              </p>
            </div>
          </div>
        </section>

        {/* MODUL INTI */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <p className="kicker">04 — Modul</p>
          <h2 className="h2 mt-3">Modul inti.</h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-6">
              <p className="num">01</p>
              <h3 className="mt-3 text-lg font-semibold">Katalog produk bertingkat</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Struktur Category → Jenis Kain → Series → Varian (warna × ukuran). Tabel{' '}
                <span className="mono text-[#c5f518]">jenis_kain</span> menyimpan metadata kain seperti bahan, tekstur,
                dan cara perawatan, sementara <span className="mono text-[#c5f518]">product_images</span> dan{' '}
                <span className="mono text-[#c5f518]">product_variants</span> menangani media serta stok per varian.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">02</p>
              <h3 className="mt-3 text-lg font-semibold">Create Your Price (CYP)</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Pelanggan menentukan sendiri harga beli dalam rentang yang ditentukan. Minimum price disimpan di
                database dan divalidasi ulang di server sebelum order diterima — bukan hanya dicek di sisi tampilan.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">03</p>
              <h3 className="mt-3 text-lg font-semibold">Checkout multi-step</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Alamat tersimpan atau input manual, ongkir dihitung real-time, dan voucher bisa diterapkan langsung di
                halaman checkout.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">04</p>
              <h3 className="mt-3 text-lg font-semibold">Pembayaran manual &amp; verifikasi</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Transfer bank, QRIS/E-Wallet, dan COD. Bukti pembayaran diunggah pelanggan, lalu admin memverifikasi
                sebelum order masuk proses.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">05</p>
              <h3 className="mt-3 text-lg font-semibold">Voucher</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Diskon persentase atau nominal, lengkap dengan batas pemakaian, minimum pembelian, dan pembatasan per
                nomor WhatsApp.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">06</p>
              <h3 className="mt-3 text-lg font-semibold">Manajemen order</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Nomor order berformat <span className="mono text-[#c5f518]">SMQ-YYYYMMDD-XXX</span>, siklus status
                pending → diproses → dikirim → selesai / dibatalkan, dan nomor AWB J&amp;T tersimpan di record order.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">07</p>
              <h3 className="mt-3 text-lg font-semibold">Stok atomik</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Pengurangan stok lewat RPC <span className="mono text-[#c5f518]">samaqu_decrement_stock</span> dengan
                row lock FOR UPDATE. Kalau ada satu item saja yang gagal divalidasi, seluruh pengurangan di-rollback dan
                order ditolak.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">08</p>
              <h3 className="mt-3 text-lg font-semibold">Integrasi J&amp;T Express API</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Empat endpoint yang menutup siklus pengiriman: Tariff Check, Order Creation beserta AWB, Cancellation
                dari dashboard admin, dan Tracking.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">09</p>
              <h3 className="mt-3 text-lg font-semibold">Integrasi RajaOngkir API V2</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Perhitungan ongkir multi-kurir (JNE, SiCepat, J&amp;T, Ninja, Tiki, dan lainnya), plus pencarian tujuan
                bertingkat dengan caching di beberapa lapisan.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">10</p>
              <h3 className="mt-3 text-lg font-semibold">Admin dashboard</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Tujuh panel operasional: Dashboard, Pesanan, Produk, Pelanggan, Konten Website, Produk Pilihan, dan
                Pengaturan — termasuk penyedia ongkir, origin pengiriman, dan payment method.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">11</p>
              <h3 className="mt-3 text-lg font-semibold">Internasionalisasi &amp; tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Dua bahasa penuh, ID dan EN, lewat next-intl. Ditambah Meta Pixel dan CAPI untuk event ViewContent,
                AddToCart, InitiateCheckout, dan Purchase.
              </p>
            </div>
            <div className="card p-6">
              <p className="num">12</p>
              <h3 className="mt-3 text-lg font-semibold">Maintenance berkelanjutan</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Masih berjalan sampai sekarang: bug fixing, responsive improvement, redesign section, dan production
                maintenance sejak rilis.
              </p>
            </div>
          </div>
        </section>

        {/* ALUR ORDER */}
        <section className="border-y border-white/8 bg-[#0e100e]">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
            <p className="kicker">05 — Alur</p>
            <h2 className="h2 mt-3">Alur order.</h2>

            <div className="mt-12 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <ol className="relative pl-8 space-y-7">
                  <span className="absolute left-[7px] top-2 bottom-2 w-px flow-line"></span>

                  <li className="relative">
                    <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#c5f518] bg-[#0e100e]"></span>
                    <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Langkah 01</p>
                    <h3 className="mt-1 font-semibold text-lg">Halaman produk / keranjang</h3>
                    <p className="mt-1 text-sm text-[#a9afa2]">
                      CYP aktif? → pelanggan menentukan harga (≥ minimum price).
                    </p>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#c5f518] bg-[#0e100e]"></span>
                    <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Langkah 02</p>
                    <h3 className="mt-1 font-semibold text-lg">Checkout</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="tag">data pembeli (nama, email, WhatsApp)</span>
                      <span className="tag">alamat: tersimpan atau manual</span>
                      <span className="tag">ongkir real-time (RajaOngkir / J&amp;T)</span>
                      <span className="tag">payment method (transfer / QRIS / COD)</span>
                      <span className="tag">voucher (opsional)</span>
                    </div>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#c5f518] bg-[#c5f518]"></span>
                    <p className="mono text-[11px] uppercase tracking-[.18em] text-[#c5f518]">
                      Langkah 03 · titik kritis
                    </p>
                    <h3 className="mt-1 font-semibold text-lg">Submit order — validasi server</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="tag tag-acc">minimum price</span>
                      <span className="tag tag-acc">ongkir</span>
                      <span className="tag tag-acc">stok (atomik)</span>
                    </div>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#c5f518] bg-[#0e100e]"></span>
                    <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Langkah 04</p>
                    <h3 className="mt-1 font-semibold text-lg">Order dibuat</h3>
                    <p className="mt-1 text-sm text-[#a9afa2]">AWB J&amp;T digenerate → halaman sukses.</p>
                  </li>

                  <li className="relative">
                    <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#c5f518] bg-[#0e100e]"></span>
                    <p className="mono text-[11px] uppercase tracking-[.18em] text-[#6d7367]">Langkah 05</p>
                    <h3 className="mt-1 font-semibold text-lg">Admin</h3>
                    <p className="mt-1 text-sm text-[#a9afa2]">Verifikasi pembayaran → proses → kirim → tracking.</p>
                  </li>
                </ol>
              </div>

              <div className="lg:col-span-5">
                <div className="card p-7 lg:sticky lg:top-20">
                  <p className="num">CATATAN</p>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-[#a9afa2]">
                    Titik kritisnya ada di langkah validasi server. Harga dari client, ongkir dari client, dan
                    ketersediaan stok semuanya diperiksa ulang terhadap sumber aslinya sebelum order benar-benar dibuat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SISI ADMIN */}
        <section className="p2 relative overflow-hidden border-y border-white/8 bg-[#0b0d0a]">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(45% 45% at 80% 10%, rgba(197,245,24,0.10), transparent 70%), radial-gradient(40% 40% at 10% 90%, rgba(217,178,95,0.08), transparent 70%)'
            }}
          ></div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-32">
            <div className="max-w-3xl">
              <p className="kicker">06 — Order Management</p>
              <h2 className="mt-4 font-bold tracking-[-.035em] leading-[0.95] text-[clamp(2.4rem,7vw,5rem)]">
                Every order,
                <br />
                <span className="text-[#c5f518]">under control.</span>
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-[#a9afa2]">
                Dari pembayaran masuk hingga paket siap dikirim, setiap proses dirancang dalam satu alur kerja yang
                terintegrasi.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[#a9afa2]">
                Dashboard ini mengurangi pekerjaan manual dengan memusatkan order, pembayaran, data pelanggan, AWB, dan
                shipping label dalam satu sistem.
              </p>
              <p className="mt-6 text-[1.05rem] font-semibold text-[#f2f4ef]">
                Less manual work. <span className="text-[#c5f518]">More control over every order.</span>
              </p>
            </div>

            {/* Screenshot dashboard */}
            <div className="mt-12 browser">
              <div className="browser-bar">
                <span className="dot" style={{ background: '#ff5f57' }}></span>
                <span className="dot" style={{ background: '#febc2e' }}></span>
                <span className="dot" style={{ background: '#28c840' }}></span>
                <span className="url">samaqu.id/admin/dashboard</span>
                <span className="mono text-[10px] text-[#4d5247] hidden sm:block">admin panel</span>
              </div>
              <img
                src="/projects/samaqu/10-admin-dashboard.png"
                className="browser-screen"
                loading="lazy"
                decoding="async"
                alt="Admin panel SAMAQU: kartu metrik pendapatan, pesanan terbaru, dan koleksi terlaris"
              />
            </div>
            <p className="mono text-[11px] text-[#4d5247] mt-3">
              Dashboard · Pesanan · Produk · Pelanggan · Biolink · Foto Carousel · Konten Website · Produk Pilihan ·
              Pengaturan · Voucher · Testimoni · Panduan Ukuran · Garansi &amp; Retur
            </p>

            {/* CETAK LABEL */}
            <div className="mt-16 grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5">
                <div className="rounded-[26px] overflow-hidden border border-white/10 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                  <img
                    src="/projects/samaqu/11-label-ongkir.png"
                    className="block w-full h-auto"
                    loading="lazy"
                    decoding="async"
                    alt="Label pengiriman J&amp;T Express yang dicetak langsung dari dashboard SAMAQU"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 lg:pl-4">
                <p className="mono text-[11px] uppercase tracking-[.22em] text-[#c5f518]">Shipping Label Automation</p>
                <h3 className="mt-4 text-[clamp(1.7rem,3.8vw,2.9rem)] font-bold tracking-[-.03em] leading-[1.05]">
                  From order creation
                  <br />
                  <span className="text-[#c5f518]">to printed label. Automatically.</span>
                </h3>
                <p className="mt-6 text-[1.02rem] leading-relaxed text-[#a9afa2]">
                  Setelah pembayaran diverifikasi, backend memanggil J&amp;T Order Creation API untuk membuat shipment
                  dan mendapatkan nomor resi.
                </p>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-[#a9afa2]">
                  Resi kemudian disimpan ke record order dan digunakan untuk membangun shipping label secara otomatis.
                  JsBarcode merender barcode langsung di browser, sementara seluruh informasi label berasal dari data
                  order yang tersimpan.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="chip">
                    <p className="mono text-[10px] uppercase tracking-[.18em] text-[#6d7367]">API Integration</p>
                    <p className="mono text-[13px] mt-2 text-[#f2f4ef]">
                      J&amp;T Order Creation <span className="text-[#c5f518]">→</span> AWB{' '}
                      <span className="text-[#c5f518]">→</span> Order Record <span className="text-[#c5f518]">→</span>{' '}
                      Label
                    </p>
                  </div>
                  <div className="chip">
                    <p className="mono text-[10px] uppercase tracking-[.18em] text-[#6d7367]">Data Mapping</p>
                    <p className="mono text-[13px] mt-2 text-[#f2f4ef]">
                      7.128 mapping kecamatan &amp; kota <span className="text-[#c5f518]">→</span> J&amp;T Area Code
                    </p>
                  </div>
                  <div className="chip">
                    <p className="mono text-[10px] uppercase tracking-[.18em] text-[#6d7367]">Order Control</p>
                    <p className="mono text-[13px] mt-2 text-[#f2f4ef]">
                      Create <span className="text-[#c5f518]">→</span> Print <span className="text-[#c5f518]">→</span>{' '}
                      Cancel <span className="text-[#c5f518]">→</span> Sync
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Penutup */}
            <div className="mt-14 grid md:grid-cols-3 gap-5">
              <div className="stat-tile">
                <p className="mono text-[2rem] leading-none text-[#c5f518]">13</p>
                <p className="mono text-[10px] uppercase tracking-[.18em] text-[#6d7367] mt-2">Panel admin</p>
                <p className="mt-3 text-sm leading-relaxed text-[#a9afa2]">
                  Dari pesanan dan produk sampai voucher, testimoni, biolink, dan halaman garansi — semua dikelola
                  sendiri oleh tim, tanpa developer.
                </p>
              </div>
              <div className="stat-tile">
                <p className="mono text-[2rem] leading-none text-[#c5f518]">0</p>
                <p className="mono text-[10px] uppercase tracking-[.18em] text-[#6d7367] mt-2">Tab panel J&amp;T</p>
                <p className="mt-3 text-sm leading-relaxed text-[#a9afa2]">
                  Seluruh siklus kirim — cek tarif, buat order, cetak label, batalkan, lacak — selesai di dalam
                  dashboard sendiri.
                </p>
              </div>
              <div className="stat-tile">
                <p className="mono text-[2rem] leading-none text-[#c5f518]">
                  ~5<span className="text-base text-[#6d7367]">mnt</span>
                </p>
                <p className="mono text-[10px] uppercase tracking-[.18em] text-[#6d7367] mt-2">Hemat per order</p>
                <p className="mt-3 text-sm leading-relaxed text-[#a9afa2]">
                  Waktu yang dulu habis buat pindah tab dan ketik ulang, sekarang kembali ke hal yang benar-benar
                  menghasilkan: jualan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATATAN TEKNIS */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <p className="kicker">07 — Engineering</p>
          <h2 className="h2 mt-3">Catatan teknis.</h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-6">
              <h3 className="font-semibold text-lg text-[#c5f518]">Validasi server-side</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Tiga nilai yang tidak pernah dipercaya dari client: harga CYP, biaya ongkir, dan ketersediaan stok.
                Server mengambil <span className="mono">minimum_price</span> langsung dari database dan memverifikasi
                ongkir lewat API sebelum order dibuat.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg text-[#c5f518]">Stok atomik</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Pengurangan stok dijalankan dalam satu RPC dengan row lock FOR UPDATE, sehingga dua pelanggan yang
                checkout item terakhir di waktu bersamaan tidak bisa membuat stok jadi minus. Kegagalan apa pun otomatis
                di-rollback.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg text-[#c5f518]">Dua model auth kurir</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Tariff Check dan Order Creation J&amp;T memakai signature{' '}
                <span className="mono">base64(hex(md5(data + key)))</span> yang kompatibel dengan format PHP, sementara
                Tracking memakai Basic Auth. Keduanya dipisah per modul supaya tidak tercampur.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg text-[#c5f518]">Area mapping 7.128 baris</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Nama kota dan kecamatan lokal dipetakan ke kode internal J&amp;T —{' '}
                <span className="mono">sendSiteCode</span>, <span className="mono">code3</span>,{' '}
                <span className="mono">destAreaCode</span>, dan <span className="mono">receiverArea</span> — dengan
                fallback bertingkat: kecamatan + kota, kecamatan saja, lalu kota saja.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg text-[#c5f518]">Caching berlapis</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                Ongkir di-cache in-memory dengan TTL 10 menit, hasil pencarian tujuan disimpan di tabel{' '}
                <span className="mono">destination_cache</span>, dan <span className="mono">district_id</span> menempel
                pada alamat tersimpan. Lookup berulang tidak selalu memanggil API.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg text-[#c5f518]">Keamanan</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a9afa2]">
                RLS aktif di seluruh tabel, akses admin diverifikasi ke tabel <span className="mono">admins</span>{' '}
                beserta role-nya, kredensial J&amp;T hanya hidup di environment, API key RajaOngkir disimpan di
                database, dan sesi admin terpisah dari sesi pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* ARSITEKTUR */}
        <section className="border-y border-white/8 bg-[#0e100e] relative overflow-hidden">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
            <p className="kicker">08 — Arsitektur</p>
            <h2 className="h2 mt-3">Arsitektur.</h2>

            <div className="mt-12 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card p-5 text-center">
                  <p className="mono text-xs uppercase tracking-[.2em] text-[#6d7367]">Pelanggan</p>
                </div>
                <div className="card p-5 text-center">
                  <p className="mono text-xs uppercase tracking-[.2em] text-[#6d7367]">Admin</p>
                </div>
              </div>

              <div className="card p-7 border-[rgba(197,245,24,0.3)]">
                <p className="mono text-sm text-[#c5f518]">Next.js App Router (React 19)</p>
                <div className="mt-5 grid md:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-white/8 p-4">
                    <p className="mono text-xs text-[#c5f518]">(customer)</p>
                    <p className="mt-2 text-sm text-[#a9afa2]">
                      katalog · cart · checkout · create-your-price · tracking
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/8 p-4">
                    <p className="mono text-xs text-[#c5f518]">/admin</p>
                    <p className="mt-2 text-sm text-[#a9afa2]">
                      dashboard · pesanan · produk · pelanggan · konten · pengaturan
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/8 p-4">
                    <p className="mono text-xs text-[#c5f518]">API routes</p>
                    <p className="mt-2 text-sm text-[#a9afa2]">/api/orders · /api/shipping · /api/jnt · /api/admin</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="card p-7">
                  <p className="mono text-sm text-[#c5f518]">Supabase</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#a9afa2]">
                    <li className="flex gap-3">
                      <span className="mono text-[#c5f518]">→</span>PostgreSQL + RLS
                    </li>
                    <li className="flex gap-3">
                      <span className="mono text-[#c5f518]">→</span>Auth (admin / pelanggan)
                    </li>
                    <li className="flex gap-3">
                      <span className="mono text-[#c5f518]">→</span>
                      <span className="mono">destination_cache</span>
                    </li>
                  </ul>
                </div>
                <div className="card p-7">
                  <p className="mono text-sm text-[#c5f518]">Integrasi eksternal</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#a9afa2]">
                    <li className="flex gap-3">
                      <span className="mono text-[#c5f518]">→</span>J&amp;T Express API — tariff · order · cancel ·
                      track
                    </li>
                    <li className="flex gap-3">
                      <span className="mono text-[#c5f518]">→</span>RajaOngkir API V2 — ongkir · pencarian tujuan
                    </li>
                    <li className="flex gap-3">
                      <span className="mono text-[#c5f518]">→</span>Cloudinary · Meta Pixel + CAPI
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-[1.05rem] leading-relaxed text-[#a9afa2]">
              Logika bisnis sengaja diletakkan di API routes, bukan di komponen. Klien hanya mengirim niat — server yang
              memutuskan harga final, biaya kirim final, dan apakah stoknya masih ada.
            </p>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
          <p className="kicker">09 — Stack</p>
          <h2 className="h2 mt-3">Tech stack.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="tag">Next.js 16 (App Router)</span>
            <span className="tag">React 19</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Tailwind CSS 4</span>
            <span className="tag">Framer Motion</span>
            <span className="tag">Radix UI</span>
            <span className="tag">Supabase/PostgreSQL</span>
            <span className="tag">Supabase Auth</span>
            <span className="tag">Row Level Security</span>
            <span className="tag">Cloudinary</span>
            <span className="tag">J&amp;T Express API</span>
            <span className="tag">RajaOngkir API V2</span>
            <span className="tag">next-intl</span>
            <span className="tag">Meta Pixel + CAPI</span>
            <span className="tag">JsBarcode</span>
            <span className="tag">Vercel</span>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/8">
          <div className="absolute inset-0 glow"></div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32 text-center">
            <h2 className="h2">Butuh sistem e-commerce serupa?</h2>
            <p className="mt-4 text-[#a9afa2] max-w-xl mx-auto">
              Katalog bertingkat, pembayaran manual terverifikasi, integrasi kurir — dikerjakan end-to-end sampai jalan
              di production.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/6285603324143" className="btn btn-acc rounded-full px-7 py-3.5">
                WhatsApp 085603324143
              </a>
              <Link href="/ut-majene" className="btn btn-ghost rounded-full px-7 py-3.5">
                Case study berikutnya →
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/8">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-8 flex flex-wrap gap-4 items-center justify-between mono text-xs text-[#6d7367]">
            <span>© 2026 Surya — Full-Stack Developer</span>
            <Link href="/" className="hover:text-[#c5f518] transition">
              ← kembali ke beranda
            </Link>
          </div>
        </footer>
      </main>
    </>
  )
}
