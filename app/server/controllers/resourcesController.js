const axios = require("axios");

const getCategories = async (req, res) => {
  try {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.BASE_URL}/api/v1/categories?limit=8`,
      headers: {},
    };

    const response = await axios(config);
    const data = response.data;
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getCategories };
