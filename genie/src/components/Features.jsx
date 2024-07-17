import React from 'react';

const features = [
  {
    title: "Ask anything about your data!",
    description: "Just type your questions in plain English, no complicated codes needed. Genie will translate them into powerful queries and get you the answers you need."
  },
  {
    title: "Understand your data better.",
    description: "Genie goes beyond just numbers. It gives you clear explanations, helps you uncover hidden patterns, and shows you how your data connects."
  },
  {
    title: "See it all come to life!",
    description: "Genie creates awesome charts and graphs that make your data easy to understand and share. No more boring spreadsheets!"
  },
  {
    title: "Predict the future!",
    description: "Based on your data, Genie can help you guess what might happen next. Make smarter decisions with the power of data predictions."
  },
  {
    title: "Play with your data!",
    description: "Exploring information doesn't have to be hard. Genie's user-friendly interface lets you experiment with different questions and discover new insights with ease."
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl text-white mb-4">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
