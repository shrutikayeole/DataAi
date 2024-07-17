// src/components/Button.jsx

import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-white text-dark rounded-md hover:bg-gray-400 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
