import React, { FC, useEffect, useState } from "react";
//....import from icon  from assets
import allIcons from "../../assets/icons/index";

//...... import logo component from component
import Logo from "../../components/logo/Logo";

//........use formik and yup
import { Formik, FormikHelpers } from "formik";

//......use react router
import { useNavigate } from "react-router-dom";
//...... use axios with write a httpservice class
import HttpService from "../../services/Httpservice";
//....... use toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//....... use export variable in config foloder
import { PATHS } from "../../config/RouteConfig";
import { LOGIN } from "../../config/UrlConfig";
import { IS_LOGGED_IN, ACCESS_TOKEN } from "../../config/VariableConfig";

interface Values {
  username: string;
  password: string;
}
interface errorMessage {
  username?: string;
  password?: string;
}

export function LoginPage<FC>() {
  const navigate = useNavigate();

//...... make state for eye icon in password input 
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  const [iconEye, setIconEye] = useState<string>("eye");
  const handlePasswordVisibility = ():void => {
    if (iconEye === "eye") {
      setIconEye("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (iconEye === "eye-off") {
      setIconEye("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  
  


//....... register button
  const goToRegisterPage = (): void => {
    navigate(PATHS.REGISTER);
  };
  

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(value: Values): any => {
          let error: errorMessage = {};
          if (!value.username) {
            error.username = "نام کاربری نمی تواند خالی باشد";
          }
          if (!value.password) {
            error.password = " پسورد نمی تواند خالی باشد";
          }
          return error;
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            HttpService.post(LOGIN, values)
              .then((res: any) => {
                if (res.status == 200 || res.status == 201) {
                  toast.success(" خوش امدید");
                  localStorage.setItem(ACCESS_TOKEN, res.data.token);
                  localStorage.setItem(IS_LOGGED_IN, "true");
                  navigate(PATHS.DASHBOARD, { replace: true });
                }
              })
              .catch(() => {
                toast.error("نام کاربری یا رمز عبور اشتباه می باشد");
              });
            setSubmitting(false);
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            className="bg-backgroundImageLogin flex flex-col justify-center items-center bg-[100% 100%] h-screen p-5 "
            onSubmit={handleSubmit}
          >
           <Logo/>
            <div className="flex flex-col justify-center items-center w-80 md:w-96 h-[480px] shadow-2xl rounded-2xl  bg-slate-800 opacity-90 p-5">
              <div className="relative">
                <input
                  className=" w-72 lg:w-80 h-16 rounded bg-slate-100 text-slate-700 p-2 mb-3 "
                  type="username"
                  name="username"
                  placeholder="نام کاربری"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <div className="text-red-600 text-sm text-right py-2">
                  {errors.username && touched.username && errors.username}
                </div>
                <input
                  className="w-72 lg:w-80 h-16 rounded  bg-slate-100 text-slate-700 p-2 mb-3"
                  type={passwordVisibility ? "password" : "text"}
                  name="password"
                  placeholder="کلمه عبور"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className="absolute text-slate-400 text-xl left-3 top-28 ">
                  {iconEye == "eye" ? (
                    <allIcons.FaRegEyeSlash
                      onClick={handlePasswordVisibility}
                    />
                  ) : (
                    <allIcons.FaRegEye onClick={handlePasswordVisibility} />
                  )}
                </span>
                <div className="text-red-600 text-sm text-right py-2">
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <div className="flex justify-around items-center ">
                <button
                  className="bg-orange-500 text-slate-100 hover:bg-orange-300 w-72 lg:w-80 h-12 rounded mx-auto "
                  type="submit"
                  disabled={isSubmitting}
                >
                  ورود
                </button>
              </div>
              <div className="flex flex-col justify-start   mt-5">
                <p className="text-lg text-slate-100  p-2">
                  {" "}
                  آیا حساب کاربری ندارید؟
                </p>
                <button
                  className="bg-blue-800 text-slate-100 hover:bg-blue-300 w-72 lg:w-80 h-12 rounded  mx-auto "
                  type="button"
                  onClick={goToRegisterPage}
                >
                  ثبت نام
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
