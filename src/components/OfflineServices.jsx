import { ServiceCard } from "./ServiceCard";
import Guerilla from "../assets/guerilla.png";
import camera from "../assets/Camera.png";
import tradeShow from "../assets/Booth.png";
import eventBrand from "../assets/Tag.png";
import inStore from "../assets/Tent.png";
import youth from "../assets/Hexagon.png";

export const OfflineService = () => {
  return (
    <>
      <section className="py-32 flex flex-col justify-center items-center">
        <p className="text-4xl md:text-7xl uppercase font-bold">offline services</p>

        <div className="space-y-16">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-7 py-10">
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
