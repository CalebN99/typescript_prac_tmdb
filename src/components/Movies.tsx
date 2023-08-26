import React, { useState } from "react";
import "../styles/App.css";

import  {StarOutlined} from "@ant-design/icons"

import { Modal, Button } from "antd";

function Movies(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
            </div>
          );
        })}
      </div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="modal_image">
          <h3>Movie Title</h3>
          <p>7.4 <StarOutlined /></p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
      </Modal>
    </div>
  );
}

export default Movies;
