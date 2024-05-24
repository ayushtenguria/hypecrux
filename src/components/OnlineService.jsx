import { ServiceCard } from "./ServiceCard";
import tradeShow from "../assets/HearWindow.png";
import digitalMarketing from "../assets/Network.png";
import performance from "../assets/Triangle.png";
import searchGlass from "../assets/SearchGlass.png";
import webDesign from "../assets/brushScreen.png";
import influencer from "../assets/Speaker.png";

export const OnlineService = () => {
  return (
    <>
      <section className="py-32 flex flex-col justify-center items-center">
        <p className="text-7xl uppercase font-bold">online services</p>

        <div className="space-y-16">
          <div className="flex justify-center items-center space-x-7 py-10">
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
          <div className="flex justify-center items-center space-x-7 py-10">
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
