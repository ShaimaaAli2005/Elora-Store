import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, UserRound, Menu, X, Sun, Moon, ChevronDown, LogOut } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

const nav = [
  ["New Arrivals", "/shop"],
  ["Women", "/shop"],
  ["Bags", "/shop?category=womens-bags"],
  ["Accessories", "/shop?category=womens-jewellery"],
  ["Beauty", "/shop?category=beauty"],
  ["About Us", "/#about"],
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const { dark, setDark } = useTheme();
  const { count } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const submitSearch = e => {
    e.preventDefault();
    if (q.trim()) navigate(`/shop?search=${encodeURIComponent(q.trim())}`);
    setSearch(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-elora-dark/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <div className="grid h-10 w-10 rotate-[-7deg] place-items-center rounded-xl bg-elora-blue text-xl font-bold transition hover:rotate-0">E</div>
          <div className="leading-none">
            <span className="font-display text-2xl font-semibold">Elora</span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">For her, with love</span>
          </div>
        </Link>

        <form onSubmit={submitSearch} className="hidden max-w-xl flex-1 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 md:flex dark:border-white/10 dark:bg-white/5">
          <Search size={18} className="text-slate-400" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search bags, jewelry, beauty..." className="w-full bg-transparent px-3 text-sm outline-none" />
          <select className="hidden border-l border-slate-200 bg-transparent pl-3 text-xs outline-none lg:block dark:border-white/10">
            <option>All Categories</option><option>Bags</option><option>Jewelry</option><option>Beauty</option>
          </select>
          <button className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-elora-navy text-white hover:bg-elora-blush hover:text-elora-navy"><Search size={15}/></button>
        </form>

        <div className="flex items-center gap-0.5">
          <button onClick={() => setSearch(!search)} className="rounded-full p-2.5 hover:bg-slate-100 md:hidden dark:hover:bg-white/10"><Search size={20}/></button>
          <button onClick={() => setDark(!dark)} className="rounded-full p-2.5 hover:bg-slate-100 dark:hover:bg-white/10" title={dark ? "Switch to light mode" : "Switch to dark mode"} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun size={20}/> : <Moon size={20}/>}</button>
          <Link to="/wishlist" className="relative rounded-full p-2.5 hover:bg-slate-100 dark:hover:bg-white/10">
            <Heart size={21} className={wishlist.length ? "fill-elora-blush text-elora-blush" : ""}/>
            {wishlist.length > 0 && <Badge value={wishlist.length}/>}
          </Link>
          <Link to="/cart" className="relative rounded-full p-2.5 hover:bg-slate-100 dark:hover:bg-white/10">
            <ShoppingBag size={21}/>{count > 0 && <Badge value={count} blue/>}
          </Link>
          <div className="group relative hidden border-l border-slate-200 pl-3 md:block dark:border-white/10">
            <button className="flex items-center gap-2 text-sm font-semibold">
              <UserRound size={18}/><span className="max-w-24 truncate">{user ? user.name : "Account"}</span><ChevronDown size={14}/>
            </button>
            <div className="invisible absolute right-0 top-9 w-44 translate-y-2 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#182536]">
              {!user ? <><Link className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/10" to="/login">Login</Link><Link className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/10" to="/register">Create account</Link></> :
                <button onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/10"><LogOut size={15}/> Logout</button>}
            </div>
          </div>
          <button onClick={() => setMobile(!mobile)} className="rounded-full p-2.5 md:hidden">{mobile ? <X/> : <Menu/>}</button>
        </div>
      </div>

      {search && <form onSubmit={submitSearch} className="border-t border-slate-200 p-3 md:hidden dark:border-white/10"><div className="flex items-center rounded-full border border-slate-200 px-4 py-2.5 dark:border-white/10"><Search size={18}/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." className="w-full bg-transparent px-3 outline-none"/></div></form>}

      <nav className="hidden items-center justify-center gap-7 border-t border-slate-100 py-3 md:flex dark:border-white/5">
        {nav.map(([label, to]) => <NavLink key={label} to={to} className={({isActive}) => `relative text-xs font-bold uppercase tracking-[.08em] after:absolute after:-bottom-3 after:left-0 after:h-0.5 after:bg-elora-blush after:transition-all ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}>{label}</NavLink>)}
      </nav>

      {mobile && <div className="border-t border-slate-200 bg-white p-4 md:hidden dark:border-white/10 dark:bg-elora-dark">
        {nav.map(([label,to]) => <Link key={label} to={to} onClick={()=>setMobile(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10">{label}</Link>)}
        <Link to="/wishlist" onClick={()=>setMobile(false)} className="flex justify-between rounded-xl px-4 py-3 text-sm font-semibold">Wishlist <span>{wishlist.length}</span></Link>
        <Link to={user ? "/" : "/login"} onClick={()=>setMobile(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-elora-navy py-3 text-sm font-bold text-white">{user ? "My Account" : "Login / Register"}</Link>
      </div>}
    </header>
  );
}
function Badge({value, blue}) { return <span className={`absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[9px] font-bold ${blue ? "bg-elora-blue" : "bg-elora-blush"} text-elora-navy`}>{value}</span>; }
