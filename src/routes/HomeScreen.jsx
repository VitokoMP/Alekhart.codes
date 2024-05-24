import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { AboutScreen } from "./AboutScreen";
import Popup from "./Components/PopUpHome";

export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext); // utilizar el contexto puntual.
  console.log(usuario.nombre);

  return (
    <div>
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-codes"
                src="../img/Codes/Codes.png"
                alt="codes"
              />
               <Popup/>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">
        <section className="marketing-section">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>Diseño Web con Alekhart.Codes </h1>
                <br></br>
                <p className="ml-md-3">
                En Alekhart.Codes, nos especializamos en diseño web utilizando la tecnología React JS (JavaScript) para crear sitios modernos, interactivos y altamente funcionales.
               </p>
                <br></br>
                <p className="ml-md-3">
                Nuestro equipo combina habilidades técnicas con un profundo entendimiento del comportamiento de los usuarios para dotar a cada diseño de una personalidad única y auténtica.

                </p>
                <br></br>
                <p className="ml-md-3">
                Entendemos la importancia de tener una presencia en línea sólida en el año 2024. Por eso, desarrollamos estrategias integrales que incluyen el uso efectivo de las redes sociales para potenciar el lanzamiento de tu sitio web. ¿Has considerado colaborar con influencers para aumentar tu visibilidad? ¡Estamos aquí para ayudarte! Contáctanos y coordinaremos estrategias que se adapten a tus necesidades y objetivos.
 
                </p>

                <p> ¿Listo para convertirte en el mago de tu propio éxito digital? </p>
              </div>
            </div>
          </div>
        </section>
        <br></br>

        <section className="footer-section">
          <div className="container">
            <div className="row justify-content-md-center">
              
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
              <h1>Artistas y Artesanos</h1>
              <img
                className="img-codes"
                src="../imgoffset/3-1.png"
                alt="codes"
              />
              <p className="ml-md-3"> 
              Trabajemos el arte como reflejo de experiencia, pasión y dedicación.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
              <h1>Agencias de Viajes</h1>
              <img
                className="img-codes"
                src="../imgoffset/4-1.png"
                alt="codes"
              />
              <p className="ml-md-3">
              Demos vida a viajes que capturan la esencia cultural y pasión por descubrir.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h1>Negocio Familiar</h1>
              <img
                className="img-codes"
                src="../imgoffset/5-1.png"
                alt="codes"
              />
              <p className="ml-md-3">
                Adentrémonos juntos mostrando tu trayectoria de transformación social y compromiso.
              </p>
            </div>
            <div>
              <FAQSection />
            </div>
            </div>
          </div>
        </section>
      </div>

      <AboutScreen></AboutScreen>
    </div>
  );
};
