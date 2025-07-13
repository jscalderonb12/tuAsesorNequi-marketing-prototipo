import React from 'react';
import './styles.css';

const FEATURES = [
  {
    icon: '📄',
    text: 'Descarga tu extracto en PDF, ¡en segundos y desde el chat!',
  },
  {
    icon: '💬',
    text: 'Recibe explicaciones claras de cualquier gasto, cobro o movimiento.',
  },
  {
    icon: '🧠',
    text: 'Haz tus preguntas tal como las piensas, el asistente entiende tu estilo.',
  },
  {
    icon: '🔒',
    text: 'Tus datos y respuestas siempre protegidos y regulados por Nequi.',
  },
];

const EXAMPLES = [
  { emoji: '🧐', text: '¿En qué gasté más este mes?' },
  { emoji: '📄', text: 'Dame mi extracto de la última semana en PDF' },
  { emoji: '🥤', text: '¿Cuánto gasté en comida la semana pasada?' },
  { emoji: '💸', text: '¿Cumplí mi última meta de ahorro en junio?' },
  {
    emoji: '🔍',
    text: 'Muéstrame las categorías de gastos más frecuentes de este mes',
  },
  { emoji: '💬', text: 'Explícame que es el 4x1000' },
];

export default function LandingInfo() {
  return (
    <div className="nequi-landing">
      <section className="nequi-hero">
        <h1>
          Resuelve tus dudas financieras con <span>TuAsesorNequi</span>
        </h1>
        <p className="nequi-subtitle">
          El asistente conversacional de Nequi para entender y controlar tu
          dinero, <b>¡sin complicaciones!</b>
        </p>
        <ul className="nequi-feature-bullets">
          {FEATURES.map((f, i) => (
            <li key={i}>
              <span className="nequi-bullet-icon">{f.icon}</span>
              {f.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="nequi-prompts-block">
        <h2>✨ Ejemplos de lo que puedes preguntar</h2>
        <br />
        <div className="nequi-prompts-list">
          {EXAMPLES.map((ex, i) => (
            <div className="nequi-prompt-bubble" key={i}>
              <span className="prompt-emoji">{ex.emoji}</span>
              <span className="prompt-text">{ex.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
