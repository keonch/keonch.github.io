import '../assets/stylesheets/Body.css';
import Section from './Section'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'

function Body() {
  const aboutme = <AboutMe></AboutMe>
  const projects = <Projects></Projects>
  const skills = <Skills></Skills>
  return (
    <div className="Body">
      <Section title="About Me" content={aboutme}></Section>
      <div className="divider"></div>
      <Section title="Projects" content={projects}></Section>
      <div className="divider"></div>
      <Section title="Skills" content={skills}></Section>
    </div>
  );
}

export default Body;
