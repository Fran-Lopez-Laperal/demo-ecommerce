
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const registerUser = require("./controllers/users/registerUser");
const loginUser = require("./controllers/users/loginUser");



const app = express();




//MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

app.post("/users/register", registerUser);
app.post("/users/login", loginUser);


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