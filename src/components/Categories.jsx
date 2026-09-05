import { Link } from "react-router-dom";
const cats = [
  ["Bags","womens-bags","01"],["Jewelry","womens-jewellery","02"],["Beauty","beauty","03"],["Shoes","womens-shoes","04"],["Dresses","womens-dresses","05"],["Sunglasses","sunglasses","06"]
];
export default function Categories() {
 return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="categories">
  <div className="mb-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-400">Shop your mood</p><h2 className="mt-2 font-display text-4xl sm:text-5xl">Made for every side of her.</h2></div>
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
   {cats.map(([name,cat,num]) => <Link key={cat} to={`/shop?category=${cat}`} className="group rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[.04]">
    <div className="mb-5 flex aspect-square items-end justify-between rounded-2xl bg-gradient-to-br from-elora-blue/70 to-elora-blush/40 p-3"><span className="text-xs font-bold text-elora-navy/60">{num}</span><span className="text-3xl transition group-hover:scale-110">{name==="Bags"?"👜":name==="Jewelry"?"💎":name==="Beauty"?"💄":name==="Shoes"?"👠":name==="Dresses"?"👗":"🕶️"}</span></div>
    <p className="font-semibold">{name}</p><span className="text-xs text-slate-400">Explore →</span>
   </Link>)}
  </div>
 </section>
}
