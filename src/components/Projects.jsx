import { motion } from 'framer-motion'

const placeholders = new Array(6).fill(0)

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(139,92,246,.25),transparent),radial-gradient(800px_400px_at_100%_60%,rgba(56,189,248,.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="mt-3 text-indigo-100/80">Showcase of selected work — add your images and descriptions later</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((_, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-3 backdrop-blur-xl"
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-[linear-gradient(120deg,rgba(139,92,246,.35),rgba(56,189,248,.35))]">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative mt-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                  <p className="text-sm text-indigo-100/70">Case Study</p>
                </div>
                <h3 className="text-white font-semibold">Project {i + 1}</h3>
                <p className="text-indigo-100/70 text-sm">Short description placeholder. Replace with your own later.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
