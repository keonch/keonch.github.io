import '../assets/stylesheets/AboutMe.css';
import me from '../assets/images/me.png';
import { summary } from '../assets/documents/summary.js'

function AboutMe() {
    return (
        <div className="AboutMe">
            <img className="me" src={me} alt="me"></img>
            <div className="summary">{summary}</div>
            <a className="resume-link" target="_blank" rel="noopener noreferrer" href={""}>See Resume</a>
        </div>
    );
}

export default AboutMe;
