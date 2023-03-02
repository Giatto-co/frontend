import { useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (
    firstName,
    lastName,
    phone,
    username,
    email,
    role,
    password,
    confirmPassword
  ) => {
    setIsLoading(true);
    setError(null);

    let reqBody = {
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      role: [role],
      confirmPassword,
    };
    console.log("Reqbody>>>>>>", reqBody);

    if (confirmPassword !== password) {
      throw new Error("Passwords do not match");
    }

    const config = {
      method: "post",
      url: "/api/v1/user/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(reqBody),
    };
    axios(config)
      .then((res) => {
        const data = res.data;
        if (res.status === 200) {
          console.log("Signup successful!");
          const user = data.data;
          const token = data.token;
          const userInfo = { user, token };
          // save the user to local storage
          localStorage.setItem("giatto-user", JSON.stringify(userInfo));
          // update the auth Context
          dispatch({ type: "LOGIN", payload: userInfo });

          setIsLoading(false);
          toast.success("Signup successfully", {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
          });
          navigate('/');
        }
      })
      .catch(function (error) {
        const err = error.response.data.message;
        setIsLoading(false);
        toast.error(err !== undefined
          ? `${err}`
          : "We are sorry, your registration cannot be completed at this time.", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000,
        });
        console.log(
          `Signup not successful! ${error.response.data.message}`
        );
      });
  };

  return { signup, isLoading, error };
};
