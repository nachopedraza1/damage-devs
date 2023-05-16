import { useEffect, useState } from "react";

export const captureScroll = () => {
    const [scroll, setScroll] = useState<number>(0)

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    },[]);

    return scroll
};