import React from 'react';
import image from "../assets/handshake.jpg"

export const SMEMiddle = () => {
  return (
    <div className="h-[450px] bg-gradient-to-r from-purple-800 via-purple-600 to-red-400 text-white font-sans relative flex items-center justify-between p-8">
      {/* Left Content */}
      <div className="w-1/2 pl-16">
        <h2 className="text-4xl font-bold mb-4">Empowering SMEs to achieve their full potential</h2>
        <p className="mb-6 text-lg">Connect with experienced talent to fuel your growth, innovation, and success.</p>
        <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Post a Project
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/2 flex justify-end pr-16">
        <div className="w-[400px] h-[300px] bg-white rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Two professionals collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SMEMiddle;