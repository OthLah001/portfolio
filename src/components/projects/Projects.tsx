import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Project from '../shared/Project/Project';
import './Projects.scss';
import { PROJECTS_DATA } from './data';
import AnimateOnScroll from '../shared/AnimateOnScroll/AnimateOnScroll';
import { SectionClasses } from '../../utils/enums';

export default function Projects() {
  const projects = PROJECTS_DATA.map(
    (project, index) => {
      const props = {...project, isReversed: index%2==1};

      return (
        <AnimateOnScroll key={index} className="project-animation" animate='fadeInBottom'>
          <Project {...props}/>
        </AnimateOnScroll>
      )
    }
  )
  

  return (
    <div className={`${SectionClasses.PROJECTS} section`} >
      <AnimateOnScroll animate='fadeInRight' className="title">
        <SectionTitle title="Projects" />
      </AnimateOnScroll>

      {projects}
    </div>
  )
}