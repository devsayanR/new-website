import React from "react";
import "../Features/InfiniteCarousel.css"; // CSS for custom animation

const InfiniteCarousel: React.FC = () => {
  return (
    <div className="slider relative w-full h-[150px] md:h-[150px] overflow-hidden bg-white shadow-lg">
      {/* Left gradient */}
      <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Right gradient */}
      <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Slider track */}
      <div className="slide-track flex animate-scroll bg-yellow-400">
        {Array(3)
          .fill([
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
          ])
          .flat()
          .map((src, index) => (
            <div key={index} className="slide flex-shrink-0 w-[250px] h-[150px] flex items-center justify-center">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[150px] object-contain" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
