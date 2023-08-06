import React from "react";
import "../styles/App.css";


function Movies(props: any) {
  console.log(props.movies);



  return (
    <div className="Movies">

      <div className="movie_card_grid">
        {props.movies.results.map((movie: any) => {
          return (
            <div key={movie.id} className="movie_card">
              <img
                src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                className="movie_image_small"
                alt="movie poster"
              />
              <p className="movie_title">{movie.title}</p>
              {/* <p className="movie_title">{movie.vote_average}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
