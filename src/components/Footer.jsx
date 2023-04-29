import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/footer.css";
import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  const [email, setemail] = useState("");
  const [motivo, setmotivo] = useState(
    "¡Hola me gustaría contratarte para desarrollar mi pagina web!"
  );
  const [mensaje, setmensaje] = useState("Hola");

  const handleForm = (event) => {
    event.preventDefault();

    window.open(
      `mailto:jmbroggidev@gmail.com?subject=${motivo}&body=${mensaje}`
    );
  };
  return (
    <div className="footerM">
      {props.eng && (
        <div className="footer" id="contacto">
          <div className="izqFooter">
            <h3 className="logoFooter">
              <span className="jmb">JMBroggi</span>
              <span className="dev">.dev</span>
            </h3>
            <br />
            <div className="redesFooter">
              
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
            <p className="pFooter">
            Currently, I spend most of my time working as a freelancer but I am open to any full-time or part-time job proposal that may arise.
            <br />
            <br />
              Please feel free to get in touch with me at your convenience. I
              would appreciate communicating via email, particularly given the
              potential time zone disparity between us.
            </p>
            <a href="mailto:jmbroggidev@gmail.com" className="emailFooter">
              jmbroggidev@gmail.com
            </a>
            <h6 className="derechos">© 2023 by JMBroggi.</h6>
          </div>
          <div className="derFooter">
            <h3 className="h3Footer">¡Let´s work together!</h3>
            <form className="formFooter">
              <input
                type="text"
                className="input1"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="text"
                className="input1"
                placeholder="Reason"
                onChange={(e) => setmotivo(e.target.value)}
              />
              <input
                type="text"
                className="input2"
                placeholder="Message"
                onChange={(e) => setmensaje(e.target.value)}
              />
              <button onClick={handleForm} className="inputSubmit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {props.esp && (
        <div className="footer" id="contacto">
          <div className="izqFooter">
            <h3 className="logoFooter">
              <span className="jmb">JMBroggi</span>
              <span className="dev">.dev</span>
            </h3>
            <br />
            <div className="redesFooter">
              
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
            <p className="pFooter">
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
            <h6 className="derechos">© 2023 by JMBroggi.</h6>
          </div>
          <div className="derFooter">
            <h3 className="h3Footer">¡Pongamonos en contacto!</h3>
            <form className="formFooter">
              <input
                type="text"
                className="input1"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="text"
                className="input1"
                placeholder="Motivo"
                onChange={(e) => setmotivo(e.target.value)}
              />
              <input
                type="text"
                className="input2"
                placeholder="Mensaje"
                onChange={(e) => setmensaje(e.target.value)}
              />
              <button onClick={handleForm} className="inputSubmit">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Footer;
