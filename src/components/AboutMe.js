import '../assets/stylesheets/AboutMe.css';
import me from '../assets/images/me.png';
import { summary } from '../assets/documents/summary.js'

function AboutMe() {
    return (
        <div className="AboutMe">
            <img className="me" src={me} alt="me"></img>
            <div className="summary">{summary}</div>
        </div>
    );
}

export default AboutMe;
