const generateError = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getUserByEmailQuery = require("../../db/queries/users/getUserByEmailQuery");


const loginUser = async (req, res, next) => {


    try {
        console.log('Viene aqui el email',req.body.password)
        const { email, password } = req.body;

        if (!email || !password) {
            generateError('Faltan campos', 400)
        }

        const user = await getUserByEmailQuery(email)



        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            generateError("Contrasela incorrecta", 401)
        }



        const userInfo = {
            id: user.id,
            role: user.role
        }

        const tokenUser =  jwt.sign(userInfo, process.env.SECRET, {
            expiresIn: "7d"
        })

        res.send({
            status: "ok",
            data: {
                tokenUser
            }
        })

    } catch (error) {
        next(error)
    }
}


module.exports = loginUser