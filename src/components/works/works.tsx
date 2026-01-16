import classes from './works.module.scss';
import { Title } from '@/components/share/title';
import worksConfig from '@config/works.config';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import classNames from '@/shared/lib/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Works = ({ setShowModal, setCurrent, setSlideId }) => {
    const [currentCategory, setCurrentCategory] = useState('tulips');
    const { tabs, items } = worksConfig;
    const location = useLocation();

    const handleClick = (slideId) => {
        setCurrent(currentCategory);
        setSlideId(slideId);
        setShowModal(true);
    };

    useEffect(() => {
        if (location.hash) {
            console.log(
                'items[currentCategory]',
                items[location.hash.substring(1)]
            );
            setCurrentCategory(location.hash.substring(1));
        }
    }, [location]);
    return (
        <div className={classes.works} id="ourworks">
            <Title regular="наши" bold="работы" />
            <div className={classes.subtitle}>
                Всё выращено в нашем хозяйстве с заботой о качестве
            </div>

            <div className={classes.tabs}>
                <Swiper
                    watchOverflow={true}
                    slidesPerView="auto"
                    spaceBetween={6}
                >
                    {tabs.map(({ id, text }) => (
                        <SwiperSlide style={{ width: 'auto' }}>
                            <h3
                                className={classNames(
                                    classes.tab,
                                    {
                                        [classes._active]:
                                            id === currentCategory,
                                    },
                                    []
                                )}
                                key={id}
                                onClick={() => setCurrentCategory(id)}
                            >
                                {text}
                            </h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={classes.row}>
                {items[currentCategory]
                    ? items[currentCategory].map(({ id, img, slideId }) => (
                          <div
                              key={id}
                              className={classes.column}
                              onClick={() => handleClick(slideId)}
                          >
                              <div className={classes.item}>
                                  <div className={classes.img}>
                                      <img src={img} alt="img" />
                                  </div>
                              </div>
                          </div>
                      ))
                    : setCurrentCategory('tulips')}
            </div>
        </div>
    );
};
