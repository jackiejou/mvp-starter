import React from 'react';

const Search = (props) => {
  let handleKey = (event) => {
    if (event.keyCode === 13) {
      props.search();
    }
  }
  return (
    <div>
      <input placeholder='Search a game' onKeyUp={handleKey} onChange={props.onChange} value={props.term}/>
      <button className='btn-info' onClick={props.search}>Search</button>
    </div>
  )
}
export default Search;
