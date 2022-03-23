import React from "react";
import { useState } from "react";
import { createClient } from "contentful-management";

export default function App() {
  const spaceID = "7sanr9ja5o2v";
  const accessToken = "CFPAT-I1gQhnaX5mx-FhN7WPL-Y7Gd6UB-QKWS6GB9v2IBYIA";
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImage] = useState(null);
  const [{ title, author, categories }, setFormState] = useState({
    title: "",
    author: "",
    categories: [],
  });

  const handleChange = (e) => {
    if (e.target.nodeName === "SELECT") {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: Array.from(
          e.target.selectedOptions,
          (option) => option.value
        ),
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const uploadImage = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!file) return alert("Select a file");
      const client = createClient({
        accessToken,
      });
      const fileContents = await file.arrayBuffer();
      const space = await client.getSpace(spaceID);
      const environment = await space.getEnvironment("master");
      // Create asset
      const newAsset = await environment.createAssetFromFiles({
        fields: {
          title: {
            "en-US": `${file.name}-${crypto.randomUUID()}`,
          },
          description: {
            "en-US": "Cat",
          },
          file: {
            "en-US": {
              contentType: file.type,
              fileName: file.name,
              file: fileContents,
            },
          },
        },
      });
      const processedAsset = await newAsset.processForAllLocales();
      const publishedAsset = await processedAsset.publish();
      // Create entry
      const entry = await environment.createEntry("post", {
        fields: {
          author: {
            "en-US": author,
          },
          categories: {
            "en-US": categories,
          },
          title: {
            "en-US": title,
          },
          image: {
            "en-US": {
              sys: {
                id: publishedAsset.sys.id,
                linkType: "Asset",
                type: "Link",
              },
            },
          },
        },
      });
      const publishedEntry = await entry.publish();

      console.log(publishedEntry);
      setFile(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) return <h1>LOADING...</h1>;
  return (
    <div className="App">
      <h2>Create a meme</h2>
      <form onSubmit={uploadImage}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <label>Category</label>
        <select
          name="categories"
          value={categories}
          onChange={handleChange}
          multiple
        >
          <option value="Trending">trending</option>
          <option value="Classics">classics</option>
          <option value="Animals">animals</option>
          <option value="Crypto">crypto</option>
          <option value="Cooking">cooking</option>
          <option value="Relationship">relationship</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="Author..."
          value={author}
          name="author"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Upload" />
      </form>
      {uploadedImage && (
        <img src={uploadedImage.url} width="300" alt={uploadedImage.fileName} />
      )}
    </div>
  );
}
