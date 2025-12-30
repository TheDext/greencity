import classes from './price.module.scss';
import { Title } from '@/components/share/title';
import img from '@img/pdf.png';
import icon from '@icons/download.png';
import price from '@/assets/price.txt';

export const Price = () => {
    return (
        <div className={classes.price}>
            <Title regular="Наш" bold="прайс" />
            <div className={classes.subtitle}>
                Всё выращено в нашем хозяйстве с заботой о качестве
            </div>
            <div className={classes.img}>
                <img src={img} alt="pdf" />
            </div>
            <a className={classes.btn} href={price} download="price.txt">
                <img src={icon} alt="download" />
                <div className={classes.text}>Скачать прайс в PDF</div>
            </a>
        </div>
    );
};
