import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    const address = "123 Lemon Street, Citrus City, CA 90210";
    const phone = "(123) 456-7890";
    const Email = "thelittlelemonr@email.com";
    return(
        <footer>
            <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/Little Lemon Logo footer.png?raw=true" alt="Little Lemon Logo footer" />
            <nav className='nav-container'>
            <span className="nav-title">Doormat Navigation</span>
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
              <Link to="/Menu" className="nav-link">MENU</Link>
              <Link to="/Reservation" className="nav-link">RESERVATION</Link>
              <Link to="/Order online" className="nav-link">ORDER ONLINE</Link>
              <Link to="" className="nav-link">LOG IN</Link>
            </nav>
            <nav className='nav-container'>
                <span className='nav-title'>Contact</span>
                <li className="nav-link">{address}</li>
                <li className="nav-link">{phone}</li>
                <li className="nav-link">{Email}</li>
            </nav>
            <nav className='nav-container'>
            <span className='nav-title'>Connect</span>
                <li className="nav-link"><FontAwesomeIcon icon={faInstagram} /></li>
                <li className="nav-link"><FontAwesomeIcon icon={faFacebook} /></li>
            </nav>
        </footer>
    )
}