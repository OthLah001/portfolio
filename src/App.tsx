import Navbar from './components/navbar/Navbar';
import Hero from "./components/hero/Hero";
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from "./components/projects/Projects";
import AboutMe from './components/about-me/AboutMe';
import Footer from './components/footer/Footer';
import './App.scss';
import Loading from './components/loading/Loading';

function App() {
  return (
    <>
      <Loading />
      <Navbar />
      <div className="app-container">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </>
  )
}

export default App
