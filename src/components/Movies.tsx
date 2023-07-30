import React from "react";
import "../styles/App.css";

function Movies(props:any) {

    console.log(props.movies);
  
  return (
   <div className="Movies">
    <h1>Movies</h1>
   </div>
  );
}

export default Movies;