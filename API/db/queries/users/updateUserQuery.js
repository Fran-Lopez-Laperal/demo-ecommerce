const generateError = require("../../../helpers")
const getDB = require("../../getDB")

const updateUserQuery = async (name, email, address, creditCard, idUser) => {
    let connection

    try {

        connection = await getDB()

        if (email) {
            const [users] = connection.query(
                `SELECT id, email FROM users WHERE name = ?`,
                [email]
            );

            if (users.length > 0) {
                generateError("Ya existe un usuario con este emial", 403)
            }

            await connection.query(
                `UPDATE users SET email = ? WHERE id='`, [
                email,
                idUser
            ]);
        }


        if (name) {
            await connection.query(
                `UPDATE users SET name = ? WHERE id = ?`, [
                name,
                idUser
            ])
        }

        if (address) {
            await connection.query(
                `UPDATE users SET address = ? WHERE id = ?`, [
                address,
                idUser
            ])
        }

        if (creditCard) {
            await connection.query(
                `UPDATE users SET creditCard = ? WEHERE id = ?`, [
                creditCard,
                idUser
            ])
        }



    } finally {
        if (connection) connection.release()
    }


}


module.exports = updateUserQuery