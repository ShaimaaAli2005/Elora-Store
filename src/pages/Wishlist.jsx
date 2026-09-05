import { Heart } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";
export default function Wishlist(){const {wishlist}=useWishlist();return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="mb-9 flex items-center gap-3"><Heart className="fill-elora-blush text-elora-blush"/><h1 className="font-display text-5xl">My Favorites</h1></div>{!wishlist.length?<div className="py-24 text-center text-slate-500">Your favorites list is waiting for something lovely.</div>:<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">{wishlist.map(p=><ProductCard key={p.id} product={p}/>)}</div>}</section>}
