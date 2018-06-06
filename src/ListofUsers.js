import React, { Component } from 'react';
class ListofUsers extends Component{
  
  render(){
    const usersWhoLikedMovies=this.props.usersWhoLikedMovies;
    const users=this.props.users;
    return(
      	<ul>
      		{
          	  usersWhoLikedMovies.map((userID)=>
             	<li key={userID}>{users[userID].name}</li>
          		)
           }
        </ul>
    	)
    }
}
export default ListofUsers;
