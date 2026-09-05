import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, ArrowLeft, Minus, Plus, Check } from "lucide-react";
import { getProductById } from "../services/ProductServices";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState as useLocalState } from "react";

export default function ProductDetails(){
 const {id}=useParams(); const [product,setProduct]=useState(null); const [qty,setQty]=useLocalState(1);
 const {addToCart}=useCart(); const {toggleWishlist,isWishlisted}=useWishlist();
 useEffect(()=>{getProductById(id).then(setProduct).catch(()=>{})},[id]);
 if(!product)return <div className="mx-auto max-w-7xl px-4 py-24 text-center text-slate-500">Loading product...</div>;
 const liked=isWishlisted(product.id);
 return <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
  <Link to="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft size={16}/> Back to shop</Link>
  <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
   <div className="overflow-hidden rounded-[2rem] bg-white p-6 dark:bg-white/[.04]"><img src={product.thumbnail} alt={product.title} className="mx-auto h-[420px] w-full object-contain sm:h-[560px]"/></div>
   <div className="flex flex-col justify-center"><span className="w-fit rounded-full bg-elora-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wider">New arrival</span><h1 className="mt-4 font-display text-4xl sm:text-5xl">{product.title}</h1><div className="mt-4 flex items-center gap-2 text-amber-500"><Star size={16} className="fill-current"/><span className="text-sm text-slate-500">{product.rating?.toFixed(1)} · {product.stock} in stock</span></div><p className="mt-6 text-3xl font-bold">${product.price.toFixed(2)}</p><p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">{product.description}</p>
    <div className="mt-7 flex items-center gap-3"><div className="flex items-center rounded-full border border-slate-200 dark:border-white/10"><button onClick={()=>setQty(Math.max(1,qty-1))} className="p-3"><Minus size={15}/></button><span className="w-8 text-center text-sm">{qty}</span><button onClick={()=>setQty(qty+1)} className="p-3"><Plus size={15}/></button></div><button onClick={()=>addToCart(product,qty)} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-elora-navy px-5 py-3.5 text-sm font-bold text-white hover:bg-elora-blush hover:text-elora-navy"><ShoppingBag size={17}/> Add to bag</button><button onClick={()=>toggleWishlist(product)} className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 dark:border-white/10"><Heart className={liked?"fill-elora-blush text-elora-blush":""}/></button></div>
    <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-500"><div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/5"><Check size={15} className="mb-1"/> Secure checkout</div><div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/5"><Check size={15} className="mb-1"/> Easy returns</div></div>
   </div>
  </div>
 </section>
}
