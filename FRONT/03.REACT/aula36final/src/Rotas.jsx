import {Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Cadastrar from "./paginas/Cadastrar";
import PaginaNaoEncontrada from "./paginas/PaginaNaoEncontrada";

export default function Rotas() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}

// BrowserRouter
    // Routes
        // Route
        // Route
    // Routes
// BrowserRouter