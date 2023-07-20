import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <header>
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