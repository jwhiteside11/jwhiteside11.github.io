import './App.css';
import React from 'react';
import CategoryCarousel from './CategoryCarousel/CategoryCarousel';
import TicketCarousel from './TicketCarousel/TicketCarousel';
import FeaturedCarousel from './FeaturedCarousel/FeaturedCarousel';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Subtitle from './Subtitle/Subtitle';

import graphic1 from './images/ticket-listing-ex.jpg';
import graphic2 from './images/los-hombres-g.jpg';
import graphic3 from './images/jazz-aspen.jpg';
import graphic4 from './images/maren-morris.jpg';
import baseball from './images/baseball-sample.jpg';
import football from './images/football-samp.jpg';
import basketball from './images/basketball-samp.jpg';
import soccer from './images/soccer-samp.jpg';
import hockey from './images/hockey-samp.jpg';
import feat1 from './images/featured-samp.jpeg';
import feat2  from './images/nyc-show-samp.jpg';
import feat3 from './images/tickitin-building.jpg';

const featObj1 = {name: "Goodie MOB & Ceelo Green", graphic: feat1, month: "April", day: "24", year: "2021", dayOfWeek: "Saturday", time: "20", venue: "The New Parish", location: "Oakland, CA", startPrice: "86"};
const featObj2 = {name: "Los Hombres G", graphic: feat2, month: "June", day: "6", year: "2021", dayOfWeek: "Sunday", time: "19", venue: "Del Mar Fairgrounds", location: "Del Mar, CA", startPrice: "101"};
const featObj3 = {name: "Maren Morris", graphic: feat3, month: "May", day: "1", year: "2021", dayOfWeek: "Saturday", time: "23", venue: "Tuscaloosa Ampitheater", location: "Tuscaloosa, AL", startPrice: "57"};
const featEvents = [featObj2, featObj1, featObj3];

const goodieMob = {graphicURL: graphic1, graphicColor: "#000000", month: "April", day: "24", year: "2021", dayOfWeek: "Saturday", time: "20", venue: "The New Parish", location: "Oakland, CA", startPrice: "86"}
const hombres = {graphicURL: graphic2, graphicColor: "#271513", month: "June", day: "6", year: "2021", dayOfWeek: "Sunday", time: "19", venue: "Del Mar Fairgrounds", location: "Del Mar, CA", startPrice: "101"}
const austin = {graphicURL: graphic3, graphicColor: "#385eb3", month: "September", day: "4", year: "2021", dayOfWeek: "Saturday", time: "13", venue: "Snowmass Village at Town Park", location: "Snowmass Village, CO", startPrice: "295"}
const maren = {graphicURL: graphic4, graphicColor: "#26a5d8", month: "May", day: "1", year: "2021", dayOfWeek: "Saturday", time: "23", venue: "Tuscaloosa Ampitheater", location: "Tuscaloosa, AL", startPrice: "57"}
const eventsForYou = [goodieMob, hombres, austin, maren, austin, goodieMob, maren, hombres, austin, goodieMob, maren, hombres, austin, goodieMob, maren, hombres];

const baseb = {graphic: baseball, name: "Baseball"};
const footb = {graphic: football, name: "Football"};
const basketb = {graphic: basketball, name: "Basketball"};
const socc = {graphic: soccer, name: "Soccer"};
const hock = {graphic: hockey, name: "Hockey"};
const bigCat = [baseb, footb, basketb, socc, hock, socc, baseb, hock, footb, socc, footb, baseb, hock, socc, baseb, footb, hock, basketb, footb];
const medCat = [footb, hock, footb, hock, socc, baseb, footb, hock, basketb, socc];
const smallCat = [hock, socc, baseb, footb, hock, basketb];
const lastCat = [ socc, baseb, footb, hock, basketb, hock, socc, baseb, footb, hock, basketb];

function App() {
  return (
    <div className="app-contain">
      <Header />

      <div className="first-block">
        <div className="feat-title-wrap">
          <TitleBlock title="Featured" width="18vw"/>
        </div>
        <div className="welc-contain">
          <WelcomeBlock />
        </div>
        <div className="feat-car-contain">
          <FeaturedCarousel featured={featEvents}/>
        </div>
      </div>
      
      <TitleBlock title="Events for you" />
      <TicketCarousel listings={eventsForYou} />
      
      <TitleBlock title="Event Categories" />
      <CategoryCarousel name="Sports" subCats={bigCat} />
      <CategoryCarousel name="Concerts" subCats={medCat} />
      <CategoryCarousel name="Theater" subCats={smallCat} />
      <CategoryCarousel name="Other" subCats={lastCat} />

      <Footer />
    </div>
  );
}

class WelcomeBlock extends React.Component {
  render() {
    return (
      <div className="welc-outer">
        <Subtitle text="Welcome to Tickitin!" leftOffset="2vw" width="14vw"/>
        <p id="welc-text">Your one stop shop for all tickets. No fees. No B.S.</p>
      </div>
    );
  }
}

class TitleBlock extends React.Component {
  render() {
    return (
      <div className="t-block" style={{width: this.props.width != null ? this.props.width: "26vw", fontSize:  this.props.fontSize != null ? this.props.fontSize: "2.4vw"}}>
          <p id="t-title">{this.props.title}</p>
          <hr id="t-rule"/>
      </div>
    );
  }
}


export default App;
