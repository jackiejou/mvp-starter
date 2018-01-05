import React from 'react';

const WishlistItem = (props) => {
  let del = () => {
    props.del(props.index);
  };
  return (
    <div>
      <img src={props.game.image}/>
      {props.game.name}
      <button onClick={del}>Remove</button>
    </div>
  );
};

export default WishlistItem;
