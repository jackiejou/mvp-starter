import React from 'react';

const WishlistItem = (props) => {
  let del = () => {
    props.del(props.index);
  };
  return (
    <div className='wishlistitem'>
      <div>
        <div>
          <img src={props.game.image}/>
          <button className='button btn-danger' onClick={del}>Remove</button>
          <a className='wishtext' href={props.game.url}>{props.game.name}</a>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
