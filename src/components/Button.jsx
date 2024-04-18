import React, { memo } from "react";

const Button = (props) => {
  const { name, handleFunction, disabled } = props;
  return (
    <button
      className={`${
        disabled ? "bg-red-100" : "bg-red"
      } hover:[#ff0000] text-white font-bold py-2 px-4 rounded w-full mt-[5vh]`}
      onClick={() => handleFunction()}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default memo(Button);
