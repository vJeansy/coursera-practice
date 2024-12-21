import '../NavBar/NavBar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 415);
            if (window.innerWidth >= 415) {
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
              <img src="../Assest/logo.jpg" alt="logo" />
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
              <Link to="/Menu" className="nav-link">MENU</Link>
              <Link to="/Reservation" className="nav-link">RESERVATION</Link>
              <Link to="" className="nav-link">ORDER ONLINE</Link>
              <Link to="" className="nav-link">LOG IN</Link>
            </nav>
          )}

          {/* Mobile Navbar */}
          {isMobile && (
            <nav className="mobile-navegation-bar">
              <img src="../Assest/logo.jpg" alt="logo" />
              <div className="burguer-icon" onClick={toggleSidebar} role="button">
                <div className="b-icon"></div>
                <div className="b-icon"></div>
                <div className="b-icon"></div>
              </div>

              {/* Mobile Sidebar */}
              {isSidebarOpen && (
                <aside className="mobile-sidebar">
                <img src="../Assest/close btn.jpg" alt="close btn" onClick={toggleSidebar} role="button" />
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/About" className="nav-link">ABOUT</Link>
              <Link to="/Menu" className="nav-link">MENU</Link>
              <Link to="/Reservation" className="nav-link">RESERVATION</Link>
              <Link to="" className="nav-link">ORDER ONLINE</Link>
              <Link to="" className="nav-link">LOG IN</Link>
                </aside>
              )}
            </nav>
          )}
        </>
      );
    };