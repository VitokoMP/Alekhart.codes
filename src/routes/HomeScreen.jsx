import React, { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import FAQSection from './Components/FAQSection'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { AboutScreen } from './AboutScreen';

export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext); // utilizar el contexto puntual.
  console.log(usuario.nombre);

  return (
    <div>
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img className="img-codes" src="../img/Codes/Codes.png" alt="codes" />
              <a href="#" className="btn btn-primary">Conoce más</a>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">

        <section className="marketing-section">
          <div className="container">
            
            <div className="row justify-content-md-center">
              <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <h1>Diseño Web con React JS</h1>
                <p className="ml-md-3">
                  Nuestro equipo especializado en diseño web utiliza la tecnología React JS para crear sitios web modernos,
                  interactivos y altamente funcionales. Con React JS, podemos ofrecer una experiencia de usuario excepcional
                  y optimizar el rendimiento de tu sitio web.
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
                  <img className="img-codes" src="../imgoffset/3-1.png" alt="codes" />
                  <p className="ml-md-3">
                    Desde mis primeros días como Consultor Senior hasta mi evolución como diseñador y artesano, he encontrado en el arte un medio para explorar y compartir mi visión única del mundo. Cada obra que creo es el resultado de una combinación de experiencia, pasión y dedicación, reflejando mi profundo compromiso con el arte y la belleza en todas sus formas.
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                  <h1>Agencia de Viajes Sostenibles</h1>
                  <img className="img-codes" src="../imgoffset/4-1.png" alt="codes" />
                  <p className="ml-md-3">
                  Al invertir en mi formación y explorar nuevas habilidades, he aprendido a diseñar no solo experiencias digitales, sino también viajes memorables que capturan la esencia de la exploración y la pasión por descubrir nuevos horizontes. ¿Por qué yo? Porque entiendo que cada viaje es único, y estoy aquí para ayudarte a crear el tuyo propio, lleno de emociones y experiencias inolvidables.
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                  <h1>Negocio Ecológico Familiar</h1>
                  <img className="img-codes" src="../imgoffset/5-1.png" alt="codes" />
                  <p className="ml-md-3">Mi trayectoria profesional es una historia de transformación y compromiso. Desde mi experiencia como Consultor Senior hasta convertirme en diseñador y artesano, he forjado un camino único que refleja mi pasión por hacer una diferencia en la sociedad. 
                  </p>
                </div>
              </div>
              <div>
                <FAQSection />
              </div>
            </div>
          </section>
        
      </div>

< AboutScreen ></AboutScreen>

    </div>
  );
};
