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
    this.search = this.search.bind(this);
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/games',
      success: (data) => {
        this.setState({
          wishlist: data
        });
      },
      error: (err) => {
        console.log('3err', err);
      }
    });
  }

  onChange(e) {
    this.setState({term: e.target.value});
  }

  search() {
    $.ajax({
      url: '/search',
      method: 'post',
      data: {term: this.state.term},
      success: (data) => {
        console.log(data);
        this.setState({
          games: data,
          term: ''
        });
      },
      error: (err) => {
        console.log('Serr', err);
      }
    });
  }

  add(index) {
    $.ajax({
      url:'/games',
      method: 'post',
      data: {game: this.state.games[index]},
      success: (data) => {
        console.log('wish', data);
        this.setState({
          wishlist: data
        });
      },
      error: (err) => {
        console.log('Aerr', err);
      }
    });
  }

  del(index) {
    $.ajax({
      url:'/games',
      method: 'delete',
      data: {game: this.state.wishlist[index]['gameId']},
      success: (data) => {
        this.setState({wishlist: data});
      },
      error: (err) => {
        console.log('Derr', err);
      }
    });
  }

  render () {
    return (
      <div className="container-fluid">
        <div>
          <h4>Games List</h4>
          <Search onChange={this.onChange} search={this.search} term={this.state.term}/>
        </div>
        <div className="row">
          <List games={this.state.games} add={this.add}/>
          <Wishlist games={this.state.wishlist} del={this.del}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
