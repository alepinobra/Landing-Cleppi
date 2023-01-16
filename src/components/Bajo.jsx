import React from "react";
// Icons
import {
    RiLinkedinFill,
    RiInstagramLine,
    RiFacebookLine,
  } from "react-icons/ri";

const Bajo = () => {
    return (
        <footer className="bg-primary p-8 xl:p-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
    
            {/* logo */}
            <div className="w-1/6">
                <a href="#"><img src="logo-blanco_1@2x.png" alt="" /></a>
            </div>
            {/* Social media */}
            <nav className="flex items-center gap-4">
              <a href="https://www.instagram.com/cleppi.cl/" className="block text-black p-4 bg-boton_ingreso rounded-full hover:text-white transition-colors">
                {" "}
                <RiInstagramLine />{" "}
              </a>
              <a href="https://www.facebook.com/profile.php?id=100085087014007" className="block text-black p-4 bg-boton_ingreso rounded-full hover:text-white transition-colors">
                {" "}
                <RiFacebookLine />{" "}
              </a>
              <a href="https://www.linkedin.com/company/cleppi/?viewAsMember=true" className="block text-black p-4 bg-boton_ingreso rounded-full hover:text-white transition-colors">
                {" "}
                <RiLinkedinFill />{" "}
              </a>
             
            </nav>
          </div>
          {/* Barra de abajo */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-white text-center md:text-left">
              Síguenos!
            </h3>
            {/* barra navegadora de abajo */}
            <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
             
              <a
                href="#aboutUs"
                className="text-gray-300 mt-4 hover:text-white transition-color"
              >
                Blog
              </a>
              <a
                href="#carac"
                className="text-gray-300 mt-4 hover:text-white transition-color"
              >
                ¿Qué somos?
              </a>
              <a
                href="#como"
                className="text-gray-300 mt-4 hover:text-white transition-color"
              >
                ¿Cómo lo vamos a lograr?
              </a>
              <button
                type="button"
                className="button-37"
              >
                <a
                href=" #services"
              > Contactanos </a>             
                </button>
            </nav>
          </div>
          <div className="mt-20">
            <p className="text-gray-300 text-center">
              © Cleppi 2023
            </p>
          </div>
        </footer>
      );
};

export default Bajo;
