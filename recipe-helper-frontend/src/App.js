import React, { Component } from 'react';
import logo from './salad.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <i class="fas fa-bacon"></i>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Recipe Helper WIP
          </p>
          
          <a
            className="App-link"
            href="https://www.acmutd.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about what we do at ACM!
          </a>
        </header>

        <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

      </div>
    );
  }
}

export default App;
