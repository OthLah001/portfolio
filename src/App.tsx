import Hero from "./components/hero/Hero";
import Skills from './components/skills/Skills';
import Projects from "./components/projects/Projects";
import AboutMe from './components/about-me/AboutMe';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
