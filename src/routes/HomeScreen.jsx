import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div>
      {/* HERO - Partner técnico para agencias que escalan */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-codes"
                src="../img/Codes/Codes.png"
                alt="codes"
              />
              
              <div className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '3px', color: '#0d6efd', fontSize: '0.85rem' }}>
                PARTNER TÉCNICO · CUPO LIMITADO
              </div>
              
              <h1 className="display-4 font-weight-bold mt-3">
                Ya facturas. Tienes equipo. <span className="text-primary">Pero los plugins ya no te alcanzan.</span>
              </h1>
              
              <p  className="lead mt-4 mb-4"
  style={{
    color: '#c9bebe',
    fontSize: '1.3rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontWeight: '500'
  }}>
                Desarrollé Ticket Flow y Vibra Digital. No instalo plugins. 
                Construyo <strong>sistemas a medida dentro de WordPress</strong> para que tu agencia 
                cierre proyectos que otros no pueden.
              </p>
              
              {/* Badges de autoridad - Consistente */}
              <div className="d-flex justify-content-center gap-3 mb-5">
                <span className="badge bg-dark text-white px-4 py-2">+11 años</span>
                <span className="badge bg-dark text-white px-4 py-2">Sistemas en producción</span>
                <span className="badge bg-dark text-white px-4 py-2">Cupos limitados</span>
              </div>

              <a
                href="#contacto"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale"
                style={{ fontSize: '1.2rem' }}
              >
                Explorar una alianza técnica →
              </a>
              
              <p className="mt-4 text-muted small" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                No tomo proyectos sueltos. Me integro como partner técnico cuando hay una estructura que escalar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">
        
        {/* AUTORIDAD - Trayectoria */}
        <section className="marketing-section py-5">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10 col-lg-8 text-center">
                <h2 className="display-5 font-weight-bold mb-4" style={{ color: '#ffffff' }}>
                  Más de una década resolviendo <span className="text-primary">lo que frena a las agencias</span>
                </h2>
                <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                  He visto el mismo patrón decenas de veces: agencias que venden bien, 
                  pero se estancan cuando los clientes piden soluciones que no existen en el directorio de plugins.
                </p>
                <p className="mt-3" style={{ color: '#ffffff', fontWeight: '500' }}>
                  Yo entro ahí. Construyo el sistema. Y tú sigues vendiendo.
                </p>
                
                <div className="mt-5">
                  <ReactProjectsSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA - Diagnóstico */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 font-weight-bold" style={{ color: '#212529' }}>
                  Si esto te suena, <span style={{ color: '#0d6efd' }}>estás en el lugar correcto</span>
                </h2>
              </div>
            </div>
            
            <div className="row g-4 justify-content-center">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="display-4 mb-3">🔌</div>
                    <h4 style={{ color: '#000000' }}className="h5 font-weight-bold mb-3">Llevas 3 semanas buscando un plugin que no existe</h4>
                    <p className="mb-0 text-muted">Y sabes que si existiera, costaría $99 y no haría lo que realmente necesitas.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="display-4 mb-3">⏰</div>
                    <h4 style={{ color: '#000000' }} className="h5 font-weight-bold mb-3">Todo lo complejo depende de ti</h4>
                    <p className="mb-0 text-muted">Si no lo haces tú, no se hace. Y eso no escala.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="display-4 mb-3">📦</div>
                    <h4 style={{ color: '#000000' }} className="h5 font-weight-bold mb-3">Dijiste "sí" a un proyecto que no sabes cómo vas a entregar</h4>
                    <p className="mb-0 text-muted">Porque el cliente vale la pena, pero la solución no existe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASOS - Resultados */}
