const generateError = require("../../../helpers");
const getDB = require("../../getDB");


const selectUserByEmailQuery = async (email) => {
    let connection;

        try {
    
            connection = await getDB();
    
            let [users] = await connection.query(
                `SELECT id, password, role FROM users WHERE email = ?`,
            [email]
            )
    
            if(users.length < 1 ){
                generateError('No existe un usuario con este emial', 404)
            }
    
    
            //cuando se haga la comprobación de si existe el email introducido este se situará
            //en la posición 0 del array por eso debemos devolver esta posición
            return users[0]
        } finally {
            if (connection) connection.release()
        }
}

module.exports = selectUserByEmailQuery