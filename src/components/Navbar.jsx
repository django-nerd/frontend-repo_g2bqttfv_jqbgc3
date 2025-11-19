import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-slate-900/40 shadow-[0_0_60px_-15px_rgba(99,102,241,.35)] supports-[backdrop-filter]:bg-slate-900/30 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 to-sky-400 ring-1 ring-white/20" />
              <span className="text-white/90 font-semibold tracking-tight">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-indigo-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow"
              >
                Hire Me
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-indigo-50/90 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
