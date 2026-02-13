import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div>
      {/* HERO SECTION - Estilo original intacto */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-codes"
                src="../img/Codes/Codes.png"
                alt="codes"
              />
              
              {/* TEXTO PROFESIONAL AGREGADO */}
              <h1 className="display-4 font-weight-bold mt-5">
                Desarrollo de aplicaciones React dentro de WordPress
              </h1>
              <p className="lead text-muted mt-3 mb-4">
                Casos reales: <span className="text-primary font-weight-semibold">Ticket Flow</span> y{" "}
                <span className="text-primary font-weight-semibold">Vibra Digital</span> integrados directamente en WordPress.
              </p>
              <a
                href="#contacto"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale"
              >
                Agendar evaluación técnica
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">
        
        {/* AUTHORIDAD / MARKETING SECTION */}
        <section className="marketing-section py-5">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10 col-lg-8 text-center">
                <h2 className="display-5 font-weight-bold mb-4">
                  Consultor independiente con {new Date().getFullYear() - 2015}+ años de trayectoria
                </h2>
                <p className="lead text-muted">
                  Especializado en desarrollo de aplicaciones a medida dentro de WordPress.
                  Trabajo como partner técnico para agencias que necesitan soluciones avanzadas sin contratar un desarrollador full-time.
                </p>
                
                {/* SLIDER DE PROYECTOS */}
                <div className="mt-5">
                  <ReactProjectsSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA SECTION - Cards en estilo Bootstrap */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 font-weight-bold">Cuando WordPress no alcanza</h2>
              </div>
            </div>
            
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="icon-circle bg-primary bg-opacity-10 mx-auto mb-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-weight-bold h5">Plugins que no escalan</h4>
                    <p className="text-muted mb-0">Dependencia excesiva de soluciones genéricas.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="icon-circle bg-primary bg-opacity-10 mx-auto mb-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-weight-bold h5">Procesos manuales</h4>
                    <p className="text-muted mb-0">Flujos que podrían estar automatizados.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="icon-circle bg-primary bg-opacity-10 mx-auto mb-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      </svg>
                    </div>
                    <h4 className="font-weight-bold h5">Integraciones frágiles</h4>
                    <p className="text-muted mb-0">Herramientas que no conversan entre sí.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="icon-circle bg-primary bg-opacity-10 mx-auto mb-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d6efd" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-weight-bold h5">Sistemas improvisados</h4>
                    <p className="text-muted mb-0">Formularios y planillas reemplazando software real.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS REALES SECTION */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 font-weight-bold">Casos reales desarrollados</h2>
              </div>
            </div>
            
            <div className="row">
              {/* Caso 1: Ticket Flow */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-lg h-100 hover-card">
                  <img 
                    src="/img/3-e1661447860350-1024x793.png" 
                    className="card-img-top" 
                    alt="Ticket Flow"
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">
                      Sistema interno
                    </span>
                    <h3 className="font-weight-bold h4">Ticket Flow interno</h3>
                    <p className="text-muted">
                      Sistema de tickets integrado en WordPress. Gestión de solicitudes, estados personalizados, 
                      asignación interna y control por roles.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Caso 2: PDF Cotización */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-lg h-100 hover-card">
                  <img 
                    src="/img/Logo-VibraDigital.cl-FINAL-01.png" 
                    className="card-img-top bg-light p-4" 
                    alt="PDF Cotización"
                    style={{ height: "240px", objectFit: "contain" }}
                  />
                  <div className="card-body p-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">
                      PDF dinámico
                    </span>
                    <h3 className="font-weight-bold h4">Generación automática de PDF</h3>
                    <p className="text-muted">
                      Aplicación React dentro de WordPress que genera cotizaciones dinámicas en PDF según variables del proyecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS SECTION - TU ESTRUCTURA ORIGINAL + CONTENIDO MEJORADO */}
        <section className="footer-section py-5">
          <div className="container">
            <div className="row justify-content-md-center">
              
              {/* Servicio 1 - Outsourcing */}
              <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <div className="service-card p-3">
                  <h1 className="h4 font-weight-bold mb-3">Especialista en Outsourcing</h1>
                  <img
                    className="img-codes mb-3"
                    src="../imgoffset/3-1.png"
                    alt="outsourcing"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="text-muted">
                    Trabajos de forma particular para tu empresa. Desarrollo de aplicaciones a medida.
                  </p>
                </div>
              </div>
              
              {/* Servicio 2 - Metodologías Ágiles */}
              <div className="col-md-4 col-sm-12 text-center mb-4 mb-md-0">
                <div className="service-card p-3">
                  <h1 className="h4 font-weight-bold mb-3">Metodologías Ágiles</h1>
                  <img
                    className="img-codes mb-3"
                    src="../imgoffset/4-1.png"
                    alt="agile"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="text-muted">
                    Damos vida a proyectos con metodologías ágiles de desarrollo. Scrum, Kanban, CI/CD.
                  </p>
                </div>
              </div>
              
              {/* Servicio 3 - Desarrollo a Medida */}
              <div className="col-md-4 col-sm-12 text-center">
                <div className="service-card p-3">
                  <h1 className="h4 font-weight-bold mb-3">Desarrollo profesional a Medida</h1>
                  <img
                    className="img-codes mb-3"
                    src="../imgoffset/5-1.png"
                    alt="custom"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="text-muted">
                    Adentrémonos juntos al desarrollo de aplicaciones web completamente personalizadas.
                  </p>
                </div>
              </div>
            </div>

            {/* QUÉ DESARROLLO PARA AGENCIAS */}
            <div className="row mt-5 pt-4">
              <div className="col-12 text-center mb-4">
                <h2 className="h3 font-weight-bold">Qué desarrollo para agencias</h2>
              </div>
              <div className="col-md-8 mx-auto">
                <div className="row">
                  {[
                    "Dashboards personalizados",
                    "Sistemas internos tipo ticket",
                    "Automatizaciones conectadas a APIs",
                    "Generación dinámica de documentos PDF",
                    "Aplicaciones React embebidas en WordPress"
                  ].map((item, idx) => (
                    <div key={idx} className="col-md-6 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PROCESO DE TRABAJO */}
            <div className="row mt-5 pt-4">
              <div className="col-12 text-center mb-4">
                <h2 className="h3 font-weight-bold">Cómo trabajo</h2>
                <p className="lead text-muted mt-3">
                  Trabajo como partner técnico: analizo requerimientos, diseño la arquitectura 
                  y desarrollo la solución como aplicación real dentro de WordPress.
                </p>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="card border-0 bg-light text-center p-4 h-100">
                  <div className="display-4 font-weight-bold text-primary mb-2">1</div>
                  <h4 className="h5 font-weight-bold">Evaluación</h4>
                  <p className="text-muted mb-0">Analizamos tu necesidad y definimos alcance técnico.</p>
                </div>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="card border-0 bg-light text-center p-4 h-100">
                  <div className="display-4 font-weight-bold text-primary mb-2">2</div>
                  <h4 className="h5 font-weight-bold">Diseño</h4>
                  <p className="text-muted mb-0">Diseño de arquitectura y flujos a medida.</p>
                </div>
              </div>
              
              <div className="col-md-4 mb-4">
                <div className="card border-0 bg-light text-center p-4 h-100">
                  <div className="display-4 font-weight-bold text-primary mb-2">3</div>
                  <h4 className="h5 font-weight-bold">Implementación</h4>
                  <p className="text-muted mb-0">Desarrollo React integrado a WordPress listo para producción.</p>
                </div>
              </div>
            </div>

            {/* FAQ SECTION */}
            <div className="row mt-4">
              <div className="col-12">
                <FAQSection />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA FINAL / CONTACTO */}
      <section id="contacto" className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h2 className="display-5 font-weight-bold mb-4">
                Si tu agencia necesita más que un plugin, conversemos
              </h2>
              <a
                href="mailto:victor19.mp@gmail.com"
                className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-sm font-weight-bold"
              >
                Agendar reunión técnica
              </a>
              <p className="mt-4 text-white opacity-75">
                {usuario?.nombre ? `Hola ${usuario.nombre}, ` : ''}Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutScreen />
      
      {/* ESTILOS ADICIONALES (puedes moverlos a tu archivo CSS) */}
      <style jsx>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 2rem rgba(0,0,0,0.1) !important;
        }
        .icon-circle {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .bg-opacity-10 {
          --bs-bg-opacity: 0.1;
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .opacity-75 {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
};