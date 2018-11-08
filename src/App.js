import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getData = () => {};

  postData = () => {};

  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.getData}>
          Get
        </button>
        <button type="button" onClick={this.postData}>
          Post
        </button>
      </div>
    );
  }
}

export default App;
