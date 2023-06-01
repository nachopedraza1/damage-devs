import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { captureScroll } from "@/helpers";
import { useScrollTrigger } from "@mui/material";

interface Props {
    window?: () => Window;
}

export const useNavbar = (props: Props) => {

    const navbarStyle = captureScroll();

    const { window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    const { pathname } = useRouter();

    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        if (pathname === "/") return setActiveTab("start-home");
        if (pathname.includes("plans")) return setActiveTab("start-plans");
        setActiveTab(`start-${pathname.substring(1)} `)
    }, [pathname])


    return {
        trigger,
        activeTab,
        navbarStyle,
    }
}