<section className="py-5" style={{ background: '#0a0a0a' }}>
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h2 className="display-5 font-weight-bold" style={{ color: '#ffffff' }}>
          Agencias que ya <span className="text-primary">dejaron de instalar plugins</span>
        </h2>
      </div>
    </div>
    
    <div className="row">
      {/* Caso 1 - Ticket Flow */}
      <div className="col-md-4 mb-4">
        <div className="card border-0 h-100 hover-card" style={{ background: '#151515' }}>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge px-3 py-2" style={{ background: '#0d6efd', color: '#ffffff' }}>Ticket Flow</span>
              <span className="badge px-3 py-2" style={{ background: '#28a745', color: '#ffffff' }}>-85%</span>
            </div>
            <h3 className="h5 font-weight-bold mb-3" style={{ color: '#000000' }}>Ticketera interna</h3>
            <p className="mb-0" style={{ color: '#cccccc' }}>Sistema de tickets para gestión de solicitudes. Reemplazó 3 herramientas externas. La agencia ahora vende este sistema a otros clientes.</p>
          </div>
        </div>
      </div>

      {/* Caso 2 - Vibra Digital */}
      <div className="col-md-4 mb-4">
        <div className="card border-0 h-100 hover-card" style={{ background: '#151515' }}>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge px-3 py-2" style={{ background: '#0d6efd', color: '#ffffff' }}>Vibra Digital</span>
              <span className="badge px-3 py-2" style={{ background: '#28a745', color: '#ffffff' }}>+40%</span>
            </div>
            <h3 className="h5 font-weight-bold mb-3" style={{ color: '#000000' }}>Cotizaciones automáticas</h3>
            <p className="mb-0" style={{ color: '#cccccc' }}>De 2 horas a 30 segundos. Proyecto que no podían entregar con Elementor + plugins.</p>
          </div>
        </div>
      </div>

      {/* Caso 3 - Dashboard */}
      <div className="col-md-4 mb-4">
        <div className="card border-0 h-100 hover-card" style={{ background: '#151515' }}>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge px-3 py-2" style={{ background: '#0d6efd', color: '#ffffff' }}>Dashboard</span>
              <span className="badge px-3 py-2" style={{ background: '#28a745', color: '#ffffff' }}>+100%</span>
            </div>
            <h3 className="h5 font-weight-bold mb-3" style={{ color: '#000000' }}>Panel administrativo</h3>
            <p className="mb-0" style={{ color: '#cccccc' }}>Métricas en tiempo real. Adiós a los reportes manuales en Excel.</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Frase de cierre */}
    <p className="text-center text-white mt-4" style={{ fontSize: '1.2rem' }}>
      Cada uno de estos desarrollos permitió que la agencia <strong>cobrara 3x más que un sitio web tradicional</strong>.
    </p>
  </div>
</section>

        {/* FILTRO - Criterios de colaboración */}
        <div className="container mt-5 pt-4">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="h3 font-weight-bold" style={{ color: '#212529' }}>Trabajo con muy pocas agencias</h2>
              <p style={{ color: '#6c757d' }}>Trabajo con máximo 3 agencias en paralelo. Si cumples esto, conversemos.</p>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm" style={{ background: '#fff5f5', borderLeft: '4px solid #dc3545' }}>
                <div className="card-body p-4">
                  <h3 className="h5 font-weight-bold mb-3" style={{ color: '#dc3545' }}>✗ No calificas si...</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Facturas menos de 5M CLP mensuales</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Tu negocio es instalar plugins</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>No tienes clientes con necesidades complejas</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Buscas un programador "barato"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm" style={{ background: '#f0f9f0', borderLeft: '4px solid #28a745' }}>
                <div className="card-body p-4">
                  <h3 className="h5 font-weight-bold mb-3" style={{ color: '#28a745' }}>✓ Calificas si...</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Ya facturas y quieres escalar</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Tienes clientes que piden más que WordPress</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Necesitas capacidad técnica sin contratar equipo</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Quieres vender proyectos de 4-8M+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 text-center mt-4">
              <div className="p-4 rounded-3" style={{ background: '#f8f9fa' }}>
                <p className="mb-0 fw-bold" style={{ fontSize: '1.2rem' , color: '#495057'}}>
                  Si calificas, <span className="text-primary">tienes mi atención exclusiva</span>.
                </p>
                <p className="text-muted mt-2">
                  Solo respondo conversaciones que cumplan estos criterios.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Conversación estratégica */}
        <section id="contacto" className="py-5 bg-primary text-white mt-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-8">
                <div className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '3px', fontSize: '0.85rem', opacity: '0.9' }}>
                  CUPO LIMITADO
                </div>
                <h2 className="display-5 font-weight-bold mb-4">
                  Si tu agencia ya facturó, pero sabes que podrías cerrar proyectos más grandes si tuvieras capacidad técnica interna, hablemos.
                </h2>
                <p className="lead mb-5" style={{ fontSize: '1.3rem' }}>
                  No tomo proyectos. Tomo cuellos de botella. Cupos limitados este semestre.
                </p>
                <a
                  href="mailto:victor19.mp@gmail.com"
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-sm font-weight-bold"
                  style={{ fontSize: '1.2rem' }}
                >
                  Solicitar conversación de diagnóstico →
                </a>
                <p className="mt-4" style={{ opacity: '0.9' }}>
                  {usuario?.nombre ? `Hola ${usuario.nombre}, ` : ''}Respuesta en menos de 24h • Solo si cumples criterios
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <AboutScreen />
      </div>

      {/* ESTILOS */}
      <style jsx>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 2rem rgba(0,0,0,0.3) !important;
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .badge {
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};