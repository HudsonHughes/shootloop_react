import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './Home'
import RecordManager from './RecordManager'

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Home></Home>*/}
          <Home></Home>
      </div>
    );
  }
}

export default App;
