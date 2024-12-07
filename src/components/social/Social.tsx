import GithubIcon from '../shared/Icons/GithubIcon';
import EmailIcon from '../shared/Icons/EmailIcon';
import InstagramIcon from '../shared/Icons/InstagramIcon';
import LinkedInIcon from '../shared/Icons/LinkedInIcon';
import LeetcodeIcon from '../shared/Icons/LeetcodeIcon';
import './Social.scss';
import YoutubeIcon from '../shared/Icons/YoutubeIcon';

export default function Social() {
  return (
    <div className="social-container">
      <a href="https://github.com/OthLah001" target='_blank'>
        <GithubIcon />
      </a>
      <a href="mailto:me@othmanelahrimi.com" target='_blank'>
        <EmailIcon />
      </a>
      <a href="https://www.linkedin.com/in/othmane-lahrimi/" target='_blank'>
        <LinkedInIcon />
      </a>
      <a href="https://www.youtube.com/@DevOL-001/" target='_blank'>
        <YoutubeIcon />
      </a>
      <a href="https://www.instagram.com/_dev__ol/" target='_blank'>
        <InstagramIcon />
      </a>
      <a href="https://leetcode.com/__othmane_lh__/" target='_blank'>
        <LeetcodeIcon />
      </a>
    </div>
  )
}