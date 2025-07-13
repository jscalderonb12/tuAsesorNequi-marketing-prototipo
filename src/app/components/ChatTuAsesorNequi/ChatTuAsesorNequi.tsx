'use client';
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const messagesData: Message[] = [
  { role: 'user', text: '¿Cuánto gasté en cafés esta semana?' },
  {
    role: 'bot',
    text: '☕ Gastaste $18.400 en 5 compras relacionadas con cafés.',
  },
  { role: 'user', text: '¿Cumplí mi meta de ahorro de junio?' },
  {
    role: 'bot',
    text: '🎯 ¡Sí! Ahorraste $250.000, superando tu meta de $200.000. ¡Excelente trabajo! 💪💰',
  },
  { role: 'user', text: 'Muéstrame mis movimientos más frecuentes' },
  {
    role: 'bot',
    text: '📊 Tus movimientos más frecuentes son: 📲 Recargas a celular, 🚌 Transporte y 🍔 Comidas rápidas.',
  },
  { role: 'user', text: '¿Puedo reducir mis gastos en comida?' },
  {
    role: 'bot',
    text: '🍽️ Sí. Gastaste $72.000 este mes en comida fuera de casa. ¿Quieres fijar un límite mensual? 🧠💡',
  },
  { role: 'user', text: '¡Claro que sí!' },
];

const ChatTuAsesorNequi: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputSimulated, setInputSimulated] = useState('');
  const [_, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const showNextMessage = () => {
      const message = messagesData[indexRef.current];

      if (message.role === 'user') {
        setTyping(true);
        let i = 0;
        const text = message.text;

        const typingInterval = setInterval(() => {
          setInputSimulated(text.slice(0, i + 1));
          if (indexRef.current >= messagesData.length) {
            indexRef.current = 0;
          }
          i++;
          if (i >= text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              setMessages((prev) => [...prev, message]);
              setInputSimulated('');
              setTyping(false);
              indexRef.current++;
              setTimeout(showNextMessage, 1000);
              if (indexRef.current >= messagesData.length) {
                indexRef.current = 0;
              }
            }, 500);
          }
        }, 50);
      } else {
        setMessages((prev) => [...prev, message]);
        indexRef.current++;
        setTimeout(showNextMessage, 3500);
      }
    };

    showNextMessage();
  }, []);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputSimulated]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-section">
      <div className="chat-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712104.png"
          alt="Assistant"
        />
        <p>TuAsesorNequi</p>
      </div>

      <div className="chat-box" ref={chatRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-wrapper">
        <textarea
          className="chat-textarea"
          placeholder="Mensaje..."
          value={inputSimulated}
          readOnly
          ref={textareaRef}
          rows={1}
        />
      </div>
    </div>
  );
};

export default ChatTuAsesorNequi;
