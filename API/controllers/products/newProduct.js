const insertProductQuery = require("../../db/queries/products/insertProductQuery")

const newProduct = async (req, res, next) => {

    try {

        const { title, description, image, price, category } = req.body
        console.log(req.body)
        await insertProductQuery(title, description, image, price, category);

        res.send({
            status: 'ok',
            data: {
                product: {
                    title,
                    description,
                    image,
                    price,
                    category
                }
            }
        })

    } catch (error) {
        next(error)
    }

}

module.exports = newProduct