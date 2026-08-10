export default function Resume() {

return(

<section className="min-h-screen bg-[#0a0a0f] text-white pt-24 md:pt-28 pb-16 md:pb-20">

<div className="max-w-5xl mx-auto px-4 md:px-6">

<h1 className="text-3xl md:text-5xl font-bold mb-4">
My Resume
</h1>

<p className="text-gray-400 mb-10 md:mb-12 text-sm md:text-base">
You can view my full resume below.
</p>


{/* Resume Preview */}

<div className="flex justify-center">

<img
src="/resume.jpg"
alt="Prince Raj Resume"
className="w-full max-w-[450px] rounded-xl border border-purple-500/20 shadow-lg"
/>

</div>


{/* Download Button */}

<div className="flex justify-center mt-8">

<a
href="/PrinceRajResume.pdf"
download
className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition shadow-lg text-sm md:text-base"
>

⬇ Download Resume

</a>

</div>

</div>

</section>

)

}