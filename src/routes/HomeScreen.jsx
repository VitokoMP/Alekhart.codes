import React, { useContext, useState, useCallback, useRef, useEffect } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import FAQSection from "./Components/FAQSection";
import { AboutScreen } from "./AboutScreen";
import ReactProjectsSlider from "./Components/ReactPRojectSlider";

// ─────────────────────────────────────────────────────────────────
// WA LINKS CENTRALIZADOS — CONGELADOS (Object.freeze)
// ─────────────────────────────────────────────────────────────────
const WA_NUMBER = "56973156446";

const WA = Object.freeze({
  agencias: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, vi tu portafolio. Quiero saber si califico para trabajar contigo en mi agencia."
  )}`,
  negocios: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, creo que estoy perdiendo ventas por WhatsApp. ¿Puedes ver mi caso?"
  )}`,
  ticketera: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero ver la demo de la Ticketera. Creo que le estoy regalando comisiones a plataformas externas."
  )}`,
  fase1: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, estoy en Fase 1. Vendo por Instagram y pierdo clientes en el DM. Quiero mi catálogo web."
  )}`,
  fase2: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, estoy en Fase 2. Tengo catálogo o web pero no convierte ni cobra solo. Necesito mi tienda online."
  )}`,
  fase3: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, estoy en Fase 3. Vendo eventos y quiero mi Ticketera propia sin comisiones."
  )}`,
  faseCta: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero saber en qué fase está mi negocio."
  )}`,
});

// ─────────────────────────────────────────────────────────────────
// TRACKING
// ─────────────────────────────────────────────────────────────────
function track(event, label) {
  try {
    if (window.gtag) window.gtag("event", event, { event_label: label });
    if (window.fbq) window.fbq("track", event, { label });
    console.log(`[track] ${event} — ${label}`);
  } catch (_) {}
}

// ─────────────────────────────────────────────────────────────────
// COMPONENTE: Calculadora de pérdida Ticketera
// FIX: useMemo eliminado del import (no se usaba)
// ─────────────────────────────────────────────────────────────────
const TicketeraCalc = React.memo(function TicketeraCalc() {
  const [entradas, setEntradas] = useState("");
  const [precio, setPrecio] = useState("");
  const perdida = (parseFloat(entradas) || 0) * (parseFloat(precio) || 0) * 0.1;

  const fmt = useCallback(
    (n) => "$" + Math.round(n).toLocaleString("es-CL"),
    []
  );

  return (
    <div className="p-3 rounded-3 text-start" onClick={(e) => e.stopPropagation()}>
      <div className="d-flex flex-column gap-2 mb-3">
        <input
          type="number"
          placeholder="Entradas Vendidas: 500"
          value={entradas}
          onChange={(e) => setEntradas(e.target.value)}
          className="form-control form-control-lg"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", color: "#fff", fontSize: "1rem" }}
          min="0"
        />
        <input
          type="number"
          placeholder="Valor entrada: $ 15000"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="form-control form-control-lg"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", color: "#fff", fontSize: "1rem" }}
          min="0"
        />
      </div>

      {perdida > 0 ? (
        <div className="text-center mt-2 p-3 rounded" style={{ background: "rgba(255,77,109,0.15)", border: "1px solid rgba(255,77,109,0.3)" }}>
          <p style={{ fontSize: "0.7rem", color: "#ff4d6d", letterSpacing: "1.5px", marginBottom: 4, textTransform: "uppercase" }}>
            ⚠️ Esto es lo que perdiste en tu último evento
          </p>
          <span style={{ color: "#ff4d6d", fontWeight: 800, fontSize: "2rem", lineHeight: 1 }}>
            {fmt(perdida)}
          </span>
          <p style={{ fontSize: "0.75rem", color: "#aaa", marginTop: 8, marginBottom: 12 }}>
            regalados a plataformas externas.<br />
            <strong style={{ color: "#00f0a0" }}>Con tu propia ticketera: $0</strong>
          </p>
          <a
            href={`https://wa.me/56973156446?text=${encodeURIComponent(`Hola, calculé que perdí ${fmt(perdida)} en comisiones. Quiero ver la Ticketera.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn btn-success btn-sm w-100 rounded-pill"
            style={{ fontSize: "0.85rem", fontWeight: 700 }}
          >
            Quiero recuperar {fmt(perdida)} →
          </a>
        </div>
      ) : (
        <div className="text-center mt-2 p-3 rounded" style={{ background: "rgba(124,58,237,0.05)", border: "1px dashed rgba(124,58,237,0.3)" }}>
          <p style={{ fontSize: "0.8rem", color: "#a78bfa", marginBottom: 0 }}>
            💰 Ingresa tus números y te digo cuánto estás perdiendo
          </p>
        </div>
      )}
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────
// DATOS DE FASES — fuera del componente (estables entre renders)
// Calculadora movida a Fase 3 únicamente (FIX: evita duplicación)
// ─────────────────────────────────────────────────────────────────
const FASES_DATA = [
  {
    id: "fase1",
    numero: "01",
    icono: "📱",
    tag: "Fase 1 · Catálogo",
    titulo: "Vendo por Instagram y pierdo clientes en el DM",
    descripcion:
      "No tienes forma de mostrar tu oferta con claridad ni de cobrar sin depender de WhatsApp.",
    beneficios: [
      "Catálogo web con tus productos o servicios",
      "Botón de contacto directo por producto",
      "Sin responder cada mensaje a mano",
      "Diseño que refleja tu marca, no un template",
    ],
    waLink: WA.fase1,
    trackId: "fase_1_catalogo",
    destacada: false,
    // sin calculadora
  },
  {
    id: "fase2",
    numero: "02",
    icono: "🛒",
    tag: "Fase 2 · Tienda",
    titulo: "Tengo catálogo o web pero no convierte ni cobra solo",
    descripcion:
      "Tienes presencia online pero el proceso de compra aún depende de ti para cerrarse.",
    beneficios: [
      "Tienda online con carrito y pago integrado",
      "Transbank nativo — sin salir del sitio",
      "Confirmación automática al cliente",
      "Panel de pedidos sin depender de WhatsApp",
    ],
    waLink: WA.fase2,
    trackId: "fase_2_tienda",
    destacada: false,
    // sin calculadora
  },
  {
    id: "fase3",
    numero: "03",
    icono: "🎟️",
    tag: "Fase 3 · Eventos",
    titulo: "Vendo eventos y el 10% de comisión se lo lleva otro",
    descripcion:
      "Tu demanda es real pero la ticketera externa se queda con una parte de cada entrada vendida.",
    beneficios: [
      "Ticketera instalada en tu sitio WordPress",
      "Venta de entradas con Transbank directo",
      "QR de validación en puerta incluido",
      "0% comisión a plataformas externas",
    ],
    waLink: WA.fase3,
    trackId: "fase_3_eventos",
    destacada: true,
    conCalculadora: true, // ← calculadora solo acá
  },
];

