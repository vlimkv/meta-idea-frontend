import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full filter blur-3xl">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-50"
          style={{ animation: 'blob-move-1 15s infinite' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-50"
          style={{ animation: 'blob-move-2 15s infinite' }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;