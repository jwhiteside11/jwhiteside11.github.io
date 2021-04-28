import React from 'react';
import TicketWDate from '../TicketWDate/TicketWDate';
import QCarousel from '../QCarousel/QCarousel';

class TicketCarousel extends React.Component {
  constructor(props) {
    super(props);
    let listings_ = [];
    for (let i = 0; i < props.listings.length; ++i) listings_.push(<div key={(i + 7) + props.listings[i].name}><TicketWDate event={props.listings[i]}/></div>);
    this.state = {listings: listings_};
  }
  render() {
    return (
      <div className="t-outer-wrap">
        <QCarousel items={this.state.listings} rows={2} cols={3} height="32vw" controlPos="sides"/>
      </div>
    );
  }
}

export default TicketCarousel;