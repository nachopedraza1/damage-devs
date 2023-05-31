import { FC, useContext, useState } from "react"
import { UiContext } from "@/context/UiContext";

import { Modal, Fade, Box, Step, StepLabel, Stepper, IconButton, Divider } from "@mui/material"
import { ArrowBack } from "@mui/icons-material";

import { OrderForm, ConfirmOrder } from "@/components";

import { FormData } from "@/interfaces";
import { useStepper } from "@/hooks";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    maxWidth: 700,
    bgcolor: '#1d1b1b',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: "10px",
    boxShadow: 24,
    p: 3,
};

const steps = ['Selecciona un plan', 'Información', 'Confirmación'];

export const ModalOrder: FC = () => {

    const { openModal, handleCloseModal } = useContext(UiContext);

    const { step, nextStep, backStep } = useStepper();

    const [formData, setFormData] = useState<FormData>({});
    const handleSubmit = (formData: FormData) => {
        setFormData(formData);
        nextStep();
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
                        <Box sx={{ width: '100%', position: "relative" }}>
                            <Stepper activeStep={step} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <Divider sx={{ mt: 2 }} />
                            {
                                step >= 2 &&
                                <IconButton onClick={backStep} sx={{ position: "absolute", top: -5 }}>
                                    <ArrowBack />
                                </IconButton>
                            }
                        </Box>
                        <Box minHeight={300} pt={2}>
                            {step === 1 && <OrderForm handleSubmit={handleSubmit} />}
                            {step === 2 && <ConfirmOrder {...formData} />}
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
