import Navbar from './components/navbar/Navbar';
import Hero from "./components/hero/Hero";
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from "./components/projects/Projects";
import AboutMe from './components/about-me/AboutMe';
import Footer from './components/footer/Footer';
import './App.scss';
import Loading from './components/loading/Loading';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [listenToScroll, setListenToScroll] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState<number>(window.pageYOffset);
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [isNavbarInTop, setIsNavbarInTop] = useState<boolean>(true);

  // Listen to scroll so we can either show or hide the navbar
  window.onscroll = function() {
    const currentScrollTop = window.pageYOffset;
    if(currentScrollTop == 0) {
      setShowNav(true);
      setIsNavbarInTop(true);
    } else if(listenToScroll) {
      setIsNavbarInTop(false);
      if (currentScrollTop > lastScrollTop){
        setShowNav(false);
      } else if (currentScrollTop < lastScrollTop) {
        setShowNav(true);
      }
    }
    setLastScrollTop(currentScrollTop);
  }

  const scrollToSectionFct = (cls: string) => {
    // Whenever we're here, the navbar should be hidden
    setListenToScroll(false);
    setShowNav(false);
    setShowLinks(false);
    document.querySelector(cls)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    setTimeout(() => setListenToScroll(true), 1000);
  }

  return (
    <>
      <Loading />
      <Navbar  showNav={showNav} showLinks={showLinks} scrollToSectionFct={scrollToSectionFct} setShowLinks={setShowLinks} />
      <div className="app-container">
        <Hero withMarginTop={isNavbarInTop}/>
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
