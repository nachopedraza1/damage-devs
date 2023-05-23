import { FC, useContext, useState } from "react"
import { UiContext } from "@/context/UiContext";

import { Button, Modal, Fade, Box, Step, StepLabel, Stepper, TextField } from "@mui/material"

import { Formik, Form, ErrorMessage, Field, FormikHelpers } from "formik";
import { YupValidation } from "@/helpers/YupValidation";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#1d1b1b',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: "10px",
    boxShadow: 24,
    p: 3,
};


const initialValue = {
    name: "",
    email: "",
    phoneNumber: "",
};

interface Values {
    name: string,
    email: string,
    phoneNumber: string,
}

const steps = ['Selecciona un plan', 'Información', 'Confirmación'];

export const ModalOrder: FC = () => {

    const [step, setStep] = useState(1)

    const { openModal, handleCloseModal } = useContext(UiContext);

    const nextStep = () => setStep(step + 1);
    const backStep = () => setStep(step - 1);

    const handleSubmit = (values: Values, props: FormikHelpers<Values>) => {
        console.log(values);
        alert(JSON.stringify(values));

        props.resetForm();
    };


    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={step} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box>
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
                                                variant="contained"
                                                type="submit"
                                                color="primary"
                                                fullWidth
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Button variant="contained" disabled={step === 1} onClick={backStep}>
                                BACK
                            </Button>
                            {
                                step <= 1 ?
                                    <Button variant="contained" onClick={nextStep} >
                                        Next
                                    </Button>
                                    :
                                    <Button variant="contained" >
                                        Enviar
                                    </Button>
                            }
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

/* const onSubmitOrder = async (event: FormEvent) => {
    event.preventDefault();

    const API = `https://api.whatsapp.com/send?phone=543513295515&text= Hola, quiero contratar el plan Tienda Online.`;
    window.open(API, '_blank')
} */
