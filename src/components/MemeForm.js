import React from "react";
import { useState, useEffect } from "react";

const Meme = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  console.log(selectedImage);

  return (
    <div>
      <h2>Create a meme</h2>
      <form>
        <input
          type="file"
          id="select-image"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        {imageUrl && selectedImage && (
          <>
            <div>Image Preview:</div>
            <img src={imageUrl} alt={selectedImage.name} height="100px" />
          </>
        )}{" "}
        <br />
        <input type="text" placeholder="Title..." /> <br />
        <label>Category</label>
        <select id="memes" name="memes">
          <option>trending</option>
          <option>classics</option>
          <option>animals</option>
          <option>crypto</option>
          <option>cooking</option>
          <option>relationship</option>
        </select>{" "}
        <br />
        <input type="text" placeholder="Author..." /> <br />
        <input type="Submit" defaultValue="Submit" />
      </form>
    </div>
  );
};
export default Meme;
