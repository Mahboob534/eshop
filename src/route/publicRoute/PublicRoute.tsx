import React, { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CheckUserExpired } from "../../utils/FunctionUtils";

export const PublicRoute :FC = () => {
  const location = useLocation();
  useEffect(() => {
    CheckUserExpired("public");
  }, [location]);
  return <Outlet/>
};
