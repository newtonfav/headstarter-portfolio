import animationMp4 from "../../assets/animation.mp4";
import animationWebm from "../../assets/animation.webm";
import { useRef, useEffect } from "react";

function VideoComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.controls = false;
      video.muted = true; // Ensure the video is muted
      video.setAttribute("muted", "");

      video.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <video ref={videoRef} autoPlay muted loop playsInline>
      <source src={animationMp4} type="video/mp4" />
      <source src={animationWebm} type="video/webm" />
    </video>
  );
}

export default VideoComponent;
