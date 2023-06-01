import { FC, useEffect, useState } from "react"
import Image from "next/image";

import { CircularProgress } from "@mui/material";

export const LoaderImage: FC<{ url: string }> = ({ url }) => {

    const [loading, setLoading] = useState<boolean>(true);

    const isLoaded = () => {
        setLoading(false)
    }

    return (
        <>
            <Image src={url} alt="DMG DEVS" fill onLoad={isLoaded} loading="lazy" className="image" />
            {loading &&
                <CircularProgress sx={{
                    position: "absolute",
                    top: '40%',
                    left: '47%',
                }} />}
        </>
    )
}
