import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./newList.css";
import { getVideos } from "../../context/videoContext/apiCalls";
import { VideoContext } from "../../context/videoContext/VideoContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";

export default function NewList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();
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
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
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
          Create
        </button>
      </form>
    </div>
  );
}
