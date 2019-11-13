import React from 'react';
import '../App.css';
import axios from 'axios'; // http client

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Title: '', Year: '', Poster: ''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePosterURL = this.handleChangeMoviePosterURL.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMovieTitle(e) {
    this.setState({ Title: e.target.value }); //e.target.value is the value being passed from the event
  }

  handleChangeMovieYear(e) {
    this.setState({ Year: e.target.value }); //e.target.value is the value being passed from the event
  }

  handleChangeMoviePosterURL(e) {
    this.setState({ Poster: e.target.value }); //e.target.value is the value being passed from the event
  }


  handleSubmit(e) {
    alert('Title: ' + this.state.Title + "\nYear: " + this.state.Year + "\nPoster URL: " + this.state.Poster);
    e.preventDefault();

    const newMovie = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }

    axios.post('http://localhost:4000/api/movies', newMovie)
      .then()
      .catch();

    this.setState({
      Title: '',
      Year: '',
      Poster: ''
    })

  }


  render() { // everything inside render method is VIEW
    return (
      <div className="Create">
        <h1>Hello - Create Component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Movie Title:
            </label>
            <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangeMovieTitle} />
          </div>
          <div className="form-group">
            <label>
              Movie Year:
            </label>
            <input type="text" className="form-control" value={this.state.Year} onChange={this.handleChangeMovieYear} />
          </div>
          <div className="form-group">
            <label>
              Movie Poster URL:
            </label>
            <input type="text" className="form-control" value={this.state.Poster} onChange={this.handleChangeMoviePosterURL} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
