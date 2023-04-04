import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast, Slide } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);

    const config = {
      method: "post",
      url: "/api/v1/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ email, password }),
    };
    console.log(email, password);
    axios(config)
      .then((res) => {
        const data = res.data;
        if (res.status === 200) {
          console.log("Login successful!");
          const token = data.data.data;
          const user = jwt_decode(token);
          const userInfo = { user, token };
          // save the user to local storage
          localStorage.setItem("giatto-user", JSON.stringify(userInfo));
          // update the auth Context
          dispatch({ type: "LOGIN", payload: userInfo });

          setIsLoading(false);
          toast.success("Login successfully", {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
          });
          navigate("/home");
        }
      })
      .catch(function (error) {
        const err = error.response.data.message;
        setIsLoading(false);
        toast.error(
          err !== undefined
            ? `${err}`
            : "We are sorry, your login request cannot be completed at this time.",
          {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000,
          }
        );
        console.log(
          `Login not successful! ${error.response.data.message}` || error
        );
      });
  };

  return { login, isLoading };
};
