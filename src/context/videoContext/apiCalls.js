import axios from "axios";
import {
  createVideoFailure,
  createVideoStart,
  createVideoSuccess,
  deleteVideoFailure,
  deleteVideoStart,
  deleteVideoSuccess,
  getVideosFailure,
  getVideosStart,
  getVideosSuccess,
} from "./VideoActions";

export const getVideos = async (dispatch) => {
  dispatch(getVideosStart());
  try {
    const response = await axios.get("http://localhost:5000/api/videos", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(getVideosSuccess(response.data.videos));
  } catch (err) {
    dispatch(getVideosFailure());
  }
};

//create
export const createVideo = async (video, dispatch) => {
  dispatch(createVideoStart());
  try {
    const res = await axios.post("http://localhost:5000/api/videos", video, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
        "content-Type": "application/json",
      },
    });
    dispatch(createVideoSuccess(res.data));
    getVideos(dispatch);
  } catch (err) {
    dispatch(createVideoFailure());
  }
};

//delete
export const deleteVideo = async (id, dispatch) => {
  dispatch(deleteVideoStart());
  try {
    await axios.delete("http://localhost:5000/api/videos/" + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(deleteVideoSuccess(id));
  } catch (err) {
    dispatch(deleteVideoFailure());
  }
};
