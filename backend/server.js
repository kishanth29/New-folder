const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const ProductRoute = require("./routes/Products");

app.use(express.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/intern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connencted");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/products", ProductRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
