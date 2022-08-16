import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListStart,
  updateListSuccess,
  updateListFailure
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/lists`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(getListsSuccess(res.data.lists));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/lists`, list, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
        "content-Type": "application/json",
      },
    });
    dispatch(createListSuccess(res.data));
    getLists(dispatch);
  } catch (err) {
    dispatch(createListFailure());
  }
};

//update
export const updateList = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/lists/`  + id, list, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
        "content-Type": "application/json",
      },
    });
    dispatch(updateListSuccess(res.data));
    getLists(dispatch);
  } catch (err) {
    dispatch(updateListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/lists/` + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
