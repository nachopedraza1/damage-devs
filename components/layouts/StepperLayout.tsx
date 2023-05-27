import { ArrowBack } from "@mui/icons-material";
import { Modal, Fade, Box, Stepper, Step, StepLabel, Divider, IconButton } from "@mui/material";
import { FC, ReactNode, useContext, useState } from "react"
import { ConfirmOrder } from "../ConfirmOrder";
import { OrderForm } from "../OrderForm";
import { UiContext } from "@/context/UiContext";

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

export const StepperLayout: FC<{ children: ReactNode }> = ({ children }) => {

    const { openModal, handleCloseModal } = useContext(UiContext);

    const [step, setStep] = useState(1)
    const nextStep = () => setStep(step + 1);
    const backStep = () => setStep(step - 1);

    return (
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
                        <Divider sx={{ mt: 3 }} />
                        {
                            step >= 2 &&
                            <IconButton onClick={backStep} sx={{ position: "absolute", top: -5 }}>
                                <ArrowBack />
                            </IconButton>
                        }
                    </Box>
                    <Box minHeight={285}>
                        {children}
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

