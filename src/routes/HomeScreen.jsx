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
                <h1>Diseño Web con Alekhart.Code </h1>
                <p className="ml-md-3">
                  Nuestro equipo especializado en diseño web utiliza la
                  tecnología React JS para crear sitios web modernos,
                  interactivos y altamente funcionales.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br></br>

        <section className="footer-section">
          <div className="container">
            <div className="row justify-content-md-center">
              
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
              <h1>Artistas y Artesanos Locales</h1>
              <img
                className="img-codes"
                src="../imgoffset/3-1.png"
                alt="codes"
              />
              <p className="ml-md-3"> 
              Arte como reflejo de experiencia, pasión y dedicación.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
              <h1>Agencia de Viajes Sostenibles</h1>
              <img
                className="img-codes"
                src="../imgoffset/4-1.png"
                alt="codes"
              />
              <p className="ml-md-3">
              Viajes que capturan esencia cultural y pasión por descubrir.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h1>Negocio Ecológico Familiar</h1>
              <img
                className="img-codes"
                src="../imgoffset/5-1.png"
                alt="codes"
              />
              <p className="ml-md-3">Trayectoria de transformación social y compromiso ecológico.
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
