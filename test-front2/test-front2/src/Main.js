import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import CodeIcon from '@material-ui/icons/Code';
import CloudIcon from '@material-ui/icons/Cloud';

// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

function Main() {
  // const [responsive, setResponsive] = useState("vertical");
  // const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  // const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const columns = [
    {
      name:"Type",
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <EmojiObjectsIcon />
          )
        }
      }
    }
    ,"Name", "Sensor", "Date", "Time", "Status", "Action"
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    viewColumns: false,
    // responsive,
    // tableBodyHeight,
    // tableBodyMaxHeight
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

    const components = {
      icons: {
        EmojiObjectsIcon,
        MeetingRoomIcon,
        CodeIcon,
        CloudIcon
      }
    }

  return (
    <React.Fragment>
      <MUIDataTable
        className="datatable"
        title={"ALERTS"}
        {...{data, columns, options, components}}
        // data={data}
        // columns={columns}
        // options={options}
        // components={components}
      />
    </React.Fragment>
  );
}

export default Main;

