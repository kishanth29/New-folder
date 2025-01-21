const Product = require("../models/Product");

// create a product   -- http://localhost:5000/products/create
exports.createProduct = async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    weight: req.body.weight,
    price: req.body.price,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    // res.status(400).json({ message: error.message });  // before using middleware
    next(error);
  }
};
// Retrieve all products  -- http://localhost:5000/products
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    // res.status(400).json({ message: error.message });  // before using middleware
    next(error);
  }
};

// get a single product --   http://localhost:5000/products/id
exports.getProductByID = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    // res.status(500).json({ message: error.message });  // before using middleware
    next(error);
  }
};

// update a single product   -- http://localhost:5000/products/update/id

exports.updateProduct = async (req, res, next) => {
  try {
    const updatedproduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedproduct) {
      res.status(200).json(updatedproduct);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    // res.status(400).json({ message: error.message }); // before using middleware
    next(error);
  }
};

// deletea single product  product

exports.deleteProduct = async (req, res, next) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (deleteProduct) {
      res.status(201).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    // res.status(500).json({ message: error.message });  // before using middleware
    next(error);
  }
};
