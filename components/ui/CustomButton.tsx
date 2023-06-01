
import { FC } from 'react';
import Link from 'next/link';

import { Link as MuiLink, Typography } from '@mui/material';

interface Props {
    text: string;
    link?: string;
    onClick?: () => void;
}

export const CustomButton: FC<Props> = ({ text, link = "", onClick }) => {

    const isLink = link === "" ? "none" : "inherit"

    return (
        <MuiLink component={Link} href={link} onClick={onClick} style={{ pointerEvents: isLink }}>
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
                    style={{ border: "1px solid rgba(255, 255, 255, 0.1)", textTransform: "uppercase", fontWeight: 600, color: "white" }}
                >
                    {text}
                </Typography>
            </div >
        </MuiLink>
    )
}
