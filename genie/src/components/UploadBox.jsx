import React from 'react';
import { FileDrop } from 'react-file-drop';

const UploadBox = ({ onBack }) => {
  const handleDrop = (files) => {
    // Handle the files dropped
    console.log('Files dropped:', files);
  };

  return (
    // change the % to change size of the whole box
    <div className="relative w-[95%] h-[95%] md:w-[95%] md:h-[90%] lg:w-[90%] lg:h-[85%] mx-auto flex items-center justify-center"> 
      <div
        className="relative z-10 w-full h-full p-8 bg-[#2E2A5C] rounded-lg flex flex-col items-start justify-start text-left"
        style={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 50, 0.5)',
        }}
      >
        <h2 className="text-3xl font-light mb-4 text-white font-sans">
          Upload your bill to get started or update the database!
        </h2>
        <p className="text-lg mb-8 text-white font-sans">
          Ensure that your bill is in PDF format. 
          This will help us quickly process and update your stock information. 
        </p>

        <div className="w-full mb-6 flex justify-center">
          <FileDrop
            onDrop={handleDrop}

            // same here change % and h

            className="w-[50%] h-60 border-4 border-dashed border-white bg-[rgba(255,255,255,0.1)] rounded-lg flex items-center justify-center text-white text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 font-sans"
            style={{
              border: '2px dashed #72a4d2',
              color: '#72a4d2',
              backgroundColor: 'rgba(114, 164, 210, 0.2)', // Slightly opaque background
              opacity: 0.9, // Adjust opacity
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' // Subtle shadow
            }}
          >
            Drag & Drop your file here
          </FileDrop>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-full bg-transparent border border-light-blue text-light-blue hover:bg-light-blue hover:text-white transition duration-200"
            >
              Back
            </button>
            <label
              htmlFor="file-upload"
              className="px-4 py-2 rounded-full bg-transparent border border-light-blue text-light-blue cursor-pointer hover:bg-light-blue hover:text-white transition duration-200"
            >
              Choose File
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                className="sr-only"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBox;
