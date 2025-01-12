import axios from "axios";
import { useFormik } from "formik"
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object, ref, string } from "yup"
import { UserContext } from "../../context/User.context";

export default function Login() {

  let { setToken } = useContext(UserContext);

  const navigate = useNavigate();
  const [incorrectEmailOrPassword, setIncorrectEmailOrPassword] = useState(null);

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

  const validationSchema = object({
    email: string().required("Email is required").email("Email is invaled"),
    password: string().required("password is required").matches(passwordRegex, "password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
  });

  async function sendDataToLogin(values) {
    const toastLoadingId = toast.loading("Waiting...");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values

      };
      let { data } = await axios.request(options);
      if (data.message === "success") {
        localStorage.setItem("token", data.token);
        setToken(data.token)
        toast.success("User Logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);

      }
      console.log(data);
    }
    catch (error) {
      setIncorrectEmailOrPassword(error.response.data.message)
      console.log(error)
    }
    finally {
      toast.dismiss(toastLoadingId)
    }
  }

  const formik = useFormik({
    initialValues: {
      "email": "",
      "password": "",
    },
    validationSchema,
    onSubmit: sendDataToLogin,

  });

  return <>
    <h1 className="text-xl mb-5"><i className="fa-regular fa-circle-user mr-2 text-lg"></i>Login :</h1>

    <form className="space-y-3" onSubmit={formik.handleSubmit}>

      <div className="email">
        <input type="email"
          placeholder="Enter your email"
          className="form-control w-full"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
        />
        {formik.errors.email && formik.touched.email && <p className="text-red-500 mt-1 text-sm">*{formik.errors.email}</p>}
      </div>

      <div className="password">
        <input type="password"
          placeholder="Password"
          className="form-control w-full"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
        />
        {formik.errors.password && formik.touched.password && <p className="text-red-500 mt-1 text-sm">*{formik.errors.password}</p>}
        {incorrectEmailOrPassword && <p className="text-red-500 mt-1 text-sm">*{incorrectEmailOrPassword}</p>}
      </div>

      <button type="submit" className="btn w-full bg-primary-700 hover:bg-primary-800 text-white">Login</button>
    </form>
  </>
}
