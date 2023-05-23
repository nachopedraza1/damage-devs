import { FC, ReactNode } from "react";

import { BenefitsGroup, ModalOrder, MonthlyPayment } from "@/components";

export const PlanLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            {children}
            <BenefitsGroup />
            <MonthlyPayment />
            <ModalOrder />
        </>
    )
}
