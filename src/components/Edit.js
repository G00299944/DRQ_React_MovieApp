import React from 'react';
import '../App.css';
import axios from 'axios';

class Edit extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Title: '', Year: '', Poster: '', _id: ''};

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
    //alert('Title: ' + this.state.Title + "\nYear: " + this.state.Year + "\nPoster URL: " + this.state.Poster);
    e.preventDefault();

    const newMovie = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    };

    axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
    .then()
    .catch()

    this.setState({
      Title: '',
      Year: '',
      Poster: ''
    })

  }


  componentDidMount() { // lifecycle hook called everytime this becomes active in the view  
    axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
      .then((response)=> {
        this.setState({
          _id: response.data._id,
          Title: response.data.title,
          Year: response.data.year,
          Poster: response.data.poster
        })
      })
      .catch();
  }

  render() {
    return (
      <div className="Edit">
        <h1>DEBUG - EDIT COMPONENT</h1>
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

export default Edit;
