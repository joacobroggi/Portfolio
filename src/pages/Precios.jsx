import { Link } from "react-router-dom";
import './css/precios.css';
import "./css/paquetes.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";

const Precios = (props)=> {
    const eng = props.eng;
    const esp = props.esp;
    const [paquete, setPaquete] = useState(true);
  const [paquete2, setPaquete2] = useState(false);
  const [paquete3, setPaquete3] = useState(false);
  const [paqueten, setpaqueten] = useState("");
  const [header, setHeader] = useState(false);

    const handleStart = () => {
        const element = document.getElementById("paquetes");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      useEffect(() => {
        handleStart();
      }, []);
    
      useEffect(() => {
        const intervalo = setInterval(() => {
          adelante();
        }, 8000);
        return () => clearInterval(intervalo);
      }, [paqueten]);
    
      const adelante = () => {
        if (paquete) {
          setPaquete(false);
          setPaquete2(true);
          setpaqueten("2");
        } else if (paquete2) {
          setPaquete2(false);
          setPaquete3(true);
          setpaqueten("3");
        } else if (paquete3) {
          setPaquete3(false);
          setPaquete(true);
          setpaqueten("1");
        } else {
          alert("Ocurrio un error");
        }
      };
      const atras = () => {
        if (paquete) {
          setPaquete(false);
          setPaquete3(true);
        } else if (paquete2) {
          setPaquete2(false);
          setPaquete(true);
        } else if (paquete3) {
          setPaquete3(false);
          setPaquete2(true);
        } else {
          alert("Ocurrio un error");
        }
      };
    
      const slide1 = () => {
        setPaquete2(false);
        setPaquete3(false);
        setPaquete(true);
      };
      const slide2 = () => {
        setPaquete(false);
        setPaquete3(false);
        setPaquete2(true);
      };
      const slide3 = () => {
        setPaquete2(false);
        setPaquete(false);
        setPaquete3(true);
      };
      const handleHeader = () => {
        setHeader(!header);
      };

    return (
       <div>
        {props.esp &&  <div className="precios">
<header>
              <ul class="ulHeader">
                <Link
                  to="/home"
                  class="liHeader"
                  
                >
                  sobre mí
                </Link>
                <Link
                  to="/"
                  class="liHeader"
                  
                >
                  proyectos
                </Link>
               
                <Link
                  to="/"
                  class="liHeader"
                  
                >
                  contacto
                </Link>
                <Link
                  class="liHeader"
                  to='/paquetes'
                >
                  paquetes
                </Link>
                <li class="btnPaquetesHeader"></li>
              </ul>
            </header>

            <div className="slider" id="paquetes">
              <span className="flechaIzq2" onClick={atras}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </span>
              <span className="flechaDer2" onClick={adelante}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </span>

              <div className={paquete ? "bgIn1 paquete" : "hide"}>
                <div className="text-focus-in txtCard">
                  <h3 className="h3Paquetes">
                    LLEVA TU TIENDA AL <span className="enfasis">FUTURO</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                    Duplica tus ventas con el paquete de{" "}
                    <a href="/paquetes/ecommerce" className="enfasis">
                      eccomerce
                    </a>
                    .
                  </h6>
                </div>
                <div className="circulos">
                  <span className="dota"></span>
                  <span className="dot" onClick={slide2}></span>
                  <span className="dot" onClick={slide3}></span>
                </div>
              </div>

              <div className={paquete2 ? "bgIn2 paquete" : "hide"}>
                <div className="text-focus-in txtCard">
                  <h3 className="h3Paquetes">
                    DALE IMPULSO A TU <span className="enfasis">CARRERA</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                    Catapulta tu carrera con el paquete de{" "}
                    <a href="/paquetes/personalidad" className="enfasis">
                      personalidad
                    </a>
                    .
                  </h6>
                </div>
                <div className="circulos">
                  <span className="dot" onClick={slide1}></span>
                  <span className="dota"></span>
                  <span className="dot" onClick={slide3}></span>
                </div>
              </div>

              <div className={paquete3 ? "bgIn5 paquete" : "hide"}>
              <div className="text-focus-in txtCard">
                  <h3 className="h3Paquetes">
                  LLeva tus servicios a la <span className="enfasis">WEB</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Duplica tu alcance como frelancer con el paquete de{" "}
                    <a href="/paquetes/freelance" className="enfasis">
                      freelance
                    </a>
                    .
                  </h6>
                </div>
                <div className="circulos">
                  <span className="dot" onClick={slide1}></span>
                  <span className="dot" onClick={slide2}></span>
                  <span className="dota"></span>
                </div>
              </div>
              
            </div>
        </div>}
       </div>
    )
};


export default Precios;