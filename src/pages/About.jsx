import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About(){

return(

<section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE */}

<div>

<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
About Me
</h2>

<p className="text-gray-400 mb-6 text-sm md:text-base">
Hi! I'm <span className="text-purple-400 font-semibold">Prince Raj</span>, 
a B.Tech Computer Science student at 
<span className="text-purple-400 font-semibold"> Lovely Professional University</span>.
I’m passionate about building modern and scalable full-stack web applications.
</p>

<p className="text-gray-400 mb-6 text-sm md:text-base">
I specialize in the <span className="text-purple-400 font-semibold">MERN Stack</span>
(MongoDB, Express, React, Node.js) and enjoy creating elegant user interfaces
along with efficient backend systems.
</p>

<p className="text-gray-400 mb-8 text-sm md:text-base">
Apart from development, I actively practice
<span className="text-purple-400 font-semibold"> Data Structures & Algorithms</span>
and have solved <span className="text-purple-400 font-semibold">200+ problems</span>
on platforms like LeetCode and HackerRank to strengthen my problem-solving skills.
</p>

{/* CONTACT INFO */}

<div className="space-y-4 text-gray-400 text-sm md:text-base">

<div className="flex items-center gap-3">
<FaMapMarkerAlt className="text-purple-400"/>
Phagwara, Punjab (Originally from Bihar)
</div>

<div className="flex items-center gap-3">
<FaEnvelope className="text-purple-400"/>
princerajmne@gmail.com
</div>

<div className="flex items-center gap-3">
<FaPhone className="text-purple-400"/>
+91 7479845306
</div>

<div className="flex items-center gap-3">
<FaGithub className="text-purple-400"/>
github.com/princeraj05
</div>

<div className="flex items-center gap-3">
<FaLinkedin className="text-purple-400"/>
linkedin.com/in/princeraj7479
</div>

</div>

</div>


{/* RIGHT SIDE STATS */}

<div className="grid grid-cols-2 gap-4 md:gap-6">

<div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
<h3 className="text-2xl md:text-3xl font-bold text-purple-400">3+</h3>
<p className="text-gray-400 text-sm md:text-base">Projects Built</p>
</div>

<div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
<h3 className="text-2xl md:text-3xl font-bold text-purple-400">200+</h3>
<p className="text-gray-400 text-sm md:text-base">Problems Solved</p>
</div>

<div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
<h3 className="text-2xl md:text-3xl font-bold text-purple-400">3+</h3>
<p className="text-gray-400 text-sm md:text-base">Certifications</p>
</div>

<div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
<h3 className="text-2xl md:text-3xl font-bold text-purple-400">6.83</h3>
<p className="text-gray-400 text-sm md:text-base">CGPA (B.Tech)</p>
</div>

{/* RESUME BUTTON */}

<div className="col-span-2 flex justify-center mt-4">

<a
href="/PrinceRajResume.pdf"
target="_blank"
rel="noopener noreferrer"
className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 md:px-8 py-3 rounded-lg text-white hover:scale-105 transition text-sm md:text-base"
>
📄 View Resume
</a>

</div>

</div>

</section>

)

}