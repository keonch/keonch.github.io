import '../assets/stylesheets/Section.css';

function Section(props) {
    return (
        <div className="Section">
            <div className="title">{props.title}</div>
            {props.content}
        </div>
    );
}

export default Section;
