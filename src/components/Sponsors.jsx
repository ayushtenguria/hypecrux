import bereal from "../assets/BeReal._Logo.svg";
import myntra from "../assets/MYNTRA.png";
import hunch from "../assets/Screenshot from 2024-05-24 13-17-38.png";
import slick from "../assets/Slick.png";
import burger from "../assets/burgerSingh.png";
import philips from "../assets/philips-logo.webp";

export const Sponsors = () => {
  return (
    <>
      <section className="px-10 md:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          <img className="h-80" src={bereal} alt="" />
          <img src={myntra} alt="" />
          <div className="flex justify-center items-center pl-30  ">
            <img className="items-center ml-30 pl-8 " src={hunch} alt="" />
          </div>
          <img src={slick} alt="" />
          <div className="flex justify-center items-center pl-30  ">
            <img src={burger} alt="" />
          </div>
          <img src={philips} alt="" />
        </div>
      </section>
    </>
  );
};
