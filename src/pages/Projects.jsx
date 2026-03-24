import ProjectCard from "../components/ProjectCard";

const ecoVisionImg = "/images/ecovision.png";
const teachHubImg = "/images/teachhub.png";
const instagramImg = "/images/instagram.png";
const emailImg = "/images/Email.png"; // Fixed the variable name
const ByteBiteImg = "/images/ByteBite.png"

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>

      <p className="text-gray-400 mb-10 md:mb-12 max-w-xl text-sm md:text-base">
        Real-world applications built with modern technologies and best
        practices.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        <ProjectCard
          title="Eco Vision"
          date="Dec 2025"
          icon="🌱"
          image={ecoVisionImg}
          desc="AI powered platform converting waste into business ideas and sustainable products."
          live="https://swadeshi-waste-ai-final.vercel.app/"
          github="https://github.com/princeraj05"
          tech={["React", "Node.js", "MongoDB", "AI", "REST API"]}
        />

        <ProjectCard
          title="TeachHub"
          date="Mar 2026"
          icon="🏫"
          image={teachHubImg}
          desc="Comprehensive school management platform with role-based dashboards for admins, teachers, and students. Features real-time communication, attendance, exams, and class operations."
          live="https://myschool-admin-panel.vercel.app/"
          github="https://github.com/princeraj05/TeachHub"
          tech={["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO", "Tailwind CSS"]}
        />

        <ProjectCard
          title="InstaNova"
          date="2026"
          icon="📸"
          image={instagramImg}
          desc="Full-stack Instagram clone with user authentication, photo uploads, likes, comments, follow system, and a responsive feed — built with the MERN stack."
          live="https://instagram-clone-mern-seven.vercel.app/"
          github="https://github.com/princeraj05/InstaNova"
          tech={["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"]}
        />

        <ProjectCard
          title="Inboxify"
          date="Mar 2025"
          icon="📧"
          image={emailImg}
          desc="Responsive email management dashboard with authentication and profile system."
          live=""
          github="https://github.com/princeraj05/Inboxify"
          tech={["HTML", "Tailwind", "JavaScript", "PHP", "MySQL"]}
        />

        <ProjectCard
  title="ByteBite - Food Ordering Platform"
  date="2026"
  icon="🍔"
  image={ByteBiteImg} // apni image import kar lena
  desc="Full-stack food ordering platform with user & admin panels, JWT authentication, cart system, and order management."
  live="https://byte-bite-bdiak8b1d-princes-projects-d7be7534.vercel.app/"
  github="https://github.com/princeraj05/ByteBite"
  tech={["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"]}
/>
        

      </div>
    </section>
  );
}