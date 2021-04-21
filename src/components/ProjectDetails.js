import '../assets/stylesheets/Modal.css';

function ProjectDetails(props) {
    return (
        <div className="ProjectDetails">
            {props.project_key}
            <div className="modal-close" onClick={props.closeModal}>X</div>
        </div >
    );
}


export default ProjectDetails;