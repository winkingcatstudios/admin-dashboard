import React from "react";
import { useState } from "react";

import "./newVideo.css";

export default function NewVideo() {
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageThumb, setImageThumb] = useState(null);
  const [trailerVideo, setTrailerVideo] = useState(null);
  const [fullVideo, setFullVideo] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setVideo({ ...video, [event.target.name]: value });
  };

  

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Video</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Full Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => setImage(event.target.file[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input
            type="file"
            id="imageTitle"
            name="imageTitle"
            onChange={(event) => setImageTitle(event.target.file[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imageThumb"
            name="imageThumb"
            onChange={(event) => setImageThumb(event.target.file[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Video Title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Video Description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Video Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Video Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input
            type="text"
            placeholder="Video Age Limit"
            name="ageLimit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="True">Yes</option>
          </select>
        </div>
        <div
          className="addProductItem"
          name="trailerVideo"
          onChange={(event) => setTrailerVideo(event.target.file[0])}
        >
          <label>Trailer</label>
          <input type="file" />
        </div>
        <div
          className="addProductItem"
          name="fullVideo"
          onChange={(event) => setFullVideo(event.target.file[0])}
        >
          <label>Full Video</label>
          <input type="file" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
