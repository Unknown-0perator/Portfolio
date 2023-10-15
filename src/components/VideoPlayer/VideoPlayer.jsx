import './VideoPlayer.scss';
import { useState, useRef } from 'react';

import playIcon from '../../assests/icons/play.svg';
import pauseIcon from '../../assests/icons/pause.svg';
import scrubbingIcon from '../../assests/icons/scrub.svg';
import closeIcon from '../../assests/icons/close.svg';
import fullScreen from '../../assests/icons/full-screen.svg';
import fullScreenExit from '../../assests/icons/full-screen-exit.svg';


const VideoPlayer = ({ projectDetails, handleClose }) => {

    const [isPlay, setIsPlay] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false)


    const video = useRef(null)
    const videoContainer = useRef(null)

    const progressBarContainer = useRef(null)
    const togglePlay = () => {
        setIsPlay(!isPlay)
        if (!isPlay) {
            video.current.play()
        } else {
            video.current.pause()
        }
    }

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
        if (!isFullScreen && document.fullscreenElement === null) {
            videoContainer.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }





    document.addEventListener('mouseup', e => {
        if (isScrubbing) toggleScrubbing(e)
    })
    document.addEventListener('mousemove', e => {
        if (isScrubbing) handleTimelineUpdate(e)
    })
    let isScrubbing = false;
    let wasPaused;

    const toggleScrubbing = (e) => {
        const rect = progressBarContainer.current.getBoundingClientRect()
        const percent = Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
        isScrubbing = (e.buttons & 1) === 1;
        videoContainer.current.classList.toggle('scrubbing', isScrubbing);
        if (isScrubbing) {
            video.current.pause();
        } else {
            video.current.currentTime = percent * video.current.duration;
            if (!wasPaused) {
                video.current.play()

            }
        }
    }

    const handleTimelineUpdate = (e) => {
        const rect = progressBarContainer.current.getBoundingClientRect()
        const percent = Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
        progressBarContainer.current.style.setProperty('--preview-position', percent)
        if (isScrubbing) {
            e.preventDefault();
            progressBarContainer.current.style.setProperty('--progress-position', percent)
        }
    }



    return (
        <div className="video-player-section">
            <div className="description__toolbar-container">
                <h3 className="description__project-name">TaskEase</h3>
                <img src={closeIcon} onClick={handleClose} alt="" className="description__icon" />
            </div>
            <div className={`video-player-container ${isPlay ? 'played' : ""} ${isFullScreen ? 'fullScreen' : ""}`} ref={videoContainer}>
                <div className="control">
                    <div className="control__item control__item--play-pause" onClick={togglePlay}>
                        <img src={playIcon} alt="play icon" className="control__icon control__icon--play" />
                        <img src={pauseIcon} alt="pause icon" className="control__icon control__icon--pause" />
                    </div>
                    <div className="control__item control__timeline">
                        <div className="control__progress-bar-container" ref={progressBarContainer} onMouseMove={handleTimelineUpdate} onMouseDown={toggleScrubbing}>
                            <div className="control__progress-bar">

                                <img src={scrubbingIcon} alt="" className='control__icon control__icon--scrub' />

                            </div>
                        </div>
                    </div>
                    <div className="control__item control__item--play-pause" onClick={toggleFullScreen}>
                        <img src={fullScreen} alt="play icon" className="control__icon control__icon--full-screen" />
                        <img src={fullScreenExit} alt="pause icon" className="control__icon control__icon--full-screen-exit" />
                    </div>
                </div>

                <video

                    src={`${process.env.PUBLIC_URL}${projectDetails.video}`}
                    type="video/mp4"
                    className="video-player"
                    poster={``}
                    ref={video}
                    onClick={togglePlay}

                    onTimeUpdate={() => {
                        const percent = video.current.currentTime / video.current.duration;
                        progressBarContainer.current.style.setProperty('--progress-position', percent)
                    }}
                >
                </video>
            </div>
        </div >
    )
}

export default VideoPlayer;