import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavB from "./components/NavB";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import Tools from "./components/Tools";

import { Spin } from "antd";

function App() {
  let [data, setData] = useState(0);


  let apiKey = "";
  
  useEffect(() => {
    setTimeout(() => {
      try {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        )
          .then((res) => res.json())
          .then(setData);
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  }, [apiKey]);

  let genreSearch = (genre: Number) => {
    try {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=` +
          genre
      )
        .then((res) => res.json())
        .then(setData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <NavB />
      <Tools genreSearch={genreSearch} movies={data} setMovies={setData} />
      {data !== 0 ? <Movies movies={data} /> : <Spin size="large" />}
    </div>
  );
}

export default App;
