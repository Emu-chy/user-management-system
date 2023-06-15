/* eslint-disable react/prop-types */

import { Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import TableHeading from "../common/TableHeading";
import DivisionDistrict from "../DivisionDistrict/DivisionDistrict";

const EmployeeList = ({ user, value, search, searchedUser }) => {
    return (
        <>
            <DivisionDistrict />
            <TableContainer>
                <Table sx={{ minWidth: 650, mt: 2 }} aria-label="simple table">
                    <TableHeading value={value} />
                    <TableBody>
                        {search === ""
                            ? user?.map(
                                  (user) =>
                                      user?.employeeType === "Employee" && (
                                          <TableRow
                                              key={user.empID}
                                              sx={{
                                                  "&:last-child td, &:last-child th": { border: 0 },
                                              }}
                                          >
                                              <TableCell align="center">{user.empID}</TableCell>
                                              <TableCell align="center">{user.firstName}</TableCell>
                                              <TableCell align="center">{user.lastName}</TableCell>
                                              <TableCell align="center">
                                                  {user.employeeType}
                                              </TableCell>
                                              <TableCell align="center">
                                                  {user.divisionId}
                                              </TableCell>
                                              <TableCell align="center">
                                                  {user.districeID}
                                              </TableCell>
                                              <TableCell align="center">{user.disvision}</TableCell>
                                              <TableCell align="center">{user.district}</TableCell>
                                              <TableCell>
                                                  <Link to={`/details/${user.empID}`}>
                                                      <Button color="secondary" variant="contained">
                                                          Details
                                                      </Button>
                                                  </Link>
                                              </TableCell>
                                          </TableRow>
                                      )
                              )
                            : searchedUser?.map(
                                  (user) =>
                                      user?.employeeType === "Employee" && (
                                          <TableRow
                                              key={user.empID}
                                              sx={{
                                                  "&:last-child td, &:last-child th": { border: 0 },
                                              }}
                                          >
                                              <TableCell align="center">{user.empID}</TableCell>
                                              <TableCell align="center">{user.firstName}</TableCell>
                                              <TableCell align="center">{user.lastName}</TableCell>
                                              <TableCell align="center">
                                                  {user.employeeType}
                                              </TableCell>
                                              <TableCell align="center">
                                                  {user.divisionId}
                                              </TableCell>
                                              <TableCell align="center">
                                                  {user.districeID}
                                              </TableCell>
                                              <TableCell align="center">{user.disvision}</TableCell>
                                              <TableCell align="center">{user.district}</TableCell>
                                              <TableCell align="center">
                                                  <Link to={`/details/${user.empID}`}>
                                                      <Button color="secondary" variant="contained">
                                                          Details
                                                      </Button>
                                                  </Link>
                                              </TableCell>
                                          </TableRow>
                                      )
                              )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default EmployeeList;
