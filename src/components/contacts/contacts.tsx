import classes from './contacts.module.scss';
import contactsConfig from '@config/contacts.config';
import { Link } from 'react-router';
import classNames from '@/shared/lib/classNames';

export const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <div className={classes.row}>
                {contactsConfig.map(
                    ({
                        id,
                        img,
                        title,
                        label,
                        additionalClassName,
                        subtitle,
                        link,
                        subtext,
                    }) =>
                        link ? (
                            <Link to={link} id={id}>
                                <div
                                    className={classNames(classes.item, {}, [
                                        classes[additionalClassName],
                                    ])}
                                >
                                    <div className={classes.img}>
                                        <img src={img} alt="icon" />
                                    </div>
                                    <div className={classes.body}>
                                        <div className={classes.title}>
                                            {title}
                                        </div>
                                        <div className={classes.label}>
                                            {label}
                                        </div>
                                        {subtitle && (
                                            <>
                                                <div
                                                    className={classes.subtitle}
                                                >
                                                    {subtitle}
                                                </div>
                                                <div
                                                    className={classes.subtext}
                                                >
                                                    {subtext}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div
                                className={classNames(classes.item, {}, [
                                    classes[additionalClassName],
                                ])}
                                id={id}
                            >
                                <div className={classes.img}>
                                    <img src={img} alt="icon" />
                                </div>
                                <div className={classes.body}>
                                    <div className={classes.title}>{title}</div>
                                    <div className={classes.label}>{label}</div>
                                    {subtitle && (
                                        <>
                                            <div className={classes.subtitle}>
                                                {subtitle}
                                            </div>
                                            <div className={classes.subtext}>
                                                {subtext}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};
