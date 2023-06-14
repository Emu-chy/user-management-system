/* eslint-disable react/prop-types */
import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import TableHeading from "../common/TableHeading";

const AdminList = ({ user, search, searchedUser }) => {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650, mt: 2 }} aria-label="simple table">
                <TableHeading />
                <TableBody>
                    {search === ""
                        ? user?.map(
                              (user) =>
                                  user?.employeeType === "Admin" && (
                                      <TableRow
                                          key={user.empID}
                                          sx={{
                                              "&:last-child td, &:last-child th": { border: 0 },
                                          }}
                                      >
                                          <TableCell align="center">{user.empID}</TableCell>
                                          <TableCell align="center">{user.firstName}</TableCell>
                                          <TableCell align="center">{user.lastName}</TableCell>
                                          <TableCell align="center">{user.employeeType}</TableCell>
                                          <TableCell align="center">{user.divisionId}</TableCell>
                                          <TableCell align="center">{user.districeID}</TableCell>
                                          <TableCell align="center">{user.disvision}</TableCell>
                                          <TableCell align="center">{user.district}</TableCell>
                                      </TableRow>
                                  )
                          )
                        : searchedUser?.map(
                              (user) =>
                                  user?.employeeType === "Admin" && (
                                      <TableRow
                                          key={user.empID}
                                          sx={{
                                              "&:last-child td, &:last-child th": { border: 0 },
                                          }}
                                      >
                                          <TableCell align="center">{user.empID}</TableCell>
                                          <TableCell align="center">{user.firstName}</TableCell>
                                          <TableCell align="center">{user.lastName}</TableCell>
                                          <TableCell align="center">{user.employeeType}</TableCell>
                                          <TableCell align="center">{user.divisionId}</TableCell>
                                          <TableCell align="center">{user.districeID}</TableCell>
                                          <TableCell align="center">{user.disvision}</TableCell>
                                          <TableCell align="center">{user.district}</TableCell>
                                      </TableRow>
                                  )
                          )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AdminList;
