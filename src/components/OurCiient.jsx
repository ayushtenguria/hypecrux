import { Sponsors } from "./Sponsors";

export const OurClient = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <p className="uppercase font-semibold text-4xl md:text-7xl ">
          Our <span className="text-red-600">Client</span> Roster
        </p>
        <div className="mt-20">
          <Sponsors />
        </div>
      </section>
    </>
  );
};
