import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css/servicio.css';
import {
  faAngleDown, faBars, faX
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicio = (props)=> {
    const esp = props.esp;
    const eng = props.eng;
    const [header, setHeader] = useState(false);
    const handleHeader = () => {
      setHeader(!header);
    };

    const handleStart = () => {
      const element = document.getElementById("servicios");
      const elementm = document.getElementById("serviciosM");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (elementm) {
        elementm.scrollIntoView({ behavior: "smooth" });
      }
    };
    useEffect(() => {
      handleStart();
      AOS.init()
    }, []);

    

    return (
        <div>
          {/* ESPAÑOL */}
            {esp && (
              <div>
                <div className="desk servicios" id="servicios">
                <header>
                <ul class="ulHeader">
                  <Link to="/home" class="liHeader">
                    sobre mí
                  </Link>
                  <Link to="/proyectos" class="liHeader">
                    proyectos
                  </Link>

                  <Link to="/home" class="liHeader">
                    contacto
                  </Link>
                  <Link class="liHeader" to="/precios">
                    precios
                  </Link>
                  <Link class="liHeader" to="/paquetes">
                    paquetes
                  </Link>
                  <li class="btnPaquetesHeader"></li>
                </ul>
              </header>
            
            <div className="tituloServicios">
            <h2 className="servicioTitle"><u>{props.titulo}</u></h2>
            <FontAwesomeIcon className="caretS" icon={faAngleDown}></FontAwesomeIcon>
            </div>
            <img className="imgServicios" src={require('../img/' + props.img)} alt="" />

            <p data-aos="fade-up" className="pServicios">{props.descripcion}</p>
            <br />
            <p data-aos="fade-up" className="pServicios">{props.d2} <br /> <br />Para ayudarte a hacer realidad tu sueño, te ofrezco un <b>sistema de afiliación</b> que, si decides adquirirlo, te facilitará muchas tareas, como las actualizaciones futuras de tu sitio web, el registro de un dominio y el pago del servicio de hosting.</p>
            

            {props.ul && (
              <h4 data-aos="fade-up" className="h4Servicios">{props.ulTitle}</h4>
            )}
            {props.ul}

            {props.ul2 && (
  <h4 className="h4Servicios">{props.ulTitle2}</h4>
)}
{props.ul2}

            <br />
            <br />

            <Footer esp={true}></Footer>
          </div>

          <div className="mobile servicios" id="serviciosM">
          <div className="headerM">
              {!header && (
                <button onClick={handleHeader} className="bars bars2">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
              )}
              {header && (
                <button onClick={handleHeader} className="bars bars2">
                  <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                </button>
              )}
            </div>
            {header && (
              <div className="bgInH headerDisplayed">
                <ul className="slide-in-left headerMul headerMul2">
                  <li>
                    <Link
                      to="/home"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Sobre Mí
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/precios"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Precios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/paquetes"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Paquetes
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          <div className="tituloServicios">
            <h2 className="servicioTitle"><u>{props.titulo}</u></h2>
            <FontAwesomeIcon className="caretS" icon={faAngleDown}></FontAwesomeIcon>
            </div>
           <div className="centerServicios">
           <img className="imgServicios" src={require('../img/' + props.img)} alt="" />

<p className="pServicios">{props.descripcion}</p>
<br />
<p className="pServicios">{props.d2} <br /> <br /> También te brindo un sistema de afiliación que, en caso de que decidas adquirirlo, te simplificará muchas tareas, como las futuras actualizaciones de tu sitio web, el registro de un dominio y el pago del servicio de alojamiento.</p>


{props.ul && (
  <h4 className="h4ServiciosUl">{props.ulTitle}</h4>
)}
{props.ul}

{props.ul2 && (
  <h4 className="h4ServiciosUl">{props.ulTitle2}</h4>
)}
{props.ul2}
           </div>
            <br />
            <br />

            <div className="footerMobile" id="contactoM">
              <div className="izqFooterM">
                <h3 className="logoFooter">
                  <span className="jmb">JMBroggi</span>
                  <span className="dev">.dev</span>
                </h3>
                <div className="redesFooterM">
                <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                  <a href="mailto:jmbroggidev@gmail.com" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <p className="pFooterM">
                <br />
            Actualmente, dedico la mayor parte de mi tiempo a trabajar como profesional independiente, sin embargo, estoy dispuesto a considerar cualquier oferta de empleo a tiempo completo o parcial que pueda surgir.
              <br />
              <br />
              No dudes en contactarme en cualquier momento. Prefiero hablar por
              correo electrónico, especialmente porque podríamos estar en
              diferentes zonas horarias.
                </p>
                <a
                  href="mailto:joaquinmbroggi@gmail.com"
                  className="emailFooterM"
                >
                  joaquinmbroggi@gmail.com
                </a>
                <h6 className="derechosM">© 2023 by JMBroggi.</h6>
              </div>
            </div>
          </div>
              </div>
            )}
{/* English */}
            {eng && (
              <div>
                <div className="desk servicios" id="servicios">
            <header>
              <ul class="ulHeader">
                <Link
                  to="/eng"
                  class="liHeader"
                  
                >
                  about me
                </Link>
                <Link
                  to="/work"
                  class="liHeader"
                  
                >
                  my work
                </Link>
               
                <Link
                  to="/eng"
                  class="liHeader"
                  
                >
                  contact me
                </Link>
                <Link class="liHeader" to="/eng/precios">
                    prices
                  </Link>
                <Link
                  class="liHeader"
                  to='/eng/paquetes'
                >
                  packages
                </Link>
                <li class="btnPaquetesHeader"></li>
              </ul>
            </header>
            
            <div className="tituloServicios">
            <h2 className="servicioTitle"><u>{props.titulo}</u></h2>
            <FontAwesomeIcon className="caretS" icon={faAngleDown}></FontAwesomeIcon>
            </div>
            <img className="imgServicios" src={require('../img/' + props.img)} alt="" />

            <p className="pServicios">{props.descripcion}</p>
            <br />
            <p className="pServicios">{props.d2} <br /> <br />To help you make your dream come true, I offer you an <b>affiliate system</b> that, if you decide to acquire it, will facilitate many tasks for you, such as future updates to your website, domain registration, and payment for the hosting service</p>
            

            {props.ul && (
              <h4 className="h4Servicios">{props.ulTitle}</h4>
            )}
            {props.ul}

            {props.ul2 && (
  <h4 className="h4Servicios">{props.ulTitle2}</h4>
)}
{props.ul2}

            <br />
            <br />

            <Footer eng={true}></Footer>
          </div>

          <div className="mobile servicios" id="serviciosM">
          <div className="headerM">
              {!header && (
                <button onClick={handleHeader} className="bars bars2">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
              )}
              {header && (
                <button onClick={handleHeader} className="bars bars2">
                  <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                </button>
              )}
            </div>
            {header && (
              <div className="bgInH headerDisplayed">
                <ul className="slide-in-left headerMul headerMul2">
                  <li>
                    <Link
                      to="/eng"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/work"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      My Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/eng"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Contact me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/eng/precios"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Prices
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/eng/paquetes"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Packages
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          <div className="tituloServicios">
            <h2 className="servicioTitle"><u>{props.titulo}</u></h2>
            <FontAwesomeIcon className="caretS" icon={faAngleDown}></FontAwesomeIcon>
            </div>
           <div className="centerServicios">
           <img className="imgServicios" src={require('../img/' + props.img)} alt="" />

<p className="pServicios">{props.descripcion}</p>
<br />
<p className="pServicios">{props.d2} <br /> <br /> To help you make your dream come true, I offer you an <b>affiliate system</b> that, if you decide to acquire it, will facilitate many tasks for you, such as future updates to your website, domain registration, and payment for the hosting service.</p>


{props.ul && (
  <h4 className="h4ServiciosUl">{props.ulTitle}</h4>
)}
{props.ul}

{props.ul2 && (
  <h4 className="h4ServiciosUl">{props.ulTitle2}</h4>
)}
{props.ul2}
           </div>
            <br />
            <br />


            <div className="footerMobile" id="contactoM">
              <div className="izqFooterM">
                <h3 className="logoFooter">
                  <span className="jmb">JMBroggi</span>
                  <span className="dev">.dev</span>
                </h3>
                <div className="redesFooterM">
                <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                  <a href="mailto:jmbroggidev@gmail.com" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <p className="pFooterM">
                <br />
                Currently, I dedicate most of my time to work as a freelance professional. However, I am open to considering any full-time or part-time job offer that may arise.
              <br />
              <br />
              Please feel free to get in touch with me at your convenience. I would appreciate communicating via email, particularly given the potential time zone disparity between us.
                </p>
                <a
                  href="mailto:joaquinmbroggi@gmail.com"
                  className="emailFooterM"
                >
                  joaquinmbroggi@gmail.com
                </a>
                <h6 className="derechosM">© 2023 by JMBroggi.</h6>
              </div>
            </div>
          </div>
              </div>
            )}
        </div>
    )
}


export default Servicio;