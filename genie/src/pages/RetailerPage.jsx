import React from 'react';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RetailerPage = () => {
  return (
    <div className="min-h-screen bg-universe">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Received an order from retailer?
        </h1>
        <div className="flex flex-wrap gap-6 justify-center w-full max-w-4xl">
          <Cards />
        </div>
      </div>
      
    </div>
  );
};

export default RetailerPage;
