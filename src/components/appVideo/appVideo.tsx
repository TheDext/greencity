import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import classes from './appVideo.module.scss';
import playIcon from '@icons/play.png';
import classNames from '@/shared/lib/classNames';
import { useClickAway } from 'react-use';

export const AppVideo = forwardRef(({ video, poster }, ref) => {
    const videoRef = useRef(null);
    const videoWrapperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useImperativeHandle(ref, () => ({
        videoRef,
        videoWrapperRef,
        setIsPlaying,
    }));

    useClickAway(videoWrapperRef, () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    });

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div
            data-video={'wrapper'}
            className={classes.videoWrapper}
            ref={videoWrapperRef}
        >
            <video
                ref={videoRef}
                src={video}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={handlePlayClick}
                poster={poster}
                preload="none"
                loading="lazy"
            />
            <div
                className={classNames(
                    classes.playIcon,
                    { [classes._isPlaying]: isPlaying },
                    []
                )}
                onClick={handlePlayClick}
            >
                <img src={playIcon} alt="playIcon" />
            </div>
        </div>
    );
});
