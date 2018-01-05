import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Wishlist from './components/Wishlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      term: '',
      wishlist: []
    }
    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/games',
      success: (data) => {
        this.setState({
          wishlist: data
        })
      },
      error: (err) => {
        console.log('3err', err);
      }
    });
  }

  onChange(e) {
    this.setState({term: e.target.value});
  }

  search (){
    $.ajax({
      url: '/search',
      type: 'post',
      data: {term: this.state.term},
      success: (data) => {
        console.log(data);
        this.setState({games: data});
      },
      error: (err) => {
        console.log('Serr', err);
      }
    });
  }

  add(index) {
    console.log(this.state.games[index]);
    $.ajax({
      url:'/games',
      type: 'post',
      data: {game: this.state.games[index]},
      success: (data) => {
        this.setState({wishlist: data});
      },
      error: (err) => {
        console.log('Aerr', err);
      }
    })
  }

  del(index) {

  }

  render () {
    return (
      <div className="container-fluid">
        <h1>Games List</h1>
        <Search onChange={this.onChange} search={this.search.bind(this)}/>
        <div className="row">
          <List games={this.state.games} add={this.add}/>
          <Wishlist games={this.state.wishlist}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
