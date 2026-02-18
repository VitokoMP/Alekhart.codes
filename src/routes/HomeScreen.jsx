import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div>
      {/* HERO - Arquitectura técnica para agencias */}
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
                INTERVENCIÓN ESTRATÉGICA · CUPO LIMITADO
              </div>
              
              <h1 className="display-4 font-weight-bold mt-3">
                Arquitectura técnica para agencias <span className="text-primary">que necesitan escalar sin fricción</span>
              </h1>
              
              <p className="lead mt-4 mb-4"
                style={{
                  color: '#c9bebe',
                  fontSize: '1.3rem',
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontWeight: '500'
                }}>
                Intervengo en <strong>módulos críticos de sistemas en producción</strong> cuando el equipo interno necesita 
                liberar carga crítica, resolver deuda técnica o estabilizar módulos 
                que frenan el crecimiento.
              </p>
              
              {/* Badges de autoridad */}
              <div className="d-flex justify-content-center gap-3 mb-5">
                <span className="badge bg-dark text-white px-4 py-2">+11 años</span>
                <span className="badge bg-dark text-white px-4 py-2">Sistemas en producción</span>
                <span className="badge bg-dark text-white px-4 py-2">3 agencias máximo</span>
              </div>

              <a
                href="#contacto"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale"
                style={{ fontSize: '1.2rem' }}
              >
                Ver si encajamos →
              </a>
              
              <p className="mt-4 text-muted small" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
                No reemplazo equipos. Refuerzo donde el sistema necesita escalar sin perder clientes.
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
                  Sistemas críticos <span className="text-primary">en producción</span>
                </h2>
                <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                  Ticket Flow, Vibra Digital y otros módulos que hoy son productos 
                  dentro de agencias. <strong>No son experimentos. Están activos, generando ingresos y escalando con sus equipos.</strong>
                </p>
                
                <div className="mt-5">
                  <ReactProjectsSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN - ¿Cuándo tiene sentido traerme? */}
        <section className="py-5" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <span className="badge bg-primary text-white px-3 py-2 mb-3" style={{ fontSize: '0.9rem' }}>ROL ESTRATÉGICO</span>
                <h2 className="display-5 font-weight-bold mb-4" style={{ color: '#212529' }}>
                  ¿Cuándo tiene sentido traerme?
                </h2>
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="p-5 rounded-4 shadow-sm" style={{ background: '#f8f9fa', borderLeft: '4px solid #0d6efd' }}>
                  <p className="lead mb-4" style={{ fontSize: '1.25rem', color: '#212529', lineHeight: '1.7' }}>
                    Entro cuando tu proyecto necesita escalar y la arquitectura empieza a generar fricción. 
                    Cuando el equipo interno tiene la capacidad, pero no el ancho de banda para intervenir 
                    un módulo crítico o pagar deuda técnica sin frenar la hoja de ruta.
                  </p>
                  <p className="mb-4" style={{ fontSize: '1.1rem', color: '#495057' }}>
                    No siempre es una urgencia con incendios. Es una decisión estratégica: cuando esa capa 
                    técnica no se resuelve con calidad, el cliente empieza a percibir fricción en la entrega.
                  </p>
                  <p className="fw-bold mb-0" style={{ fontSize: '1.1rem', color: '#0d6efd' }}>
                    Me hago cargo del sistema complejo, lo estabilizo y lo devuelvo optimizado para que 
                    el equipo continúe sobre terreno firme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE DE PROCESO - Así intervengo */}
        <section className="py-5" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <div className="row mb-5 text-center">
              <div className="col-12">
                <h2 className="display-5 font-weight-bold" style={{ color: '#212529' }}>
                  Así <span className="text-primary">intervenimos</span>
                </h2>
              </div>
            </div>
            
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 border-0 shadow-sm p-3 text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">🎯</div>
                    <h4 className="h5 fw-bold mb-3" style={{ color: '#000000' }}>Acotamos</h4>
                    <p className="text-muted mb-0">Seleccionamos un módulo, servicio o sistema concreto que esté frenando el crecimiento.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 border-0 shadow-sm p-3 text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">🔍</div>
                    <h4 className="h5 fw-bold mb-3" style={{ color: '#000000' }}>Diagnosticamos</h4>
                    <p className="text-muted mb-0">Analizamos arquitectura, deuda técnica y cuellos de botella.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 border-0 shadow-sm p-3 text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">⚙️</div>
                    <h4 className="h5 fw-bold mb-3" style={{ color: '#000000' }}>Ejecutamos</h4>
                    <p className="text-muted mb-0">Refactorizamos, rediseñamos o escalamos la capa crítica con estándares de calidad.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 border-0 shadow-sm p-3 text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">📘</div>
                    <h4 className="h5 fw-bold mb-3" style={{ color: '#000000' }}>Entregamos</h4>
                    <p className="text-muted mb-0">Documentación clara, tests y estabilidad para que el equipo lo adopte sin fricción.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 border-0 shadow-sm p-3 text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">🚪</div>
                    <h4 className="h5 fw-bold mb-3" style={{ color: '#000000' }}>Salimos</h4>
                    <p className="text-muted mb-0">Transferencia clara al equipo interno, documentación funcional y cierre formal de la intervención. Sin interferir en la cultura ni en el flujo de trabajo diario.</p>
                  </div>
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
                    <h4 style={{ color: '#000000' }} className="h5 font-weight-bold mb-3">Llevas 3 semanas buscando un plugin que no existe</h4>
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

        {/* CASOS - Resultados - CORREGIDO: textos en blanco */}
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
              <p style={{ color: '#6c757d' }}>3 agencias máximo en paralelo. Si cumples esto, conversemos.</p>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm" style={{ background: '#fff5f5', borderLeft: '4px solid #dc3545' }}>
                <div className="card-body p-4">
                  <h3 className="h5 font-weight-bold mb-3" style={{ color: '#dc3545' }}>✗ No calificas si...</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span style={{ color: '#dc3545', marginRight: '10px', fontSize: '1.2rem' }}>●</span>
                      <span style={{ color: '#495057' }}>Tu agencia aún no vende proyectos de desarrollo a medida</span>
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

        {/* CTA - Conversación estratégica CON FORMULARIO FILTRADO (NETLIFY READY) */}
        <section id="contacto" className="py-5 bg-primary text-white mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center mb-5">
                  <div className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '3px', fontSize: '0.85rem', opacity: '0.9' }}>
                    CUPO LIMITADO · 3 AGENCIAS MÁXIMO
                  </div>
                  <h2 className="display-5 font-weight-bold mb-4">
                    ¿Tienes un módulo que está frenando el crecimiento?
                  </h2>
                  <p className="lead mb-5" style={{ fontSize: '1.2rem' }}>
                    Cuéntame brevemente el sistema o la fricción técnica. Si hay coincidencia, coordinamos una conversación de diagnóstico.
                  </p>
                </div>

                {/* FORMULARIO FILTRADO - NETLIFY CON HONEYPOT */}
                <div className="card border-0 shadow-lg p-4" style={{ background: '#ffffff', borderRadius: '16px' }}>
                  <div className="card-body">
                    <form
  name="agencias-intervencion"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setFormEnviado(true);
      form.reset();
      setTimeout(() => setFormEnviado(false), 5000);
    } catch (error) {
      alert("Error al enviar. Intenta de nuevo.");
    }
  }}
