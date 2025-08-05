// src/WelcomeScreen.jsx

import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Найдите свою мета-идею и отстройтесь от конкурентов</h1>
      <p>
        Этот AI-ассистент поможет вам найти вашу уникальную экспертную позицию,
        которая сделает ваш маркетинг простым, а продажи — легкими.
      </p>
      <button onClick={onStart} className="btn-primary">
        Начать воркшоп
      </button>
    </div>
  );
};

export default WelcomeScreen;