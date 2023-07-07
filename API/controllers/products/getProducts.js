const selectProductsQuery = require("../../db/queries/products/selectProductsQuery")

const selectProducts = async (req, res, next) => {


    try {
        const products = await selectProductsQuery();
        console.log("Donde salen estos datos???" , products)
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