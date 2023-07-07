const generateError = require("../../../helpers");
const getDB = require("../../getDB");

const selectUserByIdQuery = async (idUser) => {
    let connection;

    try {

        connection = await getDB();

   const [users] = await connection.query(`
        SELECT id,role, name, email, avatar, address, creditCard, creditCardDate, creditCardCVC FROM users WHERE id= ?`,
        [idUser])

        if(users.length < 1 ){
            generateError(`Usuario no encontrado ${users.name}}`, 404)
        }

    return users[0]        
    } finally {
        if(connection) connection.release()
    }
}


module.exports = selectUserByIdQuery