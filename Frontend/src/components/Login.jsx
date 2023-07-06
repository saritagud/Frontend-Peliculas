import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/users/userSlice";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const status = useSelector((state) => state.user.status);

  const handleSubmit = (e) => {
    const target = e.target;
    e.preventDefault();

    const user = {
      usuario: target.usuario.value,
      contraseña: target.contraseña.value,
    };
    dispatch(login(user));
    if (status.login == "succeeded") {
      toast.success("Bienvenida/o");
      navegar("/");
    }
  };
  return (
    <>
      <Toaster />
      <Header />
      <section className="flex flex-col justify-center items-center  gap-10 min-h-screen md:gap-14">
        <img src="src\assets\logo.png" className="w-[50%] -mb-10 md:w-[40%]" />
        <h1 className="font-Coda text-3xl text-white sm:text-4xl">Login</h1>

        <form
          className="flex flex-col justify-center items-center  text-white font-Marcellus  gap-3 w-[80%] sm:w-[60%] sm:gap-5 md:w-[50%]"
          onSubmit={handleSubmit}
        >
          <label className="w-full text-xl md:text-2xl">Usuario</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3"
            name="usuario"
            type="text"
          />

          <label className="w-full text-xl md:text-2xl">Contraseña</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3"
            name="contraseña"
            type="password"
          />

          <button className="bg-verde p-3 text-xl rounded-xl m-8 sm:p-4 sm:text-2xl md:mb-20">
            {status.login === "loading" ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Login;
