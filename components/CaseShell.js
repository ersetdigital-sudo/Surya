import Head from 'next/head'
import CaseMotion from './CaseMotion'

export default function CaseShell({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className="site-head">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-5 pt-4">
          <div className="glass rounded-[26px] md:rounded-full h-14 px-4 sm:px-5 flex items-center justify-between gap-3">
            <a href="/#work" className="text-[13px] text-[#a1a1aa] hover:text-white transition whitespace-nowrap shrink-0">←<span className="hidden sm:inline"> Semua project</span><span className="sm:hidden"> Back</span></a>
            <div className="ml-auto flex items-center gap-2">
              <a href="/cv" className="nav-btn nav-btn--ghost">
                <span className="nav-btn__icon">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 4.5v10" /><path d="m7.75 10.25 4.25 4.25 4.25-4.25" /><path d="M5 19.5h14" />
                  </svg>
                </span>
                CV
              </a>
              <a href="https://wa.me/6285603324143" className="nav-btn nav-btn--primary">Hire me</a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-4 sm:px-5">
        {children}
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-5 flex flex-col sm:flex-row gap-2 justify-between mono text-[11px] text-[#71717a]">
          <span>© 2026 Surya — Full-Stack Software Engineer</span>
          <a href="/" className="hover:text-white transition">← kembali ke beranda</a>
        </div>
      </footer>

      <CaseMotion />
    </>
  )
}
