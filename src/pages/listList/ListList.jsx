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
    { field: "id", headerName: "ID", width: 250 },
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
                navigate("/lists/" + params.row.id, {
                  state: { list: params.row },
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
    <div className="productList">
      <div className="productListTitleContainer">
        <h1 className="productTitle">Lists List</h1>
        <Link to="/newList">
          <button className="productListAddButton">Create List</button>
        </Link>
      </div>
      <DataGrid
        getRowId={row => row.id}
        disableSelectionOnClick
        rows={lists}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
