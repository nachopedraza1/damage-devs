import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FC, useContext } from "react";
import Slider from "react-slick";

import { UiContext } from "@/context/UiContext";

import { LoaderImage } from "./ui";
import { Modal, Fade, Box, Typography, Grid, Divider } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "85%",
    height: "92vh",
    bgcolor: '#1d1b1b',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: "10px",
    boxShadow: 24,
    padding: 6
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const ModalWorks: FC = () => {

    const { openModal, handleCloseModal } = useContext(UiContext);

    return (
        <Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Slider {...settings}>
                            <Grid container position="relative" textAlign="center" height="90vh">
                                <Typography variant="subtitle1"> Bebo Design </Typography>
                                <span className='mini-divider_2'></span>
                                <LoaderImage url="/images/bebodevices.png" />
                            </Grid>
                            <Grid container position="relative" textAlign="center" height="90vh">
                                <Typography variant="subtitle1"> Belgrano Esports </Typography>
                                <span className='mini-divider_2'></span>
                                <LoaderImage url="/images/belgranodevices.png" />
                            </Grid>
                            <Grid container position="relative" textAlign="center" height="90vh">
                                <Typography variant="subtitle1"> Protocol Mu Online </Typography>
                                <span className='mini-divider_2'></span>
                                <LoaderImage url="/images/protocolmudevices.png" />
                            </Grid>
                            <Grid container position="relative" textAlign="center" height="90vh">
                                <Typography variant="subtitle1"> Fantasias Polirrubro </Typography>
                                <span className='mini-divider_2'></span>
                                <LoaderImage url="/images/fantasiasdevices.png" />
                            </Grid>
                        </Slider>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}
