import { Sponsors } from "./Sponsors";

export const OurClient = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <p className="uppercase  text-7xl md:text-[8rem] ">
          Our <span className="text-orange-600">Client</span> Roster
        </p>
        <div className="mt-20">
          <Sponsors />
        </div>
      </section>
    </>
  );
};
