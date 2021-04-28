import right from '../icons/chevron-right.svg';
import left from '../icons/chevron-left.svg';
import rightW from '../icons/chevron-right-wht.svg';
import leftW from '../icons/chevron-left-wht.svg';
import { CSSTransitionGroup } from 'react-transition-group';
import './QCarousel.css';
import React from 'react';


class QCarousel extends React.Component {
  constructor(props) {
    super(props);
    let colFormat_ = () => {
      let size = 100 / props.cols;
      let out = [];
      for (let i = 0; i < props.cols; ++i) i < props.cols - 1 ? out.push(size + "% ") : out.push(size + "%");
      return out.join("");
    }
    let rowFormat_ = () => {
      let size = 100 / props.rows;
      let out = [];
      for (let i = 0; i < props.rows; ++i) i < props.cols - 1 ? out.push(size + "% ") : out.push(size + "%");
      return out.join("");
    }
    this.auto = props.auto === true ? true: false;
    this.perPage = props.rows * props.cols;
    this.totalPages = props.items.length % this.perPage === 0 ? Math.floor(props.items.length / this.perPage): Math.floor(props.items.length / this.perPage) + 1;
    this.state = {page: 1, items: props.items, inView: <div></div>, direction: "left", posBar: <div></div>, rowFormat: rowFormat_(), colFormat: colFormat_(), height: props.height, controlPos: props.controlPos};
  }

  componentDidMount() {
    this.setMarkersAndRow(1);
    if (this.auto) this.setAuto();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setAuto = () => {
    this.interval = setInterval(this.goNext, 10000);
  }

  resetAuto = () => {
    clearInterval(this.interval);
    this.setAuto();
  }

  setMarkersAndRow = (_page) => {
    if (_page < 1) _page = this.totalPages;
    if (_page > this.totalPages) _page = 1;
    if (this.state.controlPos === "sides") {
      if (_page < this.state.page) this.setState({direction: "right"});
      else if (_page > this.state.page) this.setState({direction: "left"});
    }
    if (this.state.controlPos === "bottom") {
      if (_page < this.state.page) this.setState({direction: "nofadeR"});
      else if (_page > this.state.page) this.setState({direction: "nofadeL"});
    }
    this.setMarkers(_page);
    this.setRow(_page);
    this.setState({page: _page});
  }

  setRow = (_page) => {
    let renderItems = [];
    let pP = this.perPage;
    let startInd = pP * _page - pP;
    for (let i = startInd; i < this.state.items.length && i < startInd + pP; ++i) {
      renderItems.push(this.state.items[i]);
    }
    this.setState({inView: <div key={_page + "row"} className="cat-row-wrap"><CarouselRow renderItems={renderItems} rowFormat={this.state.rowFormat} colFormat={this.state.colFormat} height={this.state.height}/></div>});
  }

  setMarkers = (_page) => {
    let posBar_ = [];
    if (this.state.controlPos === "sides") {
      for (let i = 1; i <= this.totalPages; ++i) posBar_.push( i === _page ? <div key={i + "topmark"} onClick={() => this.setMarkersAndRow(i)} className="top-marker active-top-mark"></div> : <div key={i + "topmark"} onClick={() => this.setMarkersAndRow(i)} className="top-marker"></div>);
    }
    if (this.state.controlPos === "bottom") {
      for (let i = 1; i <= this.totalPages; ++i) posBar_.push( i === _page ? <div key={i + "botmark"} onClick={() => this.setMarkersAndRow(i)} className="bot-marker active-bot-mark"></div> : <div key={i + "botmark"} onClick={() => this.setMarkersAndRow(i)} className="bot-marker"></div>);
    }
    this.setState({posBar: posBar_});
  }

  goNext = () => {
    this.setMarkersAndRow(this.state.page + 1);
    if (this.auto) this.resetAuto();
  }

  goPrev = () => {
    this.setMarkersAndRow(this.state.page - 1);
    if (this.auto) this.resetAuto();
  }

  render() {
    return (
      <div className="cat-outer" style={{height: this.state.height}}>
        { this.state.controlPos === "sides" && (
        <div className="side-pos-bar">
          {this.state.posBar}
        </div>
        )}
        { this.state.controlPos === "sides" && (
        <div className="left-block" onClick={this.goPrev}>
          <div id="prev">
            <div className="bord-left">
              <img id="l-chev" src={left} alt="left"></img>
            </div>
          </div>
        </div>
        )}

        <div className="center-window" style={{height: this.state.height}}>
          <CSSTransitionGroup transitionName={this.state.direction} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {this.state.inView}
          </CSSTransitionGroup>
        </div>

        { this.state.controlPos === "bottom" && (
          <div className="bottom-control">
            <div className="bot-left">
              <div className="bot-left-control" onClick={this.goPrev}>
                <img id="l-point" src={leftW} alt="left"></img>
              </div>
            </div>
            {this.state.posBar}
            <div className="bot-right">
              <div className="bot-right-control" onClick={this.goNext}>
                <img id="r-point" src={rightW} alt="left"></img>
              </div>
            </div>
          </div>
        )}

        { this.state.controlPos === "sides" && (
        <div className="right-block" onClick={this.goNext}>
          <div id="next">
            <div className="bord-right">
              <img id="r-chev" src={right} alt="right"></img>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

class CarouselRow extends React.Component {
  render() {
    return (
      <div className="row-list" style={{height: this.props.height, gridTemplateRows: this.props.rowFormat, gridTemplateColumns: this.props.colFormat}}>
        { this.props.renderItems.map((item, i) => (<div className="row-wrap" key={item.name + i}>{item}</div>)) }
      </div>
    );
  }
}

export default QCarousel;