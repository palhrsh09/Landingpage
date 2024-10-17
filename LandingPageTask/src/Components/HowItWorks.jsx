import React, { useState } from 'react';

const Benefit = ({ title, children }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-2">
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const Step = ({ number, title, description }) => (
  <div className="flex flex-col w-1/4 h-[240px]  p-4 gap-4 overflow-hidden"> {/* Set height to 300px (h-72) */}
    <div className='flex flex-col items-start'> {/* Column layout with left alignment */}
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 flex-1">{description}</p> {/* Keep description left-aligned */}
  </div>
);

const Benefits = () => (
  <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <Benefit title="Efficient Management">
      Tools that streamline project communication and collaboration.
    </Benefit>
    <Benefit title="Secure & Trusted">
      We prioritize data security and user privacy.
    </Benefit>
    <Benefit title="Dedicated Support">
      Our team is here to assist with any concerns.
    </Benefit>
  </div>
);

const HowItWorks = () => {
  const [isForSeniors, setIsForSeniors] = useState(true);

  return (
    <div className="py-8 px-[120px]">
      {/* Title and Toggle Switch */}
      <div className="flex items-center mb-4 gap-[35px] py-[40px] ">
        <div className='flex flex-col w-1/2'>
        <div className="mb-4 flex  items-center">
              <span className="mr-2">FOR SENIORS</span>
              <div className="inline-block w-12 h-6 bg-gray-200 rounded-full p-1">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <span className="ml-2">FOR SMEs</span>
            </div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4 ">How It Works?</h2>
        </div>

        <div className='flex flex-col gap-2'>
          <b className="mt-4 text-gray-600 text-center">
            Embark on a fulfilling journey, leveraging
            <p>
              your expertise to make a lasting impact.
            </p>
          </b>
          <button className="mt-2 px-4 py-2 shadow-2xl bg-orange-700 w-fit h-fit text-white rounded-lg">Get Started</button>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="flex gap-6 mb-6 h-auto p-3 rounded-lg bg-orange-50">
        <Step
          number={1}
          title="Create Your Profile"
          description="Highlight your skills, experience, and areas of expertise to attract potential clients."
        />
        <Step
          number={2}
          title="Explore Projects"
          description="Discover a wide range of projects aligned with your interests and skillset."
        />
        <Step
          number={3}
          title="Apply & Connect"
          description="Submit compelling proposals and build relationships with prospective clients."
        />
        <Step
          number={4}
          title="Get Started"
          description="Embark on stimulating projects and contribute your valuable insights to drive success."
        />
      </div>

      {/* Benefits Section */}
        <div className='px-[100px] '>
        <div className="w-full h-[1px] bg-gray-200 "></div>
        <Benefits />
        </div>
      
    </div>
  );
};

export default HowItWorks;
