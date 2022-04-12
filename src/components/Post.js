import React from "react";
import memes from "./Home"


const Post = ({ memes }) => {
  console.log(memes);
  const { title, imageurl, author, category } = memes;
  return (
<div className="row">
  <div className="col mx-3 col-sm-6">
    <div className="card mb-3" style={{width: 250}}>
  <h3 className="card-header">{title}</h3>
  <img src={imageurl} alt="title" className="d-block user-select-none" width="100%" height="300" />
  <div className="card-body">
    <h6 className="card-subtitle text-muted">posted by {author}</h6>
  </div>
    <div className="card-body">
    <p className="card-text">{[category]}</p>
  </div>
     </div>
     </div>
     </div>

  );
};

export default Post;
