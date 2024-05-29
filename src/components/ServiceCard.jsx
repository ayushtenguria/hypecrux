import logo from "../assets/logo_crux-removebg-preview.png";

export const ServiceCard = ({ logo, description }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center fade-in-left hover:bg-orange-300 hover:bg-opacity-15 md:px-20 md:-mt-20">
        <div className="px-10 py-5">
          <img src={logo} className="h-52" alt="logo" />
        </div>
        <p className="uppercase text-4xl sm:text-5xl md:text-7xl w-96 text-center fade-in-left text-orange-600">
          {description}
        </p>
      </div>
    </>
  );
};
