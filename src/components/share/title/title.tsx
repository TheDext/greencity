import classes from './title.module.scss';

export const Title = ({
    regular,
    bold,
}: {
    regular?: string;
    bold: string;
}) => {
    return (
        <h2 className={classes.title}>
            {regular && <div className={classes.regular}>{regular}</div>}
            <div className={classes.bold}>{bold}</div>
        </h2>
    );
};
