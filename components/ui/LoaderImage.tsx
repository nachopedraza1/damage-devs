import { FC, useEffect, useState } from "react"
import Image from "next/image";

import { CircularProgress } from "@mui/material";

export const LoaderImage: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);

    const isLoaded = () => {
        setLoading(false)
    }

    useEffect(() => {
        console.log(loading);
    }, [loading])

    return (
        <>
            <Image src="/images/image-home-web-design.png" alt="DMG DEVS" fill onLoad={isLoaded} />
            {loading &&
                <CircularProgress sx={{
                    position: "absolute",
                    top: '40%',
                    left: '47%',
                }} />}
        </>
    )
}
