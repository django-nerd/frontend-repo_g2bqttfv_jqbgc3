import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_80%_100%,rgba(99,102,241,.25),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Connect</h2>
          <p className="mt-3 text-indigo-100/80">Open to internship opportunities and collaborations</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-indigo-100/80">Name</label>
              <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-indigo-100/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="you@email.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-indigo-100/80">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Tell me about your project or opportunity..." />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-indigo-100/70 text-sm">Or email me directly: <span className="text-white">your.email@example.com</span></p>
            <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2.5 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition">Send</button>
          </div>
        </motion.form>

        <div className="mt-10 text-center text-indigo-100/60 text-sm">
          © {new Date().getFullYear()} Your Name — Built with care.
        </div>
      </div>
    </section>
  )
}
