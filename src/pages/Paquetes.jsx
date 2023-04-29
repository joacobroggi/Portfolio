import Header from "../components/Header";
import Footer from "../components/Footer";
import Paquete from "../components/Paquete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/paquetes.css";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faEnvelope,
  faBars,
  faX,
  faSatelliteDish,
  faMedal,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Paquetes = (props) => {
  let english = props.eng;
  let espanol = props.esp;
  const [paquete, setPaquete] = useState(true);
  const [paquete2, setPaquete2] = useState(false);
  const [paquete3, setPaquete3] = useState(false);
  const [paqueten, setpaqueten] = useState("");
  const [eng, seteng] = useState(english);
  const [esp, setesp] = useState(espanol);
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
      {esp && (
        <div>
          <div className="desk">
            <header>
              <ul class="ulHeader">
                <Link
                  to="/"
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

            <div className="porQue">
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
                    className="img-pq2"
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

            <div className="paquetesGaleria">
              <Paquete
                titulo="Pack Eccomerce"
                numero="01."
                img="eccomerce"
                descripcion="Paquete diseñado para negocios que quieren vender sus productos en línea."
                link='ecommerce'
              ></Paquete>
              <Paquete
                titulo="Pack Personalidad"
                numero="02."
                img="artista"
                descripcion="Pack diseñado para influencers, artistas o cualquier otra persona con alcance mediatico."
                link='personalidad'
              ></Paquete>
               <Paquete
                titulo="Pack Freelancer"
                numero="03."
                img="freelance"
                descripcion="Pack diseñado para aquellos profesionales que quieren exponer sus servicios en línea."
                link='freelance'
              ></Paquete>
               <Paquete
                titulo="Pack Marca"
                numero="04."
                img="marca"
                descripcion="Pack diseñado para aquellos negocios/empresas que se quieren dar a conocer en línea."
                link='marca'
              ></Paquete>
            </div>

            <Footer esp={true}></Footer>
          </div>

          {/* MOBILE */}
          <div className="mobile">
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
                      to="/"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Sobre Mí
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Contacto
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
            <div className="slider" id="paquetes">
              <div className={paquete ? "bgIn1 paquete" : "hide"}>
                <div className="text-focus-in txtCard">
                  <h3 className="h3Paquetes">
                    LLEVÁ TU NEGOCIO AL <span className="enfasis">FUTURO</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Duplica tus ventas con el paquete de{" "}
                    <a href="paquetes/ecommerce" className="enfasis">
                      eccomerce
                    </a>
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
                    <a href="paquetes/personalidad" className="enfasis">
                      personalidad.
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
                    <a href="paquetes/freelance" className="enfasis">
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
            <div className="porQue">
              <div className="containerpq1">
                <div className="pq1">
                  <h5 className="h5pq1">MIS SERVICIOS</h5>
                  <h2 className="h2pq1">¿Por qué contratarme a mí?</h2>
                  <p className="pPq1">
                  Con mis <b>servicios altamente personalizables</b>, mi objetivo es ayudarte a duplicar tu éxito.
                    <br />
                    <br />
                    Permíteme transformar el alcance de tu marca en un alcance efectivo mediante la creación de un sitio web de calidad.
                    <br />
                    <br />
                    Mis servicios de desarrollo y diseño web pueden ser muy beneficiosos para tu marca porque puedo crear un <b>sitio web profesional y atractivo</b> que refleje la calidad y los valores de tu marca.
                  </p>
                
                </div>

              </div>
              
            </div>
            <div className="paquetesGaleria">
              <Paquete
                titulo="Pack Eccomerce"
                numero="01."
                img="eccomerce"
                descripcion="Paquete diseñado para negocios que quieren vender sus productos en línea."
                link='ecommerce'
              ></Paquete>
              <Paquete
                titulo="Pack Personalidad"
                numero="02."
                img="artista"
                descripcion="Pack diseñado para influencers, artistas o cualquier otra persona con alcance mediatico."
                link='personalidad'
              ></Paquete>
               <Paquete
                titulo="Pack Freelancer"
                numero="03."
                img="freelance"
                descripcion="Pack diseñado para aquellos profesionales que quieren exponer sus servicios en línea."
                link='freelance'
              ></Paquete>
               <Paquete
                titulo="Pack Marca"
                numero="04."
                img="marca"
                descripcion="Pack diseñado para aquellos negocios/empresas que se quieren dar a conocer en línea."
                link='marca'
              ></Paquete>
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

      {eng && (
        <div>
          <div className="desk">
            <header>
              <ul className="ulHeader">
                <Link
                  to="/"
                  className="liHeader"
                  
                >
                  about me
                </Link>
                <Link
                  to="/"
                  className="liHeader"
                  
                >
                  my work
                </Link>
                <Link
                  to="/"
                  className="liHeader"
                  
                >
                  contact me
                </Link>
                <Link
                  className="liHeader"
                  
                >
                  packages
                </Link>
                <li className="btnPaquetesHeader"></li>
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
                  BRING YOUR STORE TO THE <span className="enfasis">FUTURE</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                    Double your sales with the <a href="paquetes/ecommerce" className="enfasis">
                      eccomerce
                    </a> package.
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
                  GIVE YOUR CAREER A  <span className="enfasis">BOOST</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Catapult your career with the <a href="paquetes/personalidad" className="enfasis">
                      personality
                    </a> package{" "}
                    
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
                  Take your services to the <span className="enfasis">web</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Double your reach as a freelancer with the  <a href="paquetes/freelance" className="enfasis">
                      freelance
                    </a> package.
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

            <div className="porQue">
              <div className="containerpq1">
                <div className="pq1">
                  <h5 className="h5pq1">MY SERVICES.</h5>
                  <h2 className="h2pq1">Why hire me?</h2>
                  <p className="pPq1">
                  With my <b className="b">highly customizable</b> services, my goal is to help you duplicate your success.
                  </p>
                  <h4 className="h4pq1">¿How can i help you?</h4>
                  <p className="pPq2">
                  My highly customizable development and web design services can be very beneficial for your brand because I can create a professional and attractive website that reflects the quality and values of your brand. Additionally, I can optimize the website for search engines and improve the user experience to keep visitors on your website. I can also help you generate leads and convert your visitors into potential customers. Overall, my technical programming skills and marketing and design-focused approach can significantly enhance your brand's online image and help you achieve your specific goals.
                  </p>
                  <h4 className="h4pq1">Let me duplicate your reach</h4>
                  <p className="pPq2">
                  Let me transform the reach of your brand into effective reach through the creation of a high-quality website.
                  </p>
                </div>

                <div className="imgpq-cont">
                  <img
                    className="img-pq1"
                    src={require("../img/code.jpg")}
                    alt=""
                  />
                  <img
                    className="img-pq2"
                    src={require("../img/web.jpg")}
                    alt=""
                  />
                </div>
              </div>

             

              <div className="pq3">
                <h2 className="h2pq2">¿Why do I <b className="b">need</b> a website?</h2>
                <div className="mejorasPq">
                  <div className="mejora">
                    <span className="iconMejora">
                      <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>
                    </span>
                    <h5 className="h5Mejora">Credibility</h5>
                    <p className="pMejora">
                    A well-designed website with relevant and up-to-date content increases the credibility of your brand and generates trust in your customers.
                    </p>
                  </div>
                  <div className="mejora">
                    <span className="iconMejora">
                      <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    </span>
                    <h5 className="h5Mejora">24/7 presence</h5>
                    <p className="pMejora">
                    A website can enhance the visibility and reach of your brand by being available to be visited 24/7 from anywhere in the world.
                    </p>
                  </div>
                  <div className="mejora">
                    <span className="iconMejora">
                      <FontAwesomeIcon icon={faSatelliteDish}></FontAwesomeIcon>
                    </span>
                    <h5 className="h5Mejora">Increased visibility</h5>
                    <p className="pMejora">
                    A website increases the visibility of your brand and makes it easier for potential customers to find you online.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="paquetesGaleria">
              <Paquete
                titulo="Eccomerce Pack"
                numero="01."
                img="eccomerce"
                descripcion="Package designed for businesses that want to sell their products online."
                link='ecommerce'
              ></Paquete>
              <Paquete
                titulo="Personality Pack"
                numero="02."
                img="artista"
                descripcion="Pack designed for influencers, artists, or anyone with media reach."
                link='personalidad'
              ></Paquete>
               <Paquete
                titulo="Freelancer Pack"
                numero="03."
                img="freelance"
                descripcion="Package designed for professionals who want to showcase their services online."
                link='freelance'
              ></Paquete>
               <Paquete
                titulo="Brand Pack"
                numero="04."
                img="marca"
                descripcion="Pack designed for businesses/companies that want to make themselves known online."
                link='marca'
              ></Paquete>
            </div>

            <Footer eng={true}></Footer>
          </div>

          {/* MOBILE */}
          <div className="mobile">
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
                      to="/"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Sobre Mí
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="headerMli"
                      style={{ textDecoration: "none" }}
                    >
                      Contacto
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
            <div className="slider" id="paquetes">
              <div className={paquete ? "bgIn1 paquete" : "hide"}>
                <div className="text-focus-in txtCard">
                  <h3 className="h3Paquetes">
                  BRING YOUR STORE TO THE <span className="enfasis">FUTURE</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Double your sales with the <a href="paquetes/ecommerce" className="enfasis">
                      eccomerce
                    </a> package.
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
                  GIVE YOUR CAREER A  <span className="enfasis">BOOST</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Catapult your career with the <a href="paquetes/personalidad" className="enfasis">
                      personality
                    </a> package{" "}
                    
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
                  Take your services to the <span className="enfasis">web</span>.
                  </h3>
                  <h6 className="h6Paquetes">
                  Double your reach as a freelancer with the  <a href="paquetes/freelance" className="enfasis">
                      freelance
                    </a> package.
                    
                  </h6>
                </div>
                <div className="circulos">
                  <span className="dot" onClick={slide1}></span>
                  <span className="dot" onClick={slide2}></span>
                  <span className="dota"></span>
                </div>
              </div>
            </div>
            <div className="porQue">
              <div className="containerpq1">
                <div className="pq1">
                  <h5 className="h5pq1">MY SERVICES</h5>
                  <h2 className="h2pq1">Why hire me?</h2>
                  <p className="pPq1">
                  With my <b className="b">highly customizable</b> services, my goal is to help you duplicate your success.
                    <br />
                    <br />
                    Let me transform the reach of your brand into effective reach through the creation of a high-quality website.
                    <br />
                    <br />
                    My development and web design services can be very beneficial for your brand because I can create a professional and attractive website that reflects the quality and values of your brand
                  </p>
                
                </div>

              </div>
              
            </div>
            <div className="paquetesGaleria">
            <Paquete
                titulo="Eccomerce Pack"
                numero="01."
                img="eccomerce"
                descripcion="Package designed for businesses that want to sell their products online."
                link='ecommerce'
              ></Paquete>
              <Paquete
                titulo="Personality Pack"
                numero="02."
                img="artista"
                descripcion="Pack designed for influencers, artists, or anyone with media reach."
                link='personalidad'
              ></Paquete>
               <Paquete
                titulo="Freelancer Pack"
                numero="03."
                img="freelance"
                descripcion="Package designed for professionals who want to showcase their services online."
                link='freelance'
              ></Paquete>
               <Paquete
                titulo="Brand Pack"
                numero="04."
                img="marca"
                descripcion="Pack designed for businesses/companies that want to make themselves known online."
                link='marca'
              ></Paquete>
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
  );
};

export default Paquetes;
