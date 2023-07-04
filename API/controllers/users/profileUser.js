const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");

const profileUser = async (req, res, next) => {

    try {
        console.log("Viene por aquí el usuario?????", req.params)

        const user = await selectUserByIdQuery(req.user.id)

        res.send({
            status: 'ok',
            data:
                user,
        })
    } catch (error) {
        next(error)
    }

}


module.exports = profileUser;