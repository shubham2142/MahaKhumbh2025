import video1 from "../assets/video1.mp4";
import video3 from "../assets/video3.mp4";
import video5 from "../assets/video5.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide animate-pulse-shake">
        Mahakumbh Crowd Detection
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          & Management System
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Our smart and scalable system helps in real-time detection, monitoring, and 
        analysis of crowd density at Mahakumbh to ensure safety and efficient crowd control.
      </p>

      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 px-2 my-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
            aria-label="Demo video 1"
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 px-2 my-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
            aria-label="Demo video 2"
          >
            <source src={video5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
