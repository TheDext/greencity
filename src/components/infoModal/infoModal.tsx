import classes from './infoModal.module.scss';
import closeIcon from '@icons/close.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import classNames from '@/shared/lib/classNames';
import chevroneIcon from '@icons/chevrone.png';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import infoModalConfig from '@config/infoModal.config';
import contactsConfig from '@config/contacts.config';
import { Link } from 'react-router';
import img01 from '@icons/contacts/01.png';

export const InfoModal = ({ setShowInfoModal }) => {
    const ref = useRef(null);
    useClickAway(ref, () => {
        setShowInfoModal(false);
    }, ['click']);

    return (
        <div className={classes.modal}>
            <div ref={ref} className={classes.body}>
                <div className={classes.content}>
                    <div
                        className={classes.close}
                        onClick={() => setShowInfoModal(false)}
                    >
                        <img src={closeIcon} alt="closeIcon" />
                    </div>
                    <div className={classes.infoText}>
                        Купить цветы или растения можно у нас в салоне по
                        адресу:
                    </div>

                    {
                        <div className={classes.row}>
                            {infoModalConfig.map(
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
                                        <Link to={link} key={id}>
                                            <div
                                                className={classNames(
                                                    classes.item,
                                                    {},
                                                    [
                                                        classes[
                                                            additionalClassName
                                                        ],
                                                    ]
                                                )}
                                            >
                                                <div className={classes.img}>
                                                    <img src={img} alt="icon" />
                                                </div>
                                                <div className={classes.body}>
                                                    <div
                                                        className={
                                                            classes.title
                                                        }
                                                    >
                                                        {title}
                                                    </div>
                                                    <div
                                                        className={
                                                            classes.label
                                                        }
                                                    >
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
                                            className={classNames(
                                                classes.item,
                                                {},
                                                [classes[additionalClassName]]
                                            )}
                                            key={id}
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
                                    )
                            )}
                        </div>
                    }
                    <div
                        className={classNames(classes.infoText, {}, [
                            classes._tel,
                        ])}
                    >
                        Если хотите уточнить информацию или необходима
                        консультация позвоните по номеру:
                    </div>

                    <Link to="tel:+79323285000">
                        <div
                            className={classNames(classes.item, {}, [
                                classes.tel,
                            ])}
                        >
                            <div className={classes.img}>
                                <img src={img01} alt="icon" />
                            </div>
                            <div className={classes.body}>
                                <div className={classes.title}>
                                    Телефон для связи
                                </div>
                                <div className={classes.label}>
                                    +7 (932) 328-50-00
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
