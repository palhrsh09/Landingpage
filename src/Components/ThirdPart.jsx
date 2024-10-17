import React from 'react';
import image from "../assets/handshake.jpg"

const SMESectionFlexbox = () => {
  return (
    <div className="p-8 "> {/* Optional: you can change the overall section background */}
      <div className='flex flex-col gap-2 justify-center items-center p-2'>
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">For Senior Experts and SMEs</h2>
        <span className="block text-center text-gray-600 mb-6">
          Where expertise meets opportunities for mutual success, fostering growth and innovation through collaboration.
        </span>
      </div>
      
      <div className="flex flex-col -mx-2">
        {/* First Row of Cards */}
        <div className='flex justify-center gap-4'>
          {/* First Card */}
          <div className="w-[440px] h-[400px] p-4 bg-orange-50 rounded-lg shadow-lg"> 
            <div className="h-full flex flex-col p-4"> {/* Added inner padding */}
              <img src={image} alt="Access a Vast Network" className="h-[240px] w-[380px] object-cover rounded-lg mb-4 mx-auto" /> 
              {/* Adjusted image width and centered */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Access a Vast Network of Expertise</h3>
              <p className="text-gray-600 flex-1">
                Tap into a diverse pool of seasoned professionals with specialized skills and experience across various industries.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-[440px] h-[400px] p-4 bg-orange-50 rounded-lg shadow-lg">
            <div className="h-full flex flex-col p-4">
              <img src={image} alt="Streamlined Collaboration" className="h-[240px] w-[380px] object-cover rounded-lg mb-4 mx-auto" /> 
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Streamlined Collaboration</h3>
              <p className="text-gray-600 flex-1">
                Easily connect and collaborate with experts to achieve your business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className='flex justify-center gap-4 mt-6'>
          <div className="w-[330px] p-4 bg-orange-50 rounded-lg shadow-lg">
            <div className="h-64 flex flex-col p-4">
              <img src={image} alt="Proven Results" className="h-32 w-[280px] object-cover rounded-lg mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600 flex-1">
                Leverage the knowledge and experience of our experts to drive success and growth for your business.
              </p>
            </div>
          </div>

          <div className="w-[330px] p-4 bg-orange-50 rounded-lg shadow-lg">
            <div className="h-64 flex flex-col p-4">
              <img src={image} alt="Customized Solutions" className="h-32 w-[280px] object-cover rounded-lg mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Customized Solutions</h3>
              <p className="text-gray-600 flex-1">
                Tailor solutions that fit your unique business needs and challenges.
              </p>
            </div>
          </div>

          <div className="w-[330px] p-4 bg-orange-50 rounded-lg shadow-lg">
            <div className="h-64 flex flex-col p-4">
              <img src={image} alt="Expert Guidance" className="h-32 w-[280px] object-cover rounded-lg mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 flex-1">
                Get insights and support from industry veterans to navigate your challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMESectionFlexbox;
