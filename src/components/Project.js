import '../assets/stylesheets/Project.css';

function Project(props) {
    return (
        <div className="Project" onClick={() => props.openModal(props.id)}>
            <div className="project-img" style={{ backgroundImage: `url(${props.img})` }}>
                <span className="project-title">{props.title}</span>
            </div>
        </div>
    );
}


export default Project;