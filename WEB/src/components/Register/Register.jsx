import { useState } from "react"
import { useNavigate } from "react-router";
import { registerUserService } from "../../Service/apiServices";


const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });


    const navigate = useNavigate()

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await registerUserService(data)

            navigate("/login");
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <>
            <section>
        <header>
            <h1>Nuevo usuario</h1>
        </header>
                <form onSubmit={handleSubmit}>
                    <div >
                        <div >
                            <label htmlFor="name">Usuario</label>
                        </div>
                        <input

                            type="text"
                            id="name"
                            name="name"
                            required
                            value={data.name}
                            onChange={handleInput}
                        />
                    </div>

                    <div >
                        <div >
                            <label htmlFor="email">Email</label>
                        </div>
                        <input

                            type="email"
                            id="email"
                            name="email"
                            required
                            value={data.email}
                            onChange={handleInput} />
                    </div>

                    <div >
                        <div >
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <input

                            type="password"
                            id="password"
                            name="password"
                            required
                            value={data.password}
                            onChange={handleInput}
                        />
                    </div>


                    <button type="submit">
                        Registrarse
                    </button>
                </form>

            </section>

        </>
    )
}

export default Register