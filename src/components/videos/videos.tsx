import classes from './videos.module.scss';
import videosConfig from '@config/videos.config';
import { AppVideo } from '@/components/appVideo';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useMatchMedia from '@/core/hooks/useMatchMedia';
import classNames from '@/shared/lib/classNames';
import chevroneIcon from '@icons/chevroneGreen.svg';

export const Videos = () => {
    const { isMobile } = useMatchMedia();

    return (
        <div className={classes.videos}>
            {isMobile ? (
                <div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={1200}
                        className={classes.swiper}
                        navigation={{
                            nextEl: '.arrow-next-video',
                            prevEl: '.arrow-prev-video',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.paginationVideo',
                        }}
                    >
                        {videosConfig.map(({ video, poster, id }) => (
                            <SwiperSlide key={id}>
                                <div className={classes.video}>
                                    <AppVideo poster={poster} video={video} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={classes.arrows}>
                        <div
                            className={classNames(classes.arrow, {}, [
                                classes.arrowPrev,
                                'arrow-prev-video',
                            ])}
                        >
                            <img src={chevroneIcon} alt="chevroneIcon" />
                        </div>
                        <div
                            className={classNames(classes.arrow, {}, [
                                classes.arrowNext,
                                'arrow-next-video',
                            ])}
                        >
                            <img src={chevroneIcon} alt="chevroneIcon" />
                        </div>
                    </div>
                    <div
                        className={classNames(classes.pagination, {}, [
                            'paginationVideo',
                        ])}
                    ></div>
                </div>
            ) : (
                <div className={classes.row}>
                    {videosConfig.map(({ video, poster, id }) => (
                        <div key={id} className={classes.video}>
                            <AppVideo poster={poster} video={video} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
