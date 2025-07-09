// 12.Build a data table using Material-UI's Table component. 
// Populate the table with sample data and add features like sorting and pagination.


"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ✅ Question 12:
// Build a data table using Material-UI's Table component.
// Populate the table with sample data and add features like sorting and pagination.

// ✅ Sample Indian user data
const users = [
  { id: 1, name: "Aarav Sharma", age: 25, email: "aarav.sharma@example.in" },
  { id: 2, name: "Bhavya Patel", age: 30, email: "bhavya.patel@example.in" },
  { id: 3, name: "Chirag Verma", age: 22, email: "chirag.verma@example.in" },
  { id: 4, name: "Divya Reddy", age: 28, email: "divya.reddy@example.in" },
  { id: 5, name: "Esha Gupta", age: 35, email: "esha.gupta@example.in" },
  { id: 6, name: "Farhan Khan", age: 24, email: "farhan.khan@example.in" },
  { id: 7, name: "Gauri Joshi", age: 27, email: "gauri.joshi@example.in" },
  { id: 8, name: "Harsh Vyas", age: 32, email: "harsh.vyas@example.in" },
  { id: 9, name: "Isha Nair", age: 29, email: "isha.nair@example.in" },
  { id: 10, name: "Jay Mehta", age: 26, email: "jay.mehta@example.in" },
  { id: 11, name: "Kavya Sinha", age: 31, email: "kavya.sinha@example.in" },
  { id: 12, name: "Laksh Bansal", age: 23, email: "laksh.bansal@example.in" },
  { id: 13, name: "Meera Desai", age: 34, email: "meera.desai@example.in" },
  { id: 14, name: "Nikhil Rao", age: 28, email: "nikhil.rao@example.in" },
  { id: 15, name: "Ojaswini Kulkarni", age: 27, email: "ojaswini.k@example.in" },
  { id: 16, name: "Pranav Iyer", age: 30, email: "pranav.iyer@example.in" },
  { id: 17, name: "Riya Bhatt", age: 26, email: "riya.bhatt@example.in" },
  { id: 18, name: "Siddharth Malhotra", age: 33, email: "siddharth.m@example.in" },
  { id: 19, name: "Tanvi Shah", age: 24, email: "tanvi.shah@example.in" },
  { id: 20, name: "Uday Chopra", age: 29, email: "uday.chopra@example.in" },
  { id: 21, name: "Varun Nanda", age: 31, email: "varun.nanda@example.in" },
  { id: 22, name: "Wamiqa Gill", age: 27, email: "wamiqa.gill@example.in" },
  { id: 23, name: "Yash Tiwari", age: 25, email: "yash.tiwari@example.in" },
  { id: 24, name: "Zoya Mirza", age: 28, email: "zoya.mirza@example.in" },
  { id: 25, name: "Ananya Kumar", age: 30, email: "ananya.kumar@example.in" },
];

const Page = () => {
  const theme = useTheme();
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  const visibleUsers = sortedUsers.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return (
    <div>
      <Typography variant="h6" align="center" mt={4} mb={2}>
        12. Build a data table using Material-UI's Table component. Populate the
        table with sample data and add features like sorting and pagination.
      </Typography>

      <Paper
        sx={{
          width: "90%",
          margin: "auto",
          overflow: "hidden",
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h6" sx={{ p: 2 }}>
          Indian Users Table
        </Typography>

        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {["id", "name", "age", "email"].map((headCell) => (
                  <TableCell
                    key={headCell}
                    sortDirection={orderBy === headCell ? order : false}
                    sx={{ fontWeight: "bold" }}
                  >
                    <TableSortLabel
                      active={orderBy === headCell}
                      direction={orderBy === headCell ? order : "asc"}
                      onClick={() => handleRequestSort(headCell)}
                    >
                      {headCell.charAt(0).toUpperCase() + headCell.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleUsers.map((user) => (
                <TableRow hover key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
              {visibleUsers.length < rowsPerPage && (
                <TableRow
                  style={{ height: 53 * (rowsPerPage - visibleUsers.length) }}
                >
                  <TableCell colSpan={4} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Page;
