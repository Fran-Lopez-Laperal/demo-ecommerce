const insertShoppingCartByUserQuery = require("../../db/queries/shoppingCart/insertShoppingCartByUserQuery");

const productToCart = async (req, res, next) => {
   console.log("Que viene for aqui muchacho??????", req.body)

   try {

      const { isUser, idProduct } = req.body;
      console.log("Como es el valor de isUser???",isUser)

      const insertProduct = await insertShoppingCartByUserQuery(isUser, idProduct)

      const Cart = {
         idUser: isUser,
         idProduct: idProduct,
         ...insertProduct
      }
     
      res.send({
         status: "ok",
         shoppingCart: {
            Cart
         }
      })
   } catch (error) {
      next(error)
   }

}

module.exports = productToCart