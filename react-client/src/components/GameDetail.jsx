import React from 'react';

const GameDetail = (props) => (
  <div>
    <img className='icon' src={props.game.image.icon_url}/>
    <div>{props.game.deck}</div>
    <br/>
    <div>Released in {props.game.original_release_date ? props.game.original_release_date.slice(0,4) : 'unknown year'}</div>
    <div>Available on: {props.game.platforms.map(platform => platform.name).join(', ')}</div>
  </div>
)

export default GameDetail;
