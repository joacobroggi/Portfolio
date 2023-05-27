import { Link } from "react-router-dom";
import "./css/precios.css";
import "./css/paquetes.css";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { faBars, faX, faEnvelope, faMedal, faMoon, faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Precios = (props) => {
  const [header, setHeader] = useState(false);
  const handleHeader = () => {
    setHeader(!header);
  };

  return (
    <div>
      {/* ESPAÑOL */}
      {props.esp && (
        <div>
          {/* DESK ESPAÑOL */}
          <div className="desk porQue">
          <header>
                <ul class="ulHeader">
                  <Link to="/home" class="liHeader">
                    sobre mí
                  </Link>
                  <Link to="/proyecto" class="liHeader">
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
              <div className="precios">
              

              <div className="txtPrecios">
                <h2 className="h2Precios">Un plan para cada necesidad</h2>
                <h6 className="h6Precios">
                  Además te ofrezco un <u className="u">sistema de afiliación</u> con grandes
                  beneficios
                </h6>
                <div className="afiliacionCont">
                  <h6 className="afiliacionP">
                    Los precios que se muestran a continuación son solo{" "}
                    <b>estimaciones</b>, ya que el valor final puede variar en
                    función de las características específicas del proyecto que
                    se realizará.
                  </h6>
                </div>
              </div>

              <div className="pricings">
                <Pricing
                  number="#1"
                  clase="landingg"
                  titulo="Landing page"
                  valor="$65 USD"
                  ul={
                    <ul>
                      <li className="liPricing">Una única pagina.</li>
                      <li className="liPricing">
                        Mayor eficiencia en la conversión de visitantes en
                        clientes potenciales o clientes reales.
                      </li>
                      <li className="liPricing">
                      Codigo del sitio web entregado al final de su creación.
                      </li>
                      <li className="liPricing">Asesoramiento personalizado</li>
                    </ul>
                  }
                  link="landing"
                ></Pricing>
                <Pricing
                  link="basica"
                  number="#2"
                  clase="basica"
                  titulo="Web Básica"
                  valor="$110 USD"
                  ul={
                    <ul className="pricingUl">
                      <li className="liPricing">De 2 a 10 páginas internas.</li>
                      <li className="liPricing">
                        Ideal para pequeñas empresas, negocios, ONG, artistas,
                        profesionales independientes o bloggers
                      </li>
                      <li className="liPricing">
                      Codigo del sitio web entregado al final de su creación.
                      </li>
                      
                      <li className="liPricing">Asesoramiento personalizado</li>
                    </ul>
                  }
                ></Pricing>
                <Pricing
                  link="/paquetes/ecommerce"
                  number="#3"
                  clase="eccomerce"
                  titulo="Tienda Online"
                  valor="$590 USD"
                  ul={
                    <ul>
                      <li className="liPricing">Sitio web de tienda online.</li>
                      
                      <li className="liPricing">
                      Ventas 100% en línea
                      </li>
                      <li className="liPricing">
                      Codigo del sitio web entregado al final de su creación.
                      </li>
                      
                      <li className="liPricing">Asesoramiento personalizado</li>
                    </ul>
                  }
                ></Pricing>
              </div>
            </div>
              <div className="porQueP">
              <div className="containerpq1">
                <div className="pq1">
                  <h5 className="h5pq1">MIS SERVICIOS</h5>
                  <h2 className="h2pq1">¿Por qué contratarme a mí?</h2>
                  <p className="pPq1">
                  Con mis <b>servicios altamente personalizables</b>, mi objetivo es ayudarte a duplicar tu éxito.
                  </p>
                  <h4 className="h4pq1">¿Como te puedo ayudar?</h4>
                  <p className="pPq2">
                  Mis servicios de desarrollo y diseño web pueden ser muy beneficiosos para tu marca porque puedo crear un <b>sitio web profesional y atractivo</b> que refleje la calidad y los valores de tu marca. Además, puedo optimizar el sitio web para motores de búsqueda y mejorar la experiencia del usuario para mantener a los visitantes en tu sitio web. También puedo ayudarte a generar leads y convertir a tus visitantes en <b>potenciales clientes</b>. En general, mis habilidades técnicas en programación y mi enfoque centrado en el marketing y el diseño pueden <b>mejorar significativamente la imagen en línea de tu marca</b> y ayudarte a lograr tus objetivos específicos
                  </p>
                  <h4 className="h4pq1">Permiteme duplicar tu alcance</h4>
                  <p className="pPq2">
                  Permíteme transformar el alcance de tu marca en un alcance efectivo mediante la creación de un sitio web de calidad.
                  </p>
                </div>

                <div className="imgpq-cont">
                  <img
                    className="img-pq1"
                    src={require("../img/code.jpg")}
                    alt=""
                  />
                  <img
                    className="img-pq2P"
                    src={require("../img/web.jpg")}
                    alt=""
                  />
                </div>
              </div>

             

              <div className="pq3">
                <h2 className="h2pq2">¿Por qué <b>necesito</b> una pagina web?</h2>
                <div className="mejorasPq">
                  <div className="mejora">
                    <span className="iconMejora">
                      <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>
                    </span>
                    <h5 className="h5Mejora">Credibilidad</h5>
                    <p className="pMejora">
                    Un sitio web bien diseñado y con contenido relevante y actualizado aumenta la credibilidad de tu marca y genera confianza en tus clientes.
                    </p>
                  </div>
                  <div className="mejora">
                    <span className="iconMejora">
                      <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    </span>
                    <h5 className="h5Mejora">Presencia 24/7</h5>
                    <p className="pMejora">
                    Un sitio web puede mejorar la visibilidad y el alcance de tu marca al estar disponible para ser visitado las 24 horas del día, los 7 días de la semana desde cualquier lugar del mundo.
                    </p>
                  </div>
                  <div className="mejora">
                    <span className="iconMejora">
                      <FontAwesomeIcon icon={faSatelliteDish}></FontAwesomeIcon>
                    </span>
                    <h5 className="h5Mejora">Aumento de visibilidad</h5>
                    <p className="pMejora">
                    Un sitio web aumenta la visibilidad de tu marca y hace que sea más fácil para los clientes potenciales encontrarte en línea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            

            <Footer esp={true}></Footer>
          </div>

          {/* MOBILE ESPAÑOL */}
          <div className="mobile porQue">
            <div className="precios">
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
                        to="/proyecto"
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
                 <Link style={{textDecoration: 'none'}}
                    to="/precios"
                    className="headerMli"
                    
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

              <div className="txtPrecios">
                <h2 className="fade-in-bottom h2Precios">Un plan para cada necesidad</h2>
                <h6 className="fade-in-bottom h6Precios">
                  Además te ofrezco un sistema de afiliación con grandes
                  beneficios
                </h6>
                <div className="afiliacionCont">
                  <h6 className="afiliacionP"></h6>
                </div>
              </div>

              <div className="pricings">
              <Pricing
                  number="#1"
                  clase="landingg"
                  titulo="Landing page"
                  valor="$65 USD"
                  ul={
                    <ul>
                      <li className="liPricing">Una única pagina.</li>
                      <li className="liPricing">
                        Mayor eficiencia en la conversión de visitantes en
                        clientes potenciales o clientes reales.
                      </li>
                      <li className="liPricing">
                      Codigo del sitio web entregado al final de su creación.
                      </li>
                      <li className="liPricing">Asesoramiento personalizado</li>
                    </ul>
                  }
                  link="landing"
                ></Pricing>
                <Pricing
                  link="basica"
                  number="#2"
                  clase="basica"
                  titulo="Web Básica"
                  valor="$110 USD"
                  ul={
                    <ul className="pricingUl">
                      <li className="liPricing">De 2 a 10 páginas internas.</li>
                      <li className="liPricing">
                        Ideal para pequeñas empresas, negocios, ONG, artistas,
                        profesionales independientes o bloggers
                      </li>
                      <li className="liPricing">
                      Codigo del sitio web entregado al final de su creación.
                      </li>
                      
                      <li className="liPricing">Asesoramiento personalizado</li>
                    </ul>
                  }
                ></Pricing>
                <Pricing
                  link="/paquetes/ecommerce"
                  number="#3"
                  clase="eccomerce"
                  titulo="Tienda Online"
                  valor="$590 USD"
                  ul={
                    <ul>
                      <li className="liPricing">Sitio web de tienda online.</li>
                      
                      <li className="liPricing">
                      Ventas 100% en línea
                      </li>
                      <li className="liPricing">
                      Codigo del sitio web entregado al final de su creación.
                      </li>
                      
                      <li className="liPricing">Asesoramiento personalizado</li>
                    </ul>
                  }
                ></Pricing>
              </div>
            </div>

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
                <a href="mailto:jmbroggidev@gmail.com" className="emailFooter">
              jmbroggidev@gmail.com
            </a>
                <h6 className="derechosM">© 2023 by JMBroggi.</h6>
              </div>
            </div>
          </div>
        </div>
      )}

{/* English */}
      {props.eng && (
        <div>
          {/* DESK ENG */}
          <div className="desk porQue">
            <div className="precios">
              <header>
                <ul class="ulHeader">
                  <Link to="/eng" class="liHeader">
                    about me
                  </Link>
                  <Link to="/work" class="liHeader">
                    my work
                  </Link>

                  <Link to="/eng" class="liHeader">
                    contact me
                  </Link>
                  <Link class="liHeader" to="/eng/precios">
                    prices
                  </Link>
                  <Link class="liHeader" to="/eng/paquetes">
                    packages
                  </Link>
                  <li class="btnPaquetesHeader"></li>
                </ul>
              </header>

              <div className="txtPrecios">
                <h2 className="h2Precios">A plan for every need</h2>
                <h6 className="h6Precios">
                  Additionally, I offer you an affiliation system with great
                  benefits.
                </h6>
                <div className="afiliacionCont">
                  <h6 className="afiliacionP"></h6>
                </div>
              </div>

              <div className="pricings">
                <Pricing
                  number="#1"
                  clase="landingg"
                  titulo="Landing page"
                  valor="$65 USD"
                  eng={true}
                  ul={
                    <ul>
                      <li className="liPricing">Single page.</li>
                      <li className="liPricing">
                      Ideal for small entrepreneurs.
                      </li>
                      
                      <li className="liPricing">
                      Code of the website delivered at the end of its creation
                      </li>
                      <li className="liPricing">Personalized advice</li>
                    </ul>
                  }
                  link="/eng/precios/landing"
                ></Pricing>
                <Pricing
                  link="basica"
                  eng={true}
                  number="#2"
                  clase="basica"
                  titulo="Basic Website"
                  valor="$110 USD"
                  ul={
                    <ul>
                      <li className="liPricing">From 2 to 10 internal pages.</li>
                      <li className="liPricing">Ideal for small businesses, enterprises, NGOs, artists, independent professionals, or bloggers</li>
                      <li className="liPricing">
                      Code of the website delivered at the end of its creation
                      </li>
                      <li className="liPricing">Personalized advice</li>
                    </ul>
                  }
                ></Pricing>
                <Pricing
                  eng={true}
                  number="#3"
                  clase="eccomerce"
                  titulo="Ecommerce Website"
                  valor="$900 USD"
                  ul={
                    <ul>
                      <li className="liPricing">Online store website</li>
                      
                      <li className="liPricing">
                      100% online sales
                      </li>
                      <li className="liPricing">
                      Code of the website delivered at the end of its creation
                      </li>
                      <li className="liPricing">Personalized advice</li>
                    </ul>
                  }
                ></Pricing>
              </div>
            </div>

            <Footer esp={true}></Footer>
          </div>

          {/* MOBILE ENG */}
          <div className="mobile porQue">
            <div className="precios">
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
                        Contact Me
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

              <div className="txtPrecios">
                <h2 className="expandir-txt-arriba h2Precios">A plan for every need</h2>
                <h6 className="expandir-txt-arriba h6Precios">
                  Additionally, I offer you an affiliation system with great
                  benefits.
                </h6>
                <div className="afiliacionCont">
                  <h6 className="afiliacionP"></h6>
                </div>
              </div>

              <div className="pricings">
              <Pricing
                  number="#1"
                  clase="landingg"
                  titulo="Landing page"
                  valor="$65 USD"
                  eng={true}
                  ul={
                    <ul>
                      <li className="liPricing">Single page.</li>
                      <li className="liPricing">
                      Ideal for small entrepreneurs.
                      </li>
                      
                      <li className="liPricing">
                      Code of the website delivered at the end of its creation
                      </li>
                      <li className="liPricing">Personalized advice</li>
                    </ul>
                  }
                  link="/eng/precios/landing"
                ></Pricing>
                <Pricing
                  link="basica"
                  eng={true}
                  number="#2"
                  clase="basica"
                  titulo="Basic Website"
                  valor="$110 USD"
                  ul={
                    <ul>
                      <li className="liPricing">From 2 to 10 internal pages.</li>
                      <li className="liPricing">Ideal for small businesses, enterprises, NGOs, artists, independent professionals, or bloggers</li>
                      <li className="liPricing">
                      Code of the website delivered at the end of its creation
                      </li>
                      <li className="liPricing">Personalized advice</li>
                    </ul>
                  }
                ></Pricing>
                <Pricing
                  eng={true}
                  link='/eng/paquetes/ecommerce'
                  number="#3"
                  clase="eccomerce"
                  titulo="Ecommerce Website"
                  valor="$900 USD"
                  ul={
                    <ul>
                      <li className="liPricing">Online store website</li>
                      
                      <li className="liPricing">
                      100% online sales
                      </li>
                      <li className="liPricing">
                      Code of the website delivered at the end of its creation
                      </li>
                      <li className="liPricing">Personalized advice</li>
                    </ul>
                  }
                ></Pricing>
              </div>
            </div>
            <div className="footerMobile" id="contactoM">
              <div className="izqFooterM">
                <h3 className="logoFooter">
                  <span className="jmb">JMBroggi</span>
                  <span className="dev">.dev</span>
                </h3>
                <div className="redesFooterM">
                  <a
                    href="https://www.instagram.com/jmbroggi.dev/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="icon"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="icon"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="icon"
                    ></FontAwesomeIcon>
                  </a>
                  <a
                    href="mailto:jmbroggidev@gmail.com"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <p className="pFooterM">
                  <br />
                  Currently, I dedicate most of my time to work as a freelance
                  professional. However, I am open to considering any full-time
                  or part-time job offer that may arise.
                  <br />
                  <br />
                  Please feel free to get in touch with me at your convenience.
                  I would appreciate communicating via email, particularly given
                  the potential time zone disparity between us.
                </p>
                <a href="mailto:jmbroggidev@gmail.com" className="emailFooter">
                  jmbroggidev@gmail.com
                </a>
                <h6 className="derechosM">© 2023 by JMBroggi.</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Precios;
