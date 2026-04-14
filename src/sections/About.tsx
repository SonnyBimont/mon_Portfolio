import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiMongodb, 
  SiGit, SiDocker, SiGithubactions
} from 'react-icons/si';
import { FaServer, FaCode, FaCogs } from 'react-icons/fa';

export default function About() {
  const SKILL_CATEGORIES = [
    {
      title: "Frontend",
      icon: <FaCode className="text-gray-400" />,
      skills: [
        { name: "React", icon: <SiReact />, hoverClass: "hover:border-[#61DAFB] hover:text-[#61DAFB]" },
        { name: "Next.js", icon: <SiNextdotjs />, hoverClass: "hover:border-white hover:text-white" },
        { name: "TypeScript", icon: <SiTypescript />, hoverClass: "hover:border-[#3178C6] hover:text-[#3178C6]" },
        { name: "Tailwind", icon: <SiTailwindcss />, hoverClass: "hover:border-[#06B6D4] hover:text-[#06B6D4]" }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-gray-400" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, hoverClass: "hover:border-[#339939] hover:text-[#339939]" },
        { name: "Express", icon: <SiExpress />, hoverClass: "hover:border-gray-300 hover:text-gray-300" },
        { name: "NestJS", icon: <SiNestjs />, hoverClass: "hover:border-[#E0234E] hover:text-[#E0234E]" },
        { name: "PostgreSQL", icon: <SiPostgresql />, hoverClass: "hover:border-[#4169E1] hover:text-[#4169E1]" },
        { name: "MongoDB", icon: <SiMongodb />, hoverClass: "hover:border-[#47A248] hover:text-[#47A248]" }
      ]
    },
    {
      title: "Organisation & Ops",
      icon: <FaCogs className="text-gray-400" />,
      skills: [
        { name: "Git", icon: <SiGit />, hoverClass: "hover:border-[#F05032] hover:text-[#F05032]" },
        { name: "Docker", icon: <SiDocker />, hoverClass: "hover:border-[#2496ED] hover:text-[#2496ED]" },
        { name: "CI/CD", icon: <SiGithubactions />, hoverClass: "hover:border-[#2088FF] hover:text-[#2088FF]" }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 px-4 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">À Propos & Compétences</h2>
          <div className="h-[1px] bg-gray-800 flex-grow"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Colonne de gauche : Pitch */}
          <div className="lg:w-5/12 text-gray-400 text-lg leading-relaxed space-y-6 ">
            <p>
              Mon parcours n'est pas celui d'un développeur classique. Pendant 12 ans, j'ai évolué dans les secteurs de la <strong className="text-gray-200 font-medium">Supply Chain et de l'Immobilier</strong>. J'y ai appris la gestion de flux complexes, la rigueur procédurale et l'importance de répondre précisément aux besoins métier.
            </p>
            <p>
              C'est en cherchant à optimiser ces processus que j'ai découvert le développement. J'ai réalisé que la programmation était le levier le plus puissant pour créer des solutions fiables et évolutives.
            </p>
            <p>
              Aujourd'hui, je combine cette maturité professionnelle avec une stack technique moderne pour concevoir des applications qui répondent à de véritables enjeux d'entreprise.
            </p>
          </div>

          {/* Colonne de droite : Les Badges de Compétences */}
          <div className="lg:w-7/12 flex flex-col gap-10">
            {SKILL_CATEGORIES.map((category, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start">
                {/* Titre de la catégorie avec icône */}
                <h3 className="text-gray-300 font-medium mb-6 flex items-center gap-3 text-lg tracking-wide">
                  {category.icon}
                  {category.title}
                </h3>
                
                {/* Grille des badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-gray-800 bg-gray-950/50 text-gray-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-1 ${skill.hoverClass}`}
                    >
                      <span className="text-xl transition-colors duration-300">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-sm tracking-wide transition-colors duration-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}