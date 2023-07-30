import React from "react";
import "../styles/App.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";

function Movies(props: any) {
  console.log(props.movies);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>Action</p>,
    },
    {
      key: "2",
      label: <p>Comedy</p>,
    },
    {
      key: "3",
      label: <p>Adventure</p>,
    },
    {
      key: "4",
      label: <p>Horror</p>,
    },
    {
      key: "5",
      label: <p>Drama</p>,
    },
  ];

  return (
    <div className="Movies">
      <Dropdown className="genre_dropdown" menu={{ items }}>
        <Button className="genre_dropdown">
          <Space className="genre_dropdown">
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <div className="movie_card_grid">
        {props.movies.results.map((movie: any) => {
          return (
            <div className="movie_card">
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
    </div>
  );
}

export default Movies;
