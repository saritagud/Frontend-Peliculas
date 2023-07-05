import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function Register() {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const status = useSelector((state) => state.status);

  const handleSubmit = (e) => {
    const target = e.target;
    e.preventDefault();
    const user = {
      nombre: target.nombre.value,
      usuario: target.usuario.value,
      contraseña: target.contraseña.value,
    };
    dispatch(register(user));
    navegar("/");
    if (status == "succeeded") {
      toast.success("Bienvenida/o");
    }
  };
  return (
    <>
      <Toaster />
      <Header />
      <section className="flex flex-col justify-center items-center gap-10 min-h-screen">
        <img src="src\assets\logo.png" className="w-[50%] -mb-10" />
        <h1 className="font-Coda text-3xl text-white sm:text-4xl">Registro</h1>

        <form
          className="flex flex-col justify-center items-center p-5 text-white font-Marcellus gap-3 w-[80%] sm:w-[60%] sm:gap-5"
          onSubmit={handleSubmit}
        >
          <label className="w-full text-xl">Nombre</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3"
            name="nombre"
            type="text"
          />

          <label className="w-full text-xl">Usuario</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3"
            name="usuario"
            type="text"
          />

          <label className="w-full text-xl">Contraseña</label>
          <input
            className="w-full  rounded-xl p-2 text-black text-lg font-sans sm:p-3"
            name="contraseña"
            type="password"
          />

          <button className="bg-verde p-3 text-xl rounded-xl m-8">
            {status === "loading" ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Register;
