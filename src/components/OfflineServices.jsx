import { ServiceCard } from "./ServiceCard";
import Guerilla from "../assets/guerilla.webp";
import camera from "../assets/Camera.webp";
import tradeShow from "../assets/Booth.webp";
import eventBrand from "../assets/Tag.webp";
import inStore from "../assets/Tent.webp";
import youth from "../assets/Hexagon.webp";

export const OfflineService = () => {
  return (
    <>
      <section className="py-32 flex flex-col justify-center items-center">
        <p className="text-7xl md:text-[7rem] mb-10 uppercase ">offline services</p>
        <div className="space-y-16">
          <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 justify-center items-center space-x-7 py-10">
            <ServiceCard logo={youth} description={"Youth Marketing"} />
            <ServiceCard logo={eventBrand} description={"Event Branding"} />
            <ServiceCard logo={inStore} description={"In-Store Event"} />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-7 py-10">
            <ServiceCard logo={camera} description={"Photography"} />
            <ServiceCard logo={Guerilla} description={"Guerilla Marketing"} />
            <ServiceCard
              logo={tradeShow}
              description={"Trade Show Participation"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
