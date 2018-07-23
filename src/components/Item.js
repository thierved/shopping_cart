import React from 'react';

const Item = (props) => {
  
  return (
    <div className="item">
      <img src={props.src} alt={props.name} />
      <div className="item-detail" >
        <h4>{props.name}</h4>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

export default Item;