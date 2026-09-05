import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">
    <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-elora-blue sm:min-h-[570px]">
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/20 blur-2xl"/>
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-elora-blush/25 blur-2xl"/>
      <div className="relative z-10 flex min-h-[500px] items-center px-7 py-12 sm:min-h-[570px] sm:px-12 lg:w-[55%] lg:px-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/50 px-3 py-1.5 text-xs font-bold uppercase tracking-[.15em] text-elora-navy"><Sparkles size={14}/> New season</div>
          <h1 className="max-w-2xl font-display text-5xl leading-[.95] text-elora-navy sm:text-6xl lg:text-7xl">Everything she<br/><i>loves.</i></h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-elora-navy/75 sm:text-base">Bags, jewelry, beauty and little things that make every day feel more like you.</p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 rounded-full bg-elora-navy px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-elora-blush hover:text-elora-navy">Shop the collection <ArrowRight size={17}/></Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-full w-[52%] lg:block">
        <div className="absolute bottom-0 right-10 h-[88%] w-[72%] rounded-t-[50%] bg-white/35"/>
        <div className="absolute bottom-8 right-20 h-72 w-52 rotate-[-8deg] rounded-[45%] border-[16px] border-elora-blush/60 bg-white/25"/>
        <div className="absolute bottom-14 right-32 h-80 w-60 rotate-[10deg] rounded-[42%] border-[12px] border-elora-navy/30 bg-white/30"/>
        <div className="absolute right-8 top-16 rounded-2xl bg-white/75 px-5 py-4 shadow-lg backdrop-blur"><p className="font-display text-3xl">30%</p><p className="text-[10px] font-bold uppercase tracking-widest">selected styles</p></div>
      </div>
    </div>
  </section>;
}
