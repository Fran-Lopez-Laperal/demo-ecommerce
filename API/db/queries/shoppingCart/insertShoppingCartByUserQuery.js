const getDB = require("../../getDB")





const insertShoppingCartByUserQuery = async () => {
    let connection

    try {

        connection = await getDB();


        const [cart] = await connection.query(`
        
        `)


    } finally {
        if (connection) connection.release()
    }
}


module.exports = insertShoppingCartByUserQuery
