import React, { useState } from "react";
import "../styles/App.css";

import { StarOutlined } from "@ant-design/icons";

import { Modal } from "antd";

function Movies(props: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<String>("");
  const [modalTitle, setModalTitle] = useState<String>("");
  const [modalRating, setModalRating] = useState<Number>(0);
  const [modalDesc, setModalDesc] = useState<String>("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /**
   * Sets data for modal, then opens modal
   * @param image imagePath
   * @param title movie title
   * @param rating rating of movie
   * @param description description of movie
   */

  let setMovieModal = (
    image: String,
    title: String,
    rating: Number,
    description: String
  ) => {
    setBackgroundImage(image);
    setModalTitle(title);
    setModalRating(rating);
    setModalDesc(description);

    showModal();
  };

  return (
    <div className="Movies">
      <div className="movie_card_grid">
        {props.movies.results.map((movie: any) => {
          return (
            <div
              onClick={() =>
                setMovieModal(
                  movie.backdrop_path,
                  movie.title,
                  movie.vote_average,
                  movie.overview
                )
              }
              key={movie.id}
              className="movie_card"
            >
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
      <Modal
        centered
        open={isModalOpen}
        okText="Close"
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        // closeIcon={<CloseOutlined id="modalX"/>}

      >
        <div
          style={{
            background: ` linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), url(https://image.tmdb.org/t/p/w1280/${backgroundImage}) no-repeat`,
          }}
          className="modal_image"
        >
          <h3>{modalTitle}</h3>
          <p>
            {modalRating.toString()}
          </p>
          <StarOutlined id="star" />
        </div>
        <p className="modal_desc">{modalDesc}</p>
      </Modal>
    </div>
  );
}

export default Movies;
