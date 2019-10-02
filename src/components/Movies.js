import React from 'react';
import '../App.css';
import MovieItem from '../components/MovieItem';

class Movies extends React.Component {
    render() {
        return this.props.myMovies.map((movie) => {
            console.log(movie);
            return <MovieItem movie={movie}></MovieItem>
        });
    }
}

export default Movies;
