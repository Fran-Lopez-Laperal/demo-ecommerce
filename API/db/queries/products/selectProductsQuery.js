const getDB = require("../../getDB");

const selectProductsQuery = async (product) => {
    let connection;
    try {
        connection = await getDB();

        const products = connection.query(`SELECT * FROM products`)

        return products

    } finally {
        if (connection) connection.release()
    }

}


module.exports = selectProductsQuery