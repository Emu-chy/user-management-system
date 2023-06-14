/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import AddUser from "../Modal/AddUser";
import AdminList from "../AdminList/AdminList";
import EmployeeList from "../Employee/EmployeeList";
import UsersTab from "./UsersTab";
import SearchField from "./SearchField";

const Home = () => {
    const [value, setValue] = useState("user");
    const [user, setUser] = useState([]);
    const [searchedUser, setSearchedUser] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchEmployeeData = async () => {
        try {
            const { data } = await axios.get("http://59.152.62.177:8085/api/Employee/EmployeeData");

            setUser(data?.readEmployeeData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (search !== "") {
            const searchedUsers = user.filter(
                (item) =>
                    item?.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item?.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item?.employeeType.toLowerCase().includes(search.toLowerCase()) ||
                    item?.disvision.toLowerCase().includes(search.toLowerCase()) ||
                    item?.district.toLowerCase().includes(search.toLowerCase())
            );
            setSearchedUser(searchedUsers);
        }
        fetchEmployeeData();
    }, [search]);

    return (
        <Box sx={{ m: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    gap: 2,
                    justifyContent: "space-between",
                }}
            >
                <UsersTab value={value} handleChange={handleChange} />
                <SearchField setSearch={setSearch} />
                <AddUser user={user} setUser={setUser} />
            </Box>
            {value === "user" && (
                <AdminList user={user} search={search} searchedUser={searchedUser} />
            )}
            {value === "employees" && (
                <EmployeeList
                    user={user}
                    value={value}
                    search={search}
                    searchedUser={searchedUser}
                />
            )}
        </Box>
    );
};

export default Home;
