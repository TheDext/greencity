import classes from './footer.module.scss';
import logo from '@img/logo-mono.png';
import footerConfig from '@config/footer.config';
import { Link } from 'react-router';

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.row}>
                {footerConfig.map(({ img, link, text, id }) => (
                    <Link to={link} key={id}>
                        <div className={classes.item}>
                            <div className={classes.img}>
                                {<img src={img} alt="img" />}
                            </div>
                            <div className={classes.text}>{text}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={classes.bottomText}>2026, Все права защищены</div>
        </div>
    );
};
