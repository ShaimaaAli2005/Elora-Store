import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/ProductServices";
import ProductCard from "./ProductCard";
export default function NewArrivals() {
 const [products,setProducts]=useState([]);
 useEffect(()=>{getProducts().then(p=>setProducts(p.slice(0,8))).catch(()=>setProducts([]))},[]);
 return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
  <div className="mb-8 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-400">Just landed</p><h2 className="mt-2 font-display text-4xl sm:text-5xl">New Arrivals</h2></div><Link to="/shop" className="hidden items-center gap-2 text-sm font-bold sm:flex">View all <ArrowRight size={16}/></Link></div>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>
 </section>
}
