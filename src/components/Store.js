import React from 'react';
import Items from '../containers/Items';
import ShippedItems from '../containers/ShippedItems';

export default () => {
  return (
    <div className="store-container">
        <Items />
        <ShippedItems />
    </div>
  )
}
