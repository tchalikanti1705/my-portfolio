import React, { useState, useEffect } from 'react';
import { Coffee, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';

const EnhancedCoffeeCup = () => {
  const [isPouring, setIsPouring] = useState(false);
  const [coffeeLevel, setCoffeeLevel] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(127); // Starting count
  const [showThankYou, setShowThankYou] = useState(false);
  const [hasUserBought, setHasUserBought] = useState(false);

  // Check if user already bought coffee on mount
  useEffect(() => {
    const userBought = localStorage.getItem('coffee_bought');
    const storedCount = localStorage.getItem('coffee_count');
    
    if (userBought === 'true') {
      setHasUserBought(true);
    }
    
    if (storedCount) {
      setCoffeeCount(parseInt(storedCount));
    }
  }, []);

  const handleCoffeeClick = () => {
    if (isPouring) return;
    
    // Check if user already bought
    if (hasUserBought) {
      toast({
        title: "☕ You already bought me a coffee!",
        description: "Thanks for your support! One coffee per person is enough. 😊",
      });
      return;
    }
    
    setIsPouring(true);
    setCoffeeLevel(0);
    setShowThankYou(false);
    
    // Smooth coffee pouring animation
    let level = 0;
    const interval = setInterval(() => {
      level += 1.5;
      setCoffeeLevel(level);
      if (level >= 85) {
        clearInterval(interval);
        
        // Increment counter and save to localStorage
        const newCount = coffeeCount + 1;
        setCoffeeCount(newCount);
        localStorage.setItem('coffee_count', newCount.toString());
        localStorage.setItem('coffee_bought', 'true');
        setHasUserBought(true);
        
        setShowThankYou(true);
        
        toast({
          title: "☕ Thank you for the coffee!",
          description: "Your support means a lot! Keep exploring my portfolio.",
        });
        
        setTimeout(() => {
          setIsPouring(false);
          setCoffeeLevel(0);
          setTimeout(() => setShowThankYou(false), 2000);
        }, 2000);
      }
    }, 40);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 text-center hover:border-amber-500/50 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-2">Like My Work?</h3>
      <p className="text-gray-400 mb-6">Support me with a virtual coffee!</p>
      
      <div className="flex justify-center mb-6 relative">
        <div className="relative">
          {/* Coffee Pot (pouring) */}
          {isPouring && (
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
              <div className="relative">
                <Coffee size={40} className="text-amber-700 animate-bounce" />
                {/* Coffee stream */}
                <div 
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-700 rounded-full"
                  style={{ 
                    height: '50px',
                    animation: 'pourCoffee 2s ease-in-out',
                    opacity: 0.9
                  }}
                >
                  {/* Drips */}
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-amber-800 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          )}

          {/* Coffee Cup Container */}
          <div className="relative">
            {/* Cup Body */}
            <div className="relative w-36 h-44 bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-b-3xl border-4 border-gray-300 shadow-xl overflow-hidden">
              {/* Coffee Liquid with realistic gradient */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 via-amber-800 to-amber-700 rounded-b-3xl transition-all duration-200"
                style={{ height: `${coffeeLevel}%` }}
              >
                {/* Coffee surface shine */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-amber-600 to-transparent"></div>
                
                {/* Bubbles */}
                {coffeeLevel > 20 && (
                  <>
                    <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-amber-600 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute top-4 right-6 w-1 h-1 bg-amber-600 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                  </>
                )}

                {/* Steam effect */}
                {coffeeLevel > 60 && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <div className="w-0.5 h-8 bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse opacity-60" style={{ animationDuration: '2s' }}></div>
                    <div className="w-0.5 h-10 bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse opacity-60" style={{ animationDuration: '2.3s', animationDelay: '0.3s' }}></div>
                    <div className="w-0.5 h-8 bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse opacity-60" style={{ animationDuration: '2.1s', animationDelay: '0.6s' }}></div>
                  </div>
                )}
              </div>
              
              {/* Cup handle */}
              <div className="absolute right-0 top-10 w-10 h-16 border-4 border-gray-300 border-l-0 rounded-r-full bg-gradient-to-r from-transparent via-gray-100 to-gray-200 shadow-lg"></div>
              
              {/* Cup rim highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>

          {/* Thank you message */}
          {showThankYou && (
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-in zoom-in-95 duration-300 flex items-center gap-2">
                <Heart size={16} className="fill-current" />
                Thank You!
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Coffee counter */}
      <div className="mb-4 mt-8">
        <div className="flex items-center justify-center gap-2 text-amber-500 mb-2">
          <Coffee size={20} />
          <span className="text-3xl font-bold">{coffeeCount}</span>
        </div>
        <p className="text-gray-500 text-sm">coffees bought</p>
      </div>

      <Button 
        onClick={handleCoffeeClick}
        className="w-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 text-white font-bold text-lg py-6 shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
        disabled={isPouring}
      >
        <Coffee size={24} className="mr-2" />
        {isPouring ? 'Pouring Coffee...' : 'Buy Me a Coffee'}
      </Button>
      
      <p className="text-gray-500 text-sm mt-4">Click to pour and support! ☕✨</p>
    </div>
  );
};

export default EnhancedCoffeeCup;
