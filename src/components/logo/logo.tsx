import classes from './logo.module.scss';
import useMatchMedia from '@/core/hooks/useMatchMedia';

import logoDesktop from '@img/logoDesktop.png';
import logoTab from '@img/logoTab.png';
import logoMob from '@img/logoMob.png';

export const Logo = () => {
    const { isDesktop, isTablet, isMobile } = useMatchMedia();
    return (
        <div className={classes.logo}>
            {isDesktop && <img src={logoDesktop} alt="logo" />}
            {isTablet && <img src={logoTab} alt="logo" />}
            {isMobile && <img src={logoMob} alt="logo" />}
        </div>
    );
};
