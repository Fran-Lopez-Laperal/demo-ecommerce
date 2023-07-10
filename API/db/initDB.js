require("dotenv").config()

const getDB = require("./getDB")


const createTables = async () => {

    let connection;


    try {
        connection = await getDB();


        console.log('Borrando tablas')

        await connection.query(`DROP TABLE IF EXISTS shoppingCart`);
        await connection.query(`DROP TABLE IF EXISTS products`);
        await connection.query(`DROP TABLE IF EXISTS users`);


        console.log("Creando tablas.....")


        await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(30)  NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            avatar VARCHAR(100),
            role ENUM('admin', 'customer') DEFAULT 'customer',
            address TEXT,
            creditCard VARCHAR(16),
            creditCardDate DATE,
            creditCardCVC CHAR(3),
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
        )
    `);


        await connection.query(`
        CREATE TABLE IF NOT EXISTS products(
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(30) NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(100),
            price DECIMAL(10,2),
            size VARCHAR(2) NOT NULL,
            stock TINYINT UNSIGNED NOT NULL,
            category ENUM("mtb", "carretera", "bicis", "complementos"),
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
        )
    `);


        await connection.query(`
        CREATE TABLE IF NOT EXISTS shoppingCart(
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            idUser INT UNSIGNED NOT NULL ,
            idProduct INT UNSIGNED NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (idUser) REFERENCES users(id),
            FOREIGN KEY (idProduct) REFERENCES products(id)
        ) 
    `)

        console.log('Tablas creadas!!!!!')

    } catch (err) {
        console.log(err)

    } finally {
        if (connection) connection.release()

        process.exit()
    }
}

createTables();