import "./css/home.css";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faBriefcase,
  faFileLines,
  faX,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = (props) => {
  let esp = props.esp;
  let eng = props.eng;

  const [spanish, setSpanish] = useState(esp);
  const [english, setEnglish] = useState(eng);
  const [img1, setImg1] = useState(true);
  const [slide, setSlide] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [header, setHeader] = useState(false);

  const backProyecto = () => {
    if (slide) {
      setSlide(false);
      setSlide4(true);
    } else if (slide2) {
      setSlide2(false);
      setSlide(true);
    } else if (slide3) {
      setSlide3(false);
      setSlide2(true);
    } else if (slide4) {
      setSlide3(true);
      setSlide2(false);
    }
  };
  const nextProyecto = () => {
    if (slide) {
      setSlide(false);
      setSlide2(true);
    } else if (slide2) {
      setSlide2(false);
      setSlide3(true);
    } else if (slide3) {
      setSlide3(false);
      setSlide4(true);
    } else if (slide4) {
      setSlide4(false);
      setSlide(true);
    }
  };
  const handleAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProyectos = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContacto = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutM = () => {
    const element = document.getElementById("aboutM");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProyectosM = () => {
    const element = document.getElementById("proyectosM");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactoM = () => {
    const element = document.getElementById("contactoM");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSpanish = () => {
    setEnglish(false);
    setSpanish(true);
  };
  const handleEng = () => {
    setSpanish(false);
    setEnglish(true);
  };
  const handleHeader = () => {
    setHeader(!header);
  };
  const linkedin = ()=> {
    window.location.href = "https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274"
  }


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
    AOS.init();
  }, []);

  return (
    <div>
      {props.init && <div>
      {loading && <div>
        <Spinner></Spinner>
        </div>}
      {!loading && <div>
      {/* DESK */}
      <div className="desk">
        {/* ENGLISH */}

        {english && (
          <div>
            <header>
              <ul className="fade-in-top ulHeader">
                <li className="liHeader" onClick={handleAbout}>
                  about me
                </li>
                <Link to='/work' className="liHeader">
                  my work
                </Link>
                <li className="liHeader" onClick={handleContacto}>
                  contact me
                </li>
                <Link to="/eng/precios" className="liHeader">
                  prices
                </Link>
                <Link to="/eng/paquetes" className="liHeader">
                  packages
                </Link>
                <li className="btnPaquetesHeader">
                  
                  <button onClick={handleEng} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>{" "}
                  <button onClick={handleSpanish} className="flags">
                    <img
                      className="flagImg"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>
                </li>
              </ul>
            </header>

            <div className="landing">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="type h3Landing">
                Web Developer and Designer.
                </h3>
                <div className="botonesLanding">
                  <button
                    className="fade-in-bottom landingBtn"
                    onClick={handleAbout}
                  >
                    Who am I?
                  </button>
                  <button
                    className="fade-in-bottom landingBtn2"
                    onClick={handleContacto}
                  >
                    Hire me
                  </button>
                </div>
              </div>

              <div className="fade-in-bottom redesLanding">
                <div className="redes">
                  <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                 
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                  {" "}
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="about" id="about">
              <div className="txtAbout">
                <h2 data-aos="fade-up" className="${isScrolled ? 'fade-in' : ''} h2About">
                  ¿Who am I?
                </h2>
                <a data-aos="fade-up" href="mailto:jmbroggidev@gmail.com" className="aAbout">
                  jmbroggidev@gmail.com
                </a>
                <p data-aos="fade-up" className="pAbout">
                Hi! My name is Joaquín and I'm a <b className="b">web developer and designer</b>. My main focus is on creating high-quality websites that meet each of my clients' specific objectives. I offer <b className="b">highly customizable services</b> to adapt to the needs of each project and ensure customer satisfaction. In addition to my technical programming skills, I have a <b className="b">marketing and design-focused perspective</b>. I am dedicated to creating websites that are not only visually appealing but also effective in promoting my clients' brand and products. I am very dedicated in everything I do and always strive to exceed my clients' expectations. I ensure that each project I work on is designed and developed with the <b className="b">highest quality</b> and <b className="b">attention to detail</b> possible.
                </p>

                <div data-aos="fade-up">
                  <p className="pAbout">
                  These are some of my favorite technologies:
                  </p>
                  <div className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/redux.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">Redux</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
                <div data-aos="flip-up" className="aboutButtons">
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" className="cv" style={{textDecoration: 'none'}}>
                    Check my LinkedIn {" "}
                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                  </a>
                  <button className="workbutton" onClick={handleProyectos}>
                    Check my work{" "}
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                  </button>
                </div>
              </div>

              {img1 && (
                <div data-aos="fade-right" className=" imgContainerAbout">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              {!img1 && (
                <div data-aos="fade-right" className=" imgContainerAbout2">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="proyectos" id="proyectos">
              <span className="flechaIzq" onClick={backProyecto}>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </span>
              <span className="flechaDer" onClick={nextProyecto}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </span>

              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div data-aos="fade-up" className="txtProyectos">
                    <a
                      href="https://vapearg.com/"
                      className={"h2Proyectosvapearg"}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Vapearg<span className="com">.com</span>{" "}
                    </a>
                    <h4 className="h4Proyectos">ECOOMERCE WEB APP</h4>
                    <p className="pProyectos">
                      <b>
                        {" "}
                        This website is hosted on Render, so it may experience some delays at the beginning. (Touch the website title in order to access to it)
                      </b>
                      <br />
                      <br />
                      Vapearg was a website that specialized in selling vapes in the city of Rosario. Despite being designed to function at 100%, this project was forced to suspend its activity due to the recent prohibition of electronic cigarettes in Argentina. Although it is currently not operational, Vapearg remains a good example of an ecommerce with an attractive design and efficient functionality.
                    </p>
                    <h5 className="h5Proyectos">
                    For this project, the following technologies were used:
                    </h5>
                    <p className="pProyectos2">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3,
                      JsonWebToken, Bcrypt, Custom-made API, Redux, Persist
                      .
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/4sWsgi5MTBg"
                      title="YouTube video player"
                      allowFullScreen={true}
                      controls={true}
                      className="fade-in-bottom proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}

              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div data-aos="fade-up" className="txtProyectos">
                    <h2 className={"h2Proyectosclima"}>
                      {" "}
                      <a href="https://clima-pa13.onrender.com" style={{textDecoration: 'none', color: 'white'}}>clima</a> <span className="com2">by jmb</span>{" "}
                    </h2>
                    <h4 className="h4Proyectos">Weather App</h4>
                    <p className="pProyectos">
                    <b>
                       
                    This website is hosted on Render, so it may experience some delays at the beginning.
                        <br />
                        <br />
                      </b>
                      By simply entering the name of the city you wish to check, you can immediately receive accurate information about the temperature, humidity, wind speed, and weather conditions in that location. In addition, the tool will provide you with a background image that will adjust to the current weather conditions in the city you have selected. If it is sunny, you will see a sunny image, and if it is raining, the background image will show a rainy day.
                    </p>
                    <h5 className="h5Proyectos">
                    For this project, the following technologies were used:
                    </h5>
                    <p className="pProyectos2">
                    HTML,
            CSS, EJS, Open Weather API implementation, JavaScript, NodeJs, ExpressJs, Web Design, GIT, Github.
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/xRk_6x4pS_4"
                      title="YouTube video player"
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto album">
                  <div data-aos="fade-up" className="txtProyectos">
                    <a href="https://album-af.netlify.app" style={{textDecoration: 'none'}} className={"h2Proyectosalbum"}>A + F</a>
                    <h4 className="h4Proyectos">MUSIC ALBUM</h4>
                    <p className="pProyectos">
                    A digital music album designed specifically for couples. It is a collection of personalized and meaningful songs for the couple, which includes heartfelt messages to express their love and connection. Each song in the album has its own cover and a customized design. In addition, each song has a direct link to Spotify. The album also has a QR code scanning function. Each song has a unique QR code, which can be scanned with a mobile device to play the song anywhere and anytime, without the need to manually search for it.
                    </p>
                    <h5 className="h5Proyectos">
                    For this project, the following technologies were used:
                    </h5>
                    <p className="pProyectos2">HTML5, CSS3, VanillaJS.</p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/V3nr3O6mfb0"
                      title="YouTube video player"
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div data-aos="fade-up" className="medio">
                    <h2 className="vermasH2">👇💻 Check all my projects💻👇</h2>
                    <Link to='/work' className="linkVermas">All my work</Link>
                  </div>
                </div>
              )}
            </div>
            <Footer eng={true}></Footer>
          </div>
        )}

        {/* SPANISH */}
        {spanish && (
          <div>
            <header>
              <ul className="fade-in-top ulHeader">
                <li className="liHeader" onClick={handleAbout}>
                  sobre mí
                </li>
                <Link to='/proyectos' className="liHeader">
                  proyectos
                </Link>
                <li className="liHeader" onClick={handleContacto}>
                  contacto
                </li>
                <Link to="/precios" className="liHeader">
                  precios
                </Link>
                <Link to="/paquetes" className="liHeader">
                  paquetes
                </Link>
                <li className="btnPaquetesHeader">
                  <button onClick={handleSpanish} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>
                  <button onClick={handleEng} className="flags">
                    <img
                      className="flagImg"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>{" "}
                </li>
              </ul>
            </header>

            <div className="landing">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="type h3Landing">
                  Desarrollador y Diseñador Web.
                </h3>
                <div className="botonesLanding">
                  <button
                    className="fade-in-bottom landingBtn"
                    onClick={handleAbout}
                  >
                    Conocé sobre mí
                  </button>
                  <button
                    className="fade-in-bottom landingBtn2"
                    onClick={handleContacto}
                  >
                    Contratame
                  </button>
                </div>
              </div>

              <div className="fade-in-bottom redesLanding">
                <div className="redes">
                  <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                 
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                  {" "}
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="about" id="about">
              <div className="txtAbout">
                <h2 data-aos="fade-up" className="h2About">
                  ¿Quien soy?
                </h2>
                <a data-aos="fade-up" href="mailto:jmbroggidev@gmail.com" className="aAbout">
                  jmbroggidev@gmail.com
                </a>
                <p data-aos="fade-up" className="pAbout">
                  ¡Hola! Me llamo Joaquín y soy un <b className="b">desarrollador y diseñador web</b>. Mi enfoque
                  principal es crear sitios web de <b className="b">alta calidad</b> que
                  cumplan con los objetivos específicos de cada uno de mis
                  clientes. Ofrezco <b className="b">servicios altamente personalizables</b>{" "}
                  para adaptarme a las necesidades de cada proyecto y garantizar
                  la <b className="b">satisfacción del cliente</b>. Además de mi habilidad
                  técnica en programación, tengo una{" "}
                  <b className="b">perspectiva centrada en el marketing y el diseño</b>. Me
                  dedico a crear sitios web que no solo sean visualmente
                  atractivos, sino también{" "}
                  <b className="b">efectivos en la promoción de la marca</b> y los productos
                  de mis clientes. Soy muy dedicado en todo lo que hago y
                  siempre me esfuerzo por superar las expectativas de mis
                  clientes. Me aseguro de que cada proyecto en el que trabajo
                  esté diseñado y desarrollado con{" "}
                  <b className="b">la mayor calidad y atención al detalle posible</b>.
                </p>

                <div>
                  <p data-aos="fade-up" className="pAbout">
                    Estas son algunas de mis tecnologias favoritas:
                  </p>
                  <div data-aos="fade-down" className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/redux.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">Redux</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
                <div  data-aos="flip-down" className="aboutButtons">
                  <a  href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" className="cv" style={{textDecoration: 'none'}}>
                    Checkea mi LinkedIn {" "}
                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                  </a>
                  <button className="workbutton" onClick={handleProyectos}>
                    Checkea mi trabajo{" "}
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                  </button>
                </div>
              </div>

              {img1 && (
                <div data-aos="fade-right" className=" imgContainerAbout">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              {!img1 && (
                <div data-aos="fade-right" className="imgContainerAbout2">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="proyectos" id="proyectos">
              <span className="flechaIzq" onClick={backProyecto}>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </span>
              <span className="flechaDer" onClick={nextProyecto}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </span>

              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div data-aos="fade-up" className="txtProyectos">
                    <a
                      href="https://vapearg.com/"
                      className={"h2Proyectosvapearg"}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Vapearg<span className="com">.com</span>{" "}
                    </a>
                    <h4 className="h4Proyectos">ECOOMERCE WEB APP</h4>
                    <p className="pProyectos">
                      <b>
                        {" "}
                        Este sitio web está alojado en Render por lo que al principio puede llegar a funcionar con retraso. Tocá el titulo para ir a la página.
                      </b>
                      <br />
                      Vapearg es un sitio web que se especializaba en la venta
                      de vapers en la ciudad de Rosario. A pesar de haber sido
                      diseñado para funcionar al 100%, este proyecto se vio
                      obligado a suspender su actividad debido a la reciente
                      prohibición del cigarrillo electrónico en Argentina. Aunque actualmente no se encuentra operativo,
                      Vapearg sigue siendo un buen ejemplo de un ecommerce con
                      un diseño atractivo y una funcionalidad eficiente.
                    </p>
                    <h5 className="h5Proyectos">
                      Para este proyecto se utilizó:
                    </h5>
                    <p className="pProyectos2">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3,
                      JsonWebToken, Bcrypt, API hecha a medida, Redux, Persist,
                      .
                    </p>
                    <br />
                    <Link to='/proyectos' className="pProyectos2">
                      Tocá para ver todos los proyectos
                      
                    </Link>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/4sWsgi5MTBg"
                      title="YouTube video player"
                      
                      allowFullScreen={true}
                      controls={true}
                      className="fade-in-bottom proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div data-aos="fade-up" className="txtProyectos">
                    <h2 className={"h2Proyectosclima"}>
                      {" "}
                      <a href="https://clima-pa13.onrender.com" style={{textDecoration: 'none', color: 'white'}}>clima</a> <span className="com2">by jmb</span>{" "}
                    </h2>
                    <h4 className="h4Proyectos">APP DEL CLIMA</h4>
                    <p className="pProyectos">
                    <b>
                       
                        Este sitio web está alojado en Render por lo que puede
                        llegar a tardar en cargar.
                        <br />
                      </b>
                      Con tan solo ingresar el nombre de la ciudad que deseas
                      consultar, podrás recibir de manera inmediata información
                      precisa sobre la temperatura, la humedad, la velocidad del
                      viento y la condición climática en ese lugar.
                      <br />
                      Además, la herramienta te brindará una imagen de fondo que
                      se ajustará a las condiciones climáticas actuales en la
                      ciudad que has seleccionado. Si hay sol, verás una imagen
                      soleada y si está lloviendo, la imagen de fondo mostrará
                      un día lluvioso.
                    </p>
                    <h5 className="h5Proyectos">
                      Para este proyecto se utilizó:
                    </h5>
                    <p className="pProyectos2">
                    HTML,
            CSS, EJS, Implementación de Open Weather API, JavaScript, NodeJs, ExpressJs, Diseño
            Web, GIT, Github.
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/xRk_6x4pS_4"
                      title="YouTube video player"
                      
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto album">
                  <div data-aos="fade-up" className="txtProyectos">
                    <a href="https://album-af.netlify.app" style={{textDecoration: 'none'}} className={"h2Proyectosalbum"}>A + F</a>
                    <h4 className="h4Proyectos">ÁLBUM DE CANCIONES</h4>
                    <p className="pProyectos">
                      Álbum musical digital diseñado específicamente para
                      parejas. Se trata de una colección de canciones
                      personalizadas y significativas para la pareja, que
                      incluye mensajes conmovedores para expresar su amor y
                      conexión. Cada canción en el álbum cuenta con su portada y
                      un diseño personalizado. Además, cada canción tiene un
                      enlace directo a Spotify. Tambien tiene una función de
                      escaneo de código QR. Cada canción tiene un código QR
                      único, que se puede escanear con un dispositivo móvil para
                      reproducir la canción en cualquier lugar y en cualquier
                      momento, sin necesidad de buscarla manualmente.
                    </p>
                    <h5 className="h5Proyectos">
                      Para este proyecto se utilizó:
                    </h5>
                    <p className="pProyectos2">HTML5, CSS3, VanillaJS.</p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/V3nr3O6mfb0"
                      title="YouTube video player"
                      
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div data-aos="fade-up" className="medio">
                    <h2 className="vermasH2">👇💻 Checkea todos mis proyectos💻👇</h2>
                    <Link to='/proyectos' className="linkVermas">Ver Todo</Link>
                  </div>
                </div>
              )}
              
            </div>
            <Footer esp={true}></Footer>
          </div>
        )}
      </div>

      {/* MOBILE */}
      <div className="mobile"> 
        {/* SPANISH MOBILE */}
        {spanish && (
          <div>
            <div className="headerM">
              {!header && (
                <button onClick={handleHeader} className="bars">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
              )}

              {!header && (
                <div className="btnPaquetesHeaderM">
                  <button onClick={handleSpanish} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>
                  <button onClick={handleEng} className="flags">
                    <img
                      className="flagImg"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>{" "}
                </div>
              )}
            </div>
            {header && (
              <div className="bgInH headerDisplayed">
                <div className="headerM2">
                  {header && (
                    <button onClick={handleHeader} className="bars">
                      <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                    </button>
                  )}

                  {header && (
                    <div className="btnPaquetesHeaderM">
                      <button
                        onClick={handleSpanish}
                        className="flags flagActive"
                      >
                        <img
                          className="flagImgA"
                          src={require("../img/spain.png")}
                          alt=""
                        />
                      </button>
                      <button onClick={handleEng} className="flags">
                        <img
                          className="flagImg"
                          src={require("../img/usa.png")}
                          alt=""
                        />
                      </button>{" "}
                    </div>
                  )}
                </div>
                <ul className="slide-in-left headerMul ">
                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleAboutM} className="headerMli">
                    Sobre Mí
                  </Link>
                  </li>
                  <li>
                  <Link style={{textDecoration: 'none'}} to='/proyectos' className="headerMli">
                    Proyectos
                  </Link>
                  </li>

                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleContactoM} className="headerMli">
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
                 <Link style={{textDecoration: 'none'}}
                    to="/paquetes"
                    className="headerMli"
                    
                  >
                    Paquetes
                  </Link>
                 </li>
                </ul>
              </div>
            )}

            <div className="landingM">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="expandir-txt h3Landing">
                  Desarrollador y Diseñador Web.
                </h3>
                <div className="botonesLanding">
                  <button className="landingBtn" onClick={handleAboutM}>
                    Conocé sobre mí
                  </button>
                  <button className="landingBtn2" onClick={handleContactoM}>Contratame</button>
                </div>
              </div>

              <div className="redesLanding">
                <div className="redes">
                <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="aboutM" id="aboutM">
              <div className="txtAboutM">
                <h2 data-aos="fade-up" className="aboutH2M">¿Quien Soy?</h2>
                <a data-aos="fade-up" className="emailM">jmbroggidev@gmail.com</a>
                <p data-aos="fade-up" className="pAboutM">
                ¡Hola! Me llamo Joaquín y soy un <b>desarrollador y diseñador web</b> Mi enfoque
                  principal es crear sitios web de <b>alta calidad</b> que
                  cumplan con los objetivos específicos de cada uno de mis
                  clientes. Ofrezco <b>servicios altamente personalizables</b>{" "}
                  para adaptarme a las necesidades de cada proyecto y garantizar
                  la <b>satisfacción del cliente</b>. Además de mi habilidad
                  técnica en programación, tengo una{" "}
                  <b>perspectiva centrada en el marketing y el diseño</b>. <br /> Me
                  dedico a crear sitios web que no solo sean visualmente
                  atractivos, sino también{" "}
                  <b>efectivos en la promoción de la marca</b> y los productos
                  de mis clientes. Soy muy dedicado en todo lo que hago y
                  siempre me esfuerzo por superar las expectativas de mis
                  clientes. Me aseguro de que cada proyecto en el que trabajo
                  esté diseñado y desarrollado con{" "}
                  <b>la mayor calidad y atención al detalle posible</b>.
                </p>
                <div data-aos="fade-up">
                  <p className="pAboutM2">
                    Estas son algunas de mis tecnologias favoritas:
                  </p>
                  <div className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="botoneraM">
                <button onClick={linkedin} className="boton1M">Checkea MI LinkedIn</button>
                <button className="boton2M" onClick={handleProyectosM}>Checkea mi Trabajo </button>
              </div>
            </div>

            <div className="proyectos" id="proyectosM">
              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosvapearg"><a href="https://vapearg.com/" style={{textDecoration: 'none', color: 'white'}}>Vapearg</a></h2>
                    <p className="pProyecto2">
                    <b>
                        {" "}
                        Este sitio web está alojado en Render por lo que puede
                        llegar a tardar en cargar. Tocá el titulo para ir a la página.
                      </b>
                      <br />
                      <br />
                      Vapearg es un sitio web que se especializaba en la venta
                      de vapers en la ciudad de Rosario. A pesar de haber sido
                      diseñado para funcionar al 100%, este proyecto se vio
                      obligado a suspender su actividad debido a la reciente
                      prohibición del cigarrillo electrónico en Argentina. Aunque actualmente no se encuentra operativo,
                      Vapearg sigue siendo un buen ejemplo de un ecommerce con
                      un diseño atractivo y una funcionalidad eficiente.
                    </p>
                    <h6 className="h6proyectosM">
                      Para este proyecto se utilizó:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                    
                  </div>
                  
                </div>
              )}
              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosclima"><a href="https://clima-pa13.onrender.com/" style={{textDecoration: 'none', color: 'white'}}>Clima</a></h2>
                    <p className="pProyecto2">
                    Con tan solo ingresar el nombre de la ciudad que deseas
                      consultar, podrás recibir de manera inmediata información
                      precisa sobre la temperatura, la humedad, la velocidad del
                      viento y la condición climática en ese lugar.
                      <br />
                      Además, la herramienta te brindará una imagen de fondo que
                      se ajustará a las condiciones climáticas actuales en la
                      ciudad que has seleccionado. Si hay sol, verás una imagen
                      soleada y si está lloviendo, la imagen de fondo mostrará
                      un día lluvioso.
                    </p>

                    <h6 className="h6proyectosM">
                      Para este proyecto se utilizó:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosalbum"><a href="https://album-af.netlify.app/" style={{textDecoration: 'none', color: 'white'}}>A + F</a></h2>
                    <p className="pProyecto2">
                    Álbum musical digital diseñado específicamente para
                      parejas. Se trata de una colección de canciones
                      personalizadas y significativas para la pareja, que
                      incluye mensajes conmovedores para expresar su amor y
                      conexión. Cada canción en el álbum cuenta con su portada y
                      un diseño personalizado. Además, cada canción tiene un
                      enlace directo a Spotify. Tambien tiene una función de
                      escaneo de código QR. Cada canción tiene un código QR
                      único, que se puede escanear con un dispositivo móvil para
                      reproducir la canción en cualquier lugar y en cualquier
                      momento, sin necesidad de buscarla manualmente.
                    </p>

                    <h6 className="h6proyectosM">
                      Para este proyecto se utilizó:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <div data-aos="fade-up" className="medio2">
                    <h2 className="vermasH2">Checkea todos mis proyectos</h2>
                   <Link to='/proyecto' className="verTodo">Ver todo</Link>
                  </div>
                  </div>
                  
                </div>
              )}
              
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
        )}
        {/* ENGLISH MOBILE */}
        {english && (
          <div>
            <div className="headerM">
              {!header && (
                <button onClick={handleHeader} className="bars">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
              )}

              {!header && (
                <div className="btnPaquetesHeaderM">
                  
                  <button onClick={handleEng} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>
                  <button onClick={handleSpanish} className="flags ">
                    <img
                      className="flagImg"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>{" "}
                </div>
              )}
            </div>
            {header && (
              <div className="bgInH headerDisplayed">
                <div className="headerM2">
                  {header && (
                    <button onClick={handleHeader} className="bars">
                      <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                    </button>
                  )}

                  {header && (
                    <div class="btnPaquetesHeaderM">
                      <button onClick={handleEng} className="flags  flagActive">
                        <img
                          className="flagImgA"
                          src={require("../img/usa.png")}
                          alt=""
                        />
                      </button>
                      <button
                        onClick={handleSpanish}
                        className="flags"
                      >
                        <img
                          className="flagImg"
                          src={require("../img/spain.png")}
                          alt=""
                        />
                      </button>
                      {" "}
                    </div>
                  )}
                </div>
                <ul className="slide-in-left headerMul ">
                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleAboutM} className="headerMli">
                    About Me
                  </Link>
                  </li>
                  <li>
                  <Link style={{textDecoration: 'none'}} to='/work' className="headerMli">
                    My Work
                  </Link>
                  </li>

                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleContactoM} className="headerMli">
                    Contact me
                  </Link>
                  </li>
                  <li>
                  <Link to='/eng/precios' style={{textDecoration: 'none'}}  className="headerMli">
                    Prices
                  </Link>
                  </li>
                 <li>
                 <Link style={{textDecoration: 'none'}}
                    to="eng/paquetes"
                    className="headerMli"
                    
                  >
                    Packages
                  </Link>
                 </li>
                </ul>
              </div>
            )}

            <div className="landingM">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="expandir-txt h3Landing">
                  Web Developer and Designer.
                </h3>
                <div className="botonesLanding">
                  <button className="landingBtn" onClick={handleAboutM}>
                    Who am I?
                  </button>
                  <button className="landingBtn2" onClick={handleContactoM}>Hire Me</button>
                </div>
              </div>

              <div className="redesLanding">
                <div className="redes">
                <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="aboutM" id="aboutM">
              <div className="txtAboutM">
                <h2 data-aos="fade-up" className="aboutH2M">WHO AM I?</h2>
                <a data-aos="fade-up" className="emailM">jmbroggidev@gmail.com</a>
                <p data-aos="fade-up" className="pAboutM">
                Hi! My name is Joaquín and I'm a <b className="b">web developer and designer</b>. My main focus is on creating high-quality websites that meet each of my clients' specific objectives. I offer <b className="b">highly customizable services</b> to adapt to the needs of each project and ensure customer satisfaction. In addition to my technical programming skills, I have a <b className="b">marketing and design-focused perspective</b>. I am dedicated to creating websites that are not only visually appealing but also effective in promoting my clients' brand and products. I am very dedicated in everything I do and always strive to exceed my clients' expectations. I ensure that each project I work on is designed and developed with the <b className="b">highest quality</b> and <b className="b">attention to detail</b> possible.
                </p>
                <div>
                  <p data-aos="fade-up" className="pAboutM2">
                  These are some of my favorite technologies:
                  </p>
                  <div className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="botoneraM">
                <button onClick={linkedin} className="boton1M">Check my LinkedIn</button>
                <button className="boton2M" onClick={handleProyectosM}> Check my work</button>
              </div>
            </div>

            <div className="proyectos" id="proyectosM">
              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosvapearg"><a href="https://vapearg.com/" style={{textDecoration: 'none', color: 'white'}}>Vapearg</a></h2>
                    <p className="pProyecto2">
                    <b>
                        {" "}
                        This website is hosted on Render, so it may experience some delays at the beginning. (Touch the website title in order to access to it)
                      </b>
                      <br />
                      <br />
                      Vapearg was a website that specialized in selling vapes in the city of Rosario. Despite being designed to function at 100%, this project was forced to suspend its activity due to the recent prohibition of electronic cigarettes in Argentina. Although it is currently not operational, Vapearg remains a good example of an ecommerce with an attractive design and efficient functionality.
                    </p>
                    <h6 className="h6proyectosM">
                    For this project, the following technologies were used:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                  
                </div>
              )}

              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosclima"><a href="https://clima-pa13.onrender.com/" style={{textDecoration: 'none', color: 'white'}}>Clima</a></h2>
                    <p className="pProyecto2">
                    <b>
                       
                       This website is hosted on Render, so it may experience some delays at the beginning.
                           <br />
                           <br />
                         </b>
                         By simply entering the name of the city you wish to check, you can immediately receive accurate information about the temperature, humidity, wind speed, and weather conditions in that location. In addition, the tool will provide you with a background image that will adjust to the current weather conditions in the city you have selected. If it is sunny, you will see a sunny image, and if it is raining, the background image will show a rainy day.
                    </p>

                    <h6 className="h6proyectosM">
                    For this project, the following technologies were used:
                    </h6>
                    <p className="pProyecto3">
                    HTML,
            CSS, EJS, Open Weather API implementation, JavaScript, NodeJs, ExpressJs, Web Design, GIT, Github.
                    </p>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosalbum"><a href="https://album-af.netlify.app/" style={{textDecoration: 'none', color: 'white'}}>A + F</a></h2>
                    <p className="pProyecto2">
                    A digital music album designed specifically for couples. It is a collection of personalized and meaningful songs for the couple, which includes heartfelt messages to express their love and connection. Each song in the album has its own cover and a customized design. In addition, each song has a direct link to Spotify. The album also has a QR code scanning function. Each song has a unique QR code, which can be scanned with a mobile device to play the song anywhere and anytime, without the need to manually search for it.
                    </p>

                    <h6 className="h6proyectosM">
                    For this project, the following technologies were used:
                    </h6>
                    <p className="pProyecto3">
                    HTML5, CSS3, VanillaJS.
                    </p>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <div data-aos="fade-up" className="medio2">
                    <h2 className="vermasH2"> Check all my projects</h2>
                   <Link to='/work' className="verTodo">All my projects</Link>
                  </div>
                  </div>
                  
                </div>
              )}
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
                <a href="mailto:jmbroggidev@gmail.com" className="emailFooter">
              jmbroggidev@gmail.com
            </a>
                <h6 className="derechosM">© 2023 by JMBroggi.</h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>}
    </div>}

    {!props.init && <div>
      <div>
      {/* DESK */}
      <div className="desk">
        {/* ENGLISH */}

        {english && (
          <div>
            <header>
              <ul className="fade-in-top ulHeader">
                <li className="liHeader" onClick={handleAbout}>
                  about me
                </li>
                <Link className="liHeader" to='/work'>
                  my work
                </Link>
                <li className="liHeader" onClick={handleContacto}>
                  contact me
                </li>
                <Link to="/eng/precios" className="liHeader">
                  prices
                </Link>
                <Link to="/eng/paquetes" className="liHeader">
                  packages
                </Link>
                <li className="btnPaquetesHeader">
                  
                  <button onClick={handleEng} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>{" "}
                  <button onClick={handleSpanish} className="flags">
                    <img
                      className="flagImg"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>
                </li>
              </ul>
            </header>

            <div className="landing">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="type h3Landing">
                Web Developer and Designer.
                </h3>
                <div className="botonesLanding">
                  <button
                    className="fade-in-bottom landingBtn"
                    onClick={handleAbout}
                  >
                    Who am I?
                  </button>
                  <button
                    className="fade-in-bottom landingBtn2"
                    onClick={handleContacto}
                  >
                    Hire me
                  </button>
                </div>
              </div>

              <div className="fade-in-bottom redesLanding">
                <div className="redes">
                  <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                 
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                  {" "}
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="about" id="about">
              <div className="txtAbout">
                <h2 data-aos="fade-up" className="h2About">
                  ¿Who am I?
                </h2>
                <a data-aos="fade-up" href="mailto:jmbroggidev@gmail.com" className="aAbout">
                  jmbroggidev@gmail.com
                </a>
                <p data-aos="fade-up" className="pAbout">
                Hi! My name is Joaquín and I'm a <b className="b">web developer and designer</b>. My main focus is on creating high-quality websites that meet each of my clients' specific objectives. I offer <b className="b">highly customizable services</b> to adapt to the needs of each project and ensure customer satisfaction. In addition to my technical programming skills, I have a <b className="b">marketing and design-focused perspective</b>. I am dedicated to creating websites that are not only visually appealing but also effective in promoting my clients' brand and products. I am very dedicated in everything I do and always strive to exceed my clients' expectations. I ensure that each project I work on is designed and developed with the <b className="b">highest quality</b> and <b className="b">attention to detail</b> possible.
                </p>

                <div>
                  <p data-aos="fade-up" className="pAbout">
                  These are some of my favorite technologies:
                  </p>
                  <div data-aos="fade-up" className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/redux.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">Redux</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up" className="aboutButtons">
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" className="cv" style={{textDecoration: 'none'}}>
                    Check my LinkedIn {" "}
                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                  </a>
                  <button className="workbutton" onClick={handleProyectos}>
                    Check my work{" "}
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                  </button>
                </div>
              </div>

              {img1 && (
                <div className="fade-in imgContainerAbout">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              {!img1 && (
                <div className="fade-in imgContainerAbout2">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="proyectos" id="proyectos">
              <span className="flechaIzq" onClick={backProyecto}>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </span>
              <span className="flechaDer" onClick={nextProyecto}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </span>

              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div className="txtProyectos">
                    <a
                      href="https://vapearg.com/"
                      className={"h2Proyectosvapearg"}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Vapearg<span className="com">.com</span>{" "}
                    </a>
                    <h4 className="h4Proyectos">ECOOMERCE WEB APP</h4>
                    <p className="pProyectos">
                      <b>
                        {" "}
                        This website is hosted on Render, so it may experience some delays at the beginning. (Touch the website title in order to access to it)
                      </b>
                      <br />
                      <br />
                      Vapearg was a website that specialized in selling vapes in the city of Rosario. Despite being designed to function at 100%, this project was forced to suspend its activity due to the recent prohibition of electronic cigarettes in Argentina. Although it is currently not operational, Vapearg remains a good example of an ecommerce with an attractive design and efficient functionality.
                    </p>
                    <h5 className="h5Proyectos">
                    For this project, the following technologies were used:
                    </h5>
                    <p className="pProyectos2">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3,
                      JsonWebToken, Bcrypt, Custom-made API, Redux, Persist
                      .
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe
                      src="https://www.youtube.com/embed/4sWsgi5MTBg"
                      title="YouTube video player"
                      allowFullScreen={true}
                      controls={true}
                      className="fade-in-bottom proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}

              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div className="txtProyectos">
                    <h2 className={"h2Proyectosclima"}>
                      {" "}
                      <a href="https://clima-pa13.onrender.com" style={{textDecoration: 'none', color: 'white'}}>clima</a> <span className="com2">by jmb</span>{" "}
                    </h2>
                    <h4 className="h4Proyectos">Weather App</h4>
                    <p className="pProyectos">
                    <b>
                       
                    This website is hosted on Render, so it may experience some delays at the beginning.
                        <br />
                        <br />
                      </b>
                      By simply entering the name of the city you wish to check, you can immediately receive accurate information about the temperature, humidity, wind speed, and weather conditions in that location. In addition, the tool will provide you with a background image that will adjust to the current weather conditions in the city you have selected. If it is sunny, you will see a sunny image, and if it is raining, the background image will show a rainy day.
                    </p>
                    <h5 className="h5Proyectos">
                    For this project, the following technologies were used:
                    </h5>
                    <p className="pProyectos2">
                    HTML,
            CSS, EJS, Open Weather API implementation, JavaScript, NodeJs, ExpressJs, Web Design, GIT, Github.
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe
                      src="https://www.youtube.com/embed/xRk_6x4pS_4"
                      title="YouTube video player"
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto album">
                  <div className="txtProyectos">
                    <a href="https://album-af.netlify.app" style={{textDecoration: 'none'}} className={"h2Proyectosalbum"}>A + F</a>
                    <h4 className="h4Proyectos">MUSIC ALBUM</h4>
                    <p className="pProyectos">
                    A digital music album designed specifically for couples. It is a collection of personalized and meaningful songs for the couple, which includes heartfelt messages to express their love and connection. Each song in the album has its own cover and a customized design. In addition, each song has a direct link to Spotify. The album also has a QR code scanning function. Each song has a unique QR code, which can be scanned with a mobile device to play the song anywhere and anytime, without the need to manually search for it.
                    </p>
                    <h5 className="h5Proyectos">
                    For this project, the following technologies were used:
                    </h5>
                    <p className="pProyectos2">HTML5, CSS3, VanillaJS.</p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe
                      src="https://www.youtube.com/embed/V3nr3O6mfb0"
                      title="YouTube video player"
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
               {slide4 && (
                <div className="proyecto vermasP">
                  <div data-aos="fade-up" className="medio">
                    <h2 className="vermasH2">👇💻 Check all my projects💻👇</h2>
                    <Link to='/work' className="linkVermas">All my work</Link>
                  </div>
                </div>
              )}
            </div>
            <Footer eng={true}></Footer>
          </div>
        )}

        {/* SPANISH */}
        {spanish && (
          <div>
            <header>
              <ul className="fade-in-top ulHeader">
                <li className="liHeader" onClick={handleAbout}>
                  sobre mí
                </li>
                <Link className="liHeader" to='/proyectos'>
                  proyectos
                </Link>
                <li className="liHeader" onClick={handleContacto}>
                  contacto
                </li>
                <Link to="/precios" className="liHeader">
                  precios
                </Link>
                <Link to="/paquetes" className="liHeader">
                  paquetes
                </Link>
                <li className="btnPaquetesHeader">
                  <button onClick={handleSpanish} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>
                  <button onClick={handleEng} className="flags">
                    <img
                      className="flagImg"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>{" "}
                </li>
              </ul>
            </header>

            <div className="landing">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="type h3Landing">
                  Desarrollador y Diseñador Web.
                </h3>
                <div className="botonesLanding">
                  <button
                    className="fade-in-bottom landingBtn"
                    onClick={handleAbout}
                  >
                    Conocé sobre mí
                  </button>
                  <button
                    className="fade-in-bottom landingBtn2"
                    onClick={handleContacto}
                  >
                    Contratame
                  </button>
                </div>
              </div>

              <div className="fade-in-bottom redesLanding">
                <div className="redes">
                  <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                 
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                  {" "}
                  <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="about" id="about">
              <div className="txtAbout">
                <h2 data-aos="fade-up" className="h2About">
                  ¿Quien soy?
                </h2>
                <a data-aos="fade-up" href="mailto:jmbroggidev@gmail.com" className="aAbout">
                  jmbroggidev@gmail.com
                </a>
                <p data-aos="fade-up" className="pAbout">
                  ¡Hola! Me llamo Joaquín y soy un <b className="b">desarrollador y diseñador web</b>. Mi enfoque
                  principal es crear sitios web de <b className="b">alta calidad</b> que
                  cumplan con los objetivos específicos de cada uno de mis
                  clientes. Ofrezco <b className="b">servicios altamente personalizables</b>{" "}
                  para adaptarme a las necesidades de cada proyecto y garantizar
                  la <b className="b">satisfacción del cliente</b>. Además de mi habilidad
                  técnica en programación, tengo una{" "}
                  <b className="b">perspectiva centrada en el marketing y el diseño</b>. Me
                  dedico a crear sitios web que no solo sean visualmente
                  atractivos, sino también{" "}
                  <b className="b">efectivos en la promoción de la marca</b> y los productos
                  de mis clientes. Soy muy dedicado en todo lo que hago y
                  siempre me esfuerzo por superar las expectativas de mis
                  clientes. Me aseguro de que cada proyecto en el que trabajo
                  esté diseñado y desarrollado con{" "}
                  <b className="b">la mayor calidad y atención al detalle posible</b>.
                </p>

                <div>
                  <p data-aos="fade-up" className="pAbout">
                    Estas son algunas de mis tecnologias favoritas:
                  </p>
                  <div data-aos="fade-down" className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/redux.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">Redux</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
                <div  data-aos="flip-down" className="aboutButtons">
                  <a  href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" className="cv" style={{textDecoration: 'none'}}>
                    Checkea mi LinkedIn {" "}
                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                  </a>
                  <button className="workbutton" onClick={handleProyectos}>
                    Checkea mi trabajo{" "}
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                  </button>
                </div>
              </div>

              {img1 && (
                <div data-aos="fade-right" className=" imgContainerAbout">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              {!img1 && (
                <div data-aos="fade-right" className="imgContainerAbout2">
                  <div className="imgSelector">
                    <div className="circles">
                      <span
                        className={img1 ? "circle circle1" : "circleA circle1"}
                        onClick={() => setImg1(true)}
                      ></span>
                      <span
                        className={img1 ? "circleA circle1" : "circle circle1"}
                        onClick={() => setImg1(false)}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="proyectos" id="proyectos">
              <span className="flechaIzq" onClick={backProyecto}>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </span>
              <span className="flechaDer" onClick={nextProyecto}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </span>

              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div data-aos="fade-up" className="txtProyectos">
                    <a
                      href="https://vapearg.com/"
                      className={"h2Proyectosvapearg"}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Vapearg<span className="com">.com</span>{" "}
                    </a>
                    <h4 className="h4Proyectos">ECOMmERCE WEB APP</h4>
                    <p className="pProyectos">
                      <b>
                        {" "}
                        Este sitio web está alojado en Render por lo que al principio puede llegar a funcionar con retraso. Tocá el titulo para ir a la página.
                      </b>
                      <br />
                      Vapearg es un sitio web que se especializaba en la venta
                      de vapers en la ciudad de Rosario. A pesar de haber sido
                      diseñado para funcionar al 100%, este proyecto se vio
                      obligado a suspender su actividad debido a la reciente
                      prohibición del cigarrillo electrónico en Argentina. Aunque actualmente no se encuentra operativo,
                      Vapearg sigue siendo un buen ejemplo de un ecommerce con
                      un diseño atractivo y una funcionalidad eficiente.
                    </p>
                    <h5 className="h5Proyectos">
                      Para este proyecto se utilizó:
                    </h5>
                    <p className="pProyectos2">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3,
                      JsonWebToken, Bcrypt, API hecha a medida, Redux, Persist,
                      .
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe src="https://www.youtube.com/embed/4sWsgi5MTBg"
                      title="YouTube video player"
                      data-aos="fade-up"
                      allowFullScreen={true}
                      controls={true}
                      className="fade-in-bottom proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div data-aos="fade-up" className="txtProyectos">
                    <h2 className={"h2Proyectosclima"}>
                      {" "}
                      <a href="https://clima-pa13.onrender.com" style={{textDecoration: 'none', color: 'white'}}>clima</a> <span className="com2">by jmb</span>{" "}
                    </h2>
                    <h4 className="h4Proyectos">APP DEL CLIMA</h4>
                    <p className="pProyectos">
                    <b>
                       
                        Este sitio web está alojado en Render por lo que puede
                        llegar a tardar en cargar.
                        <br />
                      </b>
                      Con tan solo ingresar el nombre de la ciudad que deseas
                      consultar, podrás recibir de manera inmediata información
                      precisa sobre la temperatura, la humedad, la velocidad del
                      viento y la condición climática en ese lugar.
                      <br />
                      Además, la herramienta te brindará una imagen de fondo que
                      se ajustará a las condiciones climáticas actuales en la
                      ciudad que has seleccionado. Si hay sol, verás una imagen
                      soleada y si está lloviendo, la imagen de fondo mostrará
                      un día lluvioso.
                    </p>
                    <h5 className="h5Proyectos">
                      Para este proyecto se utilizó:
                    </h5>
                    <p className="pProyectos2">
                    HTML,
            CSS, EJS, Implementación de Open Weather API, JavaScript, NodeJs, ExpressJs, Diseño
            Web, GIT, Github.
                    </p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/xRk_6x4pS_4"
                      title="YouTube video player"
                      
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto album">
                  <div data-aos="fade-up" className="txtProyectos">
                    <a href="https://album-af.netlify.app" style={{textDecoration: 'none'}} className={"h2Proyectosalbum"}>A + F</a>
                    <h4 className="h4Proyectos">ÁLBUM DE CANCIONES</h4>
                    <p className="pProyectos">
                      Álbum musical digital diseñado específicamente para
                      parejas. Se trata de una colección de canciones
                      personalizadas y significativas para la pareja, que
                      incluye mensajes conmovedores para expresar su amor y
                      conexión. Cada canción en el álbum cuenta con su portada y
                      un diseño personalizado. Además, cada canción tiene un
                      enlace directo a Spotify. Tambien tiene una función de
                      escaneo de código QR. Cada canción tiene un código QR
                      único, que se puede escanear con un dispositivo móvil para
                      reproducir la canción en cualquier lugar y en cualquier
                      momento, sin necesidad de buscarla manualmente.
                    </p>
                    <h5 className="h5Proyectos">
                      Para este proyecto se utilizó:
                    </h5>
                    <p className="pProyectos2">HTML5, CSS3, VanillaJS.</p>
                  </div>

                  <div className="derechaProyectos">
                    <iframe data-aos="fade-up"
                      src="https://www.youtube.com/embed/V3nr3O6mfb0"
                      title="YouTube video player"
                      
                      allowFullScreen={true}
                      controls={true}
                      className="proyectosIframe"
                    ></iframe>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div data-aos="fade-up" className="medio">
                    <h2 className="vermasH2">👇💻 Checkea todos mis proyectos 💻👇</h2>
                    <Link to='/proyectos' className="linkVermas">Todos mis proyectos</Link>
                  </div>
                </div>
              )}



            </div>
            <Footer esp={true}></Footer>
          </div>
        )}
      </div>

      {/* MOBILE */}
      <div className="mobile"> 
        {/* SPANISH MOBILE */}
        {spanish && (
          <div>
            <div className="headerM">
              {!header && (
                <button onClick={handleHeader} className="bars">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
              )}

              {!header && (
                <div className="btnPaquetesHeaderM">
                  <button onClick={handleSpanish} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>
                  <button onClick={handleEng} className="flags">
                    <img
                      className="flagImg"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>{" "}
                </div>
              )}
            </div>
            {header && (
              <div className="bgInH headerDisplayed">
                <div className="headerM2">
                  {header && (
                    <button onClick={handleHeader} className="bars">
                      <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                    </button>
                  )}

                  {header && (
                    <div className="btnPaquetesHeaderM">
                      <button
                        onClick={handleSpanish}
                        className="flags flagActive"
                      >
                        <img
                          className="flagImgA"
                          src={require("../img/spain.png")}
                          alt=""
                        />
                      </button>
                      <button onClick={handleEng} className="flags">
                        <img
                          className="flagImg"
                          src={require("../img/usa.png")}
                          alt=""
                        />
                      </button>{" "}
                    </div>
                  )}
                </div>
                <ul className="slide-in-left headerMul ">
                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleAboutM} className="headerMli">
                    Sobre Mí
                  </Link>
                  </li>
                  <li>
                  <Link style={{textDecoration: 'none'}} to='/proyectos' className="headerMli">
                    Proyectos
                  </Link>
                  </li>

                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleContactoM} className="headerMli">
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
                 <Link style={{textDecoration: 'none'}}
                    to="/paquetes"
                    className="headerMli"
                    
                  >
                    Paquetes
                  </Link>
                 </li>
                </ul>
              </div>
            )}

            <div className="landingM">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="expandir-txt h3Landing">
                  Desarrollador y Diseñador Web.
                </h3>
                <div className="botonesLanding">
                  <button className="landingBtn" onClick={handleAboutM}>
                    Conocé sobre mí
                  </button>
                  <button className="landingBtn2" onClick={handleContactoM}>Contratame</button>
                </div>
              </div>

              <div className="redesLanding">
                <div className="redes">
                <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="aboutM" id="aboutM">
              <div className="txtAboutM">
                <h2 data-aos="fade-up" className="aboutH2M">¿Quien Soy?</h2>
                <a data-aos="fade-up" className="emailM">jmbroggidev@gmail.com</a>
                <p data-aos="fade-up" className="pAboutM">
                ¡Hola! Me llamo Joaquín y soy un <b>desarrollador y diseñador web</b> Mi enfoque
                  principal es crear sitios web de <b>alta calidad</b> que
                  cumplan con los objetivos específicos de cada uno de mis
                  clientes. Ofrezco <b>servicios altamente personalizables</b>{" "}
                  para adaptarme a las necesidades de cada proyecto y garantizar
                  la <b>satisfacción del cliente</b>. Además de mi habilidad
                  técnica en programación, tengo una{" "}
                  <b>perspectiva centrada en el marketing y el diseño</b>. <br /> Me
                  dedico a crear sitios web que no solo sean visualmente
                  atractivos, sino también{" "}
                  <b>efectivos en la promoción de la marca</b> y los productos
                  de mis clientes. Soy muy dedicado en todo lo que hago y
                  siempre me esfuerzo por superar las expectativas de mis
                  clientes. Me aseguro de que cada proyecto en el que trabajo
                  esté diseñado y desarrollado con{" "}
                  <b>la mayor calidad y atención al detalle posible</b>.
                </p>
                <div>
                  <p data-aos="fade-up" className="pAboutM2">
                    Estas son algunas de mis tecnologias favoritas:
                  </p>
                  <div data-aos="fade-up" className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="botoneraM">
                <button onClick={linkedin} className="boton1M">Checkea MI LinkedIn</button>
                <button className="boton2M" onClick={handleProyectosM}>Checkea mi Trabajo </button>
              </div>
            </div>

            <div className="proyectos" id="proyectosM">
              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosvapearg"><a href="https://vapearg.com/" style={{textDecoration: 'none', color: 'white'}}>Vapearg</a></h2>
                    <p className="pProyecto2">
                    <b>
                        {" "}
                        Este sitio web está alojado en Render por lo que puede
                        llegar a tardar en cargar. Tocá el titulo para ir a la página.
                      </b>
                      <br />
                      <br />
                      Vapearg es un sitio web que se especializaba en la venta
                      de vapers en la ciudad de Rosario. A pesar de haber sido
                      diseñado para funcionar al 100%, este proyecto se vio
                      obligado a suspender su actividad debido a la reciente
                      prohibición del cigarrillo electrónico en Argentina. Aunque actualmente no se encuentra operativo,
                      Vapearg sigue siendo un buen ejemplo de un ecommerce con
                      un diseño atractivo y una funcionalidad eficiente.
                    </p>
                    <h6 className="h6proyectosM">
                      Para este proyecto se utilizó:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                  
                </div>
              )}

              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosclima"><a href="https://clima-pa13.onrender.com/" style={{textDecoration: 'none', color: 'white'}}>Clima</a></h2>
                    <p className="pProyecto2">
                    Con tan solo ingresar el nombre de la ciudad que deseas
                      consultar, podrás recibir de manera inmediata información
                      precisa sobre la temperatura, la humedad, la velocidad del
                      viento y la condición climática en ese lugar.
                      <br />
                      Además, la herramienta te brindará una imagen de fondo que
                      se ajustará a las condiciones climáticas actuales en la
                      ciudad que has seleccionado. Si hay sol, verás una imagen
                      soleada y si está lloviendo, la imagen de fondo mostrará
                      un día lluvioso.
                    </p>

                    <h6 className="h6proyectosM">
                      Para este proyecto se utilizó:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosalbum"><a href="https://album-af.netlify.app/" style={{textDecoration: 'none', color: 'white'}}>A + F</a></h2>
                    <p className="pProyecto2">
                    Álbum musical digital diseñado específicamente para
                      parejas. Se trata de una colección de canciones
                      personalizadas y significativas para la pareja, que
                      incluye mensajes conmovedores para expresar su amor y
                      conexión. Cada canción en el álbum cuenta con su portada y
                      un diseño personalizado. Además, cada canción tiene un
                      enlace directo a Spotify. Tambien tiene una función de
                      escaneo de código QR. Cada canción tiene un código QR
                      único, que se puede escanear con un dispositivo móvil para
                      reproducir la canción en cualquier lugar y en cualquier
                      momento, sin necesidad de buscarla manualmente.
                    </p>

                    <h6 className="h6proyectosM">
                      Para este proyecto se utilizó:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <div data-aos="fade-up" className="medio2">
                    <h2 className="vermasH2">Checkea todos mis proyectos</h2>
                   <Link to='/work' className="verTodo">Ver todo</Link>
                  </div>
                  </div>
                  
                </div>
              )}
              
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
        )}
        {/* ENGLISH MOBILE */}
        {english && (
          <div>
            <div className="headerM">
              {!header && (
                <button onClick={handleHeader} className="bars">
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
              )}

              {!header && (
                <div className="btnPaquetesHeaderM">
                  
                  <button onClick={handleEng} className="flags flagActive">
                    <img
                      className="flagImgA"
                      src={require("../img/usa.png")}
                      alt=""
                    />
                  </button>
                  <button onClick={handleSpanish} className="flags ">
                    <img
                      className="flagImg"
                      src={require("../img/spain.png")}
                      alt=""
                    />
                  </button>{" "}
                </div>
              )}
            </div>
            {header && (
              <div className="bgInH headerDisplayed">
                <div className="headerM2">
                  {header && (
                    <button onClick={handleHeader} className="bars">
                      <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                    </button>
                  )}

                  {header && (
                    <div class="btnPaquetesHeaderM">
                      <button onClick={handleEng} className="flags  flagActive">
                        <img
                          className="flagImgA"
                          src={require("../img/usa.png")}
                          alt=""
                        />
                      </button>
                      <button
                        onClick={handleSpanish}
                        className="flags"
                      >
                        <img
                          className="flagImg"
                          src={require("../img/spain.png")}
                          alt=""
                        />
                      </button>
                      {" "}
                    </div>
                  )}
                </div>
                <ul className="slide-in-left headerMul ">
                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleAboutM} className="headerMli">
                    About Me
                  </Link>
                  </li>
                  <li>
                  <Link to='/work' style={{textDecoration: 'none'}} className="headerMli">
                    My Work
                  </Link>
                  </li>

                  <li>
                  <Link style={{textDecoration: 'none'}} onClick={handleContactoM} className="headerMli">
                    Contact me
                  </Link>
                  </li>
                  <li>
                 <Link style={{textDecoration: 'none'}}
                    to="/eng/precios"
                    className="headerMli"
                    
                  >
                    Prices
                  </Link>
                 </li>
                 <li>
                 <Link style={{textDecoration: 'none'}}
                    to="/eng/paquetes"
                    className="headerMli"
                    
                  >
                    Packages
                  </Link>
                 </li>
                </ul>
              </div>
            )}

            <div className="landingM">
              <div className="txtLanding">
                <h1>
                  {" "}
                  <span className="expandir-txt-arriba joaco">Joaco</span>
                  <br />
                  <span className="expandir-txt-arriba broggi">Broggi</span>
                </h1>
                <h3 className="expandir-txt h3Landing">
                  Web Developer and Designer.
                </h3>
                <div className="botonesLanding">
                  <button className="landingBtn" onClick={handleAboutM}>
                    Who am I?
                  </button>
                  <button className="landingBtn2" onClick={handleContactoM}>Hire Me</button>
                </div>
              </div>

              <div className="redesLanding">
                <div className="redes">
                <a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.linkedin.com/in/joaqu%C3%ADn-broggi-904352274" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://wa.me/3412756433?text=¡Hola!%20me%20gustaria%20contratarte %20para%20desarrollar%20mi%20pagina%20web" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
                <div className="redes">
                <a href="https://www.tiktok.com/@jmbroggidev" style={{textDecoration: 'none', color: 'white'}}> <FontAwesomeIcon
                    icon={faTiktok}
                    className="icon"
                  ></FontAwesomeIcon></a>
                </div>
              </div>
            </div>

            <div className="aboutM" id="aboutM">
              <div className="txtAboutM">
                <h2 data-aos="fade-up" className="aboutH2M">WHO AM I?</h2>
                <a data-aos="fade-up"  className="emailM">jmbroggidev@gmail.com</a>
                <p data-aos="fade-up" className="pAboutM">
                Hi! My name is Joaquín and I'm a <b className="b">web developer and designer</b>. My main focus is on creating high-quality websites that meet each of my clients' specific objectives. I offer <b className="b">highly customizable services</b> to adapt to the needs of each project and ensure customer satisfaction. In addition to my technical programming skills, I have a <b className="b">marketing and design-focused perspective</b>. I am dedicated to creating websites that are not only visually appealing but also effective in promoting my clients' brand and products. I am very dedicated in everything I do and always strive to exceed my clients' expectations. I ensure that each project I work on is designed and developed with the <b className="b">highest quality</b> and <b className="b">attention to detail</b> possible.
                </p>
                <div>
                  <p data-aos="fade-up" className="pAboutM2">
                  These are some of my favorite technologies:
                  </p>
                  <div data-aos="fade-up" className="tecnologias">
                    <div className="tecnologia">
                      <img
                        src={require("../img/html5.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">HTML5</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/css.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">CSS3</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/js.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">JavaScript</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/react.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ReactJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/node.webp")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">NodeJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/express.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">ExpressJs</h5>
                    </div>
                    <div className="tecnologia">
                      <img
                        src={require("../img/mongo.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">MongoDB</h5>
                    </div>

                    <div className="tecnologia">
                      <img
                        src={require("../img/github.png")}
                        alt=""
                        className="tecnoIcon"
                      />
                      <h5 className="h5Tecnologias">GIT</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="botoneraM">
                <button onClick={linkedin} className="boton1M">Check my LinkedIn</button>
                <button className="boton2M" onClick={handleProyectosM}> Check my work</button>
              </div>
            </div>

            <div className="proyectos" id="proyectosM">
              {slide && (
                <div className="bgIn2 proyecto vapearg">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosvapearg"><a href="https://vapearg.com/" style={{textDecoration: 'none', color: 'white'}}>Vapearg</a></h2>
                    <p className="pProyecto2">
                    <b>
                        {" "}
                        This website is hosted on Render, so it may experience some delays at the beginning. (Touch the website title in order to access to it)
                      </b>
                      <br />
                      <br />
                      Vapearg was a website that specialized in selling vapes in the city of Rosario. Despite being designed to function at 100%, this project was forced to suspend its activity due to the recent prohibition of electronic cigarettes in Argentina. Although it is currently not operational, Vapearg remains a good example of an ecommerce with an attractive design and efficient functionality.
                    </p>
                    <h6 className="h6proyectosM">
                    For this project, the following technologies were used:
                    </h6>
                    <p className="pProyecto3">
                      ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, OAuth,
                      JasonWebToken, Bcrypt.
                    </p>
                  </div>
                  
                </div>
              )}

              {slide2 && (
                <div className="bgIn3 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosclima"><a href="https://clima-pa13.onrender.com/" style={{textDecoration: 'none', color: 'white'}}>Clima</a></h2>
                    <p className="pProyecto2">
                    <b>
                       
                       This website is hosted on Render, so it may experience some delays at the beginning.
                           <br />
                           <br />
                         </b>
                         By simply entering the name of the city you wish to check, you can immediately receive accurate information about the temperature, humidity, wind speed, and weather conditions in that location. In addition, the tool will provide you with a background image that will adjust to the current weather conditions in the city you have selected. If it is sunny, you will see a sunny image, and if it is raining, the background image will show a rainy day.
                    </p>

                    <h6 className="h6proyectosM">
                    For this project, the following technologies were used:
                    </h6>
                    <p className="pProyecto3">
                    HTML,
            CSS, EJS, Open Weather API implementation, JavaScript, NodeJs, ExpressJs, Web Design, GIT, Github.
                    </p>
                  </div>
                </div>
              )}
              {slide3 && (
                <div className="bgIn4 proyecto clima">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <h2 className="h2Proyectosalbum"><a href="https://album-af.netlify.app/" style={{textDecoration: 'none', color: 'white'}}>A + F</a></h2>
                    <p className="pProyecto2">
                    A digital music album designed specifically for couples. It is a collection of personalized and meaningful songs for the couple, which includes heartfelt messages to express their love and connection. Each song in the album has its own cover and a customized design. In addition, each song has a direct link to Spotify. The album also has a QR code scanning function. Each song has a unique QR code, which can be scanned with a mobile device to play the song anywhere and anytime, without the need to manually search for it.
                    </p>

                    <h6 className="h6proyectosM">
                    For this project, the following technologies were used:
                    </h6>
                    <p className="pProyecto3">
                    HTML5, CSS3, VanillaJS.
                    </p>
                  </div>
                </div>
              )}
              {slide4 && (
                <div className="proyecto vermasP">
                  <div className="textPM">
                    <div className="flechasDiv">
                      <span className="flechaIzqM" onClick={backProyecto}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                      </span>
                      <span className="flechaDerM" onClick={nextProyecto}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                      </span>
                    </div>
                    <div data-aos="fade-up" className="medio2">
                    <h2 className="vermasH2"> Check all my projects</h2>
                   <Link to='/work' className="verTodo">All my projects</Link>
                  </div>
                  </div>
                  
                </div>
              )}
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
                <a href="mailto:jmbroggidev@gmail.com" className="emailFooter">
              jmbroggidev@gmail.com
            </a>
                <h6 className="derechosM">© 2023 by JMBroggi.</h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>}
    </div>
  );
};

export default Home;
