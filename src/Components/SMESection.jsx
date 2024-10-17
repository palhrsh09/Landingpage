import React from 'react';

const SMESection = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">For Senior Experts and SMEs</h2>
      <span>Where expertise meet Opprutinities for mutual succes fostering rgowth and iinovation through collection </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Access a Vast Network of Expertise</h3>
          <p className="text-gray-600">
            Tap into a diverse pool of seasoned professionals with specialized skills and experience across various industries.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Streamlined Collaboration</h3>
          <p className="text-gray-600">
            Easily connect and collaborate with experts to achieve your business goals.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Proven Results</h3>
          <p className="text-gray-600">
            Leverage the knowledge and experience of our experts to drive success and growth for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SMESection;
