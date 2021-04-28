import './Header.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import tickLogo from '../images/tickitin-logo-lowres.png';

class Header extends React.Component {
  render() {
    return (
      <div className="head-contain">
        <img id="big-t-logo" src={tickLogo} alt="logo"></img>
        <div className="head-links">
          <p>Explore</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className="head-r-ui">
          <div id="head-search">
            <SearchBar placeholder="Search..." />
          </div>
          <div id="login-btn">
            <p id="lisu">Login / Sign Up</p>
          </div>
        </div>
        <hr id="head-rule"/>
      </div>
    );
  }
}

export default Header;