import '../Footer/Footer.css'

export const Footer = () => {
    return(
        <footer>
            <img src="../Assest/Little Lemon Logo footer.png" alt="Little Lemon Logo footer" />
            <nav className='nav-container'>
            <span className="nav-title">Doormat Navigation</span>
                <li className="nav-link">HOME</li>
                <li className="nav-link">ABOUT</li>
                <li className="nav-link">MENU</li>
                <li className="nav-link">RESERVATION</li>
                <li className="nav-link">ORDER ONLINE</li>
                <li className="nav-link">LOG IN</li>
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