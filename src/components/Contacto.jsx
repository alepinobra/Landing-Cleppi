import React, { useRef } from 'react';
// Icons
import { AiFillInteraction } from "react-icons/ai";
import { FaBrain, FaObjectUngroup } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const mensajeExito = () =>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    background: '#000050',
    color: 'white',
    text: 'Sus datos han sido registrados, lo contactaremos a la brevedad',
    showConfirmButton: false,
    timer: 1500
  })
};

const mensajeError = () =>{
  Swal.fire({
    position: 'center',
    icon: 'error',
    background: '#000050',
    color: 'white',
    text: 'Ocurrió un error. Aguarde un momento e intente nuevamente.',
    showConfirmButton: false,
    timer: 1500
  })
};

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xn5nhki', 'template_x4jr13r', form.current, 'EIsQ9ODnZgXyBLsiG')
      .then((result) => {
          console.log(result.text);
          mensajeExito();
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          mensajeError();
          e.target.reset();
      });
  };
  
  return (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20 bg-color_fondo"
        >
          <div className="flex flex-col gap-4 animate__animated animate__fadeIn">
            <h1 className="text-[40px] font-bold text-primary text-center"> Contáctanos y saca todo el potencial de tu farmacia con Cleppi </h1>
            <p className="text-[20px] text-gray-500 text-center" >
            Rellena el siguiente formulario para que trabajemos juntos en potenciar tu farmacia de barrio
            </p>
            <form ref={form} onSubmit={sendEmail} className="w-full">
            
            <div className="relative p-2">
                {/* ingresar una pantalla de msj y el forms*/}
                <input
                  name='nombre_qf'
                  type="text"
                  className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                  placeholder="Nombre"
                /></div>
              
              <div className="relative p-2">
                {/* ingresar una pantalla de msj y el forms*/}
                <input
                  name='nombre_farmacia'
                  type="text"
                  className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                  placeholder="Farmacia"
                /></div>

              <div className="relative p-2">
                {/* ingresar una pantalla de msj y el forms*/}
                <input
                  name='mail_telefono'
                  type="text"
                  className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                  placeholder="Mail o teléfono"
                />
                <button 
                  href="#cuerpo"
                  type="submit"
                  className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
                >
                <a>Enviar</a>  
                  
                </button>
              </div>
            </form>
          </div>
          {/* beneficios primera ver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__fadeIn">
            <div className="flex flex-col gap-2">
              <FaObjectUngroup className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Cotizador y comparador de precios</h3>
              <p className="text-gray-500">
                Te ayudamos a comparar los precios de tus proveedores para que puedas elegir al mejor
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <FaBrain className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Recomendaciones inteligentes de compra </h3>
              <p className="text-gray-500">
                Te ayudamos en el qué y cuánto comprar como primera instacia de la plataforma
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <AiFillInteraction className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Centralizar información de compras </h3>
              <p className="text-gray-500">
                Tendrás tu información de venta y compra centralizada de manera sencilla y fácil de entender
              </p>
            </div>
          </div>
        </div>
       
      );
};

export default Contacto;
