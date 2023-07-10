const insertProductQuery = require("../../db/queries/products/insertProductQuery")

const newProduct = async (req, res, next) => {

    try {

        const { title, description, image, price, category, size, stock } = req.body
        console.log(req.body)
        await insertProductQuery(title, description, image, price, category, size, stock);

        res.send({
            status: 'ok',
            data: {
                product: {
                    title,
                    description,
                    image,
                    price,
                    category,
                    size,
                    stock
                }
            }
        })

    } catch (error) {
        next(error)
    }

}

module.exports = newProduct