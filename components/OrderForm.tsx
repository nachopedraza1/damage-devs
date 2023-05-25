import { YupValidation } from "@/helpers/YupValidation";
import { Check } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { FC } from "react";

interface Values {
    name: string,
    email: string,
    phoneNumber: string,
}

const initialValue: Values = {
    name: "",
    email: "",
    phoneNumber: "",
};


export const OrderForm: FC<{ nextStep: () => void }> = ({ nextStep }) => {

    const handleSubmit = (values: Values, props: FormikHelpers<Values>) => {
        nextStep()
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={YupValidation}
            onSubmit={handleSubmit}
        >
            {(props) => {

                return (
                    <Form>
                        <Field
                            as={TextField}
                            label="Name"
                            name="name"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            helperText={<ErrorMessage name="name" />}
                            error={props.errors.name && props.touched.name as any}
                            required
                        />

                        <Field
                            as={TextField}
                            label="Email"
                            type="Email"
                            name="email"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            helperText={<ErrorMessage name="email" />}
                            error={props.errors.email && props.touched.email}
                        />

                        <Field
                            as={TextField}
                            label="Phone Number"
                            name="phoneNumber"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            helperText={<ErrorMessage name="phoneNumber" />}
                            error={
                                props.errors.phoneNumber && props.touched.phoneNumber
                            }
                        />
                        <Button
                            sx={{ mb: 2, mt: 2 }}
                            variant="contained"
                            type="submit"
                            color="primary"
                            fullWidth
                            endIcon={<Check />}
                        >
                            Guardar
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    )
}
