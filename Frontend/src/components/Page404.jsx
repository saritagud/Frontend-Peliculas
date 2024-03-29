import { Link } from "react-router-dom"

export default function Page404() {
    return (
      <>
       
        <main className="grid  place-items-center bg-fondo px-6 py-24 sm:py-32 lg:px-8 min-h-screen dark:bg-white">
          <div className="text-center">
            <p className="text-5xl font-semibold text-verde">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl font-Coda dark:text-black">Página no encontrada</h1>
            <p className="mt-6 text-base leading-7 text-gray-300 font-Marcellus font-bold md:text-xl dark:text-black">Lo sentimos, no pudimos encontrar la página que estas buscando.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/"}
                className="rounded-md bg-verde  px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-verde2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950 md:text-xl "
              >
                Regresar al inicio
              </Link>
              
            </div>
          </div>
        </main>
      </>
    )
  }
  