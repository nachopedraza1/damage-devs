import { FC, ReactNode } from "react"
import Head from "next/head"

import { Container } from '@mui/material'

interface Props {
    title: string;
    children: ReactNode | ReactNode[];
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>

            <Container maxWidth="lg">
                {children}
            </Container >
        </>
    )
}
