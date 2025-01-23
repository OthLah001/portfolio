import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Button from '../shared/Button/Button';
import './AboutMe.scss';
import AnimateOnScroll from '../shared/AnimateOnScroll/AnimateOnScroll';
import { SectionClasses } from '../../utils/enums';

export default function AboutMe() {
  return (
    <AnimateOnScroll className={`${SectionClasses.ABOUT} section`} animate='fadeInLeft'>
      <SectionTitle title="About me" />

      <div className="content">
        <p className="bio">
          A Senior Full Stack Developer with a transformative approach to technology and learning, I specialize in architecting scalable web solutions that bridge complex business requirements with elegant technical implementations. My 5+ years of expertise spans a robust technology stack including <span className="skill">Angular</span>, <span className="skill">Django</span>, <span className="skill">Python</span>, <span className="skill">TypeScript</span>, and cloud platforms like <span className="skill">AWS</span> and <span className="skill">Heroku</span>.
          <br/><br/>
          Beyond writing code, I'm a passionate tech educator and community builder. Through strategic content creation on YouTube, Instagram, and LinkedIn, I aim to demystify programming concepts and inspire the next generation of developers. My commitment to continuous learning is reflected in certifications from the McKinsey Forward Program and STAGE Academy's Communication Skills Certificate.
          <br/><br/>
          What distinguishes my work is a unique blend of technical precision and strategic thinking. I excel at rapidly understanding client challenges, breaking down complex problems into actionable sub-tasks, and delivering high-impact solutions that drive real business value. My approach combines deep technical expertise with a holistic understanding of system design and user experience.
          <br/><br/>
          My professional philosophy is rooted in continuous growth, knowledge sharing, and transforming technological challenges into opportunities for innovation.
          <br/><br/>
          My inbox is always open. Whether you have a question, a new opportunity, or just want to connect, I’d love to hear from you!
        </p>

        <div className="cta">
          <Button text="Get in Touch" href="mailto:me@othmanelahrimi.com" />
          <Button text="Resume" href="https://othmanelahrimi.com/Othmane_LAHRIMI_Resume.pdf" />
        </div>
      </div>
    </AnimateOnScroll>
    
  )
}