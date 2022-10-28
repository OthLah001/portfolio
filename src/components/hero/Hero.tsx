import { TypeAnimation } from 'react-type-animation';
import { SectionClasses } from '../../utils/enums';
import PersonalImage from '../personal-image/PersonalImage';
import AnimateOnScroll from '../shared/AnimateOnScroll/AnimateOnScroll';
import './Hero.scss';

export default function Home() {
  const subTitles = [
    "I build things for the web.",
    1500,
    "I build programs.",
    1500,
    "I make ideas live on the web.",
    1500
  ]

  return (
    <AnimateOnScroll className={`${SectionClasses.HERO} section`} animate='fadeInLeft'>
      <div className="info">
        <p>Hi, my name is</p>
        <h1>
          <span className="name">Othmane Lahrimi</span><br/>
          <span className="specialty">I'm a Full Stack Developer</span>
        </h1>
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