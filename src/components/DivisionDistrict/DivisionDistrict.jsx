/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";

const DivisionDistrict = () => {
    const [division, setDivision] = useState([]);
    const [divisionValue, setDivisionValue] = useState("select");
    const [district, setDistrict] = useState([]);
    const [districtValue, setDistrictValue] = useState("select");

    const handleDivisionChange = (e) => {
        setDivisionValue(e.target.value);
    };

    const handleDistrictChange = (e) => {
        setDistrictValue(e.target.value);
    };

    // fetch division data
    const fetchDivisionData = async () => {
        try {
            const { data } = await axios.get("http://59.152.62.177:8085/api/Employee/Division");

            setDivision(data?.readDivisionData);
        } catch (error) {
            console.error(error);
        }
    };

    // fetch district value by division id
    const fetchDistrictData = async () => {
        try {
            const { data } = await axios.get(
                `http://59.152.62.177:8085/api/Employee/District/${divisionValue}`
            );

            setDistrict(data?.readDistrictData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDivisionData();
        fetchDistrictData();
    }, [divisionValue, districtValue]);

    return (
        <div>
            <Select
                sx={{ mt: 2, mr: 2 }}
                size="small"
                displayEmpty
                value={divisionValue}
                onChange={handleDivisionChange}
            >
                <MenuItem disabled selected value="select">
                    <b>Select Division</b>
                </MenuItem>
                {division?.map((item) => (
                    <MenuItem key={item?.divID} value={item?.divID}>
                        {item?.divisionName}
                    </MenuItem>
                ))}
            </Select>

            <Select size="small" displayEmpty value={districtValue} onChange={handleDistrictChange}>
                <MenuItem disabled selected value="select">
                    <b>Select District</b>
                </MenuItem>
                {district?.map((item) => (
                    <MenuItem key={item?.districtID} value={item?.districtID}>
                        {item?.districtName}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default DivisionDistrict;
