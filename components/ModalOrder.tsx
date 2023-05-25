import { FC, useContext, useState } from "react"
import { UiContext } from "@/context/UiContext";

import { Button, Modal, Fade, Box, Step, StepLabel, Stepper, TextField, IconButton } from "@mui/material"

import { Formik, Form, ErrorMessage, Field, FormikHelpers } from "formik";
import { YupValidation } from "@/helpers/YupValidation";
import { ArrowBack, Check } from "@mui/icons-material";
import { OrderForm } from "./OrderForm";


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


const steps = ['Selecciona un plan', 'Información', 'Confirmación'];

export const ModalOrder: FC = () => {

    const [step, setStep] = useState(1)

    const { openModal, handleCloseModal } = useContext(UiContext);

    const nextStep = () => setStep(step + 1);
    const backStep = () => setStep(step - 1);

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Box sx={{ width: '100%', position: "relative" }}>
                            <Stepper activeStep={step} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            {
                                step === 2 &&
                                <IconButton onClick={backStep} sx={{ position: "absolute", top: -5 }}>
                                    <ArrowBack />
                                </IconButton>
                            }
                        </Box>
                        <OrderForm nextStep={nextStep} />
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
