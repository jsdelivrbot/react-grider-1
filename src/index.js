import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const YOUTUBE_API_KEY = 'AIzaSyBnv0CSW4Oyo-Q2ocTUZgpxmmEdExgKdTE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboard' }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
