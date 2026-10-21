import { useCallback, useEffect, useRef } from "react";
import "../css/background.css";

const CENTER_TIME = 1.1;
const LEFT_TIME = 0;
const RIGHT_TIME = 2.4;

function Background() {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(CENTER_TIME);

  const seekTo = useCallback((time) => {
    const video = videoRef.current;
    if (!video) return;

    targetTimeRef.current = time;
    if (!video.seeking) video.currentTime = time;
  }, []);

  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.03) {
      video.currentTime = targetTimeRef.current;
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = CENTER_TIME;
    targetTimeRef.current = CENTER_TIME;
  }, []);

  const updateTargetFromX = useCallback(
    (clientX) => {
      const progress = Math.max(0, Math.min(1, clientX / window.innerWidth));
      let time;

      if (progress <= 0.5) {
        const position = progress / 0.5;
        const eased = position * position * (3 - 2 * position);
        time = LEFT_TIME + eased * (CENTER_TIME - LEFT_TIME);
      } else {
        const position = (progress - 0.5) / 0.5;
        const eased = position * position * (3 - 2 * position);
        time = CENTER_TIME + eased * (RIGHT_TIME - CENTER_TIME);
      }

      seekTo(time);
    },
    [seekTo],
  );

  useEffect(() => {
    const returnToCenter = () => seekTo(CENTER_TIME);
    const handleMouseMove = (event) => updateTargetFromX(event.clientX);
    const handleTouchMove = (event) => {
      if (event.touches.length > 0) updateTargetFromX(event.touches[0].clientX);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", returnToCenter);
    window.addEventListener("blur", returnToCenter);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", returnToCenter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", returnToCenter);
      window.removeEventListener("blur", returnToCenter);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", returnToCenter);
    };
  }, [seekTo, updateTargetFromX]);

  return (
    <div className="background-animation" aria-hidden="true">
      <video
        ref={videoRef}
        className="background-animation__video"
        src="/assets/aistudio/kling_20261021_VIDEO_animate_it_5389_0_856ae4fd.mp4"
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
}

export default Background;
