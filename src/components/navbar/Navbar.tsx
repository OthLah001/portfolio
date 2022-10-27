import { useState } from 'react';
import { SectionClasses } from '../../utils/enums';
import LogoIcon from '../shared/Icons/LogoIcon';
import './Navbar.scss';

export default function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [listenToScroll, setListenToScroll] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState<number>(window.pageYOffset);
  const [showLinks, setShowLinks] = useState<boolean>(false);

  // Listen to scroll so we can either show or hide the navbar
  window.onscroll = function() { 
    const currentScrollTop = window.pageYOffset;
    if(currentScrollTop == 0) {
      setShowNav(true);
    } else if(listenToScroll) {
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
    <div className={`navbar-container ${showNav ? 'show' : 'hide'} ${showLinks ? 'shown-links' : 'hidden-links'}` }>
      <div className="main-menu">
        <p className="home" onClick={() => scrollToSectionFct(`.${SectionClasses.HERO}`)}>
          <LogoIcon />
        </p>
        <p className="mobile-icon" onClick={() => setShowLinks(isShown => !isShown)}>&#9776;</p>
      </div>

      <div className={`sections-link ${showLinks ? 'show-links' : 'hide-links'}`}>
        <p onClick={() => scrollToSectionFct(`.${SectionClasses.SKILLS}`)}><span className="number">01.</span> Skills</p>
        <p onClick={() => scrollToSectionFct(`.${SectionClasses.EXPERIENCE}`)}><span className="number">02.</span> Experience</p>
        <p onClick={() => scrollToSectionFct(`.${SectionClasses.PROJECTS}`)}><span className="number">03.</span> Projects</p>
        <p onClick={() => scrollToSectionFct(`.${SectionClasses.ABOUT}`)}><span className="number">04.</span> About</p>
      </div>
    </div>
  )
};