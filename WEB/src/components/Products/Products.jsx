import { useEffect, useState } from "react"
import { getProductsService } from "../../Service/apiServices"

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {

            try {
                const result = await getProductsService();
                console.log(result)
                setProducts(result)
            } catch (error) {
                console.error(error.message)
            }
        }

        getAllProducts();

    }, [])


    console.log(products)
    return (
        <>
        <header>
            <h1>Products</h1>
        </header>
            {products.map(({title, image, description, price, id}) => (
                <div key={id}>
                    <img src={image} alt={title} />
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
            ))}
        </>
    )
}

export default Products