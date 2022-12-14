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
  updateVideoStart,
  updateVideoSuccess,
  updateVideoFailure
} from "./VideoActions";

export const getVideos = async (dispatch) => {
  dispatch(getVideosStart());
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/videos`, {
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
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/videos`, video, {
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

//update
export const updateVideo = async (id, video, dispatch) => {
  dispatch(updateVideoStart());
  try {
    const res = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/videos/`  + id, video, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
        "content-Type": "application/json",
      },
    });
    dispatch(updateVideoSuccess(res.data));
    getVideos(dispatch);
  } catch (err) {
    dispatch(updateVideoFailure());
  }
};

//delete
export const deleteVideo = async (id, dispatch) => {
  dispatch(deleteVideoStart());
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/videos/` + id, {
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
