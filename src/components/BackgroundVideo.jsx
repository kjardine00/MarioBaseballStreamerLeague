import "./BackgroundVideo.css";

function BackgroundVideo() {
    return (
        <div className="background-video">
            <video 
                src="/src/assets/background-video-test.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
            />
        </div>
    )
}
export default BackgroundVideo;