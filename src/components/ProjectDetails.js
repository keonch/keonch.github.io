import '../assets/stylesheets/Modal.css';

function ProjectDetails(props) {
    const project_details = props.project_details || {}
    const technologies = project_details.technologies && project_details.technologies.map(tech => (
        <div className="project-details-tech" key={tech} >{tech}</div>
    ));
    return (
        <div className="ProjectDetails">
            <div className="modal-close" onClick={props.closeModal}>X</div>
            <div className="project-details-title">{project_details.title}</div>
            <div className="project-details-sidebar">
                <div className="project-details-technologies">
                    <div className="project-details-technologies-subtitle">Technologies Used</div>
                    {technologies}
                </div>
                <a className="project-details-link" target="_blank" rel="noopener noreferrer" href={project_details.link}>See Live</a>
            </div>
            <div className="project-details-description">{project_details.description}</div>
        </div >
    );
}


export default ProjectDetails;