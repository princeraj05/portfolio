export default function Skills() {
  const skillGroups = [
    {
      label: "Languages",
      prefix: "</>",
      accent: "purple",
      border: "border-purple-500/30",
      headingColor: "text-purple-400",
      tagBorder: "border-purple-500/50",
      tagText: "text-purple-300",
      tagBg: "bg-purple-500/10",
      tagHover: "hover:bg-purple-500/20 hover:border-purple-400",
      glow: "shadow-purple-500/10",
      skills: [
        { name: "C++", icon: "⚙️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "C", icon: "🔵" },
        { name: "Java", icon: "☕" },
        { name: "PHP", icon: "🐘" },
        { name: "Python", icon: "🐍" },
      ],
    },
    {
      label: "Frameworks & Libraries",
      prefix: "{ }",
      accent: "blue",
      border: "border-blue-500/30",
      headingColor: "text-blue-400",
      tagBorder: "border-blue-500/50",
      tagText: "text-blue-300",
      tagBg: "bg-blue-500/10",
      tagHover: "hover:bg-blue-500/20 hover:border-blue-400",
      glow: "shadow-blue-500/10",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Node.js", icon: "🟩" },
        { name: "Express.js", icon: "🚂" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
      ],
    },
    {
      label: "Tools & Platforms",
      prefix: "[ ]",
      accent: "pink",
      border: "border-pink-500/30",
      headingColor: "text-pink-400",
      tagBorder: "border-pink-500/50",
      tagText: "text-pink-300",
      tagBg: "bg-pink-500/10",
      tagHover: "hover:bg-pink-500/20 hover:border-pink-400",
      glow: "shadow-pink-500/10",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "GitHub", icon: "🐙" },
        { name: "Postman", icon: "📮" },
        { name: "REST APIs", icon: "🔗" },
        { name: "JWT Auth", icon: "🔐" },
      ],
    },
    {
      label: "Soft Skills",
      prefix: "★",
      accent: "emerald",
      border: "border-emerald-500/30",
      headingColor: "text-emerald-400",
      tagBorder: "border-emerald-500/50",
      tagText: "text-emerald-300",
      tagBg: "bg-emerald-500/10",
      tagHover: "hover:bg-emerald-500/20 hover:border-emerald-400",
      glow: "shadow-emerald-500/10",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Work", icon: "🤝" },
        { name: "Adaptability", icon: "🌊" },
        { name: "Leadership", icon: "🎯" },
        { name: "Time Management", icon: "⏰" },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
      <p className="text-gray-400 mb-10 md:mb-12 max-w-xl text-sm md:text-base">
        A toolkit built through projects, courses, and countless hours of practice.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
        {skillGroups.map((group, gi) => (
          <div
            key={gi}
            className={`relative bg-[#1a1a28] rounded-2xl border ${group.border} p-5 md:p-6 shadow-lg ${group.glow} hover:-translate-y-1 transition-transform duration-300 overflow-hidden`}
          >
            {/* Background watermark */}
            <span
              className={`absolute -bottom-3 -right-2 text-7xl md:text-8xl font-black opacity-[0.04] select-none pointer-events-none ${group.headingColor}`}
            >
              {group.prefix}
            </span>

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className={`text-xs font-bold tracking-widest px-2 py-1 rounded-md border ${group.tagBorder} ${group.tagBg} ${group.headingColor}`}
              >
                {group.prefix}
              </span>
              <h3 className={`font-semibold text-sm md:text-base ${group.headingColor} uppercase tracking-wide`}>
                {group.label}
              </h3>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {group.skills.map((skill, si) => (
                <span
                  key={si}
                  className={`inline-flex items-center gap-1.5 border ${group.tagBorder} ${group.tagBg} ${group.tagText} ${group.tagHover} px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 cursor-default`}
                >
                  <span className="text-sm leading-none">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}