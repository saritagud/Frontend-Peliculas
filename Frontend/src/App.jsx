import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailsMovie from "./components/Movies/DetailsMovie";
import Dashboard from "./components/Admin/Dashboard";
import { useSelector } from "react-redux";
import ProtectedRouter from "./components/Admin/ProtectedRouter";
import "./index.css";
import Page404 from "./components/Page404";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode !== null) {
      setDarkToggle(JSON.parse(darkMode));
    }
  }, []);

  const modeSelect = () => {
    const newMode = !darkToggle;
    setDarkToggle(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const user = useSelector((state) => state.user);
  return (
    <div
      className={`${
        darkToggle && "dark "
      } min-h-screen bg-fondo dark:bg-slate-50`}
    >
      <button
        className="bg-verde2 p-3 rounded-full text-white text-4xl cursor-pointer fixed bottom-5 right-5 z-20 flex justify-center md:text-5xl"
        onClick={modeSelect}
      >
        {" "}
        <FaMoon className="dark:hidden" />{" "}
        <FaSun className="hidden dark:block dark:transition-all dark:duration-500" />{" "}
      </button>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/detalles/:movieID" element={<DetailsMovie />} />
        <Route path="*" element={<Page404 />} />
        <Route
          path="/administrador"
          element={
            <ProtectedRouter isAllowed={true}>
              <Dashboard />
            </ProtectedRouter>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
