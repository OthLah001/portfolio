import { AngularImg, CssImg, DjangoImg, ExpressJsImg, HtmlImg, JavaScriptImg, MongoDbImg, NodeJsImg, PostgreSqlImg, PythonImg, ReactImg, ScssImg, SqlServerImg, TypescriptImg, VueImg } from '../../assets/images';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import './Skills.scss';
import AnimateOnScroll from '../shared/AnimateOnScroll/AnimateOnScroll';
import '../../assets/js/tagCanvas.min.js';
import { useEffect } from 'react';
import { SectionClasses } from '../../utils/enums';

export default function Skills() {

  // Hack to include TagCanvas scripts in build
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `
      try {
        TagCanvas.Start('myCanvas', null, {
          initial: [0.5, 0.5],
          maxSpeed: 0.025,
          depth: 0.8
        });
      } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
      }
    `;
    document.querySelector('html')?.appendChild(s);
  }, [])

  return (
    <AnimateOnScroll className={`${SectionClasses.SKILLS} section`} animate='fadeInRight'>
      <SectionTitle title="Skills" />

      <div className="skills-info">
        <p className="description">
          <strong>I specialize in both frontend and backend development</strong>, with deep expertise in <span className="skill">Angular</span>, <span className="skill">Django</span>, <span className="skill">Python</span>, <span className="skill">TypeScript</span>, <span className="skill">PostgreSQL</span>, and <span className="skill">MongoDB</span>. I also have experience working with <span className="skill">Vue</span>, <span className="skill">React</span>, <span className="skill">Ionic</span>, <span className="skill">Node.js</span>, <span className="skill">Express.js</span>, and <span className="skill">SQL Server</span>, allowing me to adapt to various project requirements and technologies.
          <br /><br />
          I focus on writing <strong>clean, efficient code</strong> that delivers excellent user experiences, prioritizing <strong>performance, accessibility, and maintainability</strong>.
          <br /><br />
          I have developed <strong>strong communication and leadership skills</strong>, honed as a <strong>Founder and Team Leader</strong> at Othari Advisor. Certifications like the <strong>McKinsey Forward Program</strong> and <strong>STAGE Academy - Communication Skills Certificate</strong> highlight my ability to foster collaboration and deliver results.
        </p>

        <div id="myCanvasContainer" className="logos">
          <canvas id="myCanvas" width="500" height="500">
            <ul>
              <li><a href="#"><img src={HtmlImg} alt="HTML" /></a></li>
              <li><a href="#"><img src={CssImg} alt="CSS" /></a></li>
              <li><a href="#"><img src={ScssImg} alt="Scss" /></a></li>
              <li><a href="#"><img src={JavaScriptImg} alt="JavaScript" /></a></li>
              <li><a href="#"><img src={TypescriptImg} alt="Typescript" /></a></li>
              <li><a href="#"><img src={AngularImg} alt="Angular" /></a></li>
              <li><a href="#"><img src={VueImg} alt="Vue" /></a></li>
              <li><a href="#"><img src={ReactImg} alt="React" /></a></li>
              <li><a href="#"><img src={PythonImg} alt="Python" /></a></li>
              <li><a href="#"><img src={DjangoImg} alt="Django" /></a></li>
              <li><a href="#"><img src={NodeJsImg} alt="NodeJS" /></a></li>
              <li><a href="#"><img src={ExpressJsImg} alt="ExpressJS" /></a></li>
              <li><a href="#"><img src={SqlServerImg} alt="SQLServer" /></a></li>
              <li><a href="#"><img src={PostgreSqlImg} alt="PostgreSQL" /></a></li>
              <li><a href="#"><img src={MongoDbImg} alt="MongoDB" /></a></li>
            </ul>
          </canvas>
        </div>
      </div>
    </AnimateOnScroll>
  )
}