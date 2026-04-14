export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 pt-20 relative overflow-hidden">
      
      {/* Effet de lueur en arrière-plan (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center max-w-3xl relative z-10">
        <p className="text-blue-400 mb-4 font-mono text-sm md:text-base tracking-wide">Bonjour et bienvenue, je m'appelle</p>
        
        {/* Dégradé sur le texte */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Sonny Bimont.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
          Je construis des solutions web.
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Développeur Full Stack React & Node.js. Fort de 12 ans d'expérience en Supply Chain et Immobilier, j'allie rigueur métier et expertise technique pour concevoir des applications fiables et performantes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg transition-all hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-0.5">
            Voir mes projets
          </a>
          <a href="/cv.pdf" target="_blank" className="bg-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 font-medium py-3 px-8 rounded-lg transition-all hover:-translate-y-0.5">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  )
}