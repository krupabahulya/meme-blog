import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "contentful-management";

export default function App() {
  const spaceID = "7sanr9ja5o2v";
  const accessToken = "CFPAT-I1gQhnaX5mx-FhN7WPL-Y7Gd6UB-QKWS6GB9v2IBYIA";
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [categories, setCategories] = useState(null);
  const [author, setAuthor] = useState(null);

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
      //create entry
      let entry = await environment.createEntry("post", {
        fields: {
          author: {
            "en-US": `${author}`,
          },
          categories: {
            "en-US": `${categories}`,
          },

          title: {
            "en-US": `${title}`,
          },
          image: {
            "en-US": [],
          },
        },
      });
      // reassign `entry` to have the latest version number
      entry = await entry.publish();

      const newAsset = await environment.createAssetFromFiles({
        fields: {
          title: {
            "en-US": `${file.name}-${crypto.randomUUID()}`,
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
      setUploadedImage(publishedAsset.fields.file[`en-US`]);
      /**
       * Update entry with new asset
       */
      entry.fields["image"]["en-US"] = {
        fields: {
          file: {
            url: {
              "en-US": `${uploadedImage.url}`,
            },
          },
        },
        /*  sys: {
          id: asset.sys.id,
          linkType: "Asset",
          type: "Link",
        }, */
      };
      entry = await entry.update();
      entry = await entry.publish();

      setFile(null);
      setLoading(false);
    } catch (error) {
      console.error(error);
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
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <label>Category</label>
        <select
          id="memes"
          name="memes"
          onChange={(e) => setCategories(e.target.value)}
        >
          <option>trending</option>
          <option>classics</option>
          <option>animals</option>
          <option>crypto</option>
          <option>cooking</option>
          <option>relationship</option>
        </select>{" "}
        <br />
        <input
          type="text"
          placeholder="Author..."
          onChange={(e) => setAuthor(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Upload" />
      </form>
      {uploadedImage && (
        <img src={uploadedImage.url} width="300" alt={uploadedImage.fileName} />
      )}
    </div>
  );
}
