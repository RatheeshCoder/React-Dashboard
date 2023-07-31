import React from 'react'

import { CustomersData } from '../../Data/Data';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
  } from "@mui/material";
  import TablePagination from "@mui/material/TablePagination";
  import "./Customer.css"



const Customer = () => {

    const makeStyle=(status)=>{
        if(status === 'Active')
        {
          return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
          }
        }
        else if(status === 'Inactive')
        {
          return{
            background: '#ffadad8f',
            color: 'red',
          }
        }
       
      }

        const rowsPerPageOptions = [10, 20, 30];
        const [page, setPage] = React.useState(0);
     
        const [rowsPerPage, setRowsPerPage] = React.useState(10); // Start with 10 rows per page
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        };
      
        const slicedData = CustomersData.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        );
  return (
    <div className='CustomerMain' >
        <h1>Customer Details</h1>
<React.Fragment>
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029",maxHeight: "600px", overflow: "auto" , minWidth: "700px"  }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
              <TableCell>Email ID</TableCell>
              <TableCell>PH-Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>No. of Products Order</TableCell>
              <TableCell>Total Order</TableCell>
              <TableCell>Amount Spent</TableCell>
              <TableCell>Last Active Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {slicedData.map((customer) => (
              <TableRow
                key={customer.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {customer.name}
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.numProductOrders}</TableCell>
                <TableCell>{customer.totalOrders}</TableCell>
                <TableCell>{customer.amountSpent}</TableCell>
                <TableCell>{customer.lastActiveDate}</TableCell>
                <TableCell>
                  <span className="status" style={makeStyle(customer.status)}>
                    {customer.status}
                  </span>
                </TableCell>
                <TableCell className="Details">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
                  rowsPerPageOptions={rowsPerPageOptions}
                  component="div"
                  count={CustomersData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  style={{ backgroundColor: "#f1f1f1", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}
                  labelRowsPerPage="Rows per page"
      />
    </React.Fragment>

    </div>

);
};

export default Customer;
