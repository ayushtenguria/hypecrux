import bereal from "../assets/BR.png";
import myntra from "../assets/MYNTRA.png";
import hunch from "../assets/Screenshot from 2024-05-24 13-17-38.png";
import slick from "../assets/Slick.png";
import burger from "../assets/burgerSingh.png";
import philips from "../assets/pp.png";

export const Sponsors = () => {
  return (
    <>
      <section className="px-10 md:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          <img className="h-80 hover:bg-gray-300 hover:bg-opacity-15 p-20" src={bereal} alt="" />
          <img className="hover:bg-gray-300 hover:bg-opacity-15" src={myntra} alt="" />
          <div className="flex justify-center items-center pl-30  ">
            <img className="items-center hover:bg-gray-300 hover:bg-opacity-15 ml-30 pl-8 " src={hunch} alt="" />
          </div>
          <img className="hover:bg-gray-300 hover:bg-opacity-15" src={slick} alt="" />
          <div className="flex justify-center items-center pl-30  ">
            <img className="hover:bg-gray-300 hover:bg-opacity-15" src={burger} alt="" />
          </div>
          <img className="hover:bg-gray-300 hover:bg-opacity-15" src={philips} alt="" />
        </div>
      </section>
    </>
  );
};
