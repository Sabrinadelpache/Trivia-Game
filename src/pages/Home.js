import React, { Component } from 'react';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Questions />
      </div>
    );
  }
}

export default Home;
