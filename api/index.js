const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/users");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const port = process.env.PORT || 4000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connected"));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/", (req, res) => {
  res.send("welcome to ecommerce api");
});
app.listen(port, "0.0.0.0", () => {
  console.log("server started");
});
