import ProjectCard from '../components/ProjectCard';

const PROJECTS = [
  {
    title: "Gardien du Temps",
    description: "Application web pour la gestion du temps de travail dans des structures multi-sites. Permet aux directeurs de pointer et suivre les horaires, établir planning prévisionnel et consulter heures travaillées sur objectif. Aussi, de leurs équipes et aux animateurs de pointer facilement leurs heures.",
    technos: ["React18", "Node.js", "PostgreSQL/Sequelize", "Zustand", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/SonnyBimont/Gardien_du_Temps_React",
    image: "../public/logoGardienDuTemps.png" 
  },
  {
    title: "Sport Relay",
    description: "MarketPlace C2C 'Vinted-Like' dédiée à la vente et à l'achat de matériel de sport entre particuliers avec une communication en temps réel et un tunnel de paiement sécurisé (Stripe).",
    technos: ["Vue3", "NestJS", "PostgreSQL/Sequelize", "TypeScript", "Pinia", "Tailwind CSS"],
    githubUrl: "https://github.com/SonnyBimont/SportRelay_Vue",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" // Image temporaire
  },
    {
    title: "Gest Labo",
    description: "Application full-stack de gestion de stock pour laboratoire. Le projet permet de piloter les articles, les fournisseurs, les seuils d'alerte avec envoie de mails automatiques, les besoins de réapprovisionnement et l'historique d'utilisation, avec authentification JWT et interface Vue 3.",
    technos: ["Vue3", "NestJS", "Vite", "PostgreSQL/Sequelize", "TypeScript", "Axios"],
    githubUrl: "https://github.com/SonnyBimont/Gestion_Labo_Nest_Vue",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" // Image temporaire
  },
  {
    title: "AMC Devis (projet privé)",
    description: "Application web complète pour la création/gestion de devis, gestion CA.",
    technos: ["React18", "Node.js", "PostgreSQL/Sequelize", "Docker", "Axios"],
    githubUrl: "https://github.com/SonnyBimont",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" // Image temporaire
  },
  {
    title: "Gest Prez (projet privé)",
    description: "Gestion des présentoirs, affiches et publications avec suivi des réservations, QR codes publics et maintenance (préventive/curative).",
    technos: ["React18", "Node.js", "Vite", "Firebase", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/SonnyBimont/Gestion_Labo_Nest_Vue",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" // Image temporaire
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Mes Projets</h2>
          <div className="h-[1px] bg-gray-800 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}