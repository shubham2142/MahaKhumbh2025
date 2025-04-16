import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/code.jpg";
import img2 from "../assets/code.jpg";
import img3 from "../assets/code.jpg";
import img4 from "../assets/code.jpg";

const FeatureSection = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    centerMode: true,
    centerPadding: "0",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-8 px-4"> {/* Reduced top margin here */}
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">
        MahaKumbh Demo
      </h2>
      <p className="text-center text-neutral-500 mb-8">
        High-speed crowd image carousel
      </p>

      {/* Reduced width from max-w-6xl to max-w-4xl */}
      <div className="max-w-4xl  mx-auto">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="px-4">
              <div className="border-2  border-orange-700 rounded-lg overflow-hidden shadow-md h-[350px]">
                <img
                  src={img}
                  alt={`Crowd ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureSection;




