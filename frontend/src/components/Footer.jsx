export default function Footer(){

return(

<footer className="bg-[#0a0a0f] border-t border-purple-500/20 py-12 text-center px-4">

<h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
Prince Raj
</h2>

<div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400 mb-6 text-sm">

<a href="#home" className="hover:text-purple-400">Home</a>
<a href="#about" className="hover:text-purple-400">About</a>
<a href="#projects" className="hover:text-purple-400">Projects</a>
<a href="#contact" className="hover:text-purple-400">Contact</a>

</div>

<div className="flex justify-center gap-4 mb-6">

<a
href="https://linkedin.com/in/princeraj7479"
target="_blank"
className="border border-purple-500/20 p-3 rounded-lg hover:text-purple-400"
>
LinkedIn
</a>

<a
href="https://github.com/princeraj05"
target="_blank"
className="border border-purple-500/20 p-3 rounded-lg hover:text-purple-400"
>
GitHub
</a>

</div>

<p className="text-gray-500 text-xs md:text-sm">
© 2026 Prince Raj • Built with React
</p>

</footer>

)

}