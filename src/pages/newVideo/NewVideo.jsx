import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createVideo } from "../../context/videoContext/apiCalls";
import { VideoContext } from "../../context/videoContext/VideoContext";
import storage from "../../firebase";
import "./newVideo.css";

export default function NewVideo() {
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageThumb, setImageThumb] = useState(null);
  const [trailerVideo, setTrailerVideo] = useState(null);
  const [fullVideo, setFullVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const navigate = useNavigate();

  const thisYear = new Date().getFullYear();
  let YEAR_SELECTS = [];
  for (var i = thisYear; i >= 1974; i--) {
    YEAR_SELECTS.push(<option key={i} value={i}>{i}</option>);
  }

  const { dispatch } = useContext(VideoContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setVideo({ ...video, [event.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage
        .ref(`/streamingMedia/${fileName}`)
        .put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setVideo((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (event) => {
    event.preventDefault();
    upload([
      { file: image, label: "image" },
      { file: imageTitle, label: "imageTitle" },
      { file: imageThumb, label: "imageThumb" },
      { file: trailerVideo, label: "trailerVideo" },
      { file: fullVideo, label: "fullVideo" },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const jsonVideo = JSON.stringify({
      title: video.title,
      description: video.description,
      image: video.image,
      imageTitle:
        video.imageTitle ||
        "https://winkingcatstudio.com/winkingcatlogo-transparent-white.png",
      imageThumb: video.imageThumb,
      trailerVideo: video.trailerVideo,
      fullVideo: video.fullVideo,
      year: video.year || thisYear,
      ageLimit: video.ageLimit || "0",
      genre: video.genre || "other",
      type: video.type || "oneshots",
    });
    createVideo(jsonVideo, dispatch);
    navigate("/videos");
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
          <label>Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="oneshots">Oneshot</option>
            <option value="series">Series</option>
            <option value="cats">Cats</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <select name="genre" onChange={handleChange}>
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
            {YEAR_SELECTS}
          </select>
        </div>
        <div className="addProductItem">
          <label>Minimum Age</label>
          <select name="ageLimit" onChange={handleChange}>
            <option value="0">-</option>
            <option value="7">7</option>
            <option value="13">13</option>
            <option value="18">18</option>
          </select>
        </div>
        <div
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
        </div>
        {uploaded === 5 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
