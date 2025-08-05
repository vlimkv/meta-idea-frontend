import React, { useState } from 'react';

const Step2Screen = ({ onNext }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (currentTask.trim() === '') return;
    setTasks([currentTask, ...tasks]);
    setCurrentTask('');
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.length === 0) {
      alert("Пожалуйста, добавьте хотя бы один пункт.");
      return;
    }
    onNext(tasks);
  };

  const inputClasses = "w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300";

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 max-w-3xl w-full animate-fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white text-center tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Шаг 2: Анализ аудитории
          </h1>
        </div>
        <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4 flex items-start space-x-4">
          <svg className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p className="text-blue-200">
            <strong>Важное напоминание из методики:</strong> Ваши клиенты — не ленивые. Они умные, но занятые люди. Ваша задача — найти способ им помочь, а не осуждать.
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="taskInput" className="text-lg font-semibold text-gray-200 block mb-2">Что не любят делать ваши клиенты?</label>
          <div className="flex items-center gap-3">
            <input
              id="taskInput"
              type="text"
              className={inputClasses}
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
              placeholder="Например: считать калории, заполнять таблицы..."
            />
            <button type="button" onClick={handleAddTask} className="bg-white/10 hover:bg-white/20 text-white font-bold p-3 rounded-lg transition-colors duration-300 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </button>
          </div>
        </div>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {tasks.map((task, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-3 flex justify-between items-center animate-fade-in-up">
              <span className="text-gray-200">{task}</span>
              <button type="button" onClick={() => handleDeleteTask(index)} className="text-red-400 hover:text-red-300 font-bold text-2xl leading-none">&times;</button>
            </div>
          ))}
        </div>
        {tasks.length > 0 && (
          <button type="submit" className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300">
            <span>Сгенерировать мета-идею</span>
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        )}
      </form>
    </div>
  );
};

export default Step2Screen;