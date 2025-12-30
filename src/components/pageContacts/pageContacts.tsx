import classes from './pageContacts.module.scss';
import { Title } from '@/components/share/title';
import contactsConfig from '@config/contacts.config';
import { Link } from 'react-router';
import classNames from '@/shared/lib/classNames';

export const PageContacts = () => {
    return (
        <div className={classes.pageContacts}>
            <Title bold="Контакты" />
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
                    }) => (
                        <div
                            key={id}
                            className={classNames(
                                classes.column,
                                {
                                    [classes._full]:
                                        additionalClassName === 'point' ||
                                        additionalClassName === 'clock',
                                },
                                []
                            )}
                        >
                            {link ? (
                                <Link to={link}>
                                    <div
                                        className={classNames(
                                            classes.item,
                                            {},
                                            [classes[additionalClassName]]
                                        )}
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
                                                        className={
                                                            classes.subtitle
                                                        }
                                                    >
                                                        {subtitle}
                                                    </div>
                                                    <div
                                                        className={
                                                            classes.subtext
                                                        }
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
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
