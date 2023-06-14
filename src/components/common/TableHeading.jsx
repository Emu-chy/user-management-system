/* eslint-disable react/prop-types */
import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeading = ({ value }) => {
    return (
        <TableHead>
            <TableRow
                sx={{
                    bgcolor: "black",
                    ".MuiTableCell-root": {
                        color: "white",
                    },
                }}
            >
                <TableCell align="center">emp ID</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Employee Type</TableCell>
                <TableCell align="center">Division ID</TableCell>
                <TableCell align="center">Districe ID</TableCell>
                <TableCell align="center">Division</TableCell>
                <TableCell align="center">District</TableCell>
                <TableCell align="center">Action</TableCell>
                {value === "employees" && <TableCell></TableCell>}
            </TableRow>
        </TableHead>
    );
};

export default TableHeading;
