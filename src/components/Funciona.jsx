import React from "react";

const Funciona = () => {
    return (
    //titulo de la seccion 
    <div className="bg-color_fondo p-2 flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl text-primary font-bold font-medium animate__animated animate__fadeIn">
            ¿Cómo Funciona Cleppi?
        </h1>
    {/* caracteristicas separadas */}
        <section className='bg-color_fondo min-h-[80vh] grid grid-cols-1 md:grid-cols-9'>
             {/* Imagen */}
             <div className=' md:col-span-4 flex items-center justify-center relative animate__animated animate__fadeIn'>
                <img src='Patron_cuerpo2.png' className='flex w-[0px] h-[0px] md:w-[750px] md:h-[750px] md:left-[-18%] absolute'/>
                <img src='funciona.png' className='w-[190px] h-[120px] md:w-[450px] md:h-[300px] shadow-xl top-[25%] absolute'/>

                <img src='tiempo.png' className='w-[60px] h-[60px] top-[55%] right-[68%] md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:top-[25%] md:left-[55%] '/>
                <img src='Cuerpo_4.png' className='w-0 h-0 md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:bottom-[15%] md:right-[55%] '/>
                <img src='cotizar.png' className='w-0 h-0 md:w-[120px] md:h-[120px] shadow-xl border-l-4 border-gray-300 rounded-full 
                        absolute md:bottom-[25%] md:left-[68%] '/>
            </div>

            {/* información */}
            <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-8 animate__animated animate__fadeIn'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-primary text-3xl font-medium leading-[2.5rem]'>
                        Queremos conocerte
                    </h1>
                    <h1 className='text-lg text-primary text-1xl leading-[1rem]'>
                    Vamos a tu farmacia y aprendemos sobre como administras tu negocio y abastecimiento.

                    </h1>
                  
                    <h1 className='text-primary text-3xl font-medium leading-[2.5rem]'>
                    Recomendaciones desde y hacia tu farmacia
                    </h1>
                    <h1 className='text-lg text-primary text-1xl leading-[2rem]'>
                    Nos conectamos a tu sistema para ayudar a planificar tus compras usando algoritmos inteligentes y emitir órdenes de compra en un solo lugar
                    </h1>

                    <h1 className='text-primary text-3xl font-medium leading-[2.5rem]'>
                    Planificación o inmediatez: lo que necesites
                    </h1>
                    <h1 className='text-lg text-primary text-1xl leading-[2rem]'>
                    Logramos ampliar tu gama de proveedores para que compres de forma planificada y con inmediatez para que no dejes de vender: Laboratorios y droguerías a tu servicio
                    </h1>
                </div>
            </div>
        </section>
    </div>
    );

};

export default Funciona;
