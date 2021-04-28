import './CategoryCarousel.css';
import React from 'react';
import QCarousel from '../QCarousel/QCarousel';
import Subtitle from '../Subtitle/Subtitle';

class CategoryCarousel extends React.Component {
  constructor(props) {
    super(props);
    let subCats_ = [];
    for (let i = 0; i < props.subCats.length; ++i) subCats_.push(<div key={i + props.subCats[i].name}><SubCategory name={props.subCats[i].name} graphic={props.subCats[i].graphic}/></div>);
    this.name = props.name;
    this.state = {subCats: subCats_};
  }
  render() {
    return (
      <div className="cat-wrap">
        <Subtitle text={this.name}/>
        <QCarousel items={this.state.subCats} rows={1} cols={5} height="18vw" controlPos="sides"/>
      </div>
    );
  }
}

class SubCategory extends React.Component {
  render() {
    return (
      <div className="sub-graphic" style={{backgroundImage: `url(${this.props.graphic})`}}>
        <div className="sub-contain" style={{background: 'linear-gradient(to bottom, rgba(60,60,60,0) 25%, rgba(60,60,60,0.8) 80%, rgba(60,60,60,0.9) 87%, rgba(60,60,60,0.9) 100%)'}}>
          <p className="sub-title">{this.props.name}</p>
        </div>
      </div>
    );
  }
}


export default CategoryCarousel;