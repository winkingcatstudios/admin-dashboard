import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import axios from "axios";

import { getVideos } from "../../context/videoContext/apiCalls";
import { VideoContext } from "../../context/videoContext/VideoContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import "./list.css";

export default function List() {
  const location = useLocation();
  const { list } = location.state;
  const [updatedList, setUpdatedList] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useContext(ListContext);
  const { videos, dispatch: dispatchVideo } = useContext(VideoContext);
  const [videoNames, setVideoNames] = useState([]);

  useEffect(() => {
    getVideos(dispatchVideo);
  }, [dispatchVideo]);

  useEffect(() => {
    const getVideo = async (index) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/videos/find/` +
            list.content[index],
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
            },
          }
        );
        setVideoNames((prev) => [...prev, response.data.video.title]);
      } catch (err) {
        console.log(err);
      }
    };
    for (let i = 0; i < list.content.length; i++) {
      getVideo(i);
    }
    // getVideo();
  }, [list]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    updatedList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonList = JSON.stringify({
      title: list.title,
      type: list.type || "oneshots",
      genre: list.genre || "other",
      content: list.content,
    });

    createList(jsonList, dispatch);
    navigate("/lists");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create List</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Title: {list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Content:</span>
            </div>
            <div className="productInfoVideoList">
              {videoNames.map((videoName) => (
                <>
                <span className="productInfoVideos">{videoName}</span>
                <span className="productInfoVideos"> {" | "}</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="addProductForm">
          <div className="formLeft">
            <div className="addProductItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="List Title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Type</label>
              <select name="type" onChange={handleChange}>
                <option value="oneshots">Oneshots</option>
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
          </div>
          <div className="formRight">
            <div className="addProductItem">
              <label>Content</label>
              <select
                multiple
                name="content"
                onChange={handleSelect}
                style={{ height: "280px" }}
              >
                {videos.map((video) => (
                  <option key={video._id} value={video._id}>
                    {video.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="addProductButton" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
