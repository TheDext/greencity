import { Navigation, Pagination } from 'swiper/modules';
import classes from './mainScreen.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import mainScreenConfig from '@config/mainScreen.config';
import 'swiper/css';
import 'swiper/css/pagination';
import classNames from '@/shared/lib/classNames';
import chevroneIcon from '@icons/chevrone.png';
import useMatchMedia from '@/core/hooks/useMatchMedia';

export const MainScreen = () => {
    const { isMobileL } = useMatchMedia();
    return (
        <div className={classes.mainScreen}>
            <Swiper
                modules={[Navigation, Pagination]}
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={15}
                navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev',
                }}
                speed={1200}
                className={classes.slider}

                pagination={{
                    clickable: true,
                    el: '.pagination',
                }}
            >
                {mainScreenConfig.map(({ img, imgMob, id }) => (
                    <SwiperSlide id={id} className={classes.slide}>
                        <img src={isMobileL ? imgMob : img} alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={classes.arrows}>
                <div
                    className={classNames(classes.arrow, {}, [
                        classes.arrowPrev,
                        'arrow-prev',
                    ])}
                >
                    <img src={chevroneIcon} alt="chevroneIcon" />
                </div>
                <div
                    className={classNames(classes.arrow, {}, [
                        classes.arrowNext,
                        'arrow-next',
                    ])}
                >
                    <img src={chevroneIcon} alt="chevroneIcon" />
                </div>
            </div>
            <div
                className={classNames(classes.pagination, {}, ['pagination'])}
            ></div>
        </div>
    );
};
