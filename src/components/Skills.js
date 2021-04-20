import '../assets/stylesheets/Skills.css';
import Skill from './Skill.js';
import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import js from '../assets/images/js.png';
import postgresql from '../assets/images/postgresql.png';
import protobuf from '../assets/images/protobuf.png';
import python from '../assets/images/python.png';
import rails from '../assets/images/rails.png';
import react from '../assets/images/react.png';
import redux from '../assets/images/redux.png';
import ruby from '../assets/images/ruby.svg';
import webpack from '../assets/images/webpack.png';
import git from '../assets/images/git.png';

function Skills() {
    return (
        <div className="Skills">
            <Skill img={python} caption="Python3" className="Skill" />
            <Skill img={js} caption="JavaScript" className="Skill" />
            <Skill img={react} caption="React" className="Skill" />
            <Skill img={redux} caption="Redux" className="Skill" />
            <Skill img={ruby} caption="Ruby" className="Skill" />
            <Skill img={rails} caption="Ruby on Rails" className="Skill" />
            <Skill img={postgresql} caption="PostgreSQL" className="Skill" />
            <Skill img={webpack} caption="Webpack" className="Skill" />
            <Skill img={protobuf} caption="Protobuf.js" className="Skill" />
            <Skill img={git} caption="Git" className="Skill" />
            <Skill img={html5} caption="HTML5" className="Skill" />
            <Skill img={css3} caption="CSS3" className="Skill" />
        </div>
    );
}

export default Skills;
