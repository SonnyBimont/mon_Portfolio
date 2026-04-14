export default function Contact() {
  return (
    <footer id="contact" className="py-12 bg-gray-900 border-t border-gray-800 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Prêt à collaborer ?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Je suis actuellement à la recherche de nouvelles opportunités en tant que développeur Full Stack. N'hésitez pas à me contacter pour échanger sur vos projets.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          {/* Remplacez les "#" par vos vrais liens */}
          <a href="https://www.linkedin.com/in/sonny-bimont/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">LinkedIn</a>
          <a href="https://github.com/SonnyBimont" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">GitHub</a>
          <a href="mailto:sankadigital@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Email</a>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Sanka Digital. Hébergé sur VPS Hostinger (Ubuntu/Nginx).
        </p>
      </div>
    </footer>
  );
}