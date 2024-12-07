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
          With over 5 years of experience in web development, I have deep expertise in <span className="skill">Angular</span>, <span className="skill">Django</span>, <span className="skill">Python</span>, <span className="skill">TypeScript</span>, <span className="skill">PostgreSQL</span>, and <span className="skill">MongoDB</span>. I also have experience working with <span className="skill">Vue</span>, <span className="skill">React</span>, <span className="skill">Ionic</span>, <span className="skill">Node.js</span>, <span className="skill">Express.js</span>, and <span className="skill">SQL Server</span>. I am well-versed in tools and platforms such as <span className="skill">AWS</span>, <span className="skill">Heroku</span>, <span className="skill">Azure</span>, <span className="skill">Git</span>, <span className="skill">GitHub</span>, <span className="skill">Twilio</span>, <span className="skill">Timekit</span>, and <span className="skill">SyncFusion</span>.
          <br/><br/>
          In addition to being a skilled developer, I’m a content creator, sharing knowledge about programming and development across platforms like YouTube, Instagram, and LinkedIn. My goal is to educate and inspire others in the tech community.
          <br/><br/>
          I’ve also honed strong communication skills, earning certifications such as the STAGE Academy - Communication Skills Certificate and completing the prestigious McKinsey Forward Program.
          <br/><br/>
          What sets me apart is my ability to quickly understand client needs and translate them into effective solutions. I excel at breaking down complex tasks into manageable sub-tasks, ensuring high-quality results.
          <br/><br/>
          My inbox is always open. Whether you have a question, a new opportunity, or just want to connect, I’d love to hear from you!
        </p>

        <div className="cta">
          <Button text="Get in Touch" href="mailto:me@othmanelahrimi.com " />
          <Button text="Resume" href="https://othmanelahrimi.com/Othmane_LAHRIMI_Resume.pdf" />
        </div>
      </div>
    </AnimateOnScroll>
    
  )
}