/* eslint-disable react/prop-types */
import { CloseOutlined, EditOutlined } from "@mui/icons-material";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import InputField from "../common/InputField";
import { Form, Formik } from "formik";
import axios from "axios";

import ValidationSchema from "../../validation/ValidationSchema";
import { style } from "../../Styles";

const EditUser = ({ user, setUser }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (values) => {
        try {
            const { data } = await axios.put(
                `http://59.152.62.177:8085/api/Employee/UpdateEmployeeInformation/${user?.empID}`,
                values,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (data) {
                setUser(values);
                setOpen(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "end", mt: 1, mr: 1 }}>
                <Button variant="contained" size="small" onClick={handleOpen}>
                    <EditOutlined fontSize="small" sx={{ mr: 1 }} /> Edit User
                </Button>
            </Box>
            <Modal open={open} onClose={handleClose}>
                <Formik
                    initialValues={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                        employeeType: user.employeeType,
                        divisionId: user.divisionId,
                        districeID: user.districeID,
                    }}
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
                                    sx={{ mb: 2 }}
                                    name="firstName"
                                    label="First Name"
                                    placeholder="First Name"
                                    defaultValue={user?.firstName}
                                    type="text"
                                    error={errors.firstName}
                                    helperText={errors.firstName}
                                    onChange={(e) => setFieldValue("firstName", e.target.value)}
                                />
                                <InputField
                                    sx={{ mb: 2 }}
                                    name="lastName"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    defaultValue={user?.lastName}
                                    type="text"
                                    error={errors.lastName}
                                    helperText={errors.lastName}
                                    onChange={(e) => setFieldValue("lastName", e.target.value)}
                                />
                                <InputField
                                    sx={{ mb: 2 }}
                                    name="employeeType"
                                    label="Employee Type"
                                    placeholder="Employee Type"
                                    defaultValue={user?.employeeType}
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
                                    sx={{ mb: 2 }}
                                    name="districeID"
                                    label="District ID"
                                    placeholder="0"
                                    defaultValue={user?.districeID}
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
                                    Update
                                </Button>
                            </Form>
                        </Box>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default EditUser;
