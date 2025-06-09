import React from 'react';
import './reactInfo.css';

function ReactInfo() {
  return (
    <div className="react-info-container">
      <h1>¿Qué es React?</h1>
      <p>
        React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Fue desarrollada por Facebook y se utiliza ampliamente para crear aplicaciones web modernas.
      </p>
      <h2>Características principales</h2>
      <ul>
        <li>Componentes reutilizables</li>
        <li>Virtual DOM para un rendimiento eficiente</li>
        <li>Unidireccionalidad de datos</li>
        <li>Gran ecosistema y comunidad</li>
      </ul>
      <h2>¿Por qué usar React?</h2>
      <p>
        React facilita la creación de interfaces complejas a partir de piezas pequeñas y aisladas llamadas componentes. Permite desarrollar aplicaciones rápidas, escalables y fáciles de mantener.
      </p>
      <h2>Recursos útiles</h2>
      <ul>
        <li><a href="https://es.react.dev/" target="_blank" rel="noopener noreferrer">Documentación oficial</a></li>
        <li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Guía de aprendizaje</a></li>
      </ul>
    </div>
  );
}

export default ReactInfo;