import './css/pricing.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Pricing = (props)=> {
    useEffect(() => {
      AOS.init()
    
    }, [])
    
    let eng = props.eng
    return(
        <div data-aos="fade-up" className="pricingCard">
            <div className={"topPricing " + props.clase}>
                <h3 className='h3CatPricing'>{props.number}</h3>
                <h3 className='h3CatPricing'>{props.titulo}</h3>
            </div>
            <div className="txtPricing">
            {eng && <h6 className="desdeP">from</h6>}
            {!eng && <h6 className="desdeP">desde</h6>}
            <h3 className='h3Pricing'>{props.valor}</h3>
          
            </div>
            <div className="ulPricing">
                {props.ul}
            </div>
            <div className="bottomPricing">
                {eng && <Link to={props.link}  className="h3Pricing2">Learn more</Link>}
                {eng && <p className="pagosAcep">I accept payments in dollars or cryptocurrency.</p>}
                {!eng && <Link to={props.link}  className="h3Pricing2">Conocé más</Link>}
                {!eng && <p className="pagosAcep">Acepto pagos en pesos, dolares o cripto</p>}

            </div>
        </div>
    )
}

export default Pricing;