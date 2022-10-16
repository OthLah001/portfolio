import './Project.scss';
import ExternalLinkIcon from '../Icons/ExternalLinkIcon';
import GithubIcon from '../Icons/GithubIcon';

export default function Project(
  {image, name, description, techs, links, isReversed}: {
    image: string;
    name: string;
    description: string;
    techs: string[];
    links: {
      github?: string;
      external: string;
    }
    isReversed: boolean;
  }
) {
  const style = {
    backgroundImage: `url(${image})`
  };
  const techsSpans = techs.map(
    (tech, index) => <span key={index} className="tech">{tech}</span>
  )

  return (
    <div className={`project ${isReversed ? 'reversed' : ''}`}>
      <div className="image-link" style={style}>
        <a href={links.external ?? links.github} target="_blank">
        </a>
      </div>

      <div className="info">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
        <p className="techs">{techsSpans}</p>
        <p className="links">
          {links.external && <a href={links.external} target='_blank'><ExternalLinkIcon /></a>}
          {links.github && <a href={links.github} target='_blank'><GithubIcon /></a>}
        </p>
      </div>

    </div>
  )
}