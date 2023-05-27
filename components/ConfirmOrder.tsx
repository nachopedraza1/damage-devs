import { FC, FormEvent } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { Check } from "@mui/icons-material";
import { Button, Grid, Typography, Link as MuiLink } from '@mui/material';
import { FormData } from "@/interfaces"

export const ConfirmOrder: FC<FormData> = ({ email, name, phoneNumber }) => {

    const { pathname } = useRouter();

    const selectedPlan = () => {
        if (pathname.includes("basic")) {
            return "Basico";
        }
        else {
            return "Tienda Online";
        }
    }

    const onSubmitOrder = async (event: FormEvent) => {
        event.preventDefault();

        const API = `https://api.whatsapp.com/send?phone=543513295515&text=Hola, mi nombre es ${name}, quiero contratar el plan ${selectedPlan()}.`;
        window.open(API, '_blank')
    }

    return (
        <Grid container justifyContent="space-between">
            <Grid item display="flex" flexDirection="column" xs={8}>
                <Typography mb={1}> Una vez confirmada la orden será redireccionado/a a un chat directo para enviar la misma. </Typography>
                <Typography color="primary" fontWeight={600}> Plan Seleccionado: <span style={{ marginLeft: 8, fontWeight: 300 }}> {selectedPlan()}  </span> </Typography>
                <Typography color="primary" fontWeight={600}> Nombre: <span style={{ marginLeft: 8, fontWeight: 300 }}> {name}  </span> </Typography>
                <Typography color="primary" fontWeight={600}> Email: <span style={{ marginLeft: 8, fontWeight: 300 }}> {email}  </span> </Typography>
                <Typography color="primary" fontWeight={600}> Teléfono: <span style={{ marginLeft: 8, fontWeight: 300 }}> {phoneNumber}  </span> </Typography>

                <Typography mt={1}> ¿Tienes preguntas? Visita nuestra sección de
                    <MuiLink component={Link} href="/faq" sx={{ textDecoration: "underline", ml: 1 }}>
                        preguntas frecuentes.
                    </MuiLink >
                </Typography>

            </Grid>
            <Grid item xs={4} textAlign="end">
                <Image src="/images/orderconfirmation.png" alt="Damage devs nueva orden" width={200} height={230} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" fullWidth endIcon={<Check />} onClick={onSubmitOrder}>
                    confirmar
                </Button>
            </Grid>
        </Grid >
    )
}
