import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans selection:bg-blue-500/30 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}

export default App