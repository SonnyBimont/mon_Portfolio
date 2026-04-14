export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Initiales */}
        <div className="text-2xl font-bold text-white tracking-tighter">
          SankaDigital<span className="text-blue-500">.</span>
        </div>
        
        {/* Liens de navigation (Masqués sur mobile, visibles sur PC) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#hero" className="hover:text-blue-400 transition-colors">Accueil</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">À Propos</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}