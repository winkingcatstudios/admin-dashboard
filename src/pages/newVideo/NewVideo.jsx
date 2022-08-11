import React from "react";

import "./newVideo.css";

export default function NewVideo() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Video</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Full Image</label>
          <input type="file" id="image" />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imageTitle" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imageThumb" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Video Title" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Video Description" />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Video Genre" />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Video Year" />
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input type="text" placeholder="Video Age Limit" />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="active" id="isSeries">
            <option value="false">No</option>
            <option value="True">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" />
        </div>
        <div className="addProductItem">
          <label>Full Video</label>
          <input type="file" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
