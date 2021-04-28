import './FeaturedEvent.css';
import date from '../icons/calendar.svg';
import at from '../icons/at-sign.svg';
import pin from '../icons/map-pin.svg';
import tag from '../icons/tag.svg';
import React from "react";


class FeaturedEvent extends React.Component {
  constructor(props) {
    super(props);
    let day_ = parseInt(props.event.day);
    this.state = {event: props.event, day: day_}
  }
    render() {
      return (
        <div className="feat-outer">
          <div className="feat-pic" style={{backgroundImage: `url(${this.state.event.graphic})`}}>
            <div className="feat-overlay">
              <div className="feat-info">
                <p><strong>{this.state.event.name}</strong></p>
                <div className="feat-sub-info">
                  <img id="ic1" src={at} alt="calendar"></img>
                  <img id="ic2" src={date} alt="date"></img>
                  <img id="ic3" src={pin} alt="pin"></img>
                  <p id="venue">{this.state.event.venue}</p>
                  <p id="date">{this.state.event.month} {this.state.event.day}<sup>{this.state.event.day % 10 === 1 ? "st": (this.state.event.day % 10 === 2 ? "nd": (this.state.event.day === 3 ? "rd": "th"))}</sup>, {this.state.event.year}</p>
                  <p id="loc">{this.state.event.location}</p>
                </div>
                <div className="tag-btn">
                  <img id="tag" src={tag} alt="tag"></img>
                  <p id="price">${this.state.event.startPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default FeaturedEvent;