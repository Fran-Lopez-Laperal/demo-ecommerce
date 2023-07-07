const getDB = require("../../getDB");

const selectProductsQuery = async () => {
    let connection;
    try {
        connection = await getDB();

        const queryResult = await connection.query(`SELECT * FROM products`);
        const products = queryResult[0];
        
        return products

    } finally {
        if (connection) connection.release()
    }

}


module.exports = selectProductsQuery