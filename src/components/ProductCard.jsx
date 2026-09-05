import { Heart, ShoppingBag, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";

export default function ProductCard({ product }) {
 const { addToCart } = useCart();
 const { toggleWishlist, isWishlisted } = useWishlist();
 const [added,setAdded] = useState(false);
 const liked = isWishlisted(product.id);
 const add = () => { addToCart(product); setAdded(true); setTimeout(()=>setAdded(false),1200); };
 return <article className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[.04]">
   <div className="relative aspect-[.9] overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5">
    <Link to={`/product/${product.id}`}><img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/></Link>
    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-elora-navy dark:bg-elora-dark">New</span>
    <button onClick={()=>toggleWishlist(product)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110 dark:bg-elora-dark/90"><Heart size={17} className={liked?"fill-elora-blush text-elora-blush":""}/></button>
    <button onClick={add} className="absolute bottom-3 left-3 right-3 flex translate-y-12 items-center justify-center gap-2 rounded-full bg-elora-navy py-3 text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-elora-blush hover:text-elora-navy">{added?<><Check size={15}/> Added</>:<><ShoppingBag size={15}/> Add to bag</>}</button>
   </div>
   <div className="px-2 pb-2 pt-4">
    <div className="mb-1 flex items-center gap-1 text-amber-500"><Star size={12} className="fill-current"/><span className="text-[11px] text-slate-500">{product.rating?.toFixed(1)}</span></div>
    <Link to={`/product/${product.id}`} className="line-clamp-1 font-semibold hover:text-slate-500">{product.title}</Link>
    <div className="mt-2 flex items-center gap-2"><b>${product.price.toFixed(2)}</b><span className="text-xs text-slate-400 line-through">${(product.price*1.2).toFixed(2)}</span></div>
   </div>
 </article>;
}
