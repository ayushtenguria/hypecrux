import Image from "../assets/logo_crux-removebg-preview.png";
import ContactUsButton from "./ContactUsButton";

export const ConstactUs = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col justify-center mt-5 md:mt-20 items-center ">
        <div>
          <p className=" text-7xl md:text-[8rem] uppercase">Contact Us</p>
        </div>
        <div className="flex flex-row justify-between items-center space-x-10 md:space-x-40 mt-10">
          <div className="w-[30vw]">
            <img src={Image} alt="Logo" />
          </div>
          <div>
            <ul className="text-4xl  md:text-6xl flex flex-col space-y-3 justify-center ">
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
            <div className="-mt-5">
              <ContactUsButton />
            </div>
          </div>
        </div>
        {/* <div className="py-2 flex flex-col justify-center items-center">
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
        </div> */}
      </footer>
    </>
  );
};
