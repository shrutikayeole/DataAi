import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { title: "Upload PDF", description: "Upload a PDF to instantly check stock data and update the inventory in real-time, ensuring you never run out of essential items.", route: "/upload-pdf", image: "/path/to/uploadImage.png" },
  { title: "Fetch Email", description: "Fetch email data to automatically update and manage your inventory efficiently, reducing manual input and errors.", route: "/fetch-email", image: "/path/to/fetchEmailImage.png" },
  { title: "Voice to Text", description: "Convert voice commands to text for quick inventory updates, making it easier to manage your stock hands-free.", route: "/voice-to-text", image: "./assets/svg/text.png" }
];

const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-row gap-6 w-full">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/3 h-64 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-102"
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => handleCardClick(card.route)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-2">{card.title}</h2>
            <p className="text-white">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
