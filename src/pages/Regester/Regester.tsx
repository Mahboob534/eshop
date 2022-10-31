import React, { FC, useState } from "react";
//..... use useformik and yap
import { useFormik } from "formik";
import * as yup from "yup";
//....... import icons
import allIcons from "../../assets/icons";
//...... logo component
import Logo from "../../components/logo/Logo";

//....... export display password hook
import DisplayPassword from "../../hook/DisplayPassword";


interface Values {
  username: string;
  password: string;
  rePassword: string;
  name: string;
  family: string;
  email: string;
  phone: string;
}
const validationSchema: any = yup.object().shape({
  username: yup.string().required("نام کاربری نمی تواند خالی باشد"),
  password: yup
    .string()
    .min(6, "کلمه عبور نباید کمتر از 6 کاراکتر باشد")
    .required("کلمه عبور نمی تواند خالی باشد"),
  rePassword: yup
    .string()
    .min(6, "کلمه عبور نباید کمتر از 6 ماراکتر باشد")
    .required("تکرار کلمه عبور نمی تواند خالی باشد"),
  name: yup.string(),
  family: yup.string(),
  email: yup
    .string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "آدرس ایمیل درست ****@****.***")
    .email("ادرس ایمیل وارد نشده"),
  phone: yup
    .string()
    .matches(
      /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
      "این شماره نامعتبر است"
    )
    .max(11, "شماره همراه را درست وارد نمایید")
    .required("شماره همراه نمی تواند خالی باشد"),
});

export function RegesterPage<FC>() {
  //....... make DisplayPassword
  const { iconEye, passwordVisibility, handlePasswordVisibility } =
    DisplayPassword();
 const [passwordVisible,setPasswordVisible]=useState<boolean>(true)
  //make a object from useFormik
  const formik: any = useFormik({
    initialValues: {
      username: "",
      password: "",
      rePassword: "",
      name: "",
      family: "",
      email: "",
      phone: "",
    },
    onSubmit: (values: Values) => {
      alert(values);
    },
    validationSchema,
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify.center items-center w-full h-full lg:h-screen bg-slate-800"
      >
        <Logo />
        <div className="flex flex-col justify-center items-center w-80 md:w-96 lg:w-[480px] bg-slate-900 rounded-lg shadow-2xl opacity-80 p-4 mb-6">
          <input
            className=" w-72 lg:w-60 h-12 rounded bg-slate-100 text-slate-700 p-2 my-2 "
            type="username"
            name="username"
            placeholder="نام کاربری"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <span className="text-red-600">
            {" "}
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}{" "}
          </span>

          <input
            className=" w-72 lg:w-60 h-12 rounded bg-slate-100 text-slate-700 p-2 my-2 "
            type="email"
            name="email"
            placeholder=" پست الکترونیکی"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <span className="text-red-600">
            {formik.errors.email && formik.touched.email && formik.errors.email}{" "}
          </span>
          <input
            style={{ direction: "ltr" }}
            className=" w-72 lg:w-60 h-12 rounded bg-slate-100 text-slate-700 p-2 my-2 "
            type="number"
            name="phone"
            placeholder="0912*******"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          <span className="text-red-600">
            {" "}
            {formik.errors.phone && formik.touched.phone && formik.errors.phone}
          </span>
          <div className="flex flex-wrap justify-center  lg:justify-around  items-center relative w-full my-2">
            <input
              className="w-72 lg:w-52 h-12 rounded  bg-slate-100 text-slate-700 p-2 my-2 lg:my-0 lg:ml-1 "
              type={passwordVisibility ? "password" : "text"}
              name="password"
              placeholder="کلمه عبور"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
             
            <button name={"password"}  className="absolute text-slate-400 text-xl left-3 md:left-10 top-6 lg:left-60 lg:top-3 ">
            {iconEye == "eye"  ? (
               <allIcons.FaRegEyeSlash onClick={handlePasswordVisibility} />
              ) : (
                <allIcons.FaRegEye onClick={handlePasswordVisibility} />
              )}
             
            </button>

            <input
              className="w-72 lg:w-52 h-12 rounded  bg-slate-100 text-slate-700 p-2  "
              type={passwordVisibility ? "password" : "text"}
              name="rePassword"
              placeholder="تکرار کلمه عبور"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
           
            <span  className="absolute text-slate-400 text-xl top-[80px] left-3 md:left-10 lg:left-6 lg:top-3 ">
           
              {iconEye == "eye" ? (
                <allIcons.FaRegEyeSlash onClick={handlePasswordVisibility} />
              ) : (
                <allIcons.FaRegEye onClick={handlePasswordVisibility} />
              )}
            </span>
            <span className="text-red-600 text-sm">
              {" "}
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </span>
            <span className="text-red-600 text-sm">
              {" "}
              {formik.errors.rePassword &&
                formik.touched.rePassword &&
                formik.errors.rePassword}
            </span>
          </div>

          <div className=" flex flex-wrap justify-center lg:justify-around  items-center relative w-full my-2">
            <input
              className="w-72 lg:w-52 h-12 rounded  bg-slate-100 text-slate-700 p-2 my-2 lg:my-0 ml-1"
              type="text"
              name="name"
              placeholder="نام"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <input
              className="w-72 lg:w-52 h-12 rounded  bg-slate-100 text-slate-700 p-2  "
              type="text"
              name="family"
              placeholder="نام خانوادگی"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.family}
            />
            <span className="text-red-600 text-sm">
              {" "}
              {formik.errors.name && formik.touched.name && formik.errors.name}
            </span>
            <span className="text-red-600 text-sm">
              {formik.errors.family &&
                formik.touched.family &&
                formik.errors.family}
            </span>
          </div>
          <div className="my-5">
            <button
              className="bg-orange-500 text-slate-100 hover:bg-orange-300 w-72 lg:w-80 h-12 rounded mx-auto "
              type="submit"
            >
              ثبت نام
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
