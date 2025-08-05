import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div 
      className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 max-w-3xl w-full text-center animate-fade-in-up"
      style={{ animationFillMode: 'backwards' }}
    >
      <div className="space-y-8">
        <h1 
          className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Найди свою Мета-Идею
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Преврати свою экспертизу в уникальный бренд. Наш воркшоп — это твой пошаговый план к отстройке от конкурентов и созданию продукта, который любят.
        </p>
        <button
          onClick={onStart}
          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
        >
          <span>Начать трансформацию</span>
          <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;