import React, { Component } from 'react';
import ListofUsers from './ListofUsers';
import MovieList from './MovieList';
class Dashboard extends Component{
render(){
	const profiles=this.props.profiles;
    const users=this.props.users;
    const movies=this.props.movies;
  	const movieList=Object.keys(movies).map((movie)=>{
      		let usersWhoLikedMovies=[];
          	let  movieID=movies[movie].id;
      		profiles.forEach((profile)=>
                            {
                              if(movieID===Number(profile.favoriteMovieID))
                              {
                                  usersWhoLikedMovies.push(profile.userID);
                              } 
            				})
            return (
              	<div key={movieID}>
                   <MovieList movies={movies} movieID={movieID} />
                   <h3>Liked By:</h3>
                   { (usersWhoLikedMovies.length!==0)?
                      <ListofUsers users={users} usersWhoLikedMovies={usersWhoLikedMovies}/>
                      : <p>None of the current users liked this movie</p>
                   }
                 </div>
                ); 
           }
          );
  	return(
          <div>
              {movieList}
          </div>
   		 );
}//end of render
}// end of class
export default Dashboard;