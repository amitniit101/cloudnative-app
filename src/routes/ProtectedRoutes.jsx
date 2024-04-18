import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  console.log("props", props);
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log("login", login);
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <div>
      Private Route
      <Component />
    </div>
  );
};

export default ProtectedRoutes;


