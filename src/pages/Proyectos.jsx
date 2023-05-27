import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import './css/proyectos.css';
import Proyecto from "../components/Proyecto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTelegram,

} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faX,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Proyectos = (props) => {

  const [header, setHeader] = useState(false);
  const handleHeader = () => {
    setHeader(!header);
  };
  const handleStart = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    handleStart();
  }, []);

 
    const esp = props.esp;
    const eng = props.eng;

    return (
        <div>

{eng && (
            <div>
              <div className="desk">
                <div className="workP">
                    {/* Header */}
                    <header>
            <ul class="ulHeader">
                  <Link to="/eng" class="liHeader">
                    about me
                  </Link>
                  <Link class="liHeader">
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

                <h2 className="h2Work" id="proyectos">My Work</h2>

                <div className="workContainer">
                    <Proyecto img='vapearg' izq={true} title='Vapearg' desc='Vapearg was a website that specialized in the sale of vapers in the city of Rosario. Although it is currently not operational, Vapearg remains a good example of an e-commerce with an attractive design and efficient functionality' desc2='For this project, the following technologies were used: ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, JsonWebToken, Bcrypt, custom-made API, Redux, and Persist.' aviso='This website is hosted on Render, so initially it may experience some latency issues.' link='https://vapearg.com'></Proyecto>

                    <Proyecto img='clima' der={true} title='Clima' desc='By entering the name of the city, you will obtain instant and accurate information about the temperature, humidity, wind speed, and weather conditions in that location. Additionally, a background image corresponding to the current conditions will be displayed.' desc2='For this project, the following technologies were used: HTML, CSS, EJS, Implementation of Open Weather API, JavaScript, NodeJs, ExpressJs, Web Design, GIT, Github.' aviso='This website is hosted on Render, so it may take some time to load.' link='https://clima-pa13.onrender.com/' />

                    <Proyecto img='album' izq={true} title='Albúm de canciones' desc='Personalized digital music album for couples, featuring meaningful songs and heartfelt messages. It includes unique album covers and designs for each song, direct links to Spotify, and a QR code scanning feature for easy playback of the songs anytime, anywhere.' desc2='For this project, the following technologies were used: HTML5, CSS3, JS.' link='https://album-af.netlify.app/'/>

                    <Proyecto img='argentina' der={true} title="Argenzuela" desc='Argenzuela is a website that provides you with information about the devaluation of your money. Additionally, you can perform conversions between USD and ARS or vice versa using the latest blue dollar exchange rate.' desc2='For this project, the following technologies were used: HTML5, CSS3, JS, Blue Dollar API.' link='https://argenzuela.netlify.app/'/>

                </div>


                </div>


                <Footer eng={true}></Footer>
            </div>

            <div className="mobile">

            <div className="workP">
                    {/* Header */}
               
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
                 <Link style={{textDecoration: 'none'}}
                    to="/eng/precios"
                    className="headerMli"
                    
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

                <h2 className="h2WorkM" id="proyectos">My projects</h2>

                <div className="workContainer">
                    <Proyecto img='vapearg'  title='Vapearg' der={true}  desc='Vapearg was a website that specialized in the sale of vapers in the city of Rosario. Although it is currently not operational, Vapearg remains a good example of an e-commerce with an attractive design and efficient functionality' desc2='For this project, the following technologies were used: ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, JsonWebToken, Bcrypt, custom-made API, Redux, and Persist.' aviso='This website is hosted on Render, so initially it may experience some latency issues.' link='https://vapearg.com'></Proyecto>

                    <Proyecto img='clima' der={true} title='Clima' desc='By entering the name of the city, you will obtain instant and accurate information about the temperature, humidity, wind speed, and weather conditions in that location. Additionally, a background image corresponding to the current conditions will be displayed.' desc2='For this project, the following technologies were used: HTML, CSS, EJS, Implementation of Open Weather API, JavaScript, NodeJs, ExpressJs, Web Design, GIT, Github.' aviso='This website is hosted on Render, so it may take some time to load.' link='https://clima-pa13.onrender.com/' />

                    <Proyecto img='album' der={true}   title='Albúm Digital' desc='Personalized digital music album for couples, featuring meaningful songs and heartfelt messages. It includes unique album covers and designs for each song, direct links to Spotify, and a QR code scanning feature for easy playback of the songs anytime, anywhere.' desc2='For this project, the following technologies were used: HTML5, CSS3, JS.' link='https://album-af.netlify.app/'/>

                    <Proyecto img='argentina' der={true} title="Argenzuela" desc='Argenzuela is a website that provides you with information about the devaluation of your money. Additionally, you can perform conversions between USD and ARS or vice versa using the latest blue dollar exchange rate.'  desc2='For this project, the following technologies were used: HTML5, CSS3, JS, Blue Dollar API.' link='https://argenzuela.netlify.app/'/>

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

        {esp && (
            <div>
              <div className="desk">
                <div className="workP">
                    {/* Header */}
                <header>
                <ul class="ulHeader">
                  <Link to="/home" class="liHeader">
                    sobre mí
                  </Link>
                  <Link class="liHeader">
                    proyectos
                  </Link>

                  <Link to="/" class="liHeader">
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

                <h2 className="h2Work" id="proyectos">Mis proyectos</h2>

                <div className="workContainer">
                    <Proyecto img='vapearg' izq={true} title='Vapearg' desc='Vapearg es un sitio web que se especializaba en la venta de vapers en la ciudad de Rosario. Aunque actualmente no se encuentra operativo, Vapearg sigue siendo un buen ejemplo de un ecommerce con un diseño atractivo y una funcionalidad eficiente.' desc2='Para este proyecto se utilizó: ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, JsonWebToken, Bcrypt, API hecha a medida, Redux, Persist.' aviso='Este sitio web está alojado en Render por lo que al principio puede llegar a funcionar con retraso.' link='https://vapearg.com'></Proyecto>

                    <Proyecto img='clima' der={true} title='Clima' desc='Al ingresar el nombre de la ciudad, obtendrás información instantánea y precisa sobre la temperatura, humedad, velocidad del viento y condición climática en ese lugar. Además, se mostrará una imagen de fondo acorde a las condiciones actuales.' desc2='Para este proyecto se utilizó: HTML, CSS, EJS, Implementación de Open Weather API, JavaScript, NodeJs, ExpressJs, Diseño Web, GIT, Github.' aviso='Este sitio web está alojado en Render por lo que puede llegar a tardar en cargar.' link='https://clima-pa13.onrender.com/' />

                    <Proyecto img='album' izq={true} title='Albúm de canciones' desc='Álbum musical digital personalizado para parejas, con canciones significativas y mensajes conmovedores. Incluye portadas y diseños únicos para cada canción, enlaces directos a Spotify y función de escaneo de código QR para reproducir las canciones fácilmente en cualquier momento y lugar.' desc2='Para este proyecto se utilizó: HTML5, CSS3, JS.' link='https://album-af.netlify.app/'/>

                    <Proyecto img='argentina' der={true} title="Argenzuela" desc='Argenzuela es un sitio web que te brinda información sobre la devaluación de tu dinero. Además, puedes realizar conversiones entre USD y ARS o viceversa utilizando la última cotización del dólar blue.'  desc2='Para este proyecto se utilizó: HTML5, CSS3, JS, API DOLAR BLUE' link='https://argenzuela.netlify.app/'/>

                </div>


                </div>


                <Footer esp={true}></Footer>
            </div>

            <div className="mobile">

            <div className="workP">
                    {/* Header */}
               
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

                <h2 className="h2WorkM" id="proyectos">Mis proyectos</h2>

                <div className="workContainer">
                    <Proyecto img='vapearg'  title='Vapearg' der={true}  desc='Vapearg es un sitio web que se especializaba en la venta de vapers en la ciudad de Rosario. Aunque actualmente no se encuentra operativo, Vapearg sigue siendo un buen ejemplo de un ecommerce con un diseño atractivo y una funcionalidad eficiente.' desc2='Para este proyecto se utilizó: ReactJs, MongoDb, NodeJs, ExpressJs, HTML5, CSS3, JsonWebToken, Bcrypt, API hecha a medida, Redux, Persist.' aviso='Este sitio web está alojado en Render por lo que al principio puede llegar a funcionar con retraso.' link='https://vapearg.com'></Proyecto>

                    <Proyecto img='clima' der={true} title='Clima' desc='Al ingresar el nombre de la ciudad, obtendrás información instantánea y precisa sobre la temperatura, humedad, velocidad del viento y condición climática en ese lugar. Además, se mostrará una imagen de fondo acorde a las condiciones actuales.' desc2='Para este proyecto se utilizó: HTML, CSS, EJS, Implementación de Open Weather API, JavaScript, NodeJs, ExpressJs, Diseño Web, GIT, Github.' aviso='Este sitio web está alojado en Render por lo que puede llegar a tardar en cargar.' link='https://clima-pa13.onrender.com/' />

                    <Proyecto img='album' der={true}   title='Albúm Digital' desc='Álbum musical digital personalizado para parejas, con canciones significativas y mensajes conmovedores. Incluye portadas y diseños únicos para cada canción, enlaces directos a Spotify y función de escaneo de código QR para reproducir las canciones fácilmente en cualquier momento y lugar.' desc2='Para este proyecto se utilizó: HTML5, CSS3, JS.' link='https://album-af.netlify.app/'/>

                    <Proyecto img='argentina' der={true} title="Argenzuela" desc='Argenzuela es un sitio web que te brinda información sobre la devaluación de tu dinero. Además, puedes realizar conversiones entre USD y ARS o viceversa utilizando la última cotización del dólar blue.'  desc2='Para este proyecto se utilizó: HTML5, CSS3, JS, API DOLAR BLUE' link='https://argenzuela.netlify.app/'/>

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


export default Proyectos;