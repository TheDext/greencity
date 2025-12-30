import classes from './advantages.module.scss';
import { Title } from '@/components/share/title';
import advantagesConfig from '@config/advantages.config';

export const Advantages = () => {
    return (
        <div className={classes.advantages}>
            <Title regular="наши" bold="преимущества" />
            <div className={classes.subtitle}>
                Всё выращено в нашем хозяйстве с заботой о качестве
            </div>
            <div className={classes.row}>
                {advantagesConfig.map(({ id, text, img }) => (
                    <div key={id} className={classes.column}>
                        <div className={classes.item}>
                            <div className={classes.img}>
                                <img src={img} alt="" />
                            </div>
                            <div className={classes.text}>{text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
