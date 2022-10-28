import { Dispatch, SetStateAction } from 'react';
import { SectionClasses } from '../../utils/enums';
import LogoIcon from '../shared/Icons/LogoIcon';
import './Navbar.scss';

export default function Navbar({ showNav, showLinks, scrollToSectionFct, setShowLinks }: {
  showNav: boolean;
  showLinks: boolean;
  scrollToSectionFct: (cls: string) => void,
  setShowLinks: Dispatch<SetStateAction<boolean>>
}) {
  

  return (
    <div className={`navbar-container ${showNav ? 'show' : 'hide'} ${showLinks ? 'shown-links' : 'hidden-links'}` }>
      <div className="main-menu">
        <p className="home" onClick={() => scrollToSectionFct(`.${SectionClasses.HERO}`)}>
          <LogoIcon />
        </p>
        <p className="mobile-icon" onClick={() => setShowLinks((isShown: boolean) => !isShown)}>&#9776;</p>
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