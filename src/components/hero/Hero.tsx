import { TypeAnimation } from 'react-type-animation';
import { SectionClasses } from '../../utils/enums';
import PersonalImage from '../personal-image/PersonalImage';
import AnimateOnScroll from '../shared/AnimateOnScroll/AnimateOnScroll';
import './Hero.scss';

export default function Home() {
  const subTitles = [
    "I build things for the web.",
    1500,
    "I share knowledge about coding.",
    1500,
    "I help others learn programming.",
    1500
  ]

  return (
    <AnimateOnScroll className={`${SectionClasses.HERO} section`} animate='fadeInLeft'>
      <div className="info">
        <p>Hi, my name is</p>
        <h1>Othmane LAHRIMI</h1>
        <h2 className="specialties">I'm a <span className="specialty">Full Stack Developer</span> and <span className="specialty">Content Creator</span>.</h2>
        <TypeAnimation
          sequence={subTitles}
          speed={60}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="sub-title"
        />
      </div>

      <PersonalImage />
    </AnimateOnScroll>
  )
}