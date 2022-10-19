import GithubIcon from '../shared/Icons/GithubIcon';
import EmailIcon from '../shared/Icons/EmailIcon';
import InstagramIcon from '../shared/Icons/InstagramIcon';
import LinkedInIcon from '../shared/Icons/LinkedInIcon';
import LeetcodeIcon from '../shared/Icons/LeetcodeIcon';
import './Social.scss';

export default function Social() {
  return (
    <div className="social-container">
      <a href="https://github.com/OthLah001" target='_blank'>
        <GithubIcon />
      </a>
      <a href="mailto:othmane.lahrimi.work@gmail.com" target='_blank'>
        <EmailIcon />
      </a>
      <a href="https://www.linkedin.com/in/othmane-lahrimi/" target='_blank'>
        <LinkedInIcon />
      </a>
      <a href="https://leetcode.com/__othmane_lh__/" target='_blank'>
        <LeetcodeIcon />
      </a>
      <a href="https://www.instagram.com/_othmane__lh/" target='_blank'>
        <InstagramIcon />
      </a>
    </div>
  )
}