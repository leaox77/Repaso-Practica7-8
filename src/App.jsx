import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import Escaners from "./components/Escaners/Escaners";
import Portatil from "./components/Portatiles/Portatiles";
import PCescritorio from "./components/Pcescritorio/Pcescritorio";
import Impresoras from "./components/Impresoras/Impresoras";
import Comprar from "./components/Comprar/Comprar";
import Contactanos from "./components/Contactanos/Contactanos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Escaners" element={<Escaners />} />
          <Route path="/Portatiles" element={<Portatil />} />
          <Route path="/Pcescritorio" element={<PCescritorio />} />
          <Route path="/Impresoras" element={<Impresoras />} />
          <Route path="/contactos" element={<Contactanos />} />
          <Route path="/venta" element={<Comprar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

