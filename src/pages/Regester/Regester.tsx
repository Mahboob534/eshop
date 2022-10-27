import React,{FC} from 'react'

export function RegesterPage<FC>() {
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify.center items-center w-full bg-slate-600"
      >
        <Logo />
        <div className="flex flex-col justify-center items-center w-96 lg:w-[480px] h-full bg-slate-900 rounded-lg shadow-2xl opacity-80 p-4">
          <input
            className=" w-72 lg:w-60 h-8 rounded bg-slate-100 text-slate-700 p-2 mb-1 "
            type="username"
            name="username"
            placeholder="نام کاربری"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <div className="text-red-600 text-sm text-right py-2">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
          <div className=" flex flex-wrap justify-around  items-center relative w-full">
            <input
              className="w-72 lg:w-40 h-8 rounded  bg-slate-100 text-slate-700 p-2 ml-1"
              type="password"
              // {passwordVisibility ? "password" : "text"}
              name="password"
              placeholder="کلمه عبور"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <input
              className="w-72 lg:w-40 h-8 rounded  bg-slate-100 text-slate-700 p-2  "
              type="password"
              // {passwordVisibility ? "password" : "text"}
              name="rePassword"
              placeholder="تکرار کلمه عبور"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <input
            className=" w-72 lg:w-60 h-8 rounded bg-slate-100 text-slate-700 p-2 mb-1 "
            type="email"
            name="email"
            placeholder=" پست الکترونیکی"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <div className=" flex flex-wrap justify-around  items-center relative w-full">
            <input
              className="w-72 lg:w-40 h-8 rounded  bg-slate-100 text-slate-700 p-2 ml-1"
              type="text"
              // {passwordVisibility ? "password" : "text"}
              name="name"
              placeholder="نام"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <input
              className="w-72 lg:w-40 h-8 rounded  bg-slate-100 text-slate-700 p-2  "
              type="text"
              // {passwordVisibility ? "password" : "text"}
              name="family"
              placeholder="نام خانوادگی"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
        </div>
      </form>
    </>
  );
}
