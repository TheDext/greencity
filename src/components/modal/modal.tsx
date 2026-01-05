import classes from './modal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import worksConfig from '@config/works.config';
import 'swiper/css';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import classNames from '@/shared/lib/classNames';
import chevroneIcon from '@icons/chevrone.png';
import { Navigation, Pagination } from 'swiper/modules';
import closeIcon from '@icons/close.png';

export const Modal = ({ current, setShowModal, slideId }) => {
    const { items } = worksConfig;

    const ref = useRef(null);
    useClickAway(ref, () => {
        setShowModal(false);
    }, ['click']);

    return (
        <div className={classes.modal}>
            <div ref={ref} className={classes.body}>
                <div className={classes.content}>
                    <div
                        className={classes.close}
                        onClick={() => setShowModal(false)}
                    >
                        <img src={closeIcon} alt="closeIcon" />
                    </div>
                    <Swiper
                        initialSlide={slideId}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                            el: '.pagination-modal',
                        }}
                        speed={1200}
                        spaceBetween={25}
                        navigation={{
                            nextEl: '.arrow-next-modal',
                            prevEl: '.arrow-prev-modal',
                        }}
                    >
                        {items[current].map(({ id, img }) => {
                            return (
                                <SwiperSlide className={classes.slide}>
                                    <img src={img} alt="img" />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className={classes.arrows}>
                        <div
                            className={classNames(classes.arrow, {}, [
                                classes.arrowPrev,
                                'arrow-prev-modal',
                            ])}
                        >
                            <img src={chevroneIcon} alt="chevroneIcon" />
                        </div>
                        <div
                            className={classNames(classes.arrow, {}, [
                                classes.arrowNext,
                                'arrow-next-modal',
                            ])}
                        >
                            <img src={chevroneIcon} alt="chevroneIcon" />
                        </div>
                    </div>
                    <div
                        className={classNames(classes.pagination, {}, [
                            'pagination-modal',
                        ])}
                    ></div>
                </div>
            </div>
        </div>
    );
};
