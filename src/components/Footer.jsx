import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
export default function Footer() {
 return <footer id="about" className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#0c141b]">
  <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
   <div className="sm:col-span-2 lg:col-span-1"><div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-elora-blue font-bold">E</span><span className="font-display text-2xl">Elora</span></div><p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">A little corner of the internet made for her — from everyday essentials to beautiful little extras.</p><div className="mt-5 flex gap-2"><a className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10"><Instagram size={16}/></a><a className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10"><Facebook size={16}/></a><a className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10"><Mail size={16}/></a></div></div>
   <FooterCol title="Shop" links={[["All Products","/shop"],["Bags","/shop?category=womens-bags"],["Jewelry","/shop?category=womens-jewellery"],["Beauty","/shop?category=beauty"]]}/>
   <FooterCol title="Help" links={[["Contact Us","#"],["Shipping & Returns","#"],["FAQ","#"],["Privacy Policy","#"]]}/>
   <div><h3 className="font-semibold">Elora promise</h3><p className="mt-4 text-sm leading-6 text-slate-500">Thoughtful pieces, easy shopping, secure checkout, and support whenever you need us.</p></div>
  </div>
  <div className="border-t border-slate-100 px-4 py-5 text-center text-xs text-slate-400 dark:border-white/5">© 2026 Elora Store. Made with care.</div>
 </footer>
}
function FooterCol({title,links}){return <div><h3 className="font-semibold">{title}</h3><div className="mt-4 space-y-3">{links.map(([t,u])=><Link key={t} to={u} className="block text-sm text-slate-500 hover:text-elora-navy dark:hover:text-white">{t}</Link>)}</div></div>}
