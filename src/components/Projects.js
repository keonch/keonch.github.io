import '../assets/stylesheets/Projects.css';
import '../assets/stylesheets/Modal.css';
import React from 'react';
import Project from './Project';
import ProjectDetails from './ProjectDetails';
import Modal from 'react-modal';
import PROJECT_DETAILS from '../assets/documents/projects.js';

Modal.setAppElement('#root')

class Projects extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            current_project: null
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(id) {
        this.setState({ showModal: true, current_project: id });
    }

    handleCloseModal() {
        this.setState({ showModal: false, current_project: null });
    }

    render() {
        const projects_to_render = Object.entries(PROJECT_DETAILS).map(([key, value]) => (
            <Project img={value.img} title={value.title} key={key} id={key} openModal={this.handleOpenModal} />
        ));
        return (
            <div className="Projects">
                {projects_to_render}
                <Modal
                    className="Modal"
                    overlayClassName="Overlay"
                    isOpen={this.state.showModal}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.handleCloseModal}
                >
                    <ProjectDetails
                        project_key={this.state.current_project}
                        closeModal={this.handleCloseModal}
                        project_details={PROJECT_DETAILS[this.state.current_project]}
                    />
                </Modal>
            </div>
        );
    }
}

export default Projects;
