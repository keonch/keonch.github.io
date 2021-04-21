import '../assets/stylesheets/Project.css';

function Project(props) {
    return (
        <div className="Project" onClick={() => props.openModal(props.id)}>
            <img className="project-img" src={props.img}></img>
            <div className="project-title">{props.title}</div>
        </div>
    );
}


export default Project;