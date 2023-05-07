import { Link } from 'react-router-dom';
import './css/header.css'

const Header = (props) =>{
    
    return (
<header>
        
        {props.h2 && <ul className="ulHeader">
            <Link to='/' className="liHeader" style={{textDecoration: 'none', color: 'white'}}>sobre mí</Link>
            <Link to='/' className="liHeader" style={{textDecoration: 'none', color: 'white'}}>proyectos</Link>
            <Link to='/' className="liHeader" style={{textDecoration: 'none', color: 'white'}}>contacto</Link>
            <Link to='/precios' className="liHeader" style={{textDecoration: 'none', color: 'white'}}>precios</Link>
            <Link to='/paquetes' className="liHeader" style={{textDecoration: 'none', color: 'white'}}>paquetes</Link>
            {props.lang &&  <li className="btnPaquetesHeader">
                <button className="flags flagActive"><img className='flagImgA' src={require('../img/spain.png')} alt="" /></button>
                <button className="flags"><img className='flagImg' src={require('../img/usa.png')} alt="" /></button> </li>}
            
        </ul>}
        
    </header>
    )
};

export default Header;