import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Step1Screen from './components/Step1Screen';
import Step2Screen from './components/Step2Screen';
import ResultScreen from './components/ResultScreen';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [workshopData, setWorkshopData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => setCurrentScreen('step1');
  const handleReset = () => {
    setWorkshopData({});
    setCurrentScreen('welcome');
  };
  const handleStep1Submit = (data) => {
    setWorkshopData({ step1: data });
    setCurrentScreen('step2');
  };
  const handleStep2Submit = async (dataFromStep2) => {
    const finalData = { ...workshopData, step2: dataFromStep2 };
    
    setIsLoading(true);
    setCurrentScreen('result');

    try {
      const response = await fetch('http://localhost:3001/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const aiResponse = await response.json();
      setWorkshopData({ ...finalData, aiIdeas: aiResponse.ideas });
    } catch (error) {
      console.error("Ошибка при вызове AI:", error);
      setWorkshopData({ ...finalData, aiIdeas: "К сожалению, не удалось сгенерировать идеи.\nПроверьте, запущен ли бэкенд-сервер, и попробуйте снова." });
    } finally {
      setIsLoading(false);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'step1': return <Step1Screen onNext={handleStep1Submit} />;
      case 'step2': return <Step2Screen onNext={handleStep2Submit} />;
      case 'result': return <ResultScreen data={workshopData} isLoading={isLoading} onReset={handleReset} />;
      default: return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <AnimatedBackground />
      {renderScreen()}
    </main>
  );
}

export default App;