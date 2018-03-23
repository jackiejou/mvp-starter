import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="col-md-7">
    { props.games.map((game, index) => <ListItem key={index} index={index} game={game} add={props.add}/>)}
  </div>
)

export default List;
