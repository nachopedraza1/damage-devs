import { FC, ReactNode } from "react"
import Head from "next/head"

import { Container } from '@mui/material';
import { Blob } from "../ui";

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
                <Blob width="50%" top="-30px" left="2%" />
                <Blob width="70%" top="500px" left="60%" />
                <Blob width="60%" top="1250px" left="-3%" />
                <Blob width="60%" top="2050px" right={-150} />
                <Blob width="60%" top="2550px" left="-3%" />
                {children}
            </Container >
        </>
    )
}