// ─────────────────────────────────────────────────────────────────
// COMPONENTE: FasesSection
// FIX 1: d-flex flex-column en card-body → altura uniforme y mt-auto funciona
// FIX 2: faseCta en su propio row/col → no rompe el grid
// ─────────────────────────────────────────────────────────────────
const FasesSection = React.memo(function FasesSection() {
  const handleFaseClick = useCallback((fase) => {
    track("fase_click", fase.trackId);
    window.open(fase.waLink, "_blank");
  }, []);

  return (
    <section className="fases-detalle-section py-5" style={{ background: "#0a0a0a", overflow: "hidden" }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span
              className="badge px-4 py-2 mb-3"
              style={{
                background: "rgba(0,240,255,0.1)",
                border: "1px solid rgba(0,240,255,0.3)",
                color: "#00f0ff",
                fontSize: "0.7rem",
                letterSpacing: "2px",
                fontWeight: 700,
              }}
            >
              LAS 3 FASES
            </span>
            <h2 className="display-5 font-weight-bold text-white">
              ¿Cuánto estás <span className="text-primary">perdiendo</span> hoy?
            </h2>
            <p className="lead mt-3" style={{ color: "#aaaaaa" }}>
              Cada fase tiene un problema específico. Y una solución específica.
              Sin forzar más de lo que necesitas.
            </p>
          </div>
        </div>

        {/* Cards de fases — mx-0 evita el gutter negativo de Bootstrap que causa overflow en mobile */}
        <div className="row g-4 justify-content-center mx-0">
          {FASES_DATA.map((fase) => (
            <div key={fase.id} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 hover-card position-relative overflow-hidden"
                style={{
                  background: "#11111f",
                  borderTop: fase.destacada
                    ? "3px solid #7c3aed"
                    : "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                }}
                onClick={() => handleFaseClick(fase)}
              >
                {/* Número decorativo de fondo */}
                <div
                  className="position-absolute"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "6rem",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.03)",
                    bottom: "-10px",
                    right: "15px",
                    pointerEvents: "none",
                  }}
                >
                  {fase.numero}
                </div>

                {/* FIX: d-flex flex-column → mt-auto funciona, altura uniforme */}
                <div
                  className="card-body p-4 d-flex flex-column"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <div className="display-4 mb-3">{fase.icono}</div>
                  <span
                    className="badge mb-2 px-3 py-2"
                    style={{
                      background: fase.destacada
                        ? "rgba(124,58,237,0.2)"
                        : "rgba(59,130,246,0.15)",
                      color: fase.destacada ? "#a78bfa" : "#3b82f6",
                      fontSize: "0.65rem",
                      letterSpacing: "1.5px",
                      fontWeight: 700,
                      alignSelf: "flex-start",
                    }}
                  >
                    {fase.tag}
                  </span>
                  <h3 className="h5 fw-bold text-white mb-3">{fase.titulo}</h3>
                  <p className="small mb-4" style={{ color: "#9ca3af", lineHeight: 1.5 }}>
                    {fase.descripcion}
                  </p>
                  <div className="mb-4">
                    {fase.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-2 mb-2">
                        <span style={{ color: "#10b981", fontSize: "1rem" }}>✓</span>
                        <span style={{ color: "#d1d5db", fontSize: "0.8rem" }}>
                          {beneficio}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Calculadora solo en fase 3 */}
                  {fase.conCalculadora && (
                    <div
                      className="mb-4"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.25)",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <div className="px-3 pt-3">
                        <p
                          style={{
                            fontSize: "0.7rem",
                            color: "#a78bfa",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            marginBottom: 8,
                          }}
                        >
                          Calculadora de pérdida
                        </p>
                      </div>
                      <TicketeraCalc />
                    </div>
                  )}

                  {/* CTA — mt-auto lo empuja al fondo gracias a d-flex flex-column */}
                  <div
                    className="mt-auto d-flex align-items-center justify-content-center gap-2 py-2 px-3 rounded-3 text-center"
                    style={{
                      background: fase.destacada ? "#7c3aed" : "#2563eb",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(37,99,235,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      className="text-white fw-semibold"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {fase.destacada
                        ? "Quiero la Ticketera →"
                        : `Estoy en ${fase.tag} →`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FIX: faseCta en su propio row/col — no rompe el grid, no parece card mal hecha */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 text-center">
            <div
              className="p-4 rounded-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: 12 }}>
                ¿No estás seguro en qué fase estás?
              </p>
              <a
                href={WA.faseCta}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_click", "fase_no_se")}
                className="btn btn-outline-light px-4 py-2 rounded-pill"
                style={{ fontSize: "0.9rem" }}
              >
                Dime tu caso → lo veo contigo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

// ─────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────
export const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  // FIX: useEffect para video — sin side-effects en render
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (hovered) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [hovered]);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);
  const handleVideoClick = useCallback(() => {
    setHovered((prev) => !prev);
    track("case_click", "ticket_flow_video");
  }, []);

  return (
    <div>

      {/* ════════════════════════════════════════════════════════
          HERO — split con doble entrada
          ════════════════════════════════════════════════════════ */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">

              <img
                className="img-codes d-md-block mx-auto"
                src="../img/Codes/Codes.png"
                alt="codes"
              />

              <br /><br /><br />

              <div className="mb-3 text-uppercase fw-bold"
                style={{ letterSpacing: "3px", color: "#0d6efd", fontSize: "0.85rem" }}>
                Sistemas digitales · Latinoamérica
              </div>

              <h1 className="display-4 font-weight-bold mt-3" style={{ lineHeight: 1.1 }}>
                Tu negocio ya vende.{" "}
                <span className="text-primary">Pero estás perdiendo ventas todos los días.</span>
              </h1>

              <p className="lead mt-4 mb-4"
                style={{
                  color: "#c9bebe",
                  fontSize: "1.25rem",
                  maxWidth: "720px",
                  margin: "0 auto",
                  fontWeight: "500",
                }}>
                Si vendes por mensajes, dependes de procesos manuales o tu agencia
                no puede entregar todo lo que cierra —{" "}
                <strong>hay clientes cayéndose ahora mismo</strong>.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                <span className="badge bg-dark text-white px-4 py-2">+11 años</span>
                <span className="badge bg-dark text-white px-4 py-2">Sistemas en producción</span>
                <span className="badge bg-dark text-white px-4 py-2">Chile</span>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-4">
                <a
                  href={WA.negocios}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("cta_click", "hero_negocios")}
                  className="btn btn-success btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale w-100"
                  style={{ fontSize: "1.1rem", fontWeight: 700, maxWidth: 260 }}
                >
                  Quiero automatizar mi negocio →
                </a>
                <a
                  href={WA.agencias}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("cta_click", "hero_agencias")}
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill hover-scale w-100"
                  style={{ fontSize: "1rem", fontWeight: 600, maxWidth: 200 }}
                >
                  Soy agencia →
                </a>
              </div>

              <p className="text-muted small" style={{ maxWidth: "500px", margin: "0 auto" }}>
                Sin formularios. Sin esperas. Respondo en menos de 24 h.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="background-image-container">

        {/* ════════════════════════════════════════════════════════
            SECCIÓN NEGOCIOS — antes de fases
            FIX de orden: dolor → features → fases (diagnóstico)
            Calculadora removida aquí (queda solo en Fase 3)
            ════════════════════════════════════════════════════════ */}
        <section className="py-5" style={{ background: "#0a0a0a" }}>
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2 className="display-5 font-weight-bold text-white">
                  Si vendes por mensajes,{" "}
                  <span className="text-primary">estás perdiendo ventas cada día.</span>
                </h2>
                <p className="lead mt-4" style={{ color: "#cccccc" }}>
                  Automatizo respuestas, pedidos y cobros para que tu negocio
                  venda incluso cuando no estás. Sin bots genéricos. Un sistema
                  hecho para tu operación.
                </p>
              </div>
            </div>

            <div className="row g-4 justify-content-center mb-5">

              <div className="col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 p-4 text-center hover-card"
                  style={{ background: "#151515", cursor: "pointer" }}
                  onClick={() => track("feature_click", "whatsapp_auto")}
                >
                  <div className="display-4 mb-3">🤖</div>
                  <h4 className="text-white mb-2">Responde clientes automáticamente</h4>
                  <p style={{ color: "#bbbbbb" }}>
                    Atención inmediata 24/7. Tus clientes reciben respuesta aunque sean las 3 AM.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 p-4 text-center hover-card"
                  style={{ background: "#151515", cursor: "pointer" }}
                  onClick={() => track("feature_click", "venta_directa")}
                >
                  <div className="display-4 mb-3">🛒</div>
                  <h4 className="text-white mb-2">Vende directo desde WhatsApp</h4>
                  <p style={{ color: "#bbbbbb" }}>
                    Muestra productos, genera pedidos y envía links de pago sin salir de la conversación.
                  </p>
                </div>
              </div>

              {/* Ticketera sin calculadora — calculadora vive en Fase 3 */}
              <div className="col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 p-4 text-center hover-card"
                  style={{
                    background: "#151515",
                    borderTop: "2px solid #7c3aed",
                    cursor: "pointer",
                  }}
                  onClick={() => track("feature_click", "ticketera")}
                >
                  <div className="display-4 mb-3">🎟️</div>
                  <h4 className="text-white mb-2">Ticketera propia — 0% comisión</h4>
                  <p style={{ color: "#bbbbbb" }}>
                    Transbank directo en tu sitio. QR en puerta incluido. Sin regalarle
                    el 10% a plataformas externas.
                  </p>
                  <div
                    className="mt-auto pt-3"
                    style={{
                      borderTop: "1px solid rgba(124,58,237,0.2)",
                      fontSize: "0.8rem",
                      color: "#a78bfa",
                    }}
                  >
                    ↓ Calculá tu ahorro real en la Fase 3
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-3">
              <p className="text-white mb-4" style={{ fontSize: "1.1rem" }}>
                No es un bot. Es tu sistema de ventas funcionando 24/7.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a
                  href={WA.negocios}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("cta_click", "negocios_whatsapp")}
                  className="btn btn-success btn-lg px-5 py-3 rounded-pill hover-scale"
                  style={{ fontWeight: 700 }}
                >
                  Automatizar mi negocio →
                </a>
                <a
                  href={WA.ticketera}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("cta_click", "negocios_ticketera")}
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill hover-scale"
                >
                  Ver demo Ticketera →
                </a>
              </div>
              <p className="text-muted mt-3 small">
                Implementación en días. Resultados desde la primera semana.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            FASES — va después de negocios (flujo correcto)
            ════════════════════════════════════════════════════════ */}
        <FasesSection />

        {/* ════════════════════════════════════════════════════════
            SEPARADOR VISUAL — divide mundo negocios / agencias
            FIX overflow: width 100% + overflow hidden
            ════════════════════════════════════════════════════════ */}
        <div style={{ height: 2, width: "100%", overflow: "hidden", background: "linear-gradient(90deg, transparent, rgba(13,110,253,0.4), transparent)" }} />

        <section className="py-4" style={{ background: "#080810" }}>
          <div className="container text-center">
            <span
              className="badge px-4 py-2 text-wrap"
              style={{
                background: "rgba(13,110,253,0.1)",
                border: "1px solid rgba(13,110,253,0.3)",
                color: "#3b82f6",
                fontSize: "0.78rem",
                letterSpacing: "1.5px",
                fontWeight: 700,
                whiteSpace: "normal",
                wordBreak: "break-word",
                textAlign: "center",
              }}
            >
              ¿TIENES UNA AGENCIA? — ESTO ES PARA TI
            </span>
          </div>
        </section>

        {/* CASOS DE ÉXITO */}
        <section className="py-5" style={{ background: "#0a0a0a" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 font-weight-bold" style={{ color: "#ffffff" }}>
                  Agencias que ya{" "}
                  <span className="text-primary">dejaron de instalar plugins</span>
                </h2>
                <p className="mt-3" style={{ color: "#888", fontSize: "1rem" }}>
                  Sistemas reales. En producción. Generando ingresos hoy.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="card border-0 h-100 hover-card video-card position-relative overflow-hidden"
                  style={{ background: "#151515", cursor: "pointer" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleVideoClick}
                >
                  <video
                    ref={videoRef}
                    src="/videos/alekhart.codes.mp4"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="video-bg position-absolute top-0 start-0 w-100 h-100"
                  />
                  <div className={`overlay ${hovered ? "hide" : ""}`} />
                  <div className={`card-content ${hovered ? "hide" : ""}`}>
                    <div className="card-top d-flex justify-content-between align-items-center">
                      <span className="badge px-3 py-2 bg-primary">Ticket Flow</span>
                      <span className="badge px-3 py-2 bg-success">-85%</span>
                    </div>
                    <div className="card-center">
                      <div className="play-icon">▶️</div>
                      <h3 className="title text-white">Ver sistema en acción</h3>
                    </div>
                    <p className="card-text">
                      Pasa el mouse o toca para ver el sistema real funcionando
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  className="card border-0 h-100 hover-card"
                  style={{
                    backgroundImage: "url('/img/Logo-VibraDigital.cl-FINAL.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "260px",
                    cursor: "pointer",
                  }}
                  onClick={() => track("case_click", "vibra_digital")}
                >
                  <div className="card-overlay" />
                  <div className="card-body p-4" style={{ position: "relative", zIndex: 2 }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge px-3 py-2" style={{ background: "#0d6efd", color: "#fff" }}>
                        Vibra Digital
                      </span>
                      <span className="badge px-3 py-2" style={{ background: "#28a745", color: "#fff" }}>
                        Estable
                      </span>
                    </div>
                    <h3 className="h6 font-weight-bold mb-2 text-white">
                      El sistema de cotizaciones estaba roto
                    </h3>
                    <br />
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
                      Se reemplazó por un módulo en React desacoplado.
                      De proceso manual a sistema estable en producción.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  className="card border-0 h-100 hover-card"
                  style={{ background: "#151515" }}
                  onClick={() => track("case_click", "ecommerce")}
                >
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge px-3 py-2" style={{ background: "#0d6efd", color: "#ffffff" }}>
                        E-commerce
                      </span>
                      <span className="badge px-3 py-2" style={{ background: "#28a745", color: "#ffffff" }}>
                        +100%
                      </span>
                    </div>
                    <h3 className="h5 font-weight-bold mb-3 text-white">
                      Tienda online con carrito y pagos
                    </h3>
                    <p className="mb-0" style={{ color: "#cccccc" }}>
                      Panel de administración, productos, ventas y clientes todo en un solo lugar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-white mt-4" style={{ fontSize: "1.2rem" }}>
              Cada uno de estos desarrollos permitió que la agencia{" "}
              <strong>cobrara 3x más que un sitio web tradicional</strong>.
            </p>
          </div>
        </section>

        {/* TESTIMONIO DE CLIENTE */}
        <section className="py-5" style={{ background: "#0a0a0a" }}>
          <div className="container">
            <div className="row justify-content-center mb-5 text-center">
              <div className="col-lg-8">
                <h2 className="display-5 font-weight-bold">
                  Lo que pasa cuando el sistema{" "}
                  <span className="text-primary">empieza a escalar</span>
                </h2>
                <p className="lead text-muted mt-3">
                  Esto no es teoría. Es lo que ocurre cuando una agencia deja de improvisar.
                </p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 mb-4">
                <div className="text-center">
                  <img
                    src="../img/testimonios/testimonio_api_estudio.jpg"
                    alt="Testimonio de Angelo Mendez - Api Estudio"
                    className="img-fluid rounded-4 shadow"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
            <div className="row text-center mt-5">
              <div className="col-md-4 mb-3">
                <div className="p-3">
                  <h3 className="fw-bold text-primary">-70%</h3>
                  <p className="text-muted mb-0">Errores en producción</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3">
                  <h3 className="fw-bold text-primary">x3</h3>
                  <p className="text-muted mb-0">Velocidad de entrega</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3">
                  <h3 className="fw-bold text-primary">+100%</h3>
                  <p className="text-muted mb-0">Capacidad del equipo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTORIDAD — Slider */}
        <section className="marketing-section py-5">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10 col-lg-8 text-center">
                <h2 className="display-5 font-weight-bold mb-4" style={{ color: "#ffffff" }}>
                  Sistemas críticos{" "}
                  <span className="text-primary">en producción</span>
                </h2>
                <p className="lead" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem" }}>
                  Ticket Flow, Vibra Digital y otros módulos que hoy son productos
                  dentro de agencias.{" "}
                  <strong>
                    No son experimentos. Están activos, generando ingresos y escalando con sus equipos.
                  </strong>
                </p>
                <div className="mt-5">
                  <ReactProjectsSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿CUÁNDO TIENE SENTIDO TRAERME? */}
        <section className="py-5" style={{ background: "#ffffff" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <span className="badge bg-primary text-white px-3 py-2 mb-3"
                  style={{ fontSize: "0.9rem" }}>
                  ROL ESTRATÉGICO · AGENCIAS
                </span>
                <h2 className="display-5 font-weight-bold mb-4" style={{ color: "#212529" }}>
                  ¿Cuándo tiene sentido traerme?
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="p-5 rounded-4 shadow-sm"
                  style={{ background: "#f8f9fa", borderLeft: "4px solid #0d6efd" }}>
                  <p className="lead mb-4"
                    style={{ fontSize: "1.25rem", color: "#212529", lineHeight: "1.7" }}>
                    Entro cuando tu proyecto necesita escalar y la arquitectura
                    empieza a generar fricción. Cuando el equipo interno tiene la
                    capacidad, pero no el ancho de banda para intervenir un módulo
                    crítico o pagar deuda técnica sin frenar la hoja de ruta.
                  </p>
                  <p className="mb-4" style={{ fontSize: "1.1rem", color: "#495057" }}>
                    No siempre es una urgencia con incendios. Es una decisión
                    estratégica: cuando esa capa técnica no se resuelve con calidad,
                    el cliente empieza a percibir fricción en la entrega.
                  </p>
                  <p className="fw-bold mb-0"
                    style={{ fontSize: "1.1rem", color: "#0d6efd" }}>
                    Me hago cargo del sistema complejo, lo estabilizo y lo devuelvo
                    optimizado para que el equipo continúe sobre terreno firme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="py-5" style={{ background: "#f8f9fa" }}>
          <div className="container">
            <div className="row mb-5 text-center">
              <div className="col-12">
                <h2 className="display-5 font-weight-bold" style={{ color: "#212529" }}>
                  Así <span className="text-primary">intervenimos</span>
                </h2>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {[
                { icon: "🎯", title: "Acotamos", desc: "Seleccionamos un módulo, servicio o sistema concreto que esté frenando el crecimiento." },
                { icon: "🔍", title: "Diagnosticamos", desc: "Analizamos arquitectura, deuda técnica y cuellos de botella." },
                { icon: "⚙️", title: "Ejecutamos", desc: "Refactorizamos, rediseñamos o escalamos la capa crítica con estándares de calidad." },
                { icon: "📘", title: "Entregamos", desc: "Documentación clara, tests y estabilidad para que el equipo lo adopte sin fricción." },
                { icon: "🚪", title: "Salimos", desc: "Transferencia clara al equipo interno y cierre formal. Sin interferir en la cultura ni en el flujo de trabajo diario." },
              ].map((step) => (
                <div key={step.title} className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100 border-0 shadow-sm p-3 text-center">
                    <div className="card-body">
                      <div className="display-4 mb-3">{step.icon}</div>
                      <h4 className="h5 fw-bold mb-3" style={{ color: "#000000" }}>{step.title}</h4>
                      <p className="text-muted mb-0">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMA — Diagnóstico */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 font-weight-bold" style={{ color: "#212529" }}>
                  Si esto te suena,{" "}
                  <span style={{ color: "#0d6efd" }}>estás en el lugar correcto</span>
                </h2>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {[
                {
                  icon: "🔌",
                  title: "Llevas 3 semanas buscando un plugin que no existe",
                  desc: "Y sabes que si existiera, costaría $99 y no haría lo que realmente necesitas.",
                  trackId: "pain_plugin",
                },
                {
                  icon: "⏰",
                  title: "Todo lo complejo depende de ti",
                  desc: "Si no lo haces tú, no se hace. Y eso no escala.",
                  trackId: "pain_bottleneck",
                },
                {
                  icon: "📦",
                  title: "Dijiste \"sí\" a un proyecto que no sabes cómo vas a entregar",
                  desc: "Porque el cliente vale la pena, pero la solución no existe.",
                  trackId: "pain_promise",
                },
              ].map((item) => (
                <div
                  key={item.trackId}
                  className="col-md-6 col-lg-4 mb-4"
                  onClick={() => track("pain_click", item.trackId)}
                >
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="card-body text-center p-4">
                      <div className="display-4 mb-3">{item.icon}</div>
                      <h4 style={{ color: "#000000" }} className="h5 font-weight-bold mb-3">
                        {item.title}
                      </h4>
                      <p className="mb-0 text-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILTRO — Criterios agencias */}
        <div className="container mt-5 pt-4">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="h3 font-weight-bold" style={{ color: "#212529" }}>
                Trabajo con muy pocas agencias
              </h2>
              <p style={{ color: "#6c757d" }}>
                3 agencias máximo en paralelo. Si cumples esto, conversemos.
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm"
                style={{ background: "#fff5f5", borderLeft: "4px solid #dc3545" }}>
                <div className="card-body p-4">
                  <h3 className="h5 font-weight-bold mb-3" style={{ color: "#dc3545" }}>
                    ✗ No calificas si...
                  </h3>
                  <ul className="list-unstyled">
                    {[
                      "Tu agencia aún no vende proyectos de desarrollo a medida",
                      "Tu negocio es instalar plugins",
                      "No tienes clientes con necesidades complejas",
                      "Buscas un programador \"barato\"",
                    ].map((item) => (
                      <li key={item} className="mb-2 d-flex align-items-start">
                        <span style={{ color: "#dc3545", marginRight: "10px", fontSize: "1.2rem" }}>●</span>
                        <span style={{ color: "#495057" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm"
                style={{ background: "#f0f9f0", borderLeft: "4px solid #28a745" }}>
                <div className="card-body p-4">
                  <h3 className="h5 font-weight-bold mb-3" style={{ color: "#28a745" }}>
                    ✓ Calificas si...
                  </h3>
                  <ul className="list-unstyled">
                    {[
                      "Ya facturas y quieres escalar",
                      "Tienes clientes que piden más que WordPress",
                      "Necesitas capacidad técnica sin contratar equipo",
                      "Quieres vender proyectos de 4-8M+",
                    ].map((item) => (
                      <li key={item} className="mb-2 d-flex align-items-start">
                        <span style={{ color: "#28a745", marginRight: "10px", fontSize: "1.2rem" }}>●</span>
                        <span style={{ color: "#495057" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 text-center mt-4">
              <div className="p-4 rounded-3" style={{ background: "#f8f9fa" }}>
                <p className="mb-0 fw-bold" style={{ fontSize: "1.2rem", color: "#495057" }}>
                  Si calificas,{" "}
                  <span className="text-primary">tienes mi atención exclusiva</span>.
                </p>
                <p className="text-muted mt-2 mb-0">
                  Solo respondo conversaciones que cumplan estos criterios.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL — agencias */}
        <section id="contacto" className="py-5 bg-primary text-white mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center mb-5">
                  <div className="mb-3 text-uppercase fw-bold"
                    style={{ letterSpacing: "3px", fontSize: "0.85rem", opacity: "0.9" }}>
                    CUPO LIMITADO · 3 AGENCIAS MÁXIMO
                  </div>
                  <h2 className="display-5 font-weight-bold mb-4">
                    ¿Tienes un módulo que está frenando el crecimiento?
                  </h2>
                  <p className="lead mb-5" style={{ fontSize: "1.2rem" }}>
                    Escríbeme directamente. Cuéntame brevemente el sistema o la
                    fricción técnica. Si hay coincidencia, coordinamos una
                    conversación de diagnóstico.
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href={WA.agencias}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("cta_click", "cta_final_agencias")}
                    className="btn btn-success btn-lg px-5 py-3 rounded-pill shadow fw-bold hover-scale"
                    style={{ fontSize: "1.3rem" }}
                  >
                    Escribir por WhatsApp →
                  </a>
                  <p className="mt-4 small" style={{ opacity: 0.85 }}>
                    {usuario?.nombre ? `Hola ${usuario.nombre}, r` : "R"}espondo
                    en menos de 24h · Solo si cumples los criterios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <AboutScreen />
      </div>

      {/* ════════════════════════════════════════════════════════
          ESTILOS — originales intactos + fixes
          ════════════════════════════════════════════════════════ */}
      <style jsx>{`
        @media (max-width: 576px) {
          .hero-section h1 { font-size: 1.75rem !important; line-height: 1.3; }
          .hero-section .lead { font-size: 1rem !important; }
          .hero-section .btn { width: 100%; font-size: 1rem !important; }
          .hero-section .badge { font-size: 0.72rem; }
        }
        /* FIX OVERFLOW GLOBAL — corta cualquier desborde horizontal */
        body, #root, .background-image-container {
          overflow-x: hidden;
          max-width: 100vw;
        }
        /* Cancela el margen negativo de Bootstrap rows en contextos sin container */
        .background-image-container > section > .row,
        .background-image-container > div > .row {
          margin-left: 0;
          margin-right: 0;
        }
        .video-card .video-bg {
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .video-card:hover .video-bg { opacity: 1; }
        .overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.4);
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .overlay.hide { opacity: 0; }
        .card-content {
          position: relative; z-index: 2;
          padding: 1.5rem; height: 100%;
          display: flex; flex-direction: column;
          justify-content: space-between;
          text-align: center;
          transition: opacity 0.3s ease;
        }
        .card-content.hide { opacity: 0; }
        .card-top { flex-shrink: 0; }
        .card-center {
          flex-grow: 1; display: flex;
          flex-direction: column; justify-content: center;
        }
        .play-icon { font-size: 2.5rem; margin-bottom: 10px; }
        .title { font-size: 1.1rem; font-weight: 700; }
        .card-text { font-size: 0.9rem; color: #ccc; }
        .video-card { min-height: 320px; width: 100%; }
        @media (min-width: 1200px) { .video-card { max-height: 280px; } }
        @media (min-width: 992px) and (max-width: 1199px) { .video-card { max-height: 260px; } }
        @media (max-width: 991px) {
          .video-card { min-height: 260px; }
          .title { font-size: 1rem; }
          .play-icon { font-size: 2rem; }
        }
        @media (max-width: 576px) {
          .video-card { min-height: 220px; }
          .card-content { padding: 1rem; }
        }
        .hover-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 2rem rgba(0,0,0,0.3) !important;
        }
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }
        .badge { font-size: 0.9rem; font-weight: 500; }
        .form-control, .form-select {
          border: 1px solid #dee2e6;
          padding: 0.75rem 1rem;
        }
        .form-control:focus, .form-select:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.25);
        }
      `}</style>
    </div>
  );
};
