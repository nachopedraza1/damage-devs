import { useState } from "react";

export const useStepper = () => {

    const [step, setStep] = useState<number>(1)

    const nextStep = () => setStep(step + 1);
    const backStep = () => setStep(step - 1);

    return {
        step,
        nextStep,
        backStep,
    }
}
