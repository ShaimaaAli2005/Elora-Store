import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
export default function Newsletter() {
 const [email,setEmail]=useState(""); const [sent,setSent]=useState(false);
 const submit=e=>{e.preventDefault();if(email){setSent(true);setEmail("")}};
 return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
  <div className="rounded-[2rem] bg-elora-blue/60 p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-12">
   <div className="flex items-center gap-4"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white"><Mail/></div><div><p className="text-xs font-bold uppercase tracking-[.2em] text-elora-navy/60">Stay in the know</p><h2 className="mt-1 font-display text-2xl sm:text-3xl">A little note from Elora.</h2></div></div>
   <form onSubmit={submit} className="mt-6 flex max-w-lg rounded-full bg-white p-1.5 lg:mt-0"><input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Your email address" className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-elora-navy outline-none"/><button className="flex shrink-0 items-center gap-2 rounded-full bg-elora-navy px-5 py-3 text-xs font-bold text-white">{sent?"Subscribed":"Subscribe"} <ArrowRight size={14}/></button></form>
  </div>
 </section>
}
