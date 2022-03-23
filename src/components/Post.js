import React from "react";


const Post = ({ article }) => {
  console.log(article);
  const { title, image, author, categories } = article.fields;
  return (
<div className="row">
  <div className="col mx-3 col-sm-6">
    <div className="card mb-3" style={{width: 250}}>
  <h3 className="card-header">{title}</h3>
  <img src={image.fields.file.url} className="d-block user-select-none" width="100%" height="300" />
  <div className="card-body">
    <h6 className="card-subtitle text-muted">posted by {author}</h6>
  </div>
    <div className="card-body">
    <p className="card-text">{[categories]}</p>
  </div>
     </div>
     </div>
     </div>

  );
};

export default Post;
