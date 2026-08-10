const leetcodeImg = "/images/leetcode.png";
const hackathonImg = "/images/lpuhackathon.png";
const gfgImg = "/images/gfg.png";

export default function Achievements() {
  const achievements = [
    {
      icon: "💻",
      image: leetcodeImg,
      title: "LeetCode",
      tag: "PrinceRajlpu · Rank 1,399,590",
      description:
        "Actively solving problems on LeetCode with 106 problems solved, a max streak of 35 days, and 152 submissions in the past year.",
      profileLink: "https://leetcode.com/u/PrinceRajlpu/",
      profileLabel: "View LeetCode Profile",
      stats: [
        { label: "Problems Solved", value: "106 / 3873" },
        { label: "Max Streak", value: "35 Days 🔥" },
        { label: "Active Days", value: "51 Days" },
        { label: "Badge", value: "50 Days 2026 🏆" },
      ],
      breakdown: [
        { label: "Easy", value: "50", color: "text-green-400" },
        { label: "Medium", value: "48", color: "text-yellow-400" },
        { label: "Hard", value: "8", color: "text-red-400" },
      ],
    },
    {
      icon: "🥇",
      image: hackathonImg,
      title: "Code-A-Haunt Hackathon",
      tag: "LPU · Feb–Mar 2024",
      description:
        'Qualified Round 2 of the "Code-A-Haunt" 24-hour Hackathon organized by CodingBlocks LPU, Lovely Professional University — showcasing exceptional coding and problem-solving skills.',
      profileLink: null,
      stats: [
        { label: "Duration", value: "24 Hours" },
        { label: "Organizer", value: "CodingBlocks LPU" },
        { label: "Round Cleared", value: "Round 2 ✅" },
        { label: "Certificate", value: "Participation 🎖️" },
      ],
    },
    {
      icon: "🟢",
      image: gfgImg,
      title: "GeeksForGeeks",
      tag: "prince raj · LPU Jalandhar",
      description:
        "Active on GeeksForGeeks with a consistent POTD streak, improving coding score and institute rank at LPU Jalandhar.",
      profileLink: "https://www.geeksforgeeks.org/profile/princerajlpu",
      profileLabel: "View GFG Profile",
      stats: [
        { label: "Coding Score", value: "64" },
        { label: "Problems Solved", value: "14" },
        { label: "POTD Streak", value: "10 Days 🔥" },
        { label: "Institute Rank", value: "10406" },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
      <p className="text-gray-400 mb-12 md:mb-14 max-w-xl text-sm md:text-base">
        Highlights from my academic and coding journey so far.
      </p>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a28] border border-purple-500/20 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            {/* Image */}
            {item.image && (
              <div className="w-full h-48 overflow-hidden bg-[#12121e]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Body */}
            <div className="p-5 md:p-6 flex flex-col flex-1">
              {/* Title Row */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{item.icon}</span>
                <h3 className="font-semibold text-base md:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Tag */}
              <span className="inline-block text-xs text-purple-400 font-medium mb-3">
                {item.tag}
              </span>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Easy / Medium / Hard breakdown — only for LeetCode card */}
              {item.breakdown && (
                <div className="flex items-center gap-3 mb-4">
                  {item.breakdown.map((b, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className={`text-xs font-bold ${b.color}`}>
                        {b.label}
                      </span>
                      <span className="text-xs text-white font-semibold">
                        {b.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {item.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#12121e] border border-purple-500/10 rounded-lg px-3 py-2"
                  >
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-xs font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Profile Link */}
              {item.profileLink && (
                <a
                  href={item.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {item.profileLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}