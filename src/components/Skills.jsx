import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Server } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'TailwindCSS', 'TypeScript', 'Framer Motion'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'Node.js', 'MongoDB', 'REST API'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'UI/UX', 'Responsive', 'Accessibility'] },
  { icon: Rocket, title: 'Other', items: ['Git', 'Agile', 'Problem Solving', 'Communication'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(99,102,241,.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <p className="mt-3 text-indigo-100/80">A snapshot of tools I use to ship polished experiences</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-sky-400 text-slate-900">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-indigo-100/80">
                {items.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
