/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Field } from "formik";

const InputField = ({ name, label, placeholder, defaultValue, type, error, helperText }) => {
    return (
        <Field
            as={TextField}
            name={name}
            label={label}
            placeholder={placeholder}
            defaultValue={defaultValue}
            type={type}
            error={error}
            helperText={helperText}
            size="small"
            sx={{ mb: 2 }}
        />
    );
};

export default InputField;
