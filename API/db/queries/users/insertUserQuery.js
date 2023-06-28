const generateError = require("../../../helpers");
const getDB = require("../../getDB");
const bcrypt = require("bcrypt")

const insertUserQuery = async (name, email, password, role) => {

    let connection;

    try {

        connection = await getDB()

        let [users] = await connection.query(`
            SELECT id FROM users WHERE name=?`,
            [name]
        );
     
        [users] = await connection.query(`
            SELECT id FROM users WHERE email=?`,
            [email]
        )
        if (users.length > 0) {
            generateError(`El email ${email} ya existe`)
        }

        const hashPassword = await bcrypt.hash(password, 10);


        [users] = await connection.query(`
        INSERT INTO users (name, email, password, role) VALUE(?,?,?,?)`,
            [name, email, hashPassword, role]
        )

    } finally {
        if(connection) connection.release()
    }

}


module.exports = insertUserQuery;