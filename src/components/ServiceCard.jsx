import logo from "../assets/logo_crux-removebg-preview.png";

export const ServiceCard = ({ logo, description }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" />
        <p className="uppercase -mt-10 text-7xl w-96 text-center text-orange-600">
          {description}
        </p>
      </div>
    </>
  );
};
