const updateUserQuery = require("../../db/queries/users/updateUserQuery");
const generateError = require("../../helpers");

const editUser = async (req, res, next) => {

    try {
        console.log(req.body)
        let { name, email, address, creditCard,creditCardDate,creditCardCVC } = req.body;
        let { id } = req.user

        if (!name && !email && !address && !creditCard && !creditCardDate && !creditCardCVC) {
            generateError('faltan campos', 404)
        }


        await updateUserQuery(name, email, address, creditCard,creditCardDate, creditCardCVC, id)

        res.send({
            status: 'ok',
            message: "Usuario actualizdo"
        })

    } catch (error) {
        next(error)
    }
}

module.exports = editUser;