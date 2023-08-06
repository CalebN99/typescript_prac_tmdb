import React from "react";
import "../styles/App.css";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

function Tools(props: any) {


    const orderDesc = (item: any) => {
      console.log(item)
        props.setMovies({
          ...props.movies,
          results: props.movies.results.sort((a: any, b: any) => b[item] - a[item])
        });
    }

    const orderAsc = (item: any) => {
      console.log(item)
        props.setMovies({
          ...props.movies,
          results: props.movies.results.sort((a: any, b: any) => a[item] - b[item])
        });
    }



    const items: MenuProps["items"] = [
        {
          key: "1",
          label: <p onClick={() => orderDesc("popularity")}>Popularity -</p>,
        },
        {
          key: "2",
          label: <p onClick={() => orderAsc("popularity")}>Popularity +</p>,
        },
        {
          key: "3",
          label: <p onClick={() => orderDesc("vote_average")}>Rating -</p>,
        },
        {
          key: "4",
          label: <p onClick={() => orderAsc("vote_average")}>Rating +</p>,
        },
        {
          key: "5",
          label: <p>Drama</p>,
        },
      ];
  return (
    <div className="Tools">
         <Dropdown className="genre_dropdown" menu={{ items }}>
        <Button className="genre_dropdown">
          <Space className="genre_dropdown">
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown className="genre_dropdown" menu={{ items }}>
        <Button className="genre_dropdown">
          <Space className="genre_dropdown">
            Order By
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default Tools;
