const deleteProdcutCartQuery = require("../../db/queries/shoppingCart/deleteProductCartQuery");

 const deleteProductCart = async(req, res, next) => {
    try {
        const {idProduct} = req.params;

     const product = await deleteProdcutCartQuery(idProduct)

     res.send({
        estatus: "ok",
        message: "producto eliminado del carrito"
     })
        
    } catch (error) {
        next(error)
    }

}

module.exports = deleteProductCart;
    