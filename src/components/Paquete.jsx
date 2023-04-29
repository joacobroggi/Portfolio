import { Link } from "react-router-dom";

const Paquete = (props)=> {
    return (
        <div className={'paqueteComp ' + props.img}>
            <Link to={props.link} className="filtroP" style={{textDecoration: 'none'}}>
            <div className="arribaP">
                <h5 className="numeroPaquete">{props.numero}</h5>
            </div>
            <div className="abajoP">
                <h2 className="h2P">{props.titulo}</h2>
                <h4 className="h4P">{props.descripcion}</h4>
                
            </div>
            </Link>
        </div>
    )
}

export default Paquete;