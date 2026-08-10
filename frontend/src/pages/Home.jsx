import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaCode, FaStar } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Home() {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/princeraj7479/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/princeraj05",
      label: "GitHub",
    },
    {
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/PrinceRajlpu/",
      label: "LeetCode",
    },
    {
      icon: <SiGeeksforgeeks />,
      href: "https://www.geeksforgeeks.org/profile/princerajlpu",
      label: "GeeksForGeeks",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:princerajmne@gmail.com",
      label: "Email",
    },
    {
      icon: <FaPhone />,
      href: "tel:+917479845306",
      label: "Phone",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0f] flex items-center pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 md:px-6 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full text-xs md:text-sm animate-pulse">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Open to Opportunities
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Prince Raj
          </h1>

          <p className="text-purple-400 text-lg md:text-xl font-mono">
            &lt; Full-Stack Developer /&gt;
          </p>

          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
            A passionate Computer Science student building full-stack web applications
            with the MERN stack. I love turning ideas into clean, performant and
            beautiful products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-lg text-white hover:scale-105 transition text-center"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="border border-purple-500 px-6 py-3 rounded-lg text-white hover:bg-purple-500/20 transition text-center"
            >
              Hire Me
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-wrap gap-3 pt-2 text-gray-400 justify-center lg:justify-start">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                title={s.label}
                className="border border-gray-700 p-3 rounded-lg hover:text-purple-400 hover:border-purple-500 transition text-base"
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE AVATAR */}
        <div className="flex justify-center relative mt-10 lg:mt-0">

          <div className="relative w-[220px] md:w-[280px] lg:w-[320px] h-[220px] md:h-[280px] lg:h-[320px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="absolute inset-[6px] rounded-full overflow-hidden bg-[#0a0a0f]">
              <img
                src="/Prince.jpeg"
                alt="Prince Raj"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* FLOATING TAGS */}
          <div className="absolute top-4 md:top-8 right-0 bg-[#14141f] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm border border-purple-500/20 flex items-center gap-2 animate-float">
            <FaCode className="text-purple-400" />
            MERN Stack
          </div>

          <div className="absolute bottom-20 left-0 bg-[#14141f] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm border border-purple-500/20 animate-float-delay">
            <span className="text-green-400">●</span> CGPA: 6.83
          </div>

          <div className="absolute bottom-6 right-6 bg-[#14141f] px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm border border-purple-500/20 flex items-center gap-2 animate-float">
            <FaStar className="text-yellow-400" />
            106+ Problems
          </div>

        </div>
      </div>
    </section>
  );
}