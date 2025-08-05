import React, { useState } from 'react';

const Step1Screen = ({ onNext }) => {
  const [data, setData] = useState({ annoyance: '', harmReasons: ['', '', ''], correctMethod: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleReasonChange = (index, value) => {
    const newReasons = [...data.harmReasons];
    newReasons[index] = value;
    setData(prev => ({ ...prev, harmReasons: newReasons }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.annoyance && data.correctMethod && data.harmReasons.every(r => r)) {
      onNext(data);
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

  const inputClasses = "w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300";

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 max-w-3xl w-full animate-fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white text-center tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Шаг 1: Ваша философия
          </h1>
        </div>
        <div className="space-y-2">
          <label htmlFor="annoyance" className="text-lg font-semibold text-gray-200">Что вас раздражает в вашей нише?</label>
          {/* Обновленный textarea с классом для скроллбара */}
          <textarea id="annoyance" name="annoyance" value={data.annoyance} onChange={handleInputChange} className={`${inputClasses} custom-scrollbar`} rows="3" placeholder="Например: Поверхностные советы, которые не работают..."></textarea>
        </div>
        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-200">Почему их подход вреден? (3 причины)</label>
          <div className="space-y-3">
            {data.harmReasons.map((reason, index) => (
              <input key={index} type="text" value={reason} onChange={(e) => handleReasonChange(index, e.target.value)} className={inputClasses} placeholder={`Причина ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="correctMethod" className="text-lg font-semibold text-gray-200">А как правильно? В чем ваш метод?</label>
          {/* Обновленный textarea с классом для скроллбара */}
          <textarea id="correctMethod" name="correctMethod" value={data.correctMethod} onChange={handleInputChange} className={`${inputClasses} custom-scrollbar`} rows="3" placeholder="Мой метод основан на..."></textarea>
        </div>
        <button type="submit" className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300">
          <span>Перейти к анализу аудитории</span>
          <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </form>
    </div>
  );
};

export default Step1Screen;