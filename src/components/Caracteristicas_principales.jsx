import React from "react";

const Caracteristicas_principales = () => {
    return (
        <div className="bg-color_fondo p-8 flex flex-col items-center justify-center gap-2">
            <h1 id="info" className="text-4xl text-primary font-bold font-medium animate__animated animate__fadeIn">
                ¿Qué puedes hacer con Cleppi?
            </h1>
            {/* Imagenes con la descripcion */}
            <section className='bg-color_fondo grid grid-cols-1 md:grid-cols-9'>       
                <div className='flex flex-col md:col-span-3 flex items-center justify-center p-8 xl:p-20 gap-3 animate__animated animate__fadeIn'>
                    <img src="cotizar.png" className="shadow-xl border-l-4 border-gray-300 rounded-full"></img>
                    <h1 className="text-3xl text-primary font-bold font-medium">Cotiza</h1>
                    <h1 className="text-1xl text-primary font-ligth text-center">Cotiza precios de tus distintos proveedores de manera rápida y sencilla.
                    </h1>
                </div>

                <div className='flex flex-col md:col-span-3 flex items-center justify-center p-8 xl:p-20 gap-3 animate__animated animate__fadeIn'>
                    <img src="tiempo.png" className="shadow-xl border-l-4 border-gray-300 rounded-full"></img>
                    <h1 className="text-3xl text-primary font-bold font-medium">Los datos en tu poder</h1>
                    <h1 className="text-1xl text-primary font-ligth text-center">Ve el desempeño de tu farmacia y de tu mix de productos en tiempo real para prepararte y evitar quiebres de stock
                    </h1>
                </div>
                
                <div className='flex flex-col md:col-span-3 flex items-center justify-center p-8 xl:p-20 gap-3 animate__animated animate__fadeIn'>   
                    <img src="precio.png" className="shadow-xl border-l-4 border-gray-300 rounded-full"></img>
                    <h1 className="text-3xl text-primary font-bold font-medium">Ahorro</h1>
                    {/* referencia para el header */}
                    <h1 id="como" className="text-1xl text-primary font-ligth text-center">Queremos ayudarte a encontrar los mejores precios con nuestras recomendaciones, ahorrando tiempo y dinero 
                    </h1>
                </div>

            </section>
        </div>
        );
};

export default Caracteristicas_principales;