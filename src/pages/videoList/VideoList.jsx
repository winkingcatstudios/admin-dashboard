import React, { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

import "./videoList.css";
import { VideoContext } from "../../context/videoContext/VideoContext";
import { deleteVideo, getVideos } from "../../context/videoContext/apiCalls";

export default function VideoList() {
  const { videos, dispatch } = useContext(VideoContext);

  const navigate = useNavigate();

  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteVideo(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 210 },
    {
      field: "video",
      headerName: "Video",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "year", headerName: "Year", width: 75 },
    { field: "ageLimit", headerName: "Age Limit", width: 75 },
    { field: "isSeries", headerName: "Series?", width: 75 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <button
              onClick={() =>
                navigate("/videos/" + params.row.id, {
                  state: { video: params.row },
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
        <h1 className="productTitle">Video List</h1>
        <Link to="/newVideo">
          <button className="productListAddButton">Create Video</button>
        </Link>
      </div>
      <DataGrid
        disableSelectionOnClick
        rows={videos}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
