import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class MovieItem extends React.Component {
    
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    
    DeleteMovie(e) {
        console.log("DELETE BUTTON CLICKED");
        Axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
        .then()
        .catch();
    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.movie.poster} />
                    {/* <img src={this.props.movie.Poster}></img> */}
                    <Card.Body>
                        <Card.Title>{this.props.movie.title}</Card.Title>
                        <Card.Text>
                            {this.props.movie.year}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>DELETE!</Button>
                    <br></br>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
                <hr></hr>
            </div>
        );
    }
}

export default MovieItem;
