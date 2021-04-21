import '../assets/stylesheets/Projects.css';
import '../assets/stylesheets/Modal.css';
import React from 'react';
import Project from './Project';
import ProjectDetails from './ProjectDetails';
import Modal from 'react-modal';
import wheresmytrain from '../assets/images/wheres_my_train.jpg';
import nobasecase from '../assets/images/nobasecase.jpg';
import calendar from '../assets/images/calendar.jpg';

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
        return (
            <div className="Projects">
                <Project img={wheresmytrain} title="Where's My Train?" id="wheresmytrain" openModal={this.handleOpenModal} />
                <Project img={nobasecase} title="No Basecase" id="nobasecase" openModal={this.handleOpenModal} />
                <Project img={calendar} title="Calendar" id="calendar" openModal={this.handleOpenModal} />
                <Modal
                    className="Modal"
                    overlayClassName="Overlay"
                    isOpen={this.state.showModal}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={this.handleCloseModal}
                >
                    <ProjectDetails project_key={this.state.current_project} closeModal={this.handleCloseModal} />
                </Modal>
            </div>
        );
    }
}

export default Projects;
