import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(null);
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    localStorage.setItem("login", true);
    // navigate("/dashboard");
    navigate("/verify-otp");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }
  }, [navigate]);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e) => {
    if (!isValidEmail(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError('');
    }
    setEmail(e.target.value);
  };

  return (
    <div>
      {/* <div className="text-[26px] font-bold w-full ">Hi I am Login Page</div> */}
      <div className="px-5">
        <p className="font-bold mt-[10vh]  text-left">
          LOGIN/SIGNUP YOUR ACCOUNT
        </p>
        <p className="mt-2 text-left">
          Please enter you email id and we will send you an OTP for verification
        </p>
        <label
          className="block text-gray-700 text-sm font-bold mb-2 text-left mt-[5vh]"
          for="wEmail"
        >
          Work Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="wEmail"
          type="email"
          placeholder="Please enter your registered emal..."
          onChange={(e) => handleEmail(e)}
        />
        <lable className="text-left text-error w-full block pt-2">
          {emailError}
        </lable>
        <Button 
        name="COUNTINUE"
        error={emailError}
        disabled={emailError !== '' ? true : false}
        handleFunction={()=>handleLogin()}
        />
        {/* <button
          className={`${
            emailError !== '' ? "bg-red-100" : "bg-red"
          } hover:[#ff0000] text-white font-bold py-2 px-4 rounded w-full mt-[5vh]`}
          onClick={() => handleLogin()}
          disabled={emailError !== null ? true :true}
          
        >
          COUNTINUE
        </button> */}
      </div>
    </div>
  );
};

export default Login;
