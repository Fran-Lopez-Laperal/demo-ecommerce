const selectProductsQuery = require("../../db/queries/products/selectProductsQuery")

const selectProducts = async (req, res, next) => {


    try {
        const { product } = req.params;
        console.log(req)
        const products = await selectProductsQuery(product);
        res.send({
            status: "ok",
            data: {
                products
            }
        })

    } catch (error) {
        next(error)
    }


}


module.exports = selectProducts