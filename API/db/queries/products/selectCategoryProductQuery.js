const getDB = require("../../getDB");

const selectProductByCategoryQuery = async (category) => {

    let connection;

    try {

        connection = await getDB()

      let [product] =  await connection.query(
            `SELECT * FROM products WHERE category = ?`,
            [category]
        )

        return product[0]

    } finally {
        if (connection) connection.release()
    }
}

module.exports = selectProductByCategoryQuery;