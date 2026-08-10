import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar(){

const [open,setOpen] = useState(false);

const links = [
{ name:"Home", link:"#home"},
{ name:"About", link:"#about"},
{ name:"Resume", link:"#resume"},
{ name:"Education", link:"#education"},
{ name:"Skills", link:"#skills"},
{ name:"Projects", link:"#projects"},
{ name:"Certifications", link:"#certifications"},
{ name:"Achievements", link:"#achievements"},
{ name:"Contact", link:"#contact"}
]

return(

<nav className="fixed top-0 w-full bg-[#0a0a0f]/80 backdrop-blur border-b border-purple-500/20 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

{/* Logo */}

<div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
PR.
</div>


{/* Desktop Menu */}

<div className="hidden md:flex gap-8 text-sm text-gray-400">

{links.map((item)=>(
<a 
key={item.name}
href={item.link}
className="hover:text-purple-400 transition"
>
{item.name}
</a>
))}

</div>


{/* Mobile Menu Button */}

<div className="md:hidden">

<button onClick={()=>setOpen(!open)}>

{open ? <X size={24}/> : <Menu size={24}/>}

</button>

</div>

</div>


{/* Mobile Menu */}

{open && (

<div className="md:hidden bg-[#0a0a0f] border-t border-purple-500/20">

<div className="flex flex-col px-6 py-4 gap-4 text-gray-400">

{links.map((item)=>(
<a
key={item.name}
href={item.link}
onClick={()=>setOpen(false)}
className="hover:text-purple-400 transition"
>
{item.name}
</a>
))}

</div>

</div>

)}

</nav>

)

}