import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function Promo() {
 return <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
  <div className="grid overflow-hidden rounded-[2rem] bg-elora-blush md:grid-cols-2">
   <div className="p-8 sm:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[.2em] text-elora-navy/60">The Elora edit</p><h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Little luxuries.<br/><i>Big feelings.</i></h2><p className="mt-4 max-w-sm text-sm leading-6 text-elora-navy/70">Find thoughtful pieces for yourself, your best friend, or someone who deserves a little extra love.</p><Link to="/shop" className="mt-7 inline-flex items-center gap-2 rounded-full bg-elora-navy px-6 py-3 text-sm font-bold text-white">Explore the edit <ArrowRight size={16}/></Link></div>
   <div className="relative min-h-64 bg-white/25"><div className="absolute inset-8 rounded-[1.5rem] border border-white/50"/><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">🎀</div></div>
  </div>
 </section>
}
