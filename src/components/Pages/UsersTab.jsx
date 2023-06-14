import { Tab, Tabs } from "@mui/material";

const UsersTab = ({ value, handleChange }) => {
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
        >
            <Tab value="user" label="User" />
            <Tab value="employees" label="Employees" />
        </Tabs>
    );
};

export default UsersTab;
