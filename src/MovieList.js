import React, { Component } from 'react';
class MovieList extends Component{
  render(){
	const movies=this.props.movies;
    const movieID=this.props.movieID
    return(
    		<h2>{movies[movieID].name}</h2>
		);
  	}
}
export default MovieList;