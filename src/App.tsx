import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavB from "./components/NavB";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.min.css";

import { Spin } from 'antd';


function App() {

  let [data, setData] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      try {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=742b4f9ef0f1842c765810ec16e2e95a"
        )
          .then((res) => res.json())
          .then(setData);
      } catch(err) {
        console.log(err);
      }
    }, 1000)
 
     
  }, []);


  return (
    <div className="App">
      <NavB />
      {
        data !== 0 ? <Movies movies={data} /> : <Spin size="large"/>
      }
      
    </div>
  );
}

export default App;
