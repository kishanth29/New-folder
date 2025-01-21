const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductByID,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const router = express.Router();

// product routes

router.post("/create", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductByID);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
