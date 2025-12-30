import classes from './title.module.scss';

export const Title = ({ regular, bold }: { regular: string; bold: string }) => {
    return (
        <div className={classes.title}>
            <div className={classes.regular}>{regular}</div>
            <div className={classes.bold}>{bold}</div>
        </div>
    );
};
