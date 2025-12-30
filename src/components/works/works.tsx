import classes from './works.module.scss';
import { Title } from '@/components/share/title';
import worksConfig from '@config/works.config';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-use';
import classNames from '@/shared/lib/classNames';

export const Works = () => {
    const [currentCategory, setCurrentCategory] = useState('tulips');
    const { tabs, items } = worksConfig;
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
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
                {tabs.map(({ id, text }) => (
                    <div
                        className={classNames(
                            classes.tab,
                            { [classes._active]: id === currentCategory },
                            []
                        )}
                        key={id}
                        onClick={() => setCurrentCategory(id)}
                    >
                        {text}
                    </div>
                ))}
            </div>

            <div className={classes.row}>
                {items[currentCategory]
                    ? items[currentCategory].map(({ id, img }) => (
                          <div key={id} className={classes.column}>
                              <div className={classes.img}>
                                  <img src={img} alt="img" />
                              </div>
                          </div>
                      ))
                    : setCurrentCategory('tulips')}
            </div>
        </div>
    );
};