>
  {/* Honeypot anti-spam */}
  <input type="hidden" name="bot-field" />
  
  {/* Campo obligatorio para Netlify */}
  <input type="hidden" name="form-name" value="agencias-intervencion" />
  
  <div className="row">
    <div className="col-md-6 mb-3">
      <label className="form-label fw-bold text-dark">Nombre</label>
      <input 
        type="text" 
        name="nombre"
        className="form-control form-control-lg" 
        placeholder="¿Quién eres?" 
        required
      />
    </div>
    <div className="col-md-6 mb-3">
      <label className="form-label fw-bold text-dark">Empresa</label>
      <input 
        type="text" 
        name="agencia"
        className="form-control form-control-lg" 
        placeholder="Nombre de tu agencia" 
        required
      />
    </div>
  </div>
  
  <div className="mb-3">
    <label className="form-label fw-bold text-dark">Email</label>
    <input 
      type="email" 
      name="email"
      className="form-control form-control-lg" 
      placeholder="dónde recibo tu respuesta" 
      required
    />
  </div>
  
  <div className="mb-4">
    <label className="form-label fw-bold text-dark">
      Describe brevemente el módulo o sistema que está generando fricción
    </label>
    <textarea 
      name="friccion"
      className="form-control form-control-lg" 
      rows="4"
      placeholder="Ej: sistema de cotizaciones manuales que tarda 2h por cliente, o un dashboard que no escala..."
      required
    ></textarea>
    <div className="form-text text-muted mt-2">
      Esto me ayuda a saber si puedo ayudarte antes de la primera llamada.
    </div>
  </div>
  
  <div className="mb-4">
    <label className="form-label fw-bold text-dark">¿Tienes identificada la deuda técnica?</label>
    <select 
      name="deuda_tecnica"
      className="form-select form-select-lg" 
      required
    >
      <option value="">Selecciona una opción</option>
      <option value="documentada">Sí, la tengo documentada</option>
      <option value="identificada">La tengo identificada pero no documentada</option>
      <option value="no_analizada">Aún no la hemos analizado en profundidad</option>
    </select>
  </div>
  
  <button 
    type="submit" 
    className="btn btn-primary btn-lg w-100 py-3 fw-bold" 
    style={{ fontSize: '1.2rem' }}
  >
    Ver si encajamos →
  </button>

  {formEnviado && (
    <div className="alert alert-success mt-4 text-center" role="alert">
      ✅ ¡Recibido! Te responderé en menos de 24h si cumples los criterios.
    </div>
  )}
  
  <p className="text-center text-muted small mt-4 mb-0">
    {usuario?.nombre ? `Hola ${usuario.nombre}, ` : ''}Respuesta en menos de 24h • Solo si cumples criterios
  </p>
</form>
                  </div>
                </div>
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
        .form-control, .form-select {
          border: 1px solid #dee2e6;
          padding: 0.75rem 1rem;
        }
        .form-control:focus, .form-select:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
      `}</style>
    </div>
  );
};