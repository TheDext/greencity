import classes from './catalog.module.scss';
import { Title } from '@/components/share/title';
import catalogConfig from '@config/catalog.config';

export const Catalog = () => {
    const handleClick = (link) => {
        const element = document.getElementById('ourworks');
        if (element) {
            window.history.pushState({}, '', `${link}`);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (
        <div className={classes.catalog}>
            <Title regular="наш" bold="каталог" />
            <div className={classes.row}>
                {catalogConfig.map(({ id, img, icon, label, link }) => (
                    <div key={id} onClick={() => handleClick(link)}>
                        <div className={classes.column}>
                            <div className={classes.item}>
                                <div className={classes.img}>
                                    <img src={img} alt="img" />
                                </div>
                                <div className={classes.bottom}>
                                    <div className={classes.icon}>
                                        <img src={icon} alt="icon" />
                                    </div>
                                    <div className={classes.label}>{label}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
