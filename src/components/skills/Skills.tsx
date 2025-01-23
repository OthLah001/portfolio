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
          I specialize in <strong>end-to-end</strong> web development, mastering technologies like <span className="skill">Angular</span>, <span className="skill">Django</span>, <span className="skill">Python</span>, <span className="skill">TypeScript</span>, <span className="skill">PostgreSQL</span>, and <span className="skill">MongoDB</span>. My technical versatility extends to <span className="skill">Vue</span>, <span className="skill">React</span>, <span className="skill">Ionic</span>, <span className="skill">Node.js</span>, <span className="skill">Express.js</span>, and <span className="skill">SQL Server</span>, enabling me to architect solutions that precisely meet diverse project requirements and technological challenges.
          <br /><br />
          I'm committed to writing <strong>clean</strong>, <strong>efficient code</strong> that prioritizes performance, robust user experiences, seamless accessibility, and long-term maintainability. Each project is an opportunity to transform complex technical requirements into elegant, scalable solutions that drive business value.
          <br /><br />
          As a Founder and Technical Lead, I've cultivated <strong>robust leadership and communication skills</strong>. Certifications from the McKinsey Forward Program and STAGE Academy highlight my ability to translate technical complexity into collaborative, results-driven outcomes, bridging the gap between innovative technology and strategic business objectives.
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