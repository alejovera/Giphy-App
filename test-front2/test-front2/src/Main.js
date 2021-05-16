import React, { useState } from "react";
import MUIDataTable from "mui-datatables";



import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function Main() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const columns = ["Type","Name", "Sensor", "Date", "Time", "Status", "Action"];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight
  };

  const data = [
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    
    ];

  return (
    <React.Fragment>
      <MUIDataTable
        className="datatable"
        title={"ALERTS"}
        data={data}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}

export default Main;

