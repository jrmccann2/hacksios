import React, { Component } from 'react';
import './App.css';
import hacksios from './hacksios';

class App extends Component {
  getData = () => {
    console.log('thingy');
    hacksios
      .get('/api/endpoint')
      .then(response => console.log(response))
      .catch(console.log);
  };

  postData = () => {
    hacksios
      .post('/api/endpoint', {
        name: 'Jon Snow',
        position: 'Lord Commander of the Night\'s watch',
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };

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
