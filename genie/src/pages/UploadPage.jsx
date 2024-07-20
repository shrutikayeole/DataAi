import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path according to your directory structure
import Footer from '../components/Footer'; // Adjust the path according to your directory structure
import UploadBox from '../components/UploadBox'; // Adjust the path according to your directory structure
import HowItWorks from '../components/HowItWorks';

const UploadPage = () => {
  return (
    <div className="flex flex-col h-screen relative">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center p-4 relative z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 w-full h-full"
             style={{ 
               background: 'radial-gradient(circle at 20% 20%, #141527, #000011), radial-gradient(circle at 80% 80%, #d085e2, #a76eff), rgba(0, 0, 0, 0.8)', 
               transition: 'background 0.5s ease',
               zIndex: -1
             }}>
        </div>
        
        {/* Upload Box */}
        <UploadBox />
        {/* How It Works Section */}
        <div className="mt-24 relative z-10">
          <HowItWorks />
        </div>
      </main>
      
      {/* Footer */}
      
    </div>
  );
};

export default UploadPage;
