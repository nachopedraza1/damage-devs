import { FC, FormEvent, useContext, useState } from "react"
import { Button, Modal, Fade, Box, Typography, Step, StepLabel, Stepper } from "@mui/material"
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

export const ModalOrder: FC = () => {

    const { openModal, handleCloseModal } = useContext(UiContext)


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
                            <Stepper activeStep={1} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box>
                                    
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Button variant="contained">
                                BACK
                            </Button>
                            <Button variant="contained">
                                Next
                            </Button>
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
