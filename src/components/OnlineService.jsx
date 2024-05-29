import { ServiceCard } from "./ServiceCard";
import tradeShow from "../assets/HearWindow.webp";
import digitalMarketing from "../assets/Network.webp";
import performance from "../assets/Triangle.webp";
import searchGlass from "../assets/SearchGlass.webp";
import webDesign from "../assets/brushScreen.webp";
import influencer from "../assets/Speaker.png";

export const OnlineService = () => {
  return (
    <>
      <section className="py-32 flex flex-col justify-center items-center -mt-40 md:mt-0">
        <p className="text-7xl md:text-[7rem] mb-10 uppercase ">online services</p>
        <div className="space-y-16">
          <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 justify-center items-center md:px-10 space-x-7 py-10">
            <ServiceCard
              logo={influencer}
              description={"Influencer Marketing"}
            />
            <ServiceCard
              logo={digitalMarketing}
              description={"Digital Marketing"}
            />
            <ServiceCard
              logo={performance}
              description={"Performance Marketing"}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-7 py-10">
            <ServiceCard
              logo={tradeShow}
              description={"Social Media Creatives & ads"}
            />
            <ServiceCard logo={searchGlass} description={"SEO Services"} />
            <ServiceCard logo={webDesign} description={"Web Design"} />
          </div>
        </div>
      </section>
    </>
  );
};
