import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden bg-slate-950">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(139,92,246,.35),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(56,189,248,.25),transparent)]" />

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[.15]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />

      {/* 3D Spline */}
      <div className="relative mx-auto max-w-7xl h-[420px] md:h-[520px] lg:h-[620px]">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 -mt-10 md:-mt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-indigo-100/90">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 animate-pulse" />
              Available for Internships
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Hi, I’m <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-indigo-100/80 text-lg leading-relaxed">
              5th semester Information Systems student passionate about building delightful digital products. I enjoy transforming ideas into interactive, user‑friendly experiences.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2.5 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition">View Projects</a>
              <a href="#contact" className="rounded-xl border border-white/15 px-5 py-2.5 text-indigo-100/90 hover:bg-white/5 transition">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
