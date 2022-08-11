import { useContext, useEffect, useState } from "react";
import "./newList.css";
import storage from "../../firebase";
import { createVideo, getVideos } from "../../context/videoContext/apiCalls";
import { VideoContext } from "../../context/videoContext/VideoContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useNavigate } from "react-router-dom";

export default function NewList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate()

  const { dispatch } = useContext(ListContext);
  const { videos, dispatch: dispatchVideo } = useContext(VideoContext);

  useEffect(() => {
    getVideos(dispatchVideo);
  }, [dispatchVideo]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate.push("/lists")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Videos"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="video">Video</option>
              <option value="series">Series</option>
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
          Create
        </button>
      </form>
    </div>
  );
}
