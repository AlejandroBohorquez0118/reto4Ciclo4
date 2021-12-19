import { Routes, Route } from "react-router-dom"
import Login from "./componentes/js/Login"
import Main from "./componentes/js/Main";
import Productos from "./componentes/js/Productos";
import Usuarios from "./componentes/js/Usuarios";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </div>
  );
}

export default App;
