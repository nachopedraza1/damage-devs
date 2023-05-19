
import { FC } from 'react';
import { Typography } from '@mui/material';

export const CustomButton: FC<{ text: string }> = ({ text }) => {
    return (
        <div className="glowing-box glowing-box-active">
            <div className="glowing-box-animations">
                <div className="glowing-box-glow" />
                <div className="glowing-box-stars-masker">
                    <div className="glowing-box-stars" />
                </div>
            </div>
            <div className="glowing-box-borders-masker">
                <div className="glowing-box-borders" />
            </div>
            <Typography className="glowing-box-button inline-block"
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)", textTransform: "uppercase", fontWeight:600, color:"white" }}
            >
                {text}
            </Typography>
        </div>
    )
}
