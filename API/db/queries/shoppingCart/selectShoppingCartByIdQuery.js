const generateError = require("../../../helpers");
const getDB = require("../../getDB");

const selectShoppingCartByIdQuery = async (idUser) => {
    let connection;


    try {

        connection = await getDB();

        let [cart] = await connection. query(
            `SELECT p.id, p.title, p.price, p.image, p.description, idUser, idProduct
            FROM products p 
            INNER JOIN shoppingCart sc ON p.id = sc.idProduct   
            WHERE sc.idUSer = ? 
            `,
            [idUser]
        )

        if(cart.length === 0 ){
            generateError('El carrito de la compra está vacío', )
        }


        return cart

    } finally {
        if (connection) connection.release();
}


}

module.exports = selectShoppingCartByIdQuery