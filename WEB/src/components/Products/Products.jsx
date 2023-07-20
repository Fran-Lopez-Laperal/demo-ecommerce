import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductFromCategory, getProductsService } from "../../Service/apiServices";
import { Link } from "react-router-dom"


const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (category) {
          const response = await getProductFromCategory(category);
          const categoryProducts = response.data.categoryProduct;
          setProducts(categoryProducts);
        } else {
          const allProducts = await getProductsService();
          setProducts(allProducts);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getAllProducts();
  }, [category]);

  console.log("Products:", products)

  return (
    <>
      <header>
      <Link to={"/home"}>HOME</Link>
        <h1>Products</h1>
      </header>
      {products.map(({ title, image, description, price, category, id }) => (
        <div key={id}>
          <img src={image} alt={title} />
          <p>{description}</p>
          <p>{price}</p>
          <h4>{category}</h4>
        </div>
      ))}
    </>
  );
};

export default Products;