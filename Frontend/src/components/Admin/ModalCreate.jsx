import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { addMovie } from "../../features/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

function ModalCreate() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.movies.status);
  const token = JSON.parse(localStorage.getItem("token"))

  const [movie, setMovie] = useState({
    image: null,
    titulo: "",
    sinopsis: "",
    genero: "",
    actoresPrincipales: "",
    directores: "",
    franquicia: "",
    fechaPublicacion: "",
  });

  const handleFile = (e) => {
    let selectFile = e.target.files[0];
    if (!selectFile) return;
    setMovie({
      ...movie,
      [e.target.name]: selectFile,
    });
  };

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movie.image === null)
      return toast.error("Debe subir una imagen de la pelicula");
    if (movie.titulo === "")
      return toast.error('El campo "Titulo" no puede estar vacio');
    if (movie.sinopsis === "")
      return toast.error('El campo "Sinopsis" no puede estar vacio');
    if (movie.genero === "")
      return toast.error('El campo "genero" no puede estar vacio');
    if (movie.actoresPrincipales === "")
      return toast.error('El campo "Actores Principales" no puede estar vacio');
    if (movie.directores === "")
      return toast.error('El campo "Directores" no puede estar vacio');
    if (movie.franquicia === "")
      return toast.error('El campo "Franquicia" no puede estar vacio');
    if (movie.fechaPublicacion === "")
      return toast.error(
        'El campo "Fecha de Publicacion" no puede estar vacio'
      );

    const body = new FormData();
    body.append("image", movie.image);
    body.append("titulo", movie.titulo);
    body.append("sinopsis", movie.sinopsis);
    body.append("genero", movie.genero);
    body.append("actoresPrincipales", movie.actoresPrincipales);
    body.append("directores", movie.directores);
    body.append("franquicia", movie.franquicia);
    body.append("fechaPublicacion", movie.fechaPublicacion);

    const datos = {
      data: body,
      token,
    };
    dispatch(addMovie({ datos }));
    if (status == "succeeded") {
      toast.success("Se ha creado correctamente");
      setIsOpen(false);
    }
  };

  return (
    <>
      <Toaster />
      <button
        className="bg-verde p-3 text-xl rounded-xl m-5 text-white font-Marcellus hover:bg- md:text-2xl 2xl:text-3xl 2xl:p-5"
        onClick={() => setIsOpen(true)}
      >
        Agregar pelicula
      </button>

      {isOpen && (
        <form
          className="fixed flex justify-center items-start inset-0 backdrop-blur-sm bg-black bg-opacity-30  min-h-screen overflow-scroll"
          onSubmit={handleSubmit}
        >
          <section className="bg-fondo rounded-xl p-5 w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-white flex flex-col items-center gap-4 m-8 overflow-auto font-Marcellus">
            <div className="flex justify-end mb-3 w-full ">
              <FaWindowClose
                className="text-2xl cursor-pointer md:text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Imagen
            </label>
            <input
              className="w-full rounded-xl p-2 text-white text-lg md:text-xl 2xl:text-2xl"
              type="file"
              name="image"
              onChange={handleFile}
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Titulo
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              name="titulo"
              onChange={handleChange}
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Genero
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              name="genero"
              onChange={handleChange}
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Sipnosis
            </label>
            <textarea
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              name="sinopsis"
              onChange={handleChange}
            ></textarea>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Fecha de publicación
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="date"
              name="fechaPublicacion"
              onChange={handleChange}
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Actores principales
            </label>
            <textarea
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              name="actoresPrincipales"
              onChange={handleChange}
            ></textarea>

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Directores
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              name="directores"
              onChange={handleChange}
            />

            <label className="w-full text-xl md:text-2xl 2xl:text-3xl">
              Franquicia que creó la película
            </label>
            <input
              className="w-full rounded-xl p-2 text-black text-lg font-sans 2xl:text-2xl 2xl:p-4"
              type="text"
              name="franquicia"
              onChange={handleChange}
            />

            <button
              className="bg-verde p-3 text-xl rounded-xl m-8 md:text-2xl md:w-[40%] 2xl:text-4xl 2xl:p-5"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Agregando..." : "Agregar"}
            </button>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalCreate;
