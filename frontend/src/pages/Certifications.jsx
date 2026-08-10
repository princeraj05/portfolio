// Place your certificate images in your public/certificates/ folder with these names:
// chatgpt-prompt.png, computational-theory.png, computational-theory2.png,
// digital-systems.jpg, python-ml.jpg, cpp-dsa.png

const certs = [
  {
    img: "/certificates/chatgpt-prompt.png",
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    issuerIcon: "🏢",
    date: "Aug 2025",
    credential: "https://verify.onwingspan.com",
  },
  {
    img: "/certificates/computational-theory.png",
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    issuerIcon: "🏢",
    date: "Aug 20, 2025",
    credential: "https://verify.onwingspan.com",
  },
  {
    img: "/certificates/computational-theory2.png",   // ← Save the new uploaded screenshot here
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    issuerIcon: "🏢",
    date: "Aug 12, 2025",
    credential: "https://verify.onwingspan.com",
  },
  {
    img: "/certificates/digital-systems.jpg",
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Universitat Autònoma de Barcelona · Coursera",
    issuerIcon: "🎓",
    date: "Oct 2024",
    credential: "https://coursera.org/verify/JDIS5O1VKE6W",
  },
  {
    img: "/certificates/python-ml.jpg",
    title: "Unrevealing Basic Python towards ML/AI",
    issuer: "CSE Pathshala",
    issuerIcon: "🐍",
    date: "Mar 2024",
    credential: null,
  },
  {
    img: "/certificates/cpp-dsa.png",
    title: "C++ Programming: OOPs and DSA",
    issuer: "CSE Pathshala",
    issuerIcon: "💻",
    date: "Aug 2025",
    credential: null,
  },
];

export default function Certifications() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
      <p className="text-gray-400 mb-12 md:mb-14 max-w-xl text-sm md:text-base">
        Validated learning through recognized platforms and institutions.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="bg-[#1a1a28] border border-purple-500/20 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col"
          >
            {/* Certificate Image — full image visible */}
            <div className="relative w-full bg-white overflow-hidden">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="w-full h-48 items-center justify-center text-5xl"
                style={{ display: "none" }}
              >
                {cert.issuerIcon}
              </div>

              {/* Subtle gradient at bottom to blend into card */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1a1a28] to-transparent" />
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-1">
              {/* Issuer badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">{cert.issuerIcon}</span>
                <span className="text-purple-400 text-xs font-medium tracking-wide uppercase">
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-white text-sm md:text-base leading-snug mb-3 flex-1">
                {cert.title}
              </h3>

              {/* Footer: date + verify link */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-purple-500/10">
                <span className="text-gray-400 text-xs">{cert.date}</span>
                {cert.credential ? (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                  >
                    Verify
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs text-gray-600">CSE Pathshala</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}