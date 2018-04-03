import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyBnv0CSW4Oyo-Q2ocTUZgpxmmEdExgKdTE';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
