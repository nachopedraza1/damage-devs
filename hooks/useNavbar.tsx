import { captureScroll } from "@/helpers";
import { useScrollTrigger } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    window?: () => Window;
}

export const useNavbar = (props: Props) => {

    const scrollY = captureScroll();
    const navbarStyle = scrollY > 100 ? "active-blur" : "";

    const { window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    const { pathname } = useRouter();

    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        if (pathname === "/") return setActiveTab("start-home");
        if (pathname.includes("designs")) return setActiveTab("start-designs");
        setActiveTab(`start-${pathname.substring(1)} `)
    }, [pathname])


    return {
        trigger,
        activeTab,
        navbarStyle,
    }
}
