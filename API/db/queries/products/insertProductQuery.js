const generateError = require("../../../helpers");
const getDB = require("../../getDB");


const insertProductQuery = async (title, description, image, price, category) => {
    let connection;

    try {

        connection = await getDB();

        let [products] = await connection.query(`
        SELECT id, title FROM products WHERE title = ?`,
            [title]);

        if (products.length > 0) {
            generateError('Ya existe un producto con este nombre', 403)
        }


        [products] = await connection.query(`
        SELECT id, description FROM products WHERE description = ?`,
            [description]);

        // if (products.length > 0) {
        //     generateError('Ya existe un producto con esta descripcion', 403)
        // }


        [products] = await connection.query(`
            INSERT INTO products(title, description, image, price, category) VALUES(?,?,?,?,?)`, [
            title,
            description,
            image,
            price,
            category,
        ])


    } finally {
        if (connection) connection.release()
    }
}


module.exports = insertProductQuery