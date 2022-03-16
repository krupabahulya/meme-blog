import React from "react";

import { useState } from "react";

const Meme = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <h2>Create a meme</h2>
      <form>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: "none" }}
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <label>
          <button variant="contained" color="primary" component="span">
            Upload Image
          </button>
        </label>
        <input type="text" value="Title" /> <br />
        <label>Category</label>
        <select id="memes" name="memes">
          <option value="trending">trending</option>
          <option value="classics">classics</option>
          <option value="animals">animals</option>
          <option value="crypto">crypto</option>
          <option value="cooking">cooking</option>
          <option value="relationship">relationship</option>
        </select>{" "}
        <br />
        <input type="text" value="Author" /> <br />
        <input type="Submit" value="Submit" />
      </form>
    </div>
  );
};
export default Meme;
