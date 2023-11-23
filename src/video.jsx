import React, { useEffect, useRef } from 'react'
import Footer from './footerleft'
import FooterRight from './footerRight'
import './video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)
    const [isPlaying, setPlaying] = useState(false);


	const onVideoPress = () => {

		// write toggle logic here
		if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlaying(!isPlaying);
	}
	const handleScroll = () => {
		// Implement logic to pause the video when it's playing and scrolled over
		if (isPlaying) {
		  videoRef.current.pause();
		  setPlaying(false);
		}
	  };
	
	return (
	<div className="video"> onlick={handleScroll}
			<video
				className="player"
				onClick={onVideoPress}
				muted
				ref={videoRef}
				loop
				src={url}
			></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
