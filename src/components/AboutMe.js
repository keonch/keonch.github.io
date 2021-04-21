import '../assets/stylesheets/AboutMe.css';
import me from '../assets/images/me.png';
import resume from '../assets/documents/keon_choi_resume.pdf';
import { summary } from '../assets/documents/summary.js'

function AboutMe() {
    return (
        <div className="AboutMe">
            <img className="me" src={me} alt="me"></img>
            <div className="summary">{summary}</div>
            <a className="resume-link" target="_blank" rel="noopener noreferrer" href={resume}>See Resume</a>
        </div>
    );
}

export default AboutMe;
