import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (
    firstName,
    lastName,
    phone,
    username,
    email,
    role,
    password,
    confirmpassword
  ) => {
    setIsLoading(true);
    setError(null);

    // let reqBody = {
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   username,
    //   password,
    //   role: [role],
    //   confirmpassword,
    // };

    //  let reqBody = {
    //   "firstName": "Nnamdi",
    //   "lastName": "Orie",
    //   "email": "nnamdoriey@gmail.com",
    //   "phone": "07068430736",
    //   "username": "Noriey",
    //   "password": "12345678",
    //   "confirmPassword": "12345678",
    //   "role": [
    //     "user"
    //   ]
    // };

    // console.log(reqBody);

    // if (confirmpassword !== password) {
    //   throw new Error("Passwords do not match");
    // }

    // try {
    //   const response = await fetch(
    //     "https://2dca-102-89-34-123.ngrok.io/api/v1/users/test",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(reqBody),
    //       mode: "no-cors",
    //     }
    //   );
    //   console.log(response);
    //   const result = await response.text();
    //   console.log("RES::", result);
    // } catch (error) {
    //   console.error(error);
    // }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstName: "Nnamdi",
      lastName: "Orie",
      email: "nnamdoriey@gmail.com",
      phone: "07068430736",
      username: "Noriey",
      password: "12345678",
      confirmPassword: "12345678",
      role: ["user"],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      mode: 'no-cors',
    };

    fetch(
      "https://e7c5-102-89-47-55.ngrok.io/api/v1/users/test",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => console.log("RESPONSE::", response))
      .catch((error) => console.log("error", error));



      // const response = await fetch('https://7948-102-89-47-132.ngrok.io/api/v1/users/test', {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: raw,
      //   // mode: 'no-cors',
      // });
      // const json = await response.json();
      // console.log(json);

    // if (!response.ok) {
    //   setIsLoading(false);
    //   setError(json.error);
    // }
    // if (response.ok) {
    //   //save the user to local storage
    //   localStorage.setItem("user", JSON.stringify(json));
    //   //update the auth Context
    //   dispatch({ type: "LOGIN", payload: json });
    //   //
    //   setIsLoading(false);
    // }
  };

  return { signup, isLoading, error };
};
