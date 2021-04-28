import React from 'react';
import FeaturedEvent from '../FeaturedEvent/FeaturedEvent';
import QCarousel from '../QCarousel/QCarousel';
import './FeaturedCarousel.css';

class FeaturedCarousel extends React.Component {
  constructor(props) {
    super(props);
    let featured_ = [];
    for (let i = 0; i < props.featured.length; ++i) featured_.push(<div key={(i + 7) + props.featured[i].name}><FeaturedEvent event={props.featured[i]}/></div>);
    this.state = {featured: featured_};
  }
  render() {
    return (
      <div className="f-outer-wrap">
        <QCarousel items={this.state.featured} rows={1} cols={1} height="40vw" controlPos="bottom" auto={true}/>
      </div>
    );
  }
}

export default FeaturedCarousel;