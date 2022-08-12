import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import "./listList.css";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  const navigate = useNavigate();

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <button
              onClick={() =>
                navigate("/lists/" + params.row._id, {
                  state: { list: params.row },
                })
              }
              className="productListEdit"
            >
              Edit
            </button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </React.Fragment>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productListTitleContainer">
        <h1 className="productTitle">Lists List</h1>
        <Link to="/newList">
          <button className="productListAddButton">Create List</button>
        </Link>
      </div>
      <DataGrid
        getRowId={(r) => r._id}
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}
