// React library knows how to render components.
import React from 'react'; // other way: const React = require('react')
import ReactDOM from 'react-dom' // React DOM library knows how to render the JSX to DOM tree.

import SearchBar from './components/search_bar.js';



const API_KEY = 'AIzaSyBW6oEaN0LZ5yskQduo0BPAm6cWhRAhG_c'; // youtube api
// install an npm youtube-api-seach ** npm install --save youtube-api-search


// Create a new component, which produce some html.
const App = () => {  // const means this will never change! We can never not change the value of App.
  return (
    <div>Hi!</div>
  )
}

// take this components generated html and put ont the DOM.
ReactDOM.render(<App/>, document.querySelector('.container'));
