const getDB = require("../../getDB");

const deleteProdcutCartQuery = async (idProduct) => {
    let connection;

    try {
        connection = await getDB();

        await connection.query(` DELETE FROM shoppingCart WHERE id = ?`,[
            idProduct
        ])


    } finally {
        if (connection) connection.release();
    }
}


module.exports = deleteProdcutCartQuery