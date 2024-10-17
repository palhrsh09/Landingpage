import React from 'react';
import { ChevronRight } from 'lucide-react';
import image from "../assets/handshake.jpg"

const FeatureButton = ({ children }) => (
  <button className="bg-white text-gray-800 rounded-md py-3 px-6 flex items-center justify-between w-full mb-4 shadow-md hover:shadow-lg transition-shadow">
    <span>{children}</span>
    <div className='bg-red-400 text-white p-2 rounded-md'>
    <ChevronRight className="text-white" />
    </div>
   
  </button>
);

const SMEPlatform = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-400 min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center  px-[100px]">
    
        <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-8">Why SMEs Should Choose Our Platform?</h1>
          
          <FeatureButton>Access a Vast Network of Expertise</FeatureButton>
          
          <p className="mb-6 text-lg">
            Tap into a diverse pool of seasoned professionals with specialized skills and experience across various industries.
          </p>
          
          <FeatureButton>Streamlined Collaboration</FeatureButton>
          
          <FeatureButton>Proven Results</FeatureButton>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="p-2 rounded-3xl shadow-xl">
            <img 
              src={image} 
              alt="Senior experts collaborating" 
              className="rounded-2xl w-full max-w-md"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default SMEPlatform;