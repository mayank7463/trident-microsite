import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Set playback rate
    video.playbackRate = 1; // Slow down to half speed

    // Define the range to loop
    const startTime = 1; // Start time in seconds
    const endTime = 8; // End time in seconds

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime;
        video.play();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./Hero/wheat.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Text content */}
      <div className="relative ">
       <div className='flex '>
          <div className='w-[35%] my-16'>
               <img src="./Hero/intro.svg" alt="" className='w-full'/>
          </div>
       </div>
      </div>
    </div>
  );
};

export default HeroSection;
