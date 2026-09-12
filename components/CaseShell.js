import Head from 'next/head'
import CaseMotion from './CaseMotion'

export default function CaseShell({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-[1100px] px-5 pt-4">
          <div className="glass rounded-full h-14 px-5 flex items-center justify-between">
            <a href="/#work" className="hidden sm:block text-[13px] text-[#a1a1aa] hover:text-white transition">← Semua project</a>
            <div className="ml-auto flex items-center gap-2"><a href="/cv" className="text-[13px] px-4 py-2 rounded-full border border-white/12 hover:bg-white/5 transition whitespace-nowrap">↓ CV</a><a href="https://wa.me/6285603324143" className="text-[13px] font-medium px-4 py-2 rounded-full text-[#060607] whitespace-nowrap" style={{background:'var(--lime)'}}>Hire me</a></div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-5">
        {children}
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto max-w-[1100px] px-5 flex flex-col sm:flex-row gap-2 justify-between mono text-[11px] text-[#71717a]">
          <span>© 2026 Surya — Full-Stack Software Engineer</span>
          <a href="/" className="hover:text-white transition">← kembali ke beranda</a>
        </div>
      </footer>

      <CaseMotion />
    </>
  )
}
