import '../NavBar/NavBar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 441);
            if (window.innerWidth >= 441) {
                setIsSidebarOpen(false); // Close sidebar when switching to desktop
              }
        };
    // Initial check
        handleResize();
    // Add resize listener
    window.addEventListener('resize', handleResize);
    // Cleanup the listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
      };
    return(
        <>
          {/* Desktop Navbar */}
          {!isMobile && (
            <nav className="navegation-bar">
              <Link to ="/"><img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/logo.jpg?raw=true" alt="logo" /></Link>
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
              <Link to="/Menu" className="nav-link">MENU</Link>
              <Link to="/Reservation" className="nav-link">RESERVATION</Link>
              <Link to="/Order online" className="nav-link">ORDER ONLINE</Link>
              <Link to="" className="nav-link">LOG IN</Link>
            </nav>
          )}

          {/* Mobile Navbar */}
          {isMobile && (
            <nav className="mobile-navegation-bar">
              <Link to ="/"><img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/logo.jpg?raw=true" alt="logo" /></Link>
              <div className="burguer-icon" onClick={toggleSidebar} role="button">
                <div className="b-icon"></div>
                <div className="b-icon"></div>
                <div className="b-icon"></div>
              </div>

              {/* Mobile Sidebar */}
              {isSidebarOpen && (
                <aside className="mobile-sidebar">
                <img src="https://github.com/vJeansy/coursera-practice/blob/main/public/Assest/close btn.jpg?raw=true" alt="close btn" onClick={toggleSidebar} role="button" />
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
              <Link to="/Menu" className="nav-link">MENU</Link>
              <Link to="/Reservation" className="nav-link">RESERVATION</Link>
              <Link to="/Order online" className="nav-link">ORDER ONLINE</Link>
              <Link to="" className="nav-link">LOG IN</Link>
                </aside>
              )}
            </nav>
          )}
        </>
      );
    };