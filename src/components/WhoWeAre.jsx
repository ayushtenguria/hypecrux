import hypeLogo from "../assets/logo_crux-removebg-preview.png";
import ContactUsButton from "./ContactUsButton";

export const WhoWeAre = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row md:px-20 justify-center md:space-x-32 items-center">
        <div>
          <img src={hypeLogo} />
        </div>
        <div className="md:w-[35rem] p-10 md:p-0 space-y-5">
          <p className="text-7xl md:text-[8rem]  text-orange-600">WHO WE ARE ?</p>
          <p className="text-3xl tracking-wide">
            Welcome to HypeCrux, where we fuel the flames of excitement, ignite
            the spark of anticipation, and harness the power of hype to elevate
            brands to new heights. We specialize in the art of creating buzz,
            crafting narratives that captivate audiences, and turning brands
            into cultural phenomena.
          </p>
          {/* <button className="text-white px-5 py-3 bg-gray-400">LEARN MORE ?</button> */}
          <ContactUsButton/>
        </div>
      </section>
    </>
  );
};
