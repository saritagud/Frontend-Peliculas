import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/users/userSlice";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.movies.status);

  const handleSubmit = (e) => {
    const target = e.target;
    e.preventDefault();
    const user = {
      usuario: target.usuario.value,
      contraseña: target.contraseña.value,
    };
    dispatch(login(user));
    if (status == "succeeded") {
      toast.success("Bienvenida/o");
    }
  };
  return (
    <>
      <Toaster />
      <Header />
      <section className="flex flex-col justify-center items-center gap-10 min-h-screen">
        <img src="src\assets\logo.png" className="w-[50%] -mb-10"/>
        <h1 className="font-Coda text-3xl text-white ">Login</h1>

        <form
          className="flex flex-col justify-center items-center  text-white font-Marcellus gap-3 w-[80%]"
          onSubmit={handleSubmit}
        >
          <label className="w-full text-xl">Usuario</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans"
            name="usuario"
            type="text"
          />

          <label className="w-full text-xl">Contraseña</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans"
            name="contraseña"
            type="password"
          />

          <button className="bg-verde p-3 text-xl rounded-xl m-8">
            {status === "loading" ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Login;
