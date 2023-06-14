import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditUser from "../Modal/EditUser";
import axios from "axios";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchDetailsData = async () => {
            try {
                const { data } = await axios.get(
                    `http://59.152.62.177:8085/api/Employee/IndividualEmployeeData/${id}`
                );

                setUser(data?.readEmployeeData[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDetailsData();
    }, [id]);

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ m: 4, border: 1, borderColor: "black", width: 500 }}>
                <EditUser user={user} setUser={setUser} />
                <CardContent>
                    <Typography>
                        <b>First Name:</b> {user.firstName}
                    </Typography>
                    <Typography>
                        <b>Last Name:</b> {user.lastName}
                    </Typography>
                    <Typography>
                        <b>Employee Type:</b> {user.employeeType}
                    </Typography>
                    <Typography>
                        <b>Division:</b> {user.disvision}
                    </Typography>
                    <Typography>
                        <b>District:</b> {user.district}
                    </Typography>
                    <Typography>
                        <b>Division ID:</b> {user.divisionId}
                    </Typography>
                    <Typography>
                        <b>District ID:</b> {user.districeID}
                    </Typography>
                </CardContent>
                <Link to={`/`}>
                    <Button>Back to Home</Button>
                </Link>
            </Card>
        </Box>
    );
};

export default UserDetails;
