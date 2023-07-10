const selectShoppingCartByIdQuery = require("../../db/queries/shoppingCart/selectShoppingCartByIdQuery");

const getCart = async (req, res, next) => {
    try {
        const {userId} = req.params;
      console.log(userId)
        const userCart = await selectShoppingCartByIdQuery(userId);

        res.send({
            status:"ok",
            Cart: 
                userCart
        })

    } catch (error) {
        next(error)
    }

}


module.exports = getCart