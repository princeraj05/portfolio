import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-purple-400 shrink-0" />,
      label: "Phagwara, Punjab (Originally from Bihar)",
      href: "https://maps.google.com/?q=Phagwara,Punjab",
    },
    {
      icon: <FaEnvelope className="text-purple-400 shrink-0" />,
      label: "princerajmne@gmail.com",
      href: "mailto:princerajmne@gmail.com",
    },
    {
      icon: <FaPhone className="text-purple-400 shrink-0" />,
      label: "+91 7479845306",
      href: "tel:+917479845306",
    },
    {
      icon: <FaGithub className="text-purple-400 shrink-0" />,
      label: "github.com/princeraj05",
      href: "https://github.com/princeraj05",
    },
    {
      icon: <FaLinkedin className="text-purple-400 shrink-0" />,
      label: "linkedin.com/in/princeraj7479",
      href: "https://www.linkedin.com/in/princeraj7479/",
    },
  ];

  return (
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
          I'm passionate about building modern and scalable full-stack web applications.
        </p>

        <p className="text-gray-400 mb-6 text-sm md:text-base">
          I specialize in the <span className="text-purple-400 font-semibold">MERN Stack</span>
          (MongoDB, Express, React, Node.js) and enjoy creating elegant user interfaces
          along with efficient backend systems.
        </p>

        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Apart from development, I actively practice
          <span className="text-purple-400 font-semibold"> Data Structures & Algorithms</span>
          and have solved <span className="text-purple-400 font-semibold">106+ problems</span>
          on platforms like LeetCode and GeeksForGeeks to strengthen my problem-solving skills.
        </p>

        {/* CONTACT INFO — all clickable */}
        <div className="space-y-3 text-sm md:text-base">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-200 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="group-hover:underline underline-offset-2">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE STATS */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400">3+</h3>
          <p className="text-gray-400 text-sm md:text-base">Projects Built</p>
        </div>

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400">106+</h3>
          <p className="text-gray-400 text-sm md:text-base">Problems Solved</p>
        </div>

        <div className="bg-[#14141f] border border-purple-500/20 p-6 md:p-8 rounded-xl text-center hover:border-purple-500 transition">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400">5+</h3>
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
  );
}