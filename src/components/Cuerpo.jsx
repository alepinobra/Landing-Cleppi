import react from 'react';
import { RiPlayFill } from "react-icons/ri";
import { useState, useEffect } from 'react';

import 'animate.css';



const Cuerpo=()=> 
{
    const[loopNum, setLoopNum]= useState(0);
    const[isDeleting, setIsDeleting] = useState(0);
    const[text, setText] = useState('');
    const toRotate =["Cleppi"];
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 1000;

    useEffect(() =>{
        let ticker= setInterval(()=>{
            tick()
        }, delta)

        return() => {clearInterval(ticker)};
    }, [text]
    )

    const tick = () => {
        let i= loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(1000);
        }
    }

    return(
        <section id='cuerpo' className='bg-color_fondo min-h-[90vh] grid grid-cols-1 md:grid-cols-9 '>
           
            {/* información */}
            <div className='mt-8 md:col-span-5 flex items-center justify-center p-20 xl:p-36 animate__animated animate__fadeIn'>
                
                <div className={'flex flex-col gap-8'}>
                    <h1 className='text-primary text-5xl font-bold leading-[4rem] '>
                        {'Apoyamos a tu farmacia de barrio a mejorar su rentabilidad con'} <span className='wrap text-texto_naranja'> {text} </span>
                    </h1>
                    <p className='text-primary text-2xl leading-[2rem]'>
                    Cleppi es la solución de gestión integral de compra que aumenta la competitividad de tu farmacia.</p>
                    <p className='text-primary text-2xl leading-[2rem]'>
                    Buscamos que tus procesos de compras sean más fáciles y rápidos, aumentando el control de tu mix de productos
                    </p>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        
                        <button  className="button-38">
                            {/* referencia al que hacemos para que quede centrado */}
                            <a id="carac" href="#aboutUs">
                                Prueba gratis
                            </a>
                            
                        </button>
                      
                        <button className="w-full xl:w-auto flex  items-center justify-start text-left gap-4 py-2 px-8 rounded-xl 
                                text-0.5xl hover:text-boton_ingreso transition-colors">
                            <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
                                Ver video <br />
                        </button>
                        
                    </div>
                </div>
                
               
            </div>
            {/* Imagen */}
            <div className=' md:col-span-4 flex items-center justify-center relative animate__animated animate__fadeIn'>
                
                <img src='Patron_cuerpo.png' className='md:w-[500.44px] md:h-[600px] absolute md:top-[12%] md:right-[0%] 
                        w-[10px] h-[10px]'/>
                <img src='Cuerpo_1.png' className='w-[0] h-[0] md:w-[450px] md:h-[300px] shadow-xl absolute'/>
                <img src='Cuerpo_2.png' className='w-0 h-0 md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:top-[20%] md:right-[68%] top-[9%] right-[60%]'/>
                <img src='Cuerpo_3.png' className='w-0 h-0 md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:top-[25%] md:left-[55%] '/>
                <img src='Cuerpo_4.png' className='w-0 h-0 md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:bottom-[15%] md:right-[55%] '/>
                <img src='Cuerpo_5.png' className='w-0 h-0 md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:bottom-[25%] md:left-[68%] '/>
                
                            
            </div>
        </section>
    )

};

export default Cuerpo