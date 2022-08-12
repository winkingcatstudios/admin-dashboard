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
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("http://localhost:5000/api/lists", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    console.log(res.data.lists)
    dispatch(getListsSuccess(res.data.lists));
    console.log(res.data.lists)
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("http://localhost:5000/api/lists/", list, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("http://localhost:5000/api/lists/" + id, {
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
