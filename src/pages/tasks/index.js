import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {ThemeContext} from "../../ThemeContext";
const Tasks = () => {
  const {state} = useContext(ThemeContext);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      type: "string",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      type: "string",
      editable: false,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      type: "string",
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      type: "string",
      editable: false,
    },
    {
      field: "assignedTo",
      headerName: "Assigned to",
      width: 110,
      type: "string",
      editable: false,
    },
    {
      field: "dueDate",
      headerName: "Due date",
      width: 110,
      type: "string",
      editable: false,
    },
    {
      field: "created",
      headerName: "Created",
      width: 110,
      type: "string",
      editable: false,
    },
  ];

  const [tasks, setTasks] = useState("");

  useEffect(() => {
    fetch(window.$tasks + "/v1/tasks", {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTasks(json);
      });
  }, []);
  return (
    <div>
      <center>
        <div style={{ height: 400, width: "70%", backgroundColor: `${state.isDarkMode ? "rgb(98, 3, 187)" : "white"}`}}>
          <DataGrid
            style={{color:`${state.isDarkMode ? "white" : "black"} `, borderColor:`${state.isDarkMode ? "white" : "black"} `}}
            rows={tasks || []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </center>
    </div>
  );
};
export default Tasks;
