import { Publish } from "@material-ui/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./video.css";

export default function Video() {
  const location = useLocation();
  const { video } = location.state;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Video</h1>
        <Link to="/newVideo">
          <button className="productAddButton">Create Video</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={video.image}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{video.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoVolume">{video.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoVolume">{video.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoVolume">{video.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Age Limit:</span>
              <span className="productInfoVolume">{video.ageLimit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Video Title</label>
            <input type="text" placeholder={video.title} />
            <label>Genre</label>
            <input type="text" placeholder={video.genre} />
            <label>Year</label>
            <input type="text" placeholder={video.year} />
            <label>Age Limit</label>
            <input type="text" placeholder={video.ageLimit} />
            <label>Trailer</label>
            <input type="file" placeholder={video.trailerVideo} />
            <label>Full Video</label>
            <input type="file" placeholder={video.fullVideo} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={video.image}
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
