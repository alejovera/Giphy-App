import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

import './Main.css';

import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import ListIcons from './ListIcons';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';

// const customStyles = theme => ({
//   BusinessAnalystRow: {
//     '& td': { backgroundColor: '#FAA' },
//   },
//   GreyLine: {
//     '& td': { backgroundColor: theme.palette.grey[200] },
//   },
//   NameCell: {
//     fontWeight: 900,
//   },
// });


function Main() {

  // getMuiTheme = () => 
  //   createMuiTheme({
  //     overrides: {
  //       MUIDataTable: {
  //         root: {
  //           backgroundColor: '#AAF',
  //         },
  //       }, 
  //     },
  //   });

  const columns = [
    {
      name:"Type",
      options: {
        customBodyRenderLite: (dataIndex) => {
          
          return (
            // <CloudIcon />
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
            <BuildSharpIcon />
          )
        }
      }
    }
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    viewColumns: false,
    selectableRows: false,
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
      {/* <MuiThemeProvider theme={this.getMuiTheme()}> */}
        <MUIDataTable
          className="datatable"
          title={"ALERTS"}
          {...{data, columns, options}}
        />
      {/* </MuiThemeProvider> */}
    </React.Fragment>
  );
}

export default Main;

