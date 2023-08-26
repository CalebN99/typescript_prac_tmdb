import React from "react";
import "../styles/App.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

function Tools(props: any) {
  /**
   * Sorts movies in descending order
   * @param item to sort by from movie object
   */
  const orderDesc = (item: any) => {
    console.log(item);
    props.setMovies({
      ...props.movies,
      results: props.movies.results.sort((a: any, b: any) => b[item] - a[item]),
    });
  };

  /**
   * Sorts movies in ascending order
   * @param item to sort by from movie object
   */
  const orderAsc = (item: any) => {
    console.log(item);
    props.setMovies({
      ...props.movies,
      results: props.movies.results.sort((a: any, b: any) => a[item] - b[item]),
    });
  };

  const orders: MenuProps["items"] = [
    {
      key: "1",
      label: <p onClick={() => orderDesc("popularity")}>Popularity <DownOutlined /></p>,
    },
    {
      key: "2",
      label: <p onClick={() => orderAsc("popularity")}>Popularity <UpOutlined /></p>,
    },
    {
      key: "3",
      label: <p onClick={() => orderDesc("vote_average")}>Rating <DownOutlined /></p>,
    },
    {
      key: "4",
      label: <p onClick={() => orderAsc("vote_average")}>Rating <UpOutlined /></p>,
    },
  ];

  const genres: MenuProps["items"] = [
    {
      key: "1",
      label: <p onClick={() => props.genreSearch(28)}>Action</p>,
    },
    {
      key: "2",
      label: <p onClick={() => props.genreSearch(12)}>Adventure</p>,
    },
    {
      key: "3",
      label: <p onClick={() => props.genreSearch(27)}>Horror</p>,
    },
    {
      key: "4",
      label: <p onClick={() => props.genreSearch(35)}>Comedy</p>,
    },
    {
      key: "5",
      label: <p onClick={() => props.genreSearch(18)}>Drama</p>,
    },
    {
      key: "6",
      label: <p onClick={() => props.genreSearch(14)}>Fantasy</p>,
    },
    {
      key: "7",
      label: <p onClick={() => props.genreSearch(36)}>History</p>,
    },
    {
      key: "8",
      label: <p onClick={() => props.genreSearch(99)}>Documentary</p>,
    },
  ];
  return (
    <div className="Tools">
      <Dropdown className="genre_dropdown" menu={{ items: genres }}>
        <Button>
          <Space>
            Genre
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown className="genre_dropdown" menu={{ items: orders }}>
        <Button>
          <Space>
            Order By
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default Tools;
