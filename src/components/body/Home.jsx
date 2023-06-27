import React, { Component } from 'react';

export class Home extends Component {
  render() {
    document.title = 'Home Page';
    return (
      <div>
        <h1>Home Page</h1>
        <img
          src="../../assets/images/324149785.jpg"
          alt="banner"
          width={'100%'}
        />
      </div>
    );
  }
}

export default Home;
