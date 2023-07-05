import { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/users/userSlice";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSession = () => dispatch(logout());
  return (
    <div>
      <nav className="bg-verde">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end w-full h-20">
            <div className="flex items-center justify-between w-full">
              <img src="\src\assets\logo.png" className="w-[40%]" />
              <div className="hidden md:block w-full">
                <div className="ml-10 flex justify-end items-end w-full ">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                        : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                    }
                  >
                    Inicio
                  </NavLink>
                  {user.user.token === "" ? (
                    <>
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                            : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                        }
                      >
                        Iniciar sesión
                      </NavLink>

                      <NavLink
                        to={"/registro"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                            : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                        }
                      >
                        Registro
                      </NavLink>
                    </>
                  ) : (
                    <>
                      {user.user.rol === "admin" && (
                        <NavLink
                          to={"/administrador"}
                          className={({ isActive }) =>
                            isActive
                              ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                              : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                          }
                        >
                          Administrador
                        </NavLink>
                      )}
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                            : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left transition-all duration-500"
                        }
                        onClick={handleSession}
                      >
                        Cerrar Sesión
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white inline-flex items-center justify-center p-2 rounded-md  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                      : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                  }
                >
                  Inicio
                </NavLink>
                {user.user.token === "" ? (
                  <>
                    <NavLink
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                          : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                      }
                    >
                      Iniciar sesión
                    </NavLink>

                    <NavLink
                      to={"/registro"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                          : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                      }
                    >
                      Registro
                    </NavLink>
                  </>
                ) : (
                  <>
                    {user.user.rol === "admin" && (
                      <NavLink
                        to={"/administrador"}
                        className={({ isActive }) =>
                          isActive
                            ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                            : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                        }
                      >
                        Administrador
                      </NavLink>
                    )}
                    <NavLink
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white/60 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left transition-all duration-500"
                          : "text-white hover:bg-white hover:text-black block px-3 py-2 rounded-md text-2xl font-Marcellus w-full text-left"
                      }
                      onClick={handleSession}
                    >
                      Cerrar Sesión
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
