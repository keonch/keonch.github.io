import '../assets/stylesheets/Projects.css';
import Project from './Project';
import wheresmytrain from '../assets/images/wheres_my_train.jpg';
import nobasecase from '../assets/images/nobasecase.jpg';
import calendar from '../assets/images/calendar.jpg';

function Projects() {
    return (
        <div className="Projects">
            <Project img={wheresmytrain} title="Where's My Train?" key="wheresmytrain" />
            <Project img={nobasecase} title="No Basecase" key="nobasecase" />
            <Project img={calendar} title="Calendar" key="calendar" />
        </div>
    );
}

export default Projects;
