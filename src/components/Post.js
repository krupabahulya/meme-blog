import React from "react";

const Post = ({ article }) => {
  console.log(article);
  const { title, image } = article.fields;
  return (
<div class="row">
  <div class="col-sm-6">
    <div className="card mb-3" style={{width: 250}}>
  <h3 className="card-header">{title}</h3>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <img src={image.fields.file.url} className="d-block user-select-none" width="100%" max_height="200" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
     </div>
     </div>
     </div>
  );
};

export default Post;
