import { FC } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { YupValidation } from "@/helpers/YupValidation";

import { ArrowForward } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";

import { FormData } from "@/interfaces";

interface Props {
    handleSubmit: (formData: FormData) => void
}

const initialValue: FormData = {
    name: "",
    email: "",
    phoneNumber: "",
};


export const OrderForm: FC<Props> = ({ handleSubmit }) => {

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
                            label="Nombre completo"
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
                            label="Teléfono"
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
                            endIcon={<ArrowForward />}
                        >
                            Continuar
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    )
}
