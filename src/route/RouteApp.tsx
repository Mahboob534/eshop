import React, { FC, useEffect } from "react";
import { PATHS } from "../config/RouteConfig";
import { PrivateRoute } from "../route/privateRoute/PrivateRoute";
import {
  ProtectedForAdminRoutes,
  ProtectedRoutes,
} from "../route/protectedRoute/ProtectedRoute";
import { PublicRoute } from "../route/publicRoute/PublicRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HomePage,
  CheckoutPage,
  LoginPage,
  NotFoundPage,
  PaymentPage,
  ProductPage,
  ProductsPage,
  RegesterPage,
  BasketPage,
  UserProfilePage,

} from "../pages/index";
export const RouteApp: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.BASKET} element={<BasketPage />} />
          <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
          <Route path={PATHS.PRODUCT} element={<ProductPage />} />
          <Route path={PATHS.PAGE404} element={<NotFoundPage />} />
          <Route path={PATHS.PAYMENT} element={<PaymentPage />} />
          <Route path={PATHS.PRODUCT_ID} element={<ProductPage />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
        <Route path={PATHS.DASHBOARD} element={<UserProfilePage />} />

        </Route>
        <Route element={<ProtectedForAdminRoutes />}>
       

        </Route> 
        <Route element={<PrivateRoute />}>
          <Route path={PATHS.LOGIN} element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegesterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
