const selectUserByRoleQuery = require("../db/queries/users/selectUserByRoleQuery");
const generateError = require("../helpers");

const isAdmin = async (req, res, next) => {

    try {

        const adminUser = await selectUserByRoleQuery(req.user.id);

        console.log(adminUser);
        
        if (!adminUser || adminUser.role === null) {
            generateError('Este usuario no es un administrador')
        }

        if (adminUser.role === 'admin') {
            next()
        }


    } catch (error) {
        console.log(error)
        return next(error)
    }

}


module.exports = isAdmin