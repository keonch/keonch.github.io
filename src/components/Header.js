import '../assets/stylesheets/Header.css';
import location from '../assets/images/location.svg'
import mail from '../assets/images/mail.svg'
import telephone from '../assets/images/telephone.svg'

function Header() {
  return (
    <div className="Header">
      <div className="name">Keon Choi</div>
      <div className="info">
        <img src={location}></img>
        <div className="info-text">New York, NY</div>

        <img src={mail}></img>
        <div className="info-text">keonch91@gmail.com</div>

        <img src={telephone}></img>
        <div className="info-text">646-520-7420</div>
      </div>
    </div>
  );
}

export default Header;

