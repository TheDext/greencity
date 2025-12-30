import { useEffect, useRef, useState } from 'react';
import classes from './appVideo.module.scss';
import playIcon from '@icons/play.png';
import classNames from '@/shared/lib/classNames';
import { useClickAway } from 'react-use';

export const AppVideo = ({ video, poster }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useClickAway(videoRef, () => {
        videoRef.current.pause();
    });

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div data-video={'wrapper'} className={classes.videoWrapper}>
            <video
                ref={videoRef}
                src={video}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={handlePlayClick}
                poster={poster}
            />
            <div
                className={classNames(
                    classes.playIcon,
                    { [classes._isPlaying]: isPlaying },
                    []
                )}
            >
                <img src={playIcon} alt="playIcon" />
            </div>
        </div>
    );
};
