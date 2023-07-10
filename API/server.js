
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const isAuth = require("./middleware/isAuth");
const isAdmin = require("./middleware/isAdmin");

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//USER
const {
  registerUser,
  loginUser,
  editUser,
  profileUser
} = require("./controllers/users");


app.post("/users/register", registerUser);
app.post("/users/login", loginUser);
app.put("/users/edit", isAuth, editUser);
app.get("/users/profile", isAuth, profileUser);

//PRODUCTS
const {
  newProduct,
  getProducts
} = require("./controllers/products");


app.post("/products/create",isAuth, isAdmin, newProduct);
app.get("/products", getProducts);

//SHOPPINGCART
const { 
  getCart, 
  productToCart,
  editProductCart,

 } = require("./controllers/shoppingCart");



app.get("/shoppingCart/:userId", isAuth, getCart);
app.post("/shoppingCart",isAuth, productToCart);
app.put("/shoppingCart", isAuth, editProductCart);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
});

//MIDDLEWARE RUTA NO ENCONTRADA
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Aplication run on port ${process.env.PORT}`)
});