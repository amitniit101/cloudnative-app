import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const handleOTP = () => {
    navigate("/dashboard");
  };
  console.log("otp", otp.length);
  return (
    <div>
      {/* <div className="text-[26px] font-bold w-full ">Hi I am Login Page</div> */}
      <div className="px-5">
        <p className="font-bold mt-[10vh]  text-left">OTP VERIFICATION</p>
        <p className="mt-2 text-left">
          We've sent an OTP on your registered email. i.e diksha@gmail.com
        </p>

        <OtpInput
          containerStyle={{
            display: "flex",
            justifyContent: "start",
            marginTop: "40px",
            gap: 8,
          }}
          inputStyle={{
            // width: "50%",
            border: "1px solid #C4C4C4",
            height: "40px",
            width: "40px",
            // border: `1px solid ${
            //   errorState === "" ? "#C4C4C4" : "#EF4444"
            // }`,
            borderRadius: 8,
            outline: "none",
            fontSize: 16,
            // color: `${errorState === "" ? "#202020" : "#EF4444"}`,
            aspectRatio: "1/1",

            // background: `${errorState === "" ? "transparent" : "#FDEDED"}`,
          }}
          value={otp}
          onChange={handleOtpChange}
          numInputs={4}
          renderSeparator={<span></span>}
          placeholder="----"
          renderInput={(props) => <input {...props} />}
          inputType="tel"
        />
        <label className="block text-left pt-5 ">
          Resend OTP in 0.59 seconds
        </label>
        <Button
          disabled={otp.length !== 4 ? true : false}
          name="VERIFY"
          handleFunction={() => handleOTP()}

          //  error={emailError}
        />
        {/* <label className="block text-red font-semibold text-left pt-4">Resend OTP</label> */}
      </div>
    </div>
  );
};

export default OTP;
