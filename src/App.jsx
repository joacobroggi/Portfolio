import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Paquetes from "./pages/Paquetes";
import "./App.css";
import Servicio from "./pages/Servicio";
import ReactGA from 'react-ga';
import Precios from "./pages/Precios";

const trackingId = 'G-8G2CDB1N6V';

ReactGA.initialize(trackingId)

function App() {

  const eccomerceP = '$690 - $2590';
  const eccomerceP2 = '$500 - $2500';
  const eccomerceSP = '$75';
  const personalidadP = '$100 - $250';
  const personalidadP2 = '$75 - $220';
  const personalidadSP = '$25';
  const freelanceP = '$95 - $350';
  const freelanceP2 = '$70 - $315';
  const freelanceSP = '$30';
  const marcaP = '$200 - $500';
  const marcaP2 = '$150 - $450';
  const marcaSP = '$50';

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home esp={true} init={true}/>}></Route>
        <Route path="/home" element={<Home esp={true} init={false}/>}></Route>
        <Route path="/eng" element={<Home eng={true} />}></Route>
        <Route path="/eng/paquetes/" element={<Paquetes eng={true} />}></Route>
        <Route path="/precios" element={<Precios esp={true}/>}></Route>
        <Route path="/eng/precios" element={<Precios eng={true}/>}></Route>

        

        <Route path="/paquetes/" element={<Paquetes esp={true} />}></Route>
        {/* ECOMMERCE */}
        <Route
          path="/paquetes/ecommerce"
          element={
            <Servicio
              esp={true}
              titulo={"eccomerce"}
              descripcion={
                "El paquete de eCommerce te ofrece la oportunidad de simplificar tu proceso de venta y migrar a un sistema completamente automatizado. Olvidá las complicaciones de las ventas en persona y llevá tu negocio a un nuevo nivel de eficiencia y comodidad en línea. "
              }
              d2="Este paquete incluye el desarrollo y diseño de un ecommerce funcional y atractivo. Tener un ecommerce website te permite vender 100% en línea y darles a tus clientes la posibilidad de adquirir tus productos sin siquiera tener que pisar una tienda física."
              img="eccomerce3.jpg"
              ulTitle="Tarifas aproximadas en dolares sin afiliación (el pago puede ser efectuado en pesos):"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Dominio</b>: Un dominio web es una dirección única y
                    exclusiva en Internet que se utiliza para identificar y
                    localizar un sitio web. Es como una dirección física para
                    una empresa o una casa, pero en lugar de indicar una
                    ubicación física, un dominio web indica la ubicación de un
                    sitio web en línea. Su precio oscila entre los{" "}
                    <b>$3 y $5 USD (anual).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>El hosting, también conocido como
                    alojamiento web, es un servicio que proporciona a los
                    usuarios un espacio en servidores web para almacenar los
                    archivos y bases de datos que componen su sitio web, y hacer
                    que su sitio sea accesible desde Internet. Su precio se
                    encuentra entre los <b>$10 a $25 USD (mensual).</b>
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {eccomerceP} USD
                  </li>
                  <li className="liServicios">
                    Actualizaciones:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Modificacion de texto e imagenes:</b> $5 - $10 USD
                        por todas las modificaciones realizadas en el texto y
                        las imagenes.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas funcionalidades:</b> $25 - $500 USD
                        dependiendo de la complejidad.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas secciones:</b> {eccomerceSP} USD c/u.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Tarifas aproximadas en dolares con afiliación (el pago puede ser efectuado en pesos):"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Afiliación</b>: $50 USD (mensual).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Actualizaciones</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Dominio: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {eccomerceP2} USD.
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* personalidad */}
        <Route
          path="/paquetes/personalidad"
          element={
            <Servicio
              esp={true}
              titulo={"personalidad"}
              descripcion={
                "Si tenés una marca personal y querés aprovecharla al máximo, necesitás un sitio web. Las personalidades influyentes y los creadores de contenido pueden beneficiarse enormemente al tener una página web bien diseñada y desarrollada, lo que les permitirá establecer una sólida presencia en línea y representar su marca de manera efectiva."
              }
              d2="La página web de una personalidad influyente debe representar su marca y personalidad de manera efectiva a través de un diseño atractivo y fácil de navegar, contenido relevante sobre su biografía, proyectos, testimonios y ofertas actuales, así como funcionalidades para contactar, bloguear, vender productos o servicios y responder preguntas frecuentes. Como desarrollador web, mi trabajo es ayudar a la personalidad a lograr estos objetivos y construir una presencia en línea sólida."
              img="artista.jpg"
              ulTitle="Tarifas aproximadas en dolares sin afiliación (el pago puede ser efectuado en pesos):"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Dominio</b>: $3 y $5 USD (anual). Un dominio web es una
                    dirección única y exclusiva en Internet que se utiliza para
                    identificar y localizar un sitio web. Es como una dirección
                    física para una empresa o una casa, pero en lugar de indicar
                    una ubicación física, un dominio web indica la ubicación de
                    un sitio web en línea. Su precio oscila entre los{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b> $0 a $10 USD (mensual). El hosting, también
                    conocido como alojamiento web, es un servicio que
                    proporciona a los usuarios un espacio en servidores web para
                    almacenar los archivos y bases de datos que componen su
                    sitio web, y hacer que su sitio sea accesible desde
                    Internet.{" "}
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {personalidadP} USD
                  </li>
                  <li className="liServicios">
                    Actualizaciones:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Modificacion de texto e imagenes:</b> $5 USD por
                        todas las modificaciones realizadas en el texto y las
                        imagenes.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas funcionalidades:</b> $10 - $60 USD dependiendo
                        de la complejidad.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas secciones:</b> {personalidadSP} USD c/u.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Tarifas aproximadas en dolares con afiliación (el pago puede ser efectuado en pesos):"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Afiliación</b>: $25 USD (mensual).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Actualizaciones</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Dominio: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {personalidadP2} USD.
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* freelance */}
        <Route
          path="/paquetes/freelance"
          element={
            <Servicio
              esp={true}
              titulo={"freelancers"}
              descripcion={
                "¿Sos abogado, fotógrafo, diseñador, traductor, contador o cualquier otro profesional que tenga su propia práctica? Entonces el paquete orientado a freelancers es perfecto para vos. Un sitio web es esencial para un freelancer, ya que les permite presentar su trabajo y habilidades de manera profesional, atraer nuevos clientes potenciales, comunicar sus servicios, establecer una relación de confianza con ellos y servir como una herramienta de comunicación efectiva para responder preguntas y consultas de manera rápida y eficiente. En resumen, un sitio web es fundamental para la presencia en línea de un freelancer y para maximizar sus oportunidades de éxito en línea."
              }
              d2="El sitio web de un freelancer puede contener varias secciones para mostrar su experiencia, habilidades y servicios, así como para proporcionar ejemplos de trabajos previos y comentarios de clientes anteriores. Algunas secciones comunes incluyen una página de inicio, información sobre el freelancer, una lista de servicios, un portafolio, testimonios de clientes y una página de contacto."
              img="freelance2.jpg"
              ulTitle="Tarifas aproximadas sin afiliación (el pago puede ser efectuado en pesos):"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Dominio</b>: Un dominio web es una dirección única y
                    exclusiva en Internet que se utiliza para identificar y
                    localizar un sitio web. Es como una dirección física para
                    una empresa o una casa, pero en lugar de indicar una
                    ubicación física, un dominio web indica la ubicación de un
                    sitio web en línea. Su precio oscila entre los{" "}
                    <b>$3 y $5 USD (anual).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>El hosting, también conocido como
                    alojamiento web, es un servicio que proporciona a los
                    usuarios un espacio en servidores web para almacenar los
                    archivos y bases de datos que componen su sitio web, y hacer
                    que su sitio sea accesible desde Internet. Su precio se
                    encuentra entre los <b>$0 a $10 USD (mensual).</b>
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {freelanceP} USD.
                  </li>
                  <li className="liServicios">
                    Actualizaciones:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Modificacion de texto e imagenes:</b> $5 - $8 USD por
                        todas las modificaciones realizadas en el texto y las
                        imagenes.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas funcionalidades:</b> $20 - $50 USD dependiendo
                        de la complejidad.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas secciones:</b> {freelanceSP} USD c/u.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Tarifas aproximadas con afiliación (el pago puede ser efectuado en pesos):"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Afiliación</b>: $25 USD (mensual).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Actualizaciones</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Dominio: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {freelanceP2} USD.
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* MARCA */}
        <Route
          path="/paquetes/marca"
          element={
            <Servicio
              esp={true}
              titulo={"marcas"}
              descripcion={
                "Tener un sitio web es esencial para cualquier marca que quiera tener éxito en la era digital actual, ya que ayuda a establecer una presencia en línea sólida y confiable, proporciona información valiosa y herramientas de marketing efectivas para hacer crecer el negocio, permite la venta directa en línea y aumenta la confianza y las ventas de los clientes. Tener un sitio web es una inversión clave para cualquier marca que busque mantenerse competitiva en el mercado actual y crecer en línea."
              }
              d2='El sitio web de una marca puede contener una página de inicio, descripción de productos/servicios, información "Acerca de nosotros", sección de contacto, blog, galería de imágenes, testimonios de clientes, preguntas frecuentes y tienda en línea. Debe estar diseñado para satisfacer las necesidades de los clientes y brindar información clara y actualizada para fomentar su interés en la marca.'
              img="marca2.jpg"
              ulTitle="Tarifas aproximadas sin afiliación (el pago puede ser efectuado en pesos):"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Dominio</b>: Un dominio web es una dirección única y
                    exclusiva en Internet que se utiliza para identificar y
                    localizar un sitio web. Es como una dirección física para
                    una empresa o una casa, pero en lugar de indicar una
                    ubicación física, un dominio web indica la ubicación de un
                    sitio web en línea. Su precio oscila entre los{" "}
                    <b>$3 y $5 USD (anual).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>El hosting, también conocido como
                    alojamiento web, es un servicio que proporciona a los
                    usuarios un espacio en servidores web para almacenar los
                    archivos y bases de datos que componen su sitio web, y hacer
                    que su sitio sea accesible desde Internet. Su precio se
                    encuentra entre los <b>$0 a $10 USD (mensual).</b>
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {marcaP} USD
                  </li>
                  <li className="liServicios">
                    Actualizaciones:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Modificacion de texto e imagenes:</b> $5 - $8 USD por
                        todas las modificaciones realizadas en el texto y las
                        imagenes.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas funcionalidades:</b> $20 - $80 USD dependiendo
                        de la complejidad.
                      </li>
                      <li className="liServicios">
                        <b>Nuevas secciones:</b> {marcaSP} USD c/u.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Tarifas aproximadas con afiliación (el pago puede ser efectuado en pesos):"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Afiliación</b>: $50 USD (mensual).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Actualizaciones</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Dominio: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting: </b>$0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Diseño y Desarrollo Web:</b> {marcaP2} USD
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* eng packages*/}

        {/* ENG ECCOMERCE */}
        <Route
          path="/eng/paquetes/ecommerce"
          element={
            <Servicio
              eng={true}
              titulo={"eccomerce"}
              descripcion={
                "The eCommerce package offers you the opportunity to simplify your sales process and migrate to a fully automated system. Forget about the complications of in-person sales and take your business to a new level of efficiency and convenience online."
              }
              d2="This package includes the development and design of a functional and attractive ecommerce website. Having an ecommerce website allows you to sell 100% online and gives your customers the ability to purchase your products without even stepping into a physical store."
              img="eccomerce3.jpg"
              ulTitle="Approximate fees in US dollars without affiliation"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Domain:</b> A web domain is a unique and exclusive
                    address on the Internet that is used to identify and locate
                    a website. It's like a physical address for a business or a
                    house, but instead of indicating a physical location, a web
                    domain indicates the location of a website online. Its price
                    ranges between <b>$3 and $5 USD (annually).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> Web hosting is a service that provides users
                    with a space on web servers to store the files and databases
                    that make up their website, and make their site accessible
                    from the internet. Its price ranges from{" "}
                    <b>$10 to $25 USD (monthly).</b>
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $590 - $2590
                  </li>
                  <li className="liServicios">
                    Updates:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Text and Image Editing:</b> $5 - $8 USD for all
                        modifications made to the text and images.
                      </li>
                      <li className="liServicios">
                        <b>New functionalities:</b> $20 - $300 USD depending on
                        complexity.
                      </li>
                      <li className="liServicios">
                        <b>New sections:</b> $75 USD each.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Approximate fees in US dollars with affiliation"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Affiliation:</b> $50 USD (monthly).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Updates</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Domain:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $500 - $2500 USD
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* ENG PERSONALITY */}
        <Route
          path="eng/paquetes/personalidad"
          element={
            <Servicio
              eng={true}
              titulo={"personality"}
              descripcion="If you have a personal brand and want to make the most of it, you need a website. Influencers and content creators can greatly benefit from having a well-designed and developed website, which will allow them to establish a strong online presence and effectively represent their brand."
              d2="The website of an influential personality should effectively represent their brand and personality through an attractive and easy-to-navigate design, relevant content about their biography, projects, testimonials, and current offerings, as well as functionalities for contact, blogging, selling products or services, and answering frequently asked questions. As a web developer, my job is to help the personality achieve these goals and build a strong online presence."
              img="artista.jpg"
              ulTitle="Approximate fees in US dollars without affiliation"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Domain:</b> A web domain is a unique and exclusive
                    address on the Internet that is used to identify and locate
                    a website. It's like a physical address for a business or a
                    house, but instead of indicating a physical location, a web
                    domain indicates the location of a website online. Its price
                    ranges between <b>$3 and $5 USD (annually).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> Web hosting is a service that provides users
                    with a space on web servers to store the files and databases
                    that make up their website, and make their site accessible
                    from the internet. Its price ranges from{" "}
                    <b>$10 to $25 USD (monthly).</b>
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $75 - 200 USD
                  </li>
                  <li className="liServicios">
                    Updates:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Text and Image Editing:</b> $5 - $8 USD for all
                        modifications made to the text and images.
                      </li>
                      <li className="liServicios">
                        <b>New functionalities:</b> $10 - $80 USD depending on
                        complexity.
                      </li>
                      <li className="liServicios">
                        <b>New sections:</b> $15 USD each.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Approximate fees in US dollars with affiliation"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Affiliation:</b> $50 USD (monthly).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Updates</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Domain:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $75 - 200 USD.
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* ENG freelancer */}
        <Route
          path="eng/paquetes/freelance"
          element={
            <Servicio
              eng={true}
              titulo={"freelancers"}
              descripcion="Are you a lawyer, photographer, designer, translator, accountant, or any other professional with your own practice? Then the package geared towards freelancers is perfect for you. A website is essential for a freelancer, as it allows them to present their work and skills in a professional manner, attract new potential clients, communicate their services, establish a trusted relationship with them, and serve as an effective communication tool to quickly and efficiently respond to questions and inquiries. In short, a website is fundamental to the online presence of a freelancer and to maximize their opportunities for success online."
              d2="A freelancer's website can contain several sections to showcase their expertise, skills, and services, as well as to provide examples of previous work and feedback from past clients. Some common sections include a home page, information about the freelancer, a list of services, a portfolio, client testimonials, and a contact page."
              img="freelance2.jpg"
              ulTitle="Approximate fees in US dollars without affiliation"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Domain:</b> A web domain is a unique and exclusive
                    address on the Internet that is used to identify and locate
                    a website. It's like a physical address for a business or a
                    house, but instead of indicating a physical location, a web
                    domain indicates the location of a website online. Its price
                    ranges between <b>$3 and $5 USD (annually).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> Web hosting is a service that provides users
                    with a space on web servers to store the files and databases
                    that make up their website, and make their site accessible
                    from the internet. Its price ranges from{" "}
                    <b>$10 to $25 USD (monthly).</b>
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $350 - $590 USD
                  </li>
                  <li className="liServicios">
                    Updates:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Text and Image Editing:</b> $5 - $8 USD for all
                        modifications made to the text and images.
                      </li>
                      <li className="liServicios">
                        <b>New functionalities:</b> $20 - $80 USD depending on
                        complexity.
                      </li>
                      <li className="liServicios">
                        <b>New sections:</b> $15 USD each.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Approximate fees in US dollars with affiliation"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Affiliation:</b> $50 USD (monthly).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Updates</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Domain:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $350 - 590 USD.
                  </li>
                </ul>
              }
            />
          }
        ></Route>

        {/* MARCA ENG */}
        <Route
          path="eng/paquetes/marca"
          element={
            <Servicio
              eng={true}
              titulo={"brands"}
              descripcion="Having a website is essential for any brand that wants to succeed in the current digital age, as it helps establish a solid and reliable online presence, provides valuable information and effective marketing tools to grow the business, enables direct online sales, and increases customer confidence and sales. Having a website is a key investment for any brand looking to stay competitive in the current market and grow online."
              d2="A brand's website can contain a home page, product/service descriptions, 'About Us' information, contact section, blog, image gallery, customer testimonials, FAQs, and an online store. It should be designed to meet the needs of customers and provide clear and up-to-date information to encourage their interest in the brand."
              img="marca2.jpg"
              ulTitle="Approximate fees in US dollars without affiliation"
              ul={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Domain:</b> A web domain is a unique and exclusive
                    address on the Internet that is used to identify and locate
                    a website. It's like a physical address for a business or a
                    house, but instead of indicating a physical location, a web
                    domain indicates the location of a website online. Its price
                    ranges between <b>$3 and $5 USD (annually).</b>{" "}
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> Web hosting is a service that provides users
                    with a space on web servers to store the files and databases
                    that make up their website, and make their site accessible
                    from the internet. Its price ranges from{" "}
                    <b>$10 to $25 USD (monthly).</b>
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $350 - $590 USD
                  </li>
                  <li className="liServicios">
                    Updates:{" "}
                    <ul>
                      <li className="liServicios">
                        <b>Text and Image Editing:</b> $5 - $8 USD for all
                        modifications made to the text and images.
                      </li>
                      <li className="liServicios">
                        <b>New functionalities:</b> $20 - $80 USD depending on
                        complexity.
                      </li>
                      <li className="liServicios">
                        <b>New sections:</b> $15 USD each.
                      </li>
                    </ul>
                  </li>
                </ul>
              }
              ulTitle2="Approximate fees in US dollars with affiliation"
              ul2={
                <ul className="ulServicios">
                  <li className="liServicios">
                    <b>Affiliation:</b> $50 USD (monthly).{" "}
                  </li>
                  <li className="liServicios">
                    <b>Updates</b>: $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Domain:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Hosting:</b> $0 USD.
                  </li>
                  <li className="liServicios">
                    <b>Web Design and Development:</b> $350 - 590 USD.
                  </li>
                </ul>
              }
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
