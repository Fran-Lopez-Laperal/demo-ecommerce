import { Link } from "react-router-dom";

const NavBar = () => {
  const categories = [
    { text: "bicicletas", link: "bicicletas" },
    { text: "carretera", link: "carretera" },
    { text: "montaña", link: "montaña" },
    { text: "complementos", link: "complementos" },
    { text: "accesorios", link: "accesorios" },
  ];

  return (
    <>
      <nav>
        <menu className="bg-green-300 flex w-auto h-10">
          <ul className="w-full h-full flex align-middle">
            {categories.map((category) => (
              <li key={category.link}>
                <Link to={`/products/category/${category.link}`}>{category.text}</Link>
              </li>
            ))}
          </ul>
        </menu>
      </nav>
    </>
  );
};

export default NavBar;




