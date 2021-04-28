import './Footer.css';
import React from 'react';
import twitter from '../icons/twitter.svg';
import instagram from '../icons/instagram.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="foot-contain">
        <hr id="foot-rule"/>
        <div className="socials">
          <img id="twit" src={twitter} alt="twitter"></img>
          <img id="inst" src={instagram} alt="instagram"></img>
        </div>
        <p id="slogan">Tickitin - Where the B.S. stops and the action starts</p>
        <hr id="foot-div-rule"/>
        <p id="copyr">&#169;2021 - <strong>Tickitin</strong> - All rights reserved. Terms of Service</p>
      </div>
    );
  }
}

export default Footer;