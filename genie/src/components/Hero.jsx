// src/components/Hero.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/ai');
  };

  const numberOfCircles = 20;
  const circles = Array.from({ length: numberOfCircles }, (_, index) => ({
    cx: Math.random() * window.innerWidth,
    cy: Math.random() * window.innerHeight,
    r: Math.random() * 20 + 5,
    color: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`,
  }));

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-dark to-primary text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark via-light to-primary bg-opacity-80">
        {/* Optional: Overlay to enhance gradient visibility */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Genie: Your data genie.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Get the answers you need, effortlessly.
        </p>
        <Button onClick={handleGetStarted}>Get Started</Button>
      </div>
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%">
          {circles.map((circle, index) => (
            <circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r}
              fill={circle.color}
              className="animate-move"
              style={{ animationDelay: `${index * 0.5}s` }}
            />
          ))}
        </svg>
      </div>
      <style jsx>{`
        @keyframes move {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, 50px);
          }
        }
        .animate-move {
          animation: move 4s infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
