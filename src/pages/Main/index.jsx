import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  let [introCount, setIntroCount] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/dashboard");
    }
  },[navigate]);

  // const gotoLoginPage = () => {
  //   navigate("/login");
  // };

  const handleIntroHeading = () => {
    let introHeading = "";
    if (introCount === 1) {
      introHeading = "DISCOVER TAILERD EVENTS";
    } else if (introCount === 2) {
      introHeading = "UNLOCK MENTORSHIP";
    } else if (introCount === 3) {
      introHeading = "EXPAND YOUR CONNECTION";
    }
    return introHeading;
  };

  const handleNextButton = () => {
    if (introCount <= 3) {
      setIntroCount(introCount + 1);
    } else {
      navigate("/login");
    }
  };

  const handleIntroSubHeading = () => {
    let introSubHeading = "";
    if (introCount === 1) {
      introSubHeading =
        "We curate personalized events just for you. Whether it's workshop,networking sessions, or a fun gathering, we've got you covered.";
    } else if (introCount === 2) {
      introSubHeading =
        "Seek guidance from seasoned mentors. Whether you're a newbie or an experienced operator, mentorship can accelerate your journey.";
    } else {
      introSubHeading =
        "Connect with like-minded professionals, expand your network, and unlock new opportunites. Our network is your gateway to growth.";
    }
    return introSubHeading;
  };
  return (
    <div className="w-full px-5  h-screen ">
      <div className="pt-[50vh]  ">
        <p className="text-[14px] font-bold">
          {introCount <= 3 ? handleIntroHeading() : "LET'S GET STARTED"}
        </p>
        <p>
          {introCount <= 3
            ? handleIntroSubHeading()
            : "Hola! you can either login with your existing account registered with TiE Delhi or you can choose to buy membership."}
        </p>
      </div>
      {introCount <= 3 && (
        <div className=" mt-3">
          <button
            type="button"
            className={`w-3 h-3 rounded-sm ${
              introCount === 1 ? "bg-red" : "bg-red-100"
            }`}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-sm   ${
              introCount === 2 ? "bg-red" : "bg-red-100"
            } ml-1`}
          ></button>
          <button
            type="button"
            className={`w-3 h-3 rounded-sm  ${
              introCount === 3 ? "bg-red" : "bg-red-100"
            } ml-1`}
          ></button>
        </div>
      )}
      <button
        className="bg-red hover:[#ff0000] text-white font-bold py-2 px-4 rounded w-full mt-[20vh]"
        onClick={handleNextButton}
      >
        {`${introCount <= 3 ? "Next" : "LOGIN / SIGNUP"} `}
      </button>
    </div>
  );
};

export default Main;
