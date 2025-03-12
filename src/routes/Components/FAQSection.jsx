import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Por qué debería invertir en la optimización de mi sitio web?",
      answer: "Invertir en la optimización de tu sitio web es crucial para mejorar la experiencia del usuario, aumentar la velocidad de carga, mejorar el posicionamiento en motores de búsqueda (SEO) y, en última instancia, aumentar las conversiones y ventas. Un sitio web optimizado es más atractivo para los visitantes y puede ayudar a retener a los clientes actuales mientras atrae a nuevos."
    },
    {
      question: "¿Qué es una estrategia de marketing inbound y cómo puede beneficiar a mi negocio?",
      answer: "El marketing inbound se centra en atraer clientes a través de contenido relevante y útil, agregando valor en cada etapa del viaje del comprador. A diferencia del marketing tradicional, no interrumpe a los clientes, sino que los atrae de manera natural. Esto puede resultar en una mayor lealtad del cliente, mejores tasas de conversión y un crecimiento sostenible del negocio."
    },
    {
      question: "¿Cuánto tiempo se tarda en ver resultados después de implementar una nueva estrategia de marketing?",
      answer: "El tiempo para ver resultados puede variar dependiendo de varios factores, como la competitividad de la industria, la calidad de la estrategia implementada y el estado actual de tu sitio web y presencia en línea. Generalmente, puedes esperar ver mejoras iniciales en el tráfico y la interacción dentro de los primeros 3 a 6 meses, con resultados más significativos a largo plazo (6-12 meses)."
    },
    {
      question: "¿Qué incluye una auditoría de sitio web y cómo me ayudará?",
      answer: "Una auditoría de sitio web incluye una revisión detallada de varios aspectos de tu sitio, como la velocidad de carga, la estructura del contenido, la optimización para motores de búsqueda (SEO), la usabilidad y la seguridad. Esta auditoría te ayudará a identificar áreas de mejora y a desarrollar un plan de acción para optimizar tu sitio, mejorando su rendimiento y la satisfacción del usuario."
    },
    {
      question: "¿Cómo puedo asegurarme de que mi sitio web sea móvil amigable?",
      answer: "Un sitio web móvil amigable es esencial dado el creciente número de usuarios que navegan desde dispositivos móviles. Asegurarte de que tu sitio sea responsive, lo que significa que se ajusta automáticamente a cualquier tamaño de pantalla, es fundamental. Además, optimizar la velocidad de carga, simplificar la navegación y utilizar botones y enlaces que sean fáciles de interactuar en pantallas táctiles son pasos clave para lograrlo."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5" id="faq-section">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <div 
            className="card" 
            onClick={() => toggleAnswer(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-header">
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="card-body">
                <p className="card-text">{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
