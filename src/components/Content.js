import React from 'react';
import '../App.css';

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <h1>Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;
