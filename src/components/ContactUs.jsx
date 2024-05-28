import Image from "../assets/logo_crux-removebg-preview.png";
import ContactUsButton from "./ContactUsButton";

export const ConstactUs = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col justify-center mt-20 items-center ">
        <div>
          <p className=" text-7xl md:text-[8rem] uppercase">Contact Us</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-40 mt-10">
          <div>
            <img src={Image} alt="Logo" />
          </div>
          <div>
            <ul className="text-5xl md;text-6xl flex flex-col space-y-5 justify-between ">
              {/* <li>
                <p className="text-gray-400 font-semibold">Mailing Address</p>
                <p>123 Anywhere St. Any City, ST 12345</p>
              </li> */}
              <li>
                <p className="text-orange-600 ">Phone Number</p>
                <p>+91-7668201298</p>
              </li>
              <li>
                <p className="text-orange-600 ">Email Address</p>
                <a href="mailto:hypecruxx@gmail.com">
                  <p>hypecruxx@gmail.com</p>
                </a>
              </li>
            </ul>
            <ContactUsButton />
          </div>
        </div>
        <div className="py-2 flex flex-col justify-center items-center">
          <p className="text-4xl block">©{year}, HypeCrux Inc.</p>
          <p className="text-4xl">
            Made with
            <span className="text-2xl">

             ❤️ 
            </span>
             by 
            <spane>
              <a href="https://hacktigerlabs.vercel.app/"> HackTiger Labs</a>
            </spane>
          </p>
        </div>
      </footer>
    </>
  );
};
