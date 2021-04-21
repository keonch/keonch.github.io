import '../assets/stylesheets/Skill.css';

function Skills(props) {
    return (
        <div className="Skill">
            <img className="icon" src={props.img} alt={props.caption} />
            <div className="caption">{props.caption}</div>
        </div>
    );
}

export default Skills;
