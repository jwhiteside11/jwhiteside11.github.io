import './SearchBar.css';
import React from 'react';
import search from '../icons/search.svg';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = props.placeholder;
    this.state = {currentText: ""}
  }

  handleChange = (e) => {
    this.setState({currentText: e.target.value});
  }

  handleSubmit = (e) => {
    alert('You searched: ' + this.state.currentText);
    this.setState({currentText: ""});
    return false;
  }

  render() {
    return (
      <div className="search-contain">
        <p id="placehold">{this.state.currentText === "" && this.placeholder}</p>
        <form name="search" id="search" onSubmit={this.handleSubmit}>
          <input id="search-input" type="text" value={this.state.currentText} onChange={this.handleChange} />
        </form>
        <img id="search-icn" src={search} alt="search" onClick={this.handleSubmit}></img>
      </div>
    );
  }
}

export default SearchBar;