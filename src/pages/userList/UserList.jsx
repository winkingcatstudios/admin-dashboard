import React, { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";
import "./userList.css";

export default function UserList() {
  const { users, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log(id);
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 210 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "isAdmin", headerName: "Is Admin?", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <button
              onClick={() =>
                navigate("/users/" + params.row.id, {
                  state: { user: params.row },
                })
              }
              className="productListEdit"
            >
              Edit
            </button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="productListTitleContainer">
        <h1 className="productTitle">User List</h1>
        <Link to="/newUser">
          <button className="productListAddButton">Create User</button>
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row.id}
        disableSelectionOnClick
        rows={users}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </div>
  );
}
