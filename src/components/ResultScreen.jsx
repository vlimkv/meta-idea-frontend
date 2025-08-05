import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

const ResultScreen = ({ data, isLoading, onReset }) => {
  const { aiIdeas = "" } = data;
  const [activeTab, setActiveTab] = useState(0);
  const [copyStatus, setCopyStatus] = useState('copy');

  const ideasArray = useMemo(() => {
    if (isLoading || !aiIdeas) return [];
    return aiIdeas.split('---').map(idea => idea.trim()).filter(idea => idea);
  }, [isLoading, aiIdeas]);

  // НОВАЯ ФУНКЦИЯ ДЛЯ ОЧИСТКИ ТЕКСТА
  const stripMarkdown = (text) => {
    if (!text) return '';
    // Убираем заголовки, цитаты, жирный текст и маркеры списков
    return text
      .replace(/### (.*)/g, '$1')      // Убирает '### '
      .replace(/> (.*)/g, '$1')         // Убирает '> '
      .replace(/\*\*(.*?)\*\*/g, '$1') // Убирает '**' вокруг текста
      .replace(/^- (.*)/gm, '$1')      // Убирает '- ' в начале строк
      .trim();
  };

  const handleCopy = () => {
    if (ideasArray.length > 0) {
      // СНАЧАЛА ОЧИЩАЕМ ТЕКСТ
      const plainText = stripMarkdown(ideasArray[activeTab]);
      
      // КОПИРУЕМ УЖЕ ЧИСТЫЙ ТЕКСТ
      navigator.clipboard.writeText(plainText)
        .then(() => {
          setCopyStatus('copied');
          setTimeout(() => setCopyStatus('copy'), 2000);
        })
        .catch(err => console.error('Failed to copy: ', err));
    }
  };

  const tabButtonStyle = (isActive) => 
    `px-6 py-3 font-bold text-lg rounded-t-lg transition-all duration-300 focus:outline-none w-full sm:w-auto ${
      isActive
        ? 'bg-white/20 text-white'
        : 'bg-transparent text-gray-300 hover:bg-white/10'
    }`;

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-4xl w-full animate-fade-in-up">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            Ваша Мета-Идея от AI
          </h1>
        </div>
        
        <div className="w-full">
          { !isLoading && ideasArray.length > 0 && (
            <div className="flex flex-col sm:flex-row border-b border-white/20 mb-4">
              {ideasArray.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={tabButtonStyle(activeTab === index)}
                >
                  Вариант {index + 1}
                </button>
              ))}
            </div>
          )}
          
          <div className="relative bg-black/20 rounded-b-2xl rounded-tr-2xl p-6 min-h-[350px] w-full flex justify-center items-center">
            {!isLoading && ideasArray.length > 0 && (
              <button onClick={handleCopy} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300" title="Копировать чистый текст">
                {copyStatus === 'copy' ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                ) : (
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                )}
              </button>
            )}

            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-full text-white">
                <svg className="animate-spin h-10 w-10 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <p className="text-xl font-semibold">AI анализирует ваши ответы...</p>
                <p className="text-gray-300 mt-1">Это может занять несколько секунд</p>
              </div>
            ) : (
              ideasArray.length > 0 ? (
                <div className="prose prose-invert prose-lg max-w-none w-full h-full overflow-y-auto pr-4 custom-scrollbar">
                  <ReactMarkdown>
                    {ideasArray[activeTab]}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-gray-400">Здесь появятся сгенерированные идеи...</p>
              )
            )}
          </div>
        </div>

        <div className="text-center pt-4">
          <button onClick={onReset} className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Пройти воркшоп заново
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;