interface ProjectProps {
  title: string;
  description: string;
  technos: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

export default function ProjectCard({ title, description, technos, githubUrl, demoUrl, image }: ProjectProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-blue-900/20 transition-all duration-300 group hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technos.map((tech, index) => (
            <span key={index} className="text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-gray-800/50">
          <a href={githubUrl} target="_blank" className="text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
            GitHub ↗
          </a>
          {demoUrl && (
            <a href={demoUrl} target="_blank" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center gap-1">
              Démo Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}