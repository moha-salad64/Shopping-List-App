import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import CurrentUser from '../Hooks/UserCurrent';



function Navbar() {

  const Navigate = useNavigate();
  const UserCurrent = CurrentUser();

  const handleLogout = async () => {
    await signOut(auth)
    Navigate('/Login');
  }
  return (
    <nav className='container-nav'>
      <h4>Shopping-List-App</h4>
      <div className='counter-nav'>

        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/About' className='nav-link'>About</Link>
        <Link to='/Contact' className='nav-link'>Contact</Link>

      </div>
      <div className='nav-sign'>
        {
          UserCurrent ? (
            <Link onClick={handleLogout} className='nav-logn'>LogOut</Link>
          ) : (
            <>
              <Link to='/SignUp' className='nav-logn'>SignUp</Link>
              <Link to='/Login' className='nav-logn'>Login</Link>
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
