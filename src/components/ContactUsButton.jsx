import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";

function ContactUsButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="mt-10">
        <button onClick={togglePopup} className="px-1 text-2xl  bg-orange-600 hover:bg-orange-700 rounded-lg py-1">
          Connect with us
        </button>
        {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      </div>
    </>
  );
}

export default ContactUsButton;
