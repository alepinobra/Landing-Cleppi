import React from "react";

const Blog = () => {
    return  (
        <div id="aboutUs" className="p-8 xl:p-20 bg-color_fondo">
          <div className="mb-8 animate__animated animate__fadeIn">
            <h1 className="text-[40px] font-medium text-primary text-center">
              Blog
            </h1>
            <p className="text-xl text-gray-500 text-center">
              Mantente informado de los avances de Cleppi
            </p>
          </div>
          {/* noticias */}
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate__animated animate__fadeIn">
            <div className="flex flex-col gap-2">
              <button>
                <a href="https://noticias.uai.cl/cleppi-la-startup-que-potencia-a-las-farmacias-independientes/">
                    <img
                        src="noticia_1.png"
                        className="w-full h-[300px] object-cover rounded-3xl"
                    />
                    <p className="text-gray-500">UAI Noticias - 19 de Octubre 2022</p>
                    <h3 className="text-2xl font-bold">“Cleppi”: la startup que potencia a las farmacias independientes</h3>
                    <p className="text-gray-500">
                    “El objetivo era presentar las ventajas que trae la digitalización para un mejor orden y gestión dentro de la farmacia...”.
                    </p>
                </a>
              </button>
            
            </div>
            <div className="flex flex-col gap-2">
              <button>
                <a href="https://noticias.uai.cl/ezfarma-plataforma-que-impulsa-la-compra-en-farmacias-independientes-gana-prototypes-2021/">
                    <img
                        src="noticia_2.png"
                        className="w-full h-[300px] object-cover rounded-3xl"
                    />
                    <p className="text-gray-500">UAI Noticias - 23 de Noviembre 2021</p>
                    <h3 className="text-2xl font-bold">Prototypes 2021: EZFARMA, plataforma que impulsa la compra en farmacias independientes obtiene el primer lugar</h3>
                    <p id="services" className="text-gray-500">
                    “EZFARMA, plataforma que tiene como fin equilibrar la balanza entre las grandes cadenas de farmacias y las independientes...”.
                    </p>
                </a>
              </button>
            
            </div>

          </div>

       
        </div>
      );
};

export default Blog;
