import { AnimationOnScroll } from 'react-animation-on-scroll';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Button from '../shared/Button/Button';
import './AboutMe.scss';
import Resume from '../../assets/statics/sample.pdf';

export default function AboutMe() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} className="about-container section">
      <SectionTitle title="About me" />

      <div className="content">
        <p className="bio">
          I have more than 3 years of experience and a great deal of knowledge in web development technologies: <span className="skill">Angular</span>,
          <span className="skill"> Vue</span>, <span className="skill">React</span>, <span className="skill">Ionic</span>,<span className="skill">JavaScript</span>,
          <span className="skill"> Typescript</span>, <span className="skill">JQuery</span>, <span className="skill">Scss</span>, <span className="skill">Python</span>,
          <span className="skill"> Django</span>, <span className="skill">Node.js</span>, <span className="skill">Express.js</span>, <span className="skill">SQL Server</span>,
          <span className="skill"> PostgreSQL</span> and <span className="skill">MongoDB</span>. I'm also completely familiar with <span className="skill">AWS</span>,
          <span className="skill"> Heroku</span>Heroku, <span className="skill">Azure</span>, <span className="skill">Git</span>, <span className="skill">Github</span>,
          <span className="skill"> Twilio</span>, <span className="skill">Timekit</span> and <span className="skill">SyncFusion</span>.<br/><br/>
          There are several strong points I would like to share with you. First of all, I am able to <span className="skill">quickly understand what 
          the client wants</span> and what tasks I am required to develop. Besides, I have the potential to keep my patience and and 
          determination for <span className="skill">searching for different methods, strategies, and effective solutions for solving problems</span>. I also 
          love to divide big operations and tasks into multi sub-tasks in order to <span className="skill">track my progress and provide a good quality of code.</span><br/><br/>
          My inbox is always open. Whether you have a question, a new opportunity or just want to say hi, I’ll try my best to get back to you!
        </p>

        <div className="cta">
          <Button text="Contact me" href="mailto:othmane.lahrimi.work@gmail.com" />
          <Button text="Resume" href={Resume} />
        </div>
      </div>
    </AnimationOnScroll>
  )
}