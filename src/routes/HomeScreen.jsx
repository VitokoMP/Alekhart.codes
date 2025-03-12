import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { AboutScreen } from "./AboutScreen";
import Popup from "./Components/PopUpHome";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

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
              <Popup />
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">
        <section className="marketing-section">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-8 col-sm-12 text-center mb-4 mb-md-0">
                <ReactProjectsSlider />   <br></br>   <br></br>   <br></br>
              </div>

            </div>
          </div>
        </section>
        <br></br>

        <section className="footer-section">
          <div className="container">
            <div className="row justify-content-md-center">

              <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>Especialista en Outsourcing</h1>
                <img
                  className="img-codes"
                  src="../imgoffset/3-1.png"
                  alt="codes"
                />
                <p className="ml-md-3">
                  Trabajos de forma particular para tu empresa.
                </p>
              </div>
              <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>Metodologias Ágiles</h1>
                <img
                  className="img-codes"
                  src="../imgoffset/4-1.png"
                  alt="codes"
                />
                <p className="ml-md-3">
                  Demos vida a Proyectos junto a metologías ágiles de desarrollo.
                </p>
              </div>
              <div className="col-md-4 col-sm-12 text-center">
                <h1>Desarrollo profesional a Medida</h1>
                <img
                  className="img-codes"
                  src="../imgoffset/5-1.png"
                  alt="codes"
                />
                <p className="ml-md-3">
                  Adentrémonos juntos al desarrollo de aplicaciones web a Medida.
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
