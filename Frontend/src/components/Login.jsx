import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/users/userSlice";

function Login(){
    const dispatch = useDispatch()
    const navegar = useNavigate()

    const handleSubmit = (e) => {
        const target = e.target
        e.preventDefault()
        const user = {
            usuario: target.usuario.value,
            contraseña: target.contraseña.value
        }
        dispatch(login(user))
        navegar('/')
    }
    return(
        <>
             <section className="flex flex-col justify-center items-center gap-10 min-h-screen">
             <img/>
                <h1 className="font-Coda text-3xl text-white mt-10">Login</h1>

                <form className="flex flex-col justify-center items-center p-5 text-white font-Marcellus gap-3" onSubmit={handleSubmit}>
                    <label className="w-full text-xl">Usuario</label>
                    <input className="w-full  rounded-xl p-2 text-black text-lg" name="usuario" type="text"/>


                    <label className="w-full text-xl">Contraseña</label>
                    <input className="w-full  rounded-xl p-2 text-black text-lg" name="contraseña" type="password"/>

                    <button className="bg-verde p-3 text-xl rounded-xl m-8" >Registrarse</button>
                </form>
            </section>
        </>
    )
}

export default Login;