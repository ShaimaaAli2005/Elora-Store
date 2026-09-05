import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { getProducts, getProductsByCategory } from "../services/ProductServices";
import ProductCard from "../components/ProductCard";

const categories=[["All",""],["Bags","womens-bags"],["Jewelry","womens-jewellery"],["Beauty","beauty"],["Shoes","womens-shoes"],["Dresses","womens-dresses"],["Accessories","sunglasses"]];

export default function Shop(){
 const [params,setParams]=useSearchParams(); const [products,setProducts]=useState([]); const [loading,setLoading]=useState(true);
 const category=params.get("category")||""; const search=params.get("search")||""; const [sort,setSort]=useState("featured");
 useEffect(()=>{setLoading(true); const fn=category?getProductsByCategory(category):getProducts(); fn.then(setProducts).catch(()=>setProducts([])).finally(()=>setLoading(false));},[category]);
 const filtered=useMemo(()=>{let x=products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase())); if(sort==="low")x.sort((a,b)=>a.price-b.price);if(sort==="high")x.sort((a,b)=>b.price-a.price);return x},[products,search,sort]);
 return <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
  <div className="rounded-[2rem] bg-elora-blue/60 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-elora-navy/60">Elora collection</p><h1 className="mt-2 font-display text-5xl">Shop all things her.</h1><p className="mt-3 max-w-xl text-sm text-elora-navy/70">Bags, jewelry, beauty and more — carefully selected for every version of you.</p></div>
  <div className="mt-8 flex gap-2 overflow-x-auto pb-2">{categories.map(([label,value])=><button key={label} onClick={()=>setParams(value?{category:value}:{})} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${category===value?"bg-elora-navy text-white":"bg-white border border-slate-200 dark:bg-white/5 dark:border-white/10"}`}>{label}</button>)}</div>
  <div className="my-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 text-sm text-slate-500"><SlidersHorizontal size={16}/>{filtered.length} pieces</div><div className="flex items-center gap-2"><input value={search} onChange={e=>setParams({...Object.fromEntries(params),search:e.target.value})} placeholder="Search products..." className="w-48 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none dark:border-white/10 dark:bg-white/5"/><select value={sort} onChange={e=>setSort(e.target.value)} className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none dark:border-white/10 dark:bg-white/5"><option value="featured">Featured</option><option value="low">Price low</option><option value="high">Price high</option></select></div></div>
  {loading?<div className="py-24 text-center text-slate-500">Loading beautiful things...</div>:<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
 </section>
}
