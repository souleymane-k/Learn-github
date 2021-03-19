import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
  return (
    <div className='headerContainer'>
      <div>
        <Link to='/'className='headerLink'><h2>Diabetes Managing SYstem</h2></Link>
      </div>
      <div className='logInForm'>
          <Link to ='/LogInForm' > Log In</Link>
      </div>
      <div className='signUpform'>
          <Link to ='/SignUpForm' >Sign Up</Link>
      </div>


      {/* { onlineUser ?
      <div className='user__logout'>
          <div className={ !animateMenu ? 'container' : 'container change'} onClick={animateHamburgerMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          { animateMenu &&
          <div className='dropdownContent'>
            <Link to='/home' className='user_home_link'>
              <span onClick={navigateHome}>Home</span>
            </Link>
            <Link to='/' className='logout_user_link'>
              <span onClick={logoutUser}>Logout</span>
            </Link>
          </div>} 
      </div> : null} */}
    </div>
  );
}
}
 export default Header;