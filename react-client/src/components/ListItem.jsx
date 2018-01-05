import React from 'react';
import GameDetail from './GameDetail.jsx';

const ListItem = (props) => {
  let addOne = () => {
    props.add(props.index);
  }
  return (
    <div className='item'>
      {props.game.name}
      <div>
        <button onClick={addOne}>Add to wishlist</button>
      </div>
      <br/>
      <br/>
      <GameDetail game={props.game}/>
    </div>
  )
};
export default ListItem;
