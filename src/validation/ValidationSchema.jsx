import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("This field is required"),
    lastName: Yup.string().trim().required("This field is required"),
    employeeType: Yup.string().trim().required("This field is required"),
    divisionID: Yup.number("This field must be a number").required("This field is required"),

    districeID: Yup.number("This field must be a number").required("This field is required"),
});

export default ValidationSchema;
