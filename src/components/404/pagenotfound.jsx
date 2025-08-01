import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TattooArtist404 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inkDrops, setInkDrops] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create random ink drops animation
    const drops = [];
    for (let i = 0; i < 15; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        size: 4 + Math.random() * 8
      });
    }
    setInkDrops(drops);
  }, []);

  const navigate=useNavigate()

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden flex items-center justify-center">
      
      {/* Animated background ink drops */}
      <div className="absolute inset-0">
        {inkDrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute w-2 h-2 bg-red-600 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${drop.left}%`,
              top: '-10px',
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
              width: `${drop.size}px`,
              height: `${drop.size}px`,
              animation: `fall ${drop.duration}s ${drop.delay}s infinite linear`
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated tattoo machine silhouette */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 border-2 border-white/20 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-16 bg-white/10 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Animated 404 with tattoo styling */}
        <div className="mb-8 relative">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text animate-pulse tracking-wider">
            404
          </h1>
          
          {/* Tattoo needle effect */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-8 bg-red-500 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-1 bg-red-400 mx-auto animate-pulse"></div>
          </div>
          
          {/* Ink splatter effects */}
          <div className="absolute -top-2 -left-4 w-6 h-6 bg-red-600 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute -bottom-2 -right-4 w-4 h-4 bg-red-500 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Animated text */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white/80 animate-fadeInUp max-w-md mx-auto leading-relaxed" style={{animationDelay: '0.7s'}}>
            This page seems to have disappeared like a tattoo without proper aftercare...
          </p>
        </div>

        {/* Animated tattoo-themed message */}
        <div className="mb-12 p-6 border border-red-500/30 rounded-lg bg-black/20 backdrop-blur-sm animate-fadeInUp" style={{animationDelay: '0.9s'}}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 border-2 border-red-500 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-6 h-6 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
          <p className="text-white/70 text-sm md:text-base">
            "Every masterpiece starts with a single line. Let's get you back on track."
          </p>
        </div>

        {/* Navigation buttons with tattoo gun animation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '1.1s'}}>
          <button 
            onClick={()=>{navigate("/")}}
            className="group px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500 tracking-wider font-medium relative overflow-hidden"
          >
            <span className="relative z-10">GO TO PORTFOLIO</span>
            {/* Ink filling effect */}
            <div className="absolute inset-0 bg-red-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-0 bg-red-600 group-hover:h-full group-hover:w-full transition-all duration-500 transform -translate-x-1/2"></div>
          </button>
          
          <button onClick={()=>{navigate("/works")}} className="group px-8 py-4 border border-white/30 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300 tracking-wider font-light relative overflow-hidden">
            <span className="relative z-10">VIEW GALLERY</span>
            {/* Needle tracing effect */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700 ease-out"></div>
            <div className="absolute top-0 right-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700 ease-out delay-200"></div>
          </button>
        </div>

        {/* Animated tattoo parlor elements */}
        <div className="absolute -bottom-32 -left-32 opacity-10">
          <div className="w-64 h-64 relative">
            {/* Spinning chair */}
            <div className="absolute inset-0 border-2 border-white rounded-full animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
      {/* </div> */}

        {/* Animated tattoo elements */}
        <div className="absolute -bottom-20 -left-20 opacity-5">
          <div className="w-40 h-40 border border-white animate-spin-slow">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 border border-white transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="absolute -top-20 -right-20 opacity-5">
          <div className="w-32 h-32 border-2 border-red-500 rounded-full animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
           @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes splatter {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(12deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(16deg); }
        }
        
        @keyframes tattooReveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(239, 68, 68, 0.3); }
          50% { text-shadow: 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.4); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-typewriter {
          animation: typewriter 2s steps(12) 1s forwards;
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid rgba(239, 68, 68, 0.8);
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TattooArtist404;