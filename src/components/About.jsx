import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_100%,rgba(139,92,246,.25),transparent),radial-gradient(800px_400px_at_100%_0%,rgba(56,189,248,.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="text-indigo-100/80 leading-relaxed">
              I’m an aspiring product-minded engineer who loves the intersection of design and development. My focus is on crafting accessible, performant interfaces with a clean aesthetic and meaningful motion.
            </p>
            <p className="text-indigo-100/80 leading-relaxed">
              Outside coding, I enjoy UI/UX, tinkering with new tools, and learning by building. I value clarity, collaboration, and shipping things that people love to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 p-1">
              <div className="rounded-xl bg-slate-900/60 p-6">
                <ul className="grid grid-cols-2 gap-4 text-indigo-100/90">
                  <li className="rounded-lg bg-white/5 p-4">React & TailwindCSS</li>
                  <li className="rounded-lg bg-white/5 p-4">Framer Motion</li>
                  <li className="rounded-lg bg-white/5 p-4">FastAPI / Node</li>
                  <li className="rounded-lg bg-white/5 p-4">MongoDB / SQL</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
