import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component {
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
                </Card>
                <br></br>
            </div>
        );
    }
}

export default MovieItem;
