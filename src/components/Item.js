import React from 'react';

const Item = (props) => {
  
  return (
    <div className="item">
      <img src={props.src} alt={props.name} />
      <div className="item-detail" >
        <h4>{props.name}</h4>
        <button onClick={props.addProductToBag}>
          {`$${props.price}/kg`}
        </button>
      </div>
    </div>
  )
}

export default Item;