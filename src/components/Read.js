import React from 'react';
import '../App.css';
import Movies from '../components/Movies';
import axios from 'axios';

class Read extends React.Component {

  state = {
    Movies: []
  };

  componentDidMount() {
    axios.get("https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772") //returns a promise (asynchronous operation)
      // (data response)=>{method to use data}
      .then((response) => {
        this.setState({Movies: response.data.Search}) //response.data // we only want the data from the http response, not header etc
      })
      .catch((error)=> {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="Read">
        <h1>Hello - Read Component</h1>
        <Movies myMovies={this.state.Movies}></Movies>
      </div>
    );
  }
}

export default Read;
