import { AngularImg, CssImg, DjangoImg, ExpressJsImg, HtmlImg, JavaScriptImg, MongoDbImg, NodeJsImg, PostgreSqlImg, PythonImg, ReactImg, ScssImg, SqlServerImg, TypescriptImg, VueImg } from '../../assets/images';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import './Skills.scss';
import ResumeFile from '../../assets/statics/sample.pdf';
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
          Expert in frontend and backend development including technologies like <span className="skill">Angular</span>,
          <span className="skill"> Vue</span>, <span className="skill">React</span>, <span className="skill">Ionic</span>,
          <span className="skill"> Typescript</span>, <span className="skill">Python</span>, <span className="skill">Django</span>,
          <span className="skill"> Node.js</span>, <span className="skill">Express.js</span>, <span className="skill">SQL Server</span>,
          <span className="skill"> PostgreSQL</span> and <span className="skill">MongoDB</span>.<br /><br />
          I’m not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special 
          effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after
          the project's completion. I guarantee a commitment during work on your project.<br /><br />
          Visit my <a href="https://www.linkedin.com/in/othmane-lahrimi/" target="_blank" className="link">Linkedin</a> profile for more details. 
          Also you can checkout my cv on this <a href={ResumeFile} target="_blank" className="link">link</a>.
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