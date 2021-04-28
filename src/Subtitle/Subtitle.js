import './Subtitle.css';
import React from 'react';

class Subtitle extends React.Component {
  render() {
    return (
      <div className="main-title-block" style={{width: this.props.width != null ? this.props.width: "12vw", marginInlineStart: this.props.leftOffset != null ? this.props.leftOffset: "10vw"}}>
        <p id="main-title">{this.props.text}</p>
        <hr id="main-rule"/>
      </div>
    );
  }
}

export default Subtitle;