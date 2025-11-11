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
  const [showSteam, setShowSteam] = useState(false);

  // Check if user already bought coffee on mount
  useEffect(() => {
    const userBought = localStorage.getItem('coffee_bought');
    const storedCount = localStorage.getItem('coffee_count');
    
    if (userBought === 'true') {
      setHasUserBought(true);
      setCoffeeLevel(85); // Keep coffee filled if already bought
      setShowSteam(true); // Show continuous steam
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
          setShowSteam(true); // Start showing continuous steam
          setTimeout(() => setShowThankYou(false), 2000);
        }, 2000);
      }
    }, 40);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 text-center hover:border-amber-500/50 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-2">Like My Work?</h3>
      <p className="text-gray-400 mb-6">
        Support me with a virtual coffee! 
        {showSteam && <span className="ml-2 text-amber-400">☕ Hot & Fresh!</span>}
      </p>
      
      <div className="flex justify-center mb-6 relative">
        <div className="relative">
          {/* Coffee Pot (pouring) */}
          {isPouring && (
            <div className="absolute -top-18 left-1/2 transform -translate-x-1/2 z-10">
              <div className="relative">
                <Coffee size={36} className="text-amber-700 animate-bounce" />
                {/* Coffee stream */}
                <div 
                  className="absolute top-7 left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-700 rounded-full"
                  style={{ 
                    height: '45px',
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
            {/* Cup Body - Smaller realistic ceramic mug */}
            <div className="relative w-28 h-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 border-3 border-gray-300 shadow-lg overflow-hidden rounded-b-2xl"
                 style={{
                   borderRadius: '6px 6px 24px 24px',
                   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
                 }}>
              
              {/* Ch.Teja Name on Cup - Elegant Signature Style */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="text-black text-2xl" 
                     style={{ 
                       fontFamily: '"Dancing Script", "Brush Script MT", "Lucida Handwriting", cursive',
                       fontStyle: 'italic',
                       fontWeight: '400',
                       textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                       transform: 'rotate(-1deg)',
                       letterSpacing: '-0.05em'
                     }}>
                  Ch.Teja
                </div>
              </div>
              
              {/* Coffee Liquid with realistic gradient */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900 via-amber-800 to-amber-700 transition-all duration-200 rounded-b-2xl"
                style={{ 
                  height: `${coffeeLevel}%`,
                  borderRadius: '0 0 24px 24px'
                }}
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

                {/* Enhanced Steam effect */}
                {(coffeeLevel > 60 || showSteam) && (
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    {/* Multiple steam wisps with enhanced animations */}
                    <div className="relative flex justify-center gap-1">
                      {/* Steam wisp 1 - wavy left */}
                      <div 
                        className="w-1 h-12 bg-gradient-to-t from-gray-300 via-gray-200 to-transparent rounded-full opacity-70 animate-pulse"
                        style={{
                          animation: 'float 3s ease-in-out infinite, sway 2s ease-in-out infinite alternate',
                          animationDelay: '0s'
                        }}
                      ></div>
                      
                      {/* Steam wisp 2 - central tall */}
                      <div 
                        className="w-1 h-16 bg-gradient-to-t from-white via-gray-100 to-transparent rounded-full opacity-60 animate-pulse"
                        style={{
                          animation: 'float 4s ease-in-out infinite, sway 2.3s ease-in-out infinite alternate',
                          animationDelay: '0.3s'
                        }}
                      ></div>
                      
                      {/* Steam wisp 3 - wavy right */}
                      <div 
                        className="w-1 h-14 bg-gradient-to-t from-gray-400 via-gray-300 to-transparent rounded-full opacity-50 animate-pulse"
                        style={{
                          animation: 'float 3.5s ease-in-out infinite, sway 2.1s ease-in-out infinite alternate',
                          animationDelay: '0.6s'
                        }}
                      ></div>
                      
                      {/* Steam wisp 4 - small left accent */}
                      <div 
                        className="w-0.5 h-10 bg-gradient-to-t from-gray-300 via-gray-200 to-transparent rounded-full opacity-80 animate-pulse"
                        style={{
                          animation: 'float 2.8s ease-in-out infinite, sway 1.8s ease-in-out infinite alternate',
                          animationDelay: '0.9s'
                        }}
                      ></div>
                    </div>
                    
                    {/* Additional floating particles for more realism */}
                    <div className="absolute top-0 left-2 w-0.5 h-0.5 bg-gray-200 rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                    <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-gray-300 rounded-full opacity-40 animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
                  </div>
                )}
              </div>
              
              {/* Cup rim - smaller ceramic mug style */}
              <div className="absolute -top-1 -left-0.5 -right-0.5 h-3 bg-gradient-to-b from-gray-200 via-white to-gray-100 border-3 border-gray-400 shadow-md"
                   style={{ borderRadius: '8px 8px 6px 6px', borderBottom: 'none' }}></div>
              
              {/* Inner rim shadow */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-300 via-transparent to-transparent opacity-30" 
                   style={{ borderRadius: '6px 6px 0 0' }}></div>
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
        className={`w-full font-bold text-lg py-6 shadow-lg transition-all duration-300 ${
          hasUserBought 
            ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 cursor-not-allowed' 
            : 'bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 hover:shadow-amber-500/50'
        } text-white`}
        disabled={isPouring}
      >
        <Coffee size={24} className="mr-2" />
        {isPouring ? 'Pouring Coffee...' : hasUserBought ? '✓ Coffee Bought!' : 'Buy Me a Coffee'}
      </Button>
      
      <p className="text-gray-500 text-sm mt-4">
        {hasUserBought ? 'Thanks for your support! 💚' : 'Click to pour and support! ☕✨'}
      </p>
    </div>
  );
};

export default EnhancedCoffeeCup;
