import classes from './logo.module.scss';
import logo from '@img/logo.png';

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={logo} alt="logo" />
        </div>
    );
};
