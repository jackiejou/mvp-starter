import React from 'react';

const Search = props => (
  <div>
    <input placeholder='Search a game' onChange={props.onChange}/>
    <button onClick={props.search}>Search</button>
  </div>
)

export default Search;
