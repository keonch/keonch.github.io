import '../assets/stylesheets/Footer.css';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="links">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/keon-choi/">
          <img src={linkedin} alt="linkedin"></img>
          <div>LinkedIn</div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/keonch">
          <img src={github} alt="github"></img>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Footer;
