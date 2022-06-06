import React from 'react';
import Card from './Card'; 

function Listing(props) {
  const {items} = props;
  return (
    <div className="item-list">
      {items.map(item => (
        <Card item={item} key={item.listing_id}/>
      ))}
    </div>
  )
}

Listing.defaultProps = {
  items: []
};

export default Listing;