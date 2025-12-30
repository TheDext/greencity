import classes from './selfProduction.module.scss';
import icon from '@icons/selfProductionIcon.png';

export const SelfProduction = () => {
    return (
        <div className={classes.selfProduction}>
            <img src={icon} alt="icon" />
            <div className={classes.text}>Собственное производство</div>
        </div>
    );
};
