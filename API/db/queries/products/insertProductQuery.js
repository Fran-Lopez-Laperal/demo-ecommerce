const generateError = require("../../../helpers");
const getDB = require("../../getDB");


const insertProductQuery = async (title, description, image, price, category, size, stock) => {
    let connection;

    try {

        connection = await getDB();

        let [products] = await connection.query(`
        SELECT id, title FROM products WHERE title = ?`,
            [title]);
            

        [products] = await connection.query(`
        SELECT id, description FROM products WHERE description = ?`,
            [description]);


        [products] = await connection.query(`
            INSERT INTO products(title, description, image, price, category, size, stock) VALUES(?,?,?,?,?,?,?)`, [
            title,
            description,
            image,
            price,
            category,
            size,
            stock
        ])


    } finally {
        if (connection) connection.release()
    }
}


module.exports = insertProductQuery