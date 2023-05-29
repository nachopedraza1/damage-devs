import { FC } from 'react';

import { NavbarDesktop, NavbarMobile } from './';

export const Navbar: FC = () => {

    return (
        <>
            <NavbarMobile />
            <NavbarDesktop />
        </>
    )
}