import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


import Footer from './Footer';
import ListIcons from './ListIcons';

import BuildSharpIcon from '@material-ui/icons/BuildSharp';


function Main() {


  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          '&:nth-child(2)': {
            width: '20%'
          },
          '&:nth-child(3)': {
            width: '20%'
          },
          '&:nth-child(4)': {
            width: '20%'
          },
          '&:nth-child(5)': {
            width: '80%'
          },
        }
      },
      MuiTableRow: {
        root: {
          '&:nth-child(2n)': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          },
          '&:hover': {
            backgroundColor: 'rgb(51, 47, 47)'
          },
        }
      },
      MUIDataTableFooter: {
        root: {
          display: 'none'
        }
      }
    }
  })


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
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          className="datatable"
          title={"ALERTS"}
          {...{data, columns, options}}
        />
      </MuiThemeProvider>
      <Footer />
    </React.Fragment>
  );
}

export default Main;

