const generateError = require("../../../helpers")
const getDB = require("../../getDB")

const updateUserQuery = async (name, email, address, creditCard, creditCardDate,creditCardCVC, idUser) => {
    let connection

    try {

        connection = await getDB()

        if (email) {
            const [users] = await connection.query(
                `SELECT id FROM users WHERE email = ?`,
                [email]
            );

            if (users.length > 0) {
                generateError("Ya existe un usuario con este emial", 403)
            }

            await connection.query(
                `UPDATE users SET email = ? WHERE id = ?`, [
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
                `UPDATE users SET creditCard = ? WHERE id = ?`, [
                creditCard,
                idUser
            ])
        }

        if (creditCardDate) {
            await connection.query(
                `UPDATE users SET creditCardDate = ? WHERE id = ?`, [
                creditCardDate,
                idUser
            ])
        }

        if (creditCardCVC) {
            await connection.query(
                `UPDATE users SET creditCardCVC = ? WHERE id = ?`, [
                    creditCardCVC,
                idUser
            ])
        }



    } finally {
        if (connection) connection.release()
    }


}


module.exports = updateUserQuery