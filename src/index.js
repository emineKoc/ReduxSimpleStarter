// React library knows how to render components.
import React, { Component } from 'react'; // other way: const React = require('react')
import ReactDOM from 'react-dom'; // React DOM library knows how to render the JSX to DOM tree.
import YTSearch  from 'youtube-api-search'; // npm package

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';


const API_KEY = 'AIzaSyBW6oEaN0LZ5yskQduo0BPAm6cWhRAhG_c'; // youtube api
// install an npm youtube-api-seach ** npm install --save youtube-api-search


// Create a new component, which produce some html.
class App extends Component {  // const means this will never change! We can never not change the value of App.
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({ key:API_KEY , term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //same thing like this.setState({videos: videos }) because key and value are same;
    });
  }

  render() {
    return (
      <div>
      <SearchBar />
      <VideoList  videos = {this.state.videos}/>
      </div>
    )
  }
}

// take this components generated html and put ont the DOM.
ReactDOM.render(<App/>, document.querySelector('.container'));
