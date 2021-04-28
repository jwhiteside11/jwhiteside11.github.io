import React from 'react';
import './TicketWDate.css';

// Event props: graphic url, graphic color, day, month, year, day of week, time, venue, location, start price
class TicketWDate extends React.Component {
    render() {
      return (
        <div className="outer">
          <div className="wrapper">
            <div className="ticket-bkgd" style={{backgroundColor: this.props.event.graphicColor}}></div>
            <img src={this.props.event.graphicURL} className="graphic" alt="graphic"/>
            <div className="date-graphic">
              <p className="month"><strong>{this.props.event.month.substring(0,3)}</strong></p>
              <hr/>
              <p className="day">{this.props.event.day}</p>
            </div>
            <div className="info">
              <p id="full-date">{this.props.event.month} {this.props.event.day}<sup>{parseInt(this.props.event.day) % 10 === 1 ? "st": (parseInt(this.props.event.day) % 10 === 2 ? "nd": "th")}</sup>, {this.props.event.year}</p>
              <p>{this.props.event.dayOfWeek}&nbsp;&nbsp;<span className="mid-break">|</span>&nbsp;&nbsp;{this.props.event.time % 12 >= 0 ? (this.props.event.time % 12 === 0 ? (this.props.event.time === 24 || this.props.event.time === 0 ? "12AM": "12PM"): this.props.event.time % 12) + "PM": this.props.event.time + "AM"}</p>
              <p>{this.props.event.venue}</p>
              <p>{this.props.event.location}</p>
            </div>
            <button className="btn">
              <div className="btn-grid">
                <p className="start-from">Tickets start at:</p>
                <span className="cost">${this.props.event.startPrice}</span>
              </div>
            </button>
          </div>
        </div>
      );
    }
}

  export default TicketWDate;