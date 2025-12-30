import classes from './videos.module.scss';
import videosConfig from '@config/videos.config';
import { AppVideo } from '@/components/appVideo';

export const Videos = () => {
    return (
        <div className={classes.videos}>
            <div className={classes.row}>
                {videosConfig.map(({ video, poster, id }) => (
                    <div key={id} className={classes.video}>
                        <AppVideo poster={poster} video={video} />
                    </div>
                ))}
            </div>
        </div>
    );
};
