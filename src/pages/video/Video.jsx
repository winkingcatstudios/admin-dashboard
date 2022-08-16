import { Publish } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { updateVideo } from "../../context/videoContext/apiCalls";
import { VideoContext } from "../../context/videoContext/VideoContext";
import storage from "../../firebase";
import "./video.css";

export default function Video() {
  const location = useLocation();
  const { video } = location.state;
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageThumb, setImageThumb] = useState(null);
  const [trailerVideo, setTrailerVideo] = useState(null);
  const [fullVideo, setFullVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [updatedVideo, setUpdatedVideo] = useState({
    title: video.title,
    description: video.description,
    image: video.image,
    imageTitle: video.imageTitle,
    imageThumb: video.imageThumb,
    trailerVideo: video.trailerVideo,
    fullVideo: video.fullVideo,
    year: video.year,
    ageLimit: video.ageLimit,
    genre: video.genre,
    type: video.type,
  });

  const navigate = useNavigate();

  const thisYear = new Date().getFullYear();
  let YEAR_SELECTS = [];
  for (var i = thisYear; i >= 1974; i--) {
    YEAR_SELECTS.push(<option key={i} value={i}>{i}</option>);
  }

  const { dispatch } = useContext(VideoContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setUpdatedVideo({ ...updatedVideo, [event.target.name]: value });
  };

  // const upload = (items) => {
  //   items.forEach((item) => {
  //     const fileName = new Date().getTime() + item.label + item.file.name;
  //     const uploadTask = storage
  //       .ref(`/streamingMedia/${fileName}`)
  //       .put(item.file);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         uploadTask.snapshot.ref.getDownloadURL().then((url) => {
  //           setUpdatedVideo((prev) => {
  //             return { ...prev, [item.label]: url };
  //           });
  //           setUploaded((prev) => prev + 1);
  //         });
  //       }
  //     );
  //   });
  // };

  // const handleUpload = (event) => {
  //   event.preventDefault();
  //   upload([
  //     { file: image, label: "image" },
  //     { file: imageTitle, label: "imageTitle" },
  //     { file: imageThumb, label: "imageThumb" },
  //     { file: trailerVideo, label: "trailerVideo" },
  //     { file: fullVideo, label: "fullVideo" },
  //   ]);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonVideo = JSON.stringify({
      title: updatedVideo.title,
      description: updatedVideo.description,
      image: updatedVideo.image,
      imageTitle: updatedVideo.imageTitle,
      imageThumb: updatedVideo.imageThumb,
      trailerVideo: updatedVideo.trailerVideo,
      fullVideo: updatedVideo.fullVideo,
      year: updatedVideo.year,
      ageLimit: updatedVideo.ageLimit,
      genre: updatedVideo.genre,
      type: updatedVideo.type,
    });
    updateVideo(video.id, jsonVideo, dispatch);
    navigate("/videos");
  };

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
            <img src={video.image} alt="" className="productInfoImg" />
            <span className="productName">Title: {video.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoVolume">{video.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfoVolume">{video.type}</span>
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
            <div className="productInfoItem">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoVolume">{video.description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="addProductForm">
          {/* <div className="addProductItem">
            <label>Full Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Title Image</label>
            <input
              type="file"
              id="imageTitle"
              name="imageTitle"
              onChange={(event) => setImageTitle(event.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Thumbnail Image</label>
            <input
              type="file"
              id="imageThumb"
              name="imageThumb"
              onChange={(event) => setImageThumb(event.target.files[0])}
            />
          </div> */}
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder={video.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              placeholder={video.description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" id="type" onChange={handleChange}>
              <option>Select New Type</option>
              <option value="oneshots">Oneshot</option>
              <option value="series">Series</option>
              <option value="cats">Cats</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <select name="genre" onChange={handleChange}>
              <option>Select New Genre</option>
              <option value="other">Other</option>
              <option value="5e">D&D 5e</option>
              <option value="osr">OSR</option>
              <option value="pathfinder">Pathfinder</option>
              <option value="cypher">Cypher System</option>
              <option value="cthulhi">Call of Cthulhu</option>
              <option value="starwars">Star Wars</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Year</label>
            <select name="year" onChange={handleChange}>
              <option>Select New Year</option>
              {YEAR_SELECTS}
            </select>
          </div>
          <div className="addProductItem">
            <label>Minimum Age</label>
            <select name="ageLimit" onChange={handleChange}>
              <option>Select New Min Age</option>
              <option value="0">-</option>
              <option value="7">7</option>
              <option value="13">13</option>
              <option value="18">18</option>
            </select>
          </div>
          {/* <div
            className="addProductItem"
            name="trailerVideo"
            onChange={(event) => setTrailerVideo(event.target.files[0])}
          >
            <label>Trailer</label>
            <input type="file" />
          </div>
          <div
            className="addProductItem"
            name="fullVideo"
            onChange={(event) => setFullVideo(event.target.files[0])}
          >
            <label>Full Video</label>
            <input type="file" />
          </div> */}
          {/* {uploaded === 5 ? ( */}
            <button className="addProductButton" onClick={handleSubmit}>
              Update
            </button>
          {/* ) : (
            <button className="addProductButton" onClick={handleUpload}>
              Upload
            </button>
          )} */}
        </form>
      </div>
    </div>
  );
}
