import '../assets/stylesheets/Skill.css';

function Skills(props) {
    return (
        <div className="Skill">
            <img className="icon" src={props.img} />
            <div className="caption">{props.caption}</div>
        </div>
    );
}

export default Skills;
