import { AnimationOnScroll } from 'react-animation-on-scroll';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Project from '../shared/Project/Project';
import './Projects.scss';
import { PROJECTS_DATA } from './data';

export default function Projects() {
  const projects = PROJECTS_DATA.map(
    (project, index) => {
      const props = {...project, isReversed: index%2==1};

      return (
        <AnimationOnScroll key={index} animateIn="animate__fadeInUp" animateOnce={true} className="project-animation">
          <Project {...props}/>
        </AnimationOnScroll>
      )
    }
  )
  

  return (
    <div className="projects-container section">
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
        <SectionTitle title="Projects" />
      </AnimationOnScroll>

      {projects}
    </div>
  )
}