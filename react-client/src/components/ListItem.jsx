import React from 'react';
import GameDetail from './GameDetail.jsx';

const ListItem = (props) => {
  let addOne = () => {
    props.add(props.index);
  }
  return (
    <div className='item'>
      <div className='row'>
        <div className='col-md-8 name'>
          <a href={props.game.site_detail_url}>{props.game.name}</a>
        </div>
        <div className='col-md-4'>
          <button className='button btn-success' onClick={addOne}>Add to wishlist</button>
        </div>
      </div>
      <br/>
      <GameDetail game={props.game}/>
    </div>
  )
};
export default ListItem;
