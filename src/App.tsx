import Hero from "./components/hero/Hero";
import Skills from './components/skills/Skills';
import Projects from "./components/projects/Projects";
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
