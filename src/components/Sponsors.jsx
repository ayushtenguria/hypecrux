import bereal from "../assets/BR.png";
import myntra from "../assets/MYNTRA.png";
import hunch from "../assets/Screenshot from 2024-05-24 13-17-38.png";
import slick from "../assets/Slick.png";
import burger from "../assets/burgerSingh.png";
import philips from "../assets/pp.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-10 md:px-40">
      <div className="mx-auto max-w-7xl">
        <Slider {...settings}>
          <div className="p-4">
            <img
              className="h-52 md:h-[30rem] w-full object-contain hover:bg-gray-300 hover:bg-opacity-15"
              src={bereal}
              alt="Bereal"
            />
          </div>
          <div className="p-4">
            <img
              className="h-52 md:h-[30rem] w-full object-contain hover:bg-gray-300 hover:bg-opacity-15"
              src={myntra}
              alt="Myntra"
            />
          </div>
          <div className="p-4">
            <img
              className="h-52 md:h-[30rem] w-full object-contain hover:bg-gray-300 hover:bg-opacity-15"
              src={hunch}
              alt="Hunch"
            />
          </div>
          <div className="p-4">
            <img
              className="h-52 md:h-[30rem] w-full object-contain hover:bg-gray-300 hover:bg-opacity-15"
              src={slick}
              alt="Slick"
            />
          </div>
          <div className="p-4">
            <img
              className="h-52 md:h-[30rem] w-full object-contain hover:bg-gray-300 hover:bg-opacity-15"
              src={burger}
              alt="Burger Singh"
            />
          </div>
          <div className="p-4">
            <img
              className="h-52 md:h-[30rem] w-full object-contain hover:bg-gray-300 hover:bg-opacity-15"
              src={philips}
              alt="Philips"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};
