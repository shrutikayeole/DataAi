import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Genie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
