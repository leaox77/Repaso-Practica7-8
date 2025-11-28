import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Sintaxis camelCase
//<FontAwesomeIcon icon="fa-solid fa-phone" />
import {
  faHouse,
  faUser,
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  return (
    <footer className="footer pt-5 pb-4 ">
      <div className="container text-center text-md-start f1">
        <div className="row text-center text-md-start">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 footer-enlace f1">
            <h5>NUESTRAS OFICINAS</h5>
            <hr className="mb-4" />
            <p className="footer-direccion">
              <FontAwesomeIcon icon={faHouse} />
              <a
                href="#"
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
              >
                Av. Arce - SoftTech s.r.l. - Subsuelo 7887
              </a>
            </p>
            

<p className="footer-direccion">
              <FontAwesomeIcon icon="fa-solid fa-diamond-turn-right" />
              <FontAwesomeIcon icon={faUser} />
              <a
                href="#"
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
              >
                Cotacota - Oficina 767
              </a>
            </p>

            <p className="footer-direccion">
              <i className="bi bi-geo-alt icon-direccion"></i>
              <FontAwesomeIcon icon={faLocationDot} />
              <a
                href="#"
                className="footer-enlace"
                target="_blank"
                rel="noreferrer"
              >
                Los pinos - Oficina 345
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="footer-enlace">METODOS DE PAGO</h5>
            <hr className="mb-4" />

            <p className="footer-direccion">
              Efectivo
              <br />
              Transferencia <br />
              Codigo QR <br />
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 footer-enlace">
            <h5>CONTACTANOS</h5>
            <hr className="mb-4" />
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <br />
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <br />
            <a href="#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
