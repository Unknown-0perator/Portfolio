import './VideoPlayer.scss';
import { useState, useRef } from 'react';

import playIcon from '../../assests/icons/play.svg';
import pauseIcon from '../../assests/icons/pause.svg';
import scrubbingIcon from '../../assests/icons/scrub.svg';
import closeIcon from '../../assests/icons/close.svg';

const VideoPlayer = () => {

    const [isPlay, setIsPlay] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [isVolumeUp, setIsVolumeUp] = useState(false)
    const video = useRef(null)
    const videoContainer = useRef(null)
    const totalTimer = useRef(null)
    const currentTimer = useRef(null)
    const progressBarContainer = useRef(null)
    const togglePlay = () => {
        setIsPlay(!isPlay)
        if (!isPlay) {
            video.current.play()
        } else {
            video.current.pause()
        }
    }


    const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
        minimumIntegerDigits: 2
    })
    const formatDuration = (time) => {
        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60) % 60
        const hours = Math.floor(time / 3600)

        if (hours === 0) {
            return `${minutes}:${leadingZeroFormatter.format(seconds)}`
        } else {
            return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
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
        handleTimelineUpdate(e)
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
                <img src={closeIcon} alt="" className="description__icon" />
            </div>
            <div className={`video-player-container`} ref={videoContainer}>
                <div className="control">
                    <div className="control__item control__item--play-pause" onClick={togglePlay}>
                        <img src={playIcon} alt="play icon" className="control__icon control__icon--play" />
                        {/* <img src={pauseIcon} alt="pause icon" className="control__icon control__icon--pause" /> */}
                    </div>
                    <div className="control__item control__timeline">
                        <div className="control__progress-bar-container" ref={progressBarContainer} onMouseMove={handleTimelineUpdate} onMouseDown={toggleScrubbing}>
                            <div className="control__progress-bar">

                                <img src={scrubbingIcon} alt="" className='control__icon control__icon--scrub' />

                            </div>
                        </div>
                    </div>
                </div>
                <video
                    src={``}
                    type="video/mp4"
                    className="video-player"
                    poster={``}
                    ref={video}
                    onLoadedData={() => {
                        totalTimer.current.textContent = formatDuration(video.current.duration)
                    }}
                    onTimeUpdate={() => {
                        currentTimer.current.textContent = formatDuration(video.current.currentTime)
                        const percent = video.current.currentTime / video.current.duration;
                        progressBarContainer.current.style.setProperty('--progress-position', percent)
                    }}>
                </video>
            </div>
        </div>
    )
}

export default VideoPlayer;