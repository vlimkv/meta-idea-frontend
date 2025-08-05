import React, { useState } from 'react';

const Step0Screen = ({ onNext }) => {
  const [context, setContext] = useState({
    field: '',
    audience: '',
    problem: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContext(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (context.field && context.audience && context.problem) {
      onNext(context);
    } else {
      alert("Пожалуйста, заполните все поля, чтобы AI дал точный ответ.");
    }
  };

  const inputClasses = "w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300";

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 max-w-3xl w-full animate-fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white text-center tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Шаг 0: Контекст Эксперта
          </h1>
          <p className="text-center text-gray-300 mt-2">Эта информация критически важна для точности AI.</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="field" className="text-lg font-semibold text-gray-200">В какой сфере вы эксперт?</label>
          <input id="field" name="field" type="text" value={context.field} onChange={handleInputChange} className={inputClasses} placeholder="Например: Фитнес, Маркетинг, Психология..."/>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="audience" className="text-lg font-semibold text-gray-200">Кто ваша целевая аудитория (ЦА)?</label>
          <input id="audience" name="audience" type="text" value={context.audience} onChange={handleInputChange} className={inputClasses} placeholder="Например: Занятые профессионалы 30-45 лет..."/>
        </div>

        <div className="space-y-2">
          <label htmlFor="problem" className="text-lg font-semibold text-gray-200">Какую главную проблему ЦА вы решаете?</label>
          <input id="problem" name="problem" type="text" value={context.problem} onChange={handleInputChange} className={inputClasses} placeholder="Например: Помогаю вернуть энергию и сбросить вес..."/>
        </div>

        <button type="submit" className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300">
          <span>Перейти к следующему шагу</span>
          <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </form>
    </div>
  );
};

export default Step0Screen;