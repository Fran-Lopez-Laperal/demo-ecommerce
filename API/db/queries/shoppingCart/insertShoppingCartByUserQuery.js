const getDB = require("../../getDB")


const insertShoppingCartByUserQuery = async (idUser, idProduct) => {
    let connection

    try {

        connection = await getDB();


        let [insertCart] = await connection.query(`
            INSERT INTO shoppingCart (idUser, idProduct)
            SELECT ? , p.id
            FROM products p
            WHERE p.id = ?
        `,[idUser, idProduct]);

        return insertCart


    } finally {
        if (connection) connection.release()
    }
}


module.exports = insertShoppingCartByUserQuery
