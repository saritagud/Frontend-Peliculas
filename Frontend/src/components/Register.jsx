import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../services/users";

function Register() {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const status = useSelector((state) => state.user.status);

  const handleSubmit = (e) => {
    const target = e.target;
    e.preventDefault();
    const user = {
      nombre: target.nombre.value,
      usuario: target.usuario.value,
      contraseña: target.contraseña.value,
    };
    dispatch(register(user));
    if (status.register == "succeeded") {
      navegar("/");
    }
  };
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center gap-10 min-h-screen md:gap-14 dark:bg-slate-50">
        <img
          src="src\assets\logo.png"
          className="w-[50%] -mb-10 md:w-[40%] lg:w-[30%]"
        />
        <h1 className="font-Coda text-3xl text-white sm:text-4xl xl:-mt-10 dark:text-black">
          Registro
        </h1>

        <form
          className="flex flex-col justify-center items-center p-5 text-white font-Marcellus gap-3 w-[80%] sm:w-[60%] sm:gap-5 md:w-[50%] lg:w-[40%] xl:w-[30%] dark:text-black"
          onSubmit={handleSubmit}
        >
          <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
            Nombre
          </label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 dark:bg-fondo dark:text-white"
            name="nombre"
            type="text"
          />

          <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
            Usuario
          </label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 dark:bg-fondo dark:text-white"
            name="usuario"
            type="text"
          />

          <label className="w-full text-xl md:text-2xl">Contraseña</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3 2xl:text-2xl 2xl:p-4 dark:bg-fondo dark:text-white"
            name="contraseña"
            type="password"
          />

          <button className="bg-verde p-3 text-xl rounded-xl m-8 sm:text-2xl md:mb-20 xl:mb-40 2xl:text-3xl 3xl:p-5 ur:p-6 dark:text-white">
            {status.register === "loading" ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Register;
