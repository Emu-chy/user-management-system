/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { Form, Formik } from "formik";
import axios from "axios";

import ValidationSchema from "../../validation/ValidationSchema";
import InputField from "../common/InputField";
import { style } from "../../Styles";

const initialValues = {
    firstName: "",
    lastName: "",
    employeeType: "",
    divisionID: 0,
    districeID: 0,
};

const AddUser = ({ user, setUser }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (values) => {
        try {
            const { data } = await axios.post(
                "http://59.152.62.177:8085/api/Employee/SaveEmployeeInformation",
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (data.isSuccess) {
                setUser([...user, values]);
                setOpen(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Add User
            </Button>

            <Modal open={open} onClose={handleClose}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={ValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, errors }) => (
                        <Box sx={style}>
                            <Box sx={{ display: "flex", justifyContent: "end" }}>
                                <CloseOutlined onClick={handleClose} />
                            </Box>
                            <Form>
                                <InputField
                                    name="firstName"
                                    label="First Name"
                                    placeholder="First Name"
                                    type="text"
                                    error={errors.lastName}
                                    helperText={errors.lastName}
                                    onChange={(e) => setFieldValue("lastName", e.target.value)}
                                />
                                <InputField
                                    name="lastName"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    type="text"
                                    error={errors.lastName}
                                    helperText={errors.lastName}
                                    onChange={(e) => setFieldValue("lastName", e.target.value)}
                                />
                                <InputField
                                    name="employeeType"
                                    label="Employee Type"
                                    placeholder="Employee Type"
                                    type="text"
                                    error={errors.employeeType}
                                    helperText={errors.employeeType}
                                    onChange={(e) => setFieldValue("employeeType", e.target.value)}
                                />
                                <InputField
                                    name="divisionId"
                                    label="Division ID"
                                    placeholder="0"
                                    type="number"
                                    error={errors.divisionId}
                                    helperText={errors.divisionId}
                                    onChange={(e) =>
                                        setFieldValue("divisionId", parseInt(e.target.value))
                                    }
                                />
                                <InputField
                                    name="districeID"
                                    label="District ID"
                                    placeholder="0"
                                    type="number"
                                    error={errors.districeID}
                                    helperText={errors.districeID}
                                    onChange={(e) =>
                                        setFieldValue("districeID", parseInt(e.target.value))
                                    }
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    sx={{ display: "block" }}
                                >
                                    save
                                </Button>
                            </Form>
                        </Box>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default AddUser;
