const Product = require('../models/Product');

// create a product 
exports.createProduct = async(req,res) => {
    const product = new Product({
        name:req.body.name,
        weight:req.body.weight,
        price:req.body.price,

    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);

        
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}