import { ReactNode, FC } from 'react';
import { ThemeProvider } from '@mui/material';

import { darkTheme } from './';
import CssBaseline from '@mui/material/CssBaseline';

interface Props {
    children: ReactNode | ReactNode[];
}

export const AppTheme: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
