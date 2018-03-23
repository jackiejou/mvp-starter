import React from 'react';
import WishlistItem from './WishlistItem.jsx';

const Wishlist = (props) => (
  <div className="col-md-5 wishlist">
    <h4>Your wishlist:</h4>
    {props.games.map((game, index) =>
      <WishlistItem key={index} game={game} index={index} del={props.del}/>
    )}
  </div>
)

export default Wishlist;
