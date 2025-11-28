import React from "react";
import { Link } from "react-router-dom";
import "./Escaners.css";
import { useState } from "react";
/*Importa el componente Carousel de la librería react-bootstrap y Le asignamos un nombre local (DepBootStrapCarr)*/
import DepBootStrapCarr from "react-bootstrap/Carousel";
import Img1 from "./img/scanner1.png";
import Img2 from "./img/scanner2.png";
import Img3 from "./img/scanner3.png";
import Img4 from "./img/scanner4.png";
import Img5 from "./img/scanner5.png";

//El nombre Escaners puede ser diferente
export default function Escaners() {
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div className="contenedor">
    <DepBootStrapCarr activeIndex={index} onSelect={handleSelect} className="carrusel">
      <DepBootStrapCarr.Item>
        <div className="imagen-boton">
        <img
          className=" d-inline-block img-fluid rounded"
          src={Img1}
          alt="venta mayor"
          
        />
        <Link to="/venta" data-mdb-ripple-init className="btn btn-primary">
          Comprar
        </Link>
        </div>
      </DepBootStrapCarr.Item>
      <DepBootStrapCarr.Item >
        <div className="imagen-boton">
        <img
          className=" d-inline-block img-fluid rounded"
          src={Img2}
          alt="venta mayor"
          
        />
        <Link to="/venta" data-mdb-ripple-init className="btn btn-primary">
          Comprar
        </Link>
        </div>
      </DepBootStrapCarr.Item>
      <DepBootStrapCarr.Item >
       <div className="imagen-boton">
        <img
          className=" d-inline-block img-fluid rounded"
          src={Img3}
          alt="venta mayor"
          
        />
        <Link to="/venta" data-mdb-ripple-init className="btn btn-primary">
          Comprar
        </Link>
        </div>
      </DepBootStrapCarr.Item>
      <DepBootStrapCarr.Item>
        <div className="imagen-boton">
        <img
          className=" d-inline-block img-fluid rounded"
          src={Img4}
          alt="venta mayor"
          
        />
        <Link to="/venta" data-mdb-ripple-init className="btn btn-primary">
          Comprar
        </Link>
        </div>
      </DepBootStrapCarr.Item>
      <DepBootStrapCarr.Item >
        <div className="imagen-boton">
        <img
          className=" d-inline-block img-fluid rounded"
          src={Img5}
          alt="venta mayor"
          
        />
        <Link to="/venta" data-mdb-ripple-init className="btn btn-primary">
          Comprar
        </Link>
        </div>
      </DepBootStrapCarr.Item>
    </DepBootStrapCarr>
    
    
      <div className="container">
        {/* 
        <div className="row">
          <div className="col-lg-4 formato1">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">Escaner Fujitsu</h5>
                <p className="card-text">Modelo: FI-7260</p>
                <Link to="/venta" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 formato1">
            <div className="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7280-2.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              

               <div className="card-body">
                <h5 className="card-title">Escaner Fujitsu</h5>
                <p className="card-text">Modelo: FI-7800</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 formato1">
            <div className="card">
              <img
                   src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Escaner Fujitsu</h5>
                <p className="card-text">Modelo: FI-7600</p>
                <a href="#!" data-mdb-ripple-init className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
      

      <a href="/" data-mdb-ripple-init className="btn btn-warning">
        Volver a la pagina Principal
      </a>
    </div>
  );
}
