import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <header>
        <h1>Products</h1>
      </header>
      <nav>
        <menu>
          <ul>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          </ul>
        </menu>
      </nav>
    </>
  )
}

export default Home