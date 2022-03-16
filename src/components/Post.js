import React from "react";

const Post = ({ article }) => {
  console.log(article);
  const { title, image } = article.fields;
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <img
        className="image"
        src={image.fields.file.url}
        alt={title}
        title={title}
      />
    </div>
  );
};

export default Post;
