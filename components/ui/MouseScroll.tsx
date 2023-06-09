import { FC } from 'react';
import { Box } from '@mui/material';

export const MouseScroll: FC = () => {
    return (
        <Box position="absolute" top="50%" right={"-140%"}>
            <svg
                width={35}
                height={35}
                viewBox="0 0 203 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="mouse 1">
                    <g id="Group 1" className="scroll">
                        <path
                            id="Vector"
                            d="M103.312 36.625C104.73 36.625 106.089 37.211 107.091 38.2542C108.093 39.2974 108.656 40.7122 108.656 42.1875V64.4375C108.656 65.9128 108.093 67.3276 107.091 68.3708C106.089 69.414 104.73 70 103.312 70C101.895 70 100.536 69.414 99.5339 68.3708C98.5317 67.3276 97.9688 65.9128 97.9688 64.4375V42.1875C97.9688 40.7122 98.5317 39.2974 99.5339 38.2542C100.536 37.211 101.895 36.625 103.312 36.625Z"
                            fill="#ffff"
                        />
                    </g>
                    <g id="Group 2" >
                        <path
                            id="Vector_2"
                            d="M152.25 147.812C152.25 162.068 146.903 175.739 137.386 185.819C127.868 195.9 114.96 201.562 101.5 201.562C88.0403 201.562 75.1318 195.9 65.6143 185.819C56.0969 175.739 50.75 162.068 50.75 147.812V67.1875C50.75 52.9321 56.0969 39.2606 65.6143 29.1805C75.1318 19.1004 88.0403 13.4375 101.5 13.4375C114.96 13.4375 127.868 19.1004 137.386 29.1805C146.903 39.2606 152.25 52.9321 152.25 67.1875V147.812ZM101.5 0C84.6753 0 68.5398 7.07866 56.6429 19.6788C44.7461 32.2789 38.0625 49.3683 38.0625 67.1875V147.812C38.0625 165.632 44.7461 182.721 56.6429 195.321C68.5398 207.921 84.6753 215 101.5 215C118.325 215 134.46 207.921 146.357 195.321C158.254 182.721 164.937 165.632 164.938 147.812V67.1875C164.937 49.3683 158.254 32.2789 146.357 19.6788C134.46 7.07866 118.325 0 101.5 0Z"
                            fill="#ffff"
                        />
                    </g>
                </g>
            </svg>
        </Box>
    )
}
