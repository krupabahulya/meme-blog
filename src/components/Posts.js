import React from "react";
import Post from "./Post";

const Posts = ({ memes }) => {
  console.log('posts')
  return (
    <div className="d-flex p-2 flex-row justify-content-around flex-wrap">
      {memes.map((memes, id) => (
        <Post memes={memes} key={id} />
      ))}{" "}
      <div className="p-2"></div>
    </div>
  );
};

export default Posts;
