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
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const response = await axios.get("http://localhost:5000/api/users", {
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
    const res = await axios.post("http://localhost:5000/api/users/signup", user, {
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

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("http://localhost:5000/api/users/" + id, {
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