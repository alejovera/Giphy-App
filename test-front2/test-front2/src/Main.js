import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

import './Main.css';

import Footer from './Footer';
import ListIcons from './ListIcons';

import BuildSharpIcon from '@material-ui/icons/BuildSharp';



function Main() {

  const [data, setData] = useState([
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Snoozed", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
    ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],

  ])

  const columns = [
    {
      name:"Type",
      options: {
        customBodyRenderLite: (dataIndex) => {
          
          return (
            <ListIcons data={dataIndex} />
          )
        }
      }
    }
    ,"Name", "Sensor", "Date", "Time", "Status", 
    {
      name: "Action",
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <BuildSharpIcon color="primary" style={{color: 'lightblue', paddingRight: '0px', marginRight: '0px'}} />
          )
        }
      }
    }
  ];

  const options = {
    filter: true,
    viewColumns: false,
    selectableRows: false,
    rowsPerPage: 10,
  };

  // const data = [
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Snoozed", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],
  //   ["", "Alert Name", "Sensor Name", "12/01/2021", "03:21 PM", "Active", ""],

  //   ];


  return (
    <React.Fragment>
      {/* <MuiThemeProvider theme={this.getMuiTheme()}> */}
        <MUIDataTable
          className="datatable"
          title={"ALERTS"}
          {...{data, columns, options}}
        />
      {/* </MuiThemeProvider> */}
      <Footer />
    </React.Fragment>
  );
}

export default Main;

