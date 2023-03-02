const axios = require("axios");

const loginUser = async (req, res) => {
  const requestBody = req.body;

  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://0d1e-102-88-62-147.ngrok.io/api/v1/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(requestBody),
    };

    const response = await axios(config);
    const data = response.data;
    console.log("LOGIN::", data);
    res.status(200).json({ data });
  } catch (error) {
    if (error) {
      console.log("Login Error", error.response.data);
      res.status(400).json(error.response.data);
    }
  }
};

const signupUser = async (req, res) => {
  const requestBody = req.body;
  // console.log("Header", req.headers);

  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://0d1e-102-88-62-147.ngrok.io/api/v1/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(requestBody),
    };

    const response = await axios(config);
    const data = response.data;
    console.log("SIGNUP::", data);
    res.status(200).json(data);
  } catch (error) {
    if (error) {
      console.log("Signup error", error.response.data);
      res.status(400).json(error.response.data); 
    }
  }
};

module.exports = { loginUser, signupUser };
