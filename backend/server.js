const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const ProductRoute = require("./routes/Products");
const errorHandler = require('./utilities/errorHandle')
const cors = require('cors');
app.use(express.json());
require('dotenv').config();

// Database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connencted");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors());
app.use("/products", ProductRoute);

// error handler middleware
app.use(errorHandler);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
