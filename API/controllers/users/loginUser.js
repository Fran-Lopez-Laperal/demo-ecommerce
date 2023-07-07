const generateError = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const selectUserByEmailQuery = require("../../db/queries/users/selectUserByEmailQuery");


const loginUser = async (req, res, next) => {


    try {
        console.log('Viene aqui el email', req.body.password)
        const { email, password } = req.body;

        if (!email || !password) {
            generateError('Faltan campos', 400)
        }

        const user = await selectUserByEmailQuery(email)


        console.log('VIENE POR AQUI EL ID', user.id)
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            generateError("Contrasela incorrecta", 401)
        }



        const userInfo = {
            id: user.id,
            role: user.role,
        }

        const tokenUser = jwt.sign(userInfo, process.env.SECRET, {
            expiresIn: "7d"
        })

        res.send({
            status: "ok",
            data: {
                id: user.id,
                tokenUser
            }
        })

    } catch (error) {
        next(error)
    }
}


module.exports = loginUser