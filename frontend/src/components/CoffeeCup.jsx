import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import { Button } from './ui/button';

const CoffeeCup = () => {
  const [isPeuring, setIsPouring] = useState(false);
  const [coffeeLevel, setCoffeeLevel] = useState(0);

  const handleCoffeeClick = () => {
    if (isPeuring) return;
    
    setIsPouring(true);
    setCoffeeLevel(0);
    
    // Animate coffee filling
    let level = 0;
    const interval = setInterval(() => {
      level += 2;
      setCoffeeLevel(level);
      if (level >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsPouring(false);
          setCoffeeLevel(0);
        }, 1000);
      }
    }, 30);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Like My Work?</h3>
      <p className="text-gray-400 mb-6">Support me with a coffee!</p>
      
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Coffee Cup */}
          <div className="relative w-32 h-40 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-3xl border-4 border-zinc-700">
            {/* Coffee liquid */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 via-amber-700 to-amber-600 rounded-b-3xl transition-all duration-300"
              style={{ height: `${coffeeLevel}%` }}
            >
              {/* Steam effect */}
              {coffeeLevel > 50 && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="animate-ping absolute h-2 w-2 rounded-full bg-gray-400 opacity-75"></div>
                  <div className="animate-ping absolute h-2 w-2 rounded-full bg-gray-400 opacity-75" style={{ animationDelay: '0.3s' }}></div>
                </div>
              )}
            </div>
            
            {/* Cup handle */}
            <div className="absolute right-0 top-8 w-8 h-12 border-4 border-zinc-700 border-l-0 rounded-r-full"></div>
          </div>
          
          {/* Pouring animation */}
          {isPeuring && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <Coffee size={32} className="text-cyan-400 animate-bounce" />
              <div className="w-1 h-16 bg-gradient-to-b from-amber-700 to-transparent absolute top-8 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
      
      <Button 
        onClick={handleCoffeeClick}
        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-lg py-6"
        disabled={isPeuring}
      >
        <Coffee size={24} className="mr-2" />
        {isPeuring ? 'Pouring Coffee...' : 'Buy Me a Coffee'}
      </Button>
      
      <p className="text-gray-500 text-sm mt-4">Click to see the magic! ✨</p>
    </div>
  );
};

export default CoffeeCup;
