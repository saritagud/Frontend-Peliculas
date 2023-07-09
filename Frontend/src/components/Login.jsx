import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/users";

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
      navegar("/");
    }
  };
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center  gap-10 min-h-screen md:gap-14 dark:bg-slate-50 ">
        <img
          src="src\assets\logo.png"
          className="w-[50%] -mb-10 md:w-[40%] lg:w-[30%] "
        />
        <h1 className="font-Coda text-3xl text-white sm:text-4xl xl:-mt-10 2xl:text-5xl dark:text-black">
          Login
        </h1>

        <form
          className="flex flex-col justify-center items-center  text-white font-Marcellus  gap-3 w-[80%] sm:w-[60%] sm:gap-5 md:w-[50%] lg:w-[40%] xl:w-[30%] dark:text-black"
          onSubmit={handleSubmit}
        >
          <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
            Usuario
          </label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 dark:bg-fondo dark:text-white"
            name="usuario"
            type="text"
          />

          <label className="w-full text-xl md:text-2xl 2xl:text-3xl ">
            Contraseña
          </label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 dark:bg-fondo dark:text-white"
            name="contraseña"
            type="password"
          />

          <button className="bg-verde p-3 text-xl rounded-xl m-8 sm:p-4 sm:text-2xl md:mb-20 xl:mb-40 2xl:text-3xl 2xl:p-5 ur:p-6 dark:text-white">
            {status.login === "loading" ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Login;
