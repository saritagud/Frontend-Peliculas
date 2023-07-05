import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailsMovie from "./components/Movies/DetailsMovie";
import Dashboard from "./components/Admin/Dashboard";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-fondo">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/detalles/:movieID" element={<DetailsMovie />} />
        <Route path="/administrador" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
