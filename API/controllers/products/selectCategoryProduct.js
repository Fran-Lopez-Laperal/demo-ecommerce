const selectProductByCategoryQuery = require("../../db/queries/products/selectCategoryProductQuery");

const selectCategoryProduct = async (req, res, next) => {

    const { category } = req.query;
    console.log('No viene nada por aqui de la categoria???', category)
    try {

        const categoryProduct = await selectProductByCategoryQuery(category);

        res.send({
            status: 'ok',
            data: {
                categoryProduct
            }

        })

    } catch (error) {
        console.error(error)
    }

}

module.exports = selectCategoryProduct;