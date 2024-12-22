import '../Footer/Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return(
        <footer>
            <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/Little Lemon Logo footer.png?raw=true" alt="Little Lemon Logo footer" />
            <nav className='nav-container'>
            <span className="nav-title">Doormat Navigation</span>
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
              <Link to="/Menu" className="nav-link">MENU</Link>
              <Link to="/Reservation" className="nav-link">RESERVATION</Link>
              <Link to="" className="nav-link">ORDER ONLINE</Link>
              <Link to="" className="nav-link">LOG IN</Link>
            </nav>
            <nav className='nav-container'>
                <span className='nav-title'>Contact</span>
                <li className="nav-link">Address</li>
                <li className="nav-link">Phone number</li>
                <li className="nav-link">Email</li>
            </nav>
            <nav className='nav-container'>
            <span className='nav-title'>Contact</span>
                <li className="nav-link">Address</li>
                <li className="nav-link">Phone Number</li>
                <li className="nav-link">Email</li>
            </nav>
        </footer>
    )
}