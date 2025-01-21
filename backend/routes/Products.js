const express = require("express");
const { createProduct } = require("../controllers/ProductController");
const router = express.Router();

// product routes

router.post("/", createProduct);

module.exports = router;
