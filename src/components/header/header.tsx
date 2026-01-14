import classes from './header.module.scss';
import { Logo } from '@/components/logo';
import { Link } from 'react-router';
import tgIcon from '@icons/contacts/04.png';
import telIcon from '@icons/contacts/01.png';
import vkIcon from '@icons/contacts/03.png';
import classNames from '@/shared/lib/classNames';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.row}>
                <Logo />
                <Link to="tel:+79323285000" className={classes.phone}>
                    +7(932) 328-50-00
                </Link>
                <div className={classes.socials}>
                    <Link
                        to="https://vk.com/hydrangeas72"
                        className={classNames(classes.item, {}, [classes.vk])}
                    >
                        <img src={vkIcon} alt="vkIcon" />
                    </Link>
                    <Link
                        to="https://t.me/bestflowershere"
                        className={classNames(classes.item, {}, [classes.tg])}
                    >
                        <img src={tgIcon} alt="tgIcon" />
                    </Link>
                    <Link
                        to="tel:+79323285000"
                        className={classNames(classes.item, {}, [classes.tel])}
                    >
                        <img src={telIcon} alt="telIcon" />
                    </Link>
                </div>
            </div>
        </header>
    );
};
