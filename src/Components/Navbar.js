import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import CurrentUser from '../Hooks/UserCurrent';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const currentUser = CurrentUser();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/Login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="container-nav">
      <h4>Shopping-List-App</h4>
      <div className={`counter-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/About" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/Contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </div>
      <div className="nav-sign">
        {
          currentUser ? (
            <Link onClick={handleLogout} className="nav-logn">LogOut</Link>
          ) : (
            <>
              <Link to="/SignUp" className="nav-logn" onClick={() => setIsMobileMenuOpen(false)}>SignUp</Link>
              <Link to="/Login" className="nav-logn" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </>
          )
        }
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
