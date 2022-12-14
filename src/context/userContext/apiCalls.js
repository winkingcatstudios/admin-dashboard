import axios from "axios";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(getUsersSuccess(response.data.users));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

//create
export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, user, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
        "content-Type": "application/json",
      },
    });
    dispatch(createUserSuccess(res.data));
    getUsers(dispatch);
  } catch (err) {
    dispatch(createUserFailure());
  }
};

//update
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/users/`  + id, user, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
        "content-Type": "application/json",
      },
    });
    dispatch(updateUserSuccess(res.data));
    getUsers(dispatch);
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/` + id, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
