const express = require("express");
const { getCategories } = require("../controllers/resourcesController");

const router = express.Router();

router.get('/categories', getCategories);


module.exports = router;