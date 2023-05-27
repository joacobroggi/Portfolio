import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Proyecto = (props)=> {

    useEffect(() => {
        AOS.init();
      }, []);



    return (
        <div>
            {/* IMG A LA izq */}
            {props.izq && (
                <div data-aos="fade-up" className="project">
                    <div className={'imgIzqW ' + props.img}></div>

                    <div className="derTextW">
                        <h3 className='workTitle'>{props.title}</h3>
                        <p className="workDesc">
                            {props.desc}
                        </p>
                        
                        <p className="workDesc">
                            {props.desc2}
                        </p>
                        <br />
                        {props.aviso && (
                            <p className="workDesc"><b>{props.aviso}</b></p>
                        )}
                        <br />
                        <a className='linkW' href={props.link}>{props.link}</a>
                    </div>
                </div>
            )}


{props.der && (
               <div>
                 <div data-aos="fade-up" className="project">
                    <div className="derTextW">
                        <h3 className='workTitle'>{props.title}</h3>
                        <p className="workDesc">
                            {props.desc}
                        </p>
                       
                        <p className="workDesc">
                            {props.desc2}
                        </p>
                        <br />
                        {props.aviso && (
                            <p className="workDesc"><b>{props.aviso}</b></p>
                        )}
                        <br />
                        <a className='linkW' href={props.link}>{props.link}</a>
                    </div>
                    <div className={'imgIzqW ' + props.img}></div>
                </div>

                <div data-aos="fade-up" className="projectM">
                <div className={'imgIzqWM ' + props.img}></div>
                <div className="textProjectM">
                <h3 className='workTitle'>{props.title}</h3>
                        <p className="workDesc">
                            {props.desc}
                        </p>
                       
                        <p className="workDesc">
                            {props.desc2}
                        </p>
                        <br />
                        {props.aviso && (
                            <p className="workDesc"><b>{props.aviso}</b></p>
                        )}
                        <br />
                        <a className='linkW' href={props.link}>{props.link}</a>
                </div>
                </div>
               </div>
            )}
        </div>
    )
};


export default Proyecto;