import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BenefitCard = ({ title, description, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="h-48 mb-4">
      {children}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-[120px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <BenefitCard
            title="Flexible Engagement"
            description="Choose projects that align with your interests and availability, enjoying the freedom and flexibility of independent work."
          >
            <div className="bg-gray-200 p-4 rounded-lg h-full">
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  <span>Yesterday</span>
                </div>
                <span>11:00 AM</span>
                <div className="flex items-center">
                  <span>Tomorrow</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-100 p-2 rounded">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-xs">Team Update</span>
                  </div>
                </div>
                <div className="bg-pink-100 p-2 rounded">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    <span className="text-xs">Tax Audit</span>
                  </div>
                </div>
              </div>
            </div>
          </BenefitCard>

          <BenefitCard
            title="Meaningful Impact"
            description="Choose projects that align with your interests and availability, enjoying the freedom and flexibility of independent work."
          >
            <div className="bg-gray-200 p-4 rounded-lg h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold">Lex & Co. Law Firm</h4>
                  <p className="text-xs text-gray-600">Hyderabad</p>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <h3 className="font-semibold mb-2">Legal Advisor</h3>
              <p className="text-sm text-gray-600 mb-4">Provide legal counsel on contracts, compliance, and risk management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-xs px-2 py-1 rounded-full">1-Month Contract, Remote</span>
                <span className="bg-white text-xs px-2 py-1 rounded-full">Legal Expertise</span>
                <span className="bg-white text-xs px-2 py-1 rounded-full">Contract Review</span>
                <span className="bg-white text-xs px-2 py-1 rounded-full">Compliance</span>
              </div>
            </div>
          </BenefitCard>

          <BenefitCard
            title="Continuous Growth"
            description="Stay engaged, challenged, and connected by tackling new projects and expanding your professional network."
          >
            <div className="bg-gray-200 p-4 rounded-lg h-full flex flex-col justify-between">
              <div className="text-right font-semibold">₹35,000.00</div>
              <div className="text-xs text-gray-600 mb-2">This month's income</div>
              <div className="w-full h-32 bg-white rounded-lg"></div>
            </div>
          </BenefitCard>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 md:mb-0 md:mr-8">
            Benefits of Joining Our Senior<br />Expert Community
          </h2>
          <div className="max-w-md">
            <p className="text-gray-600 mb-4">
              Our platform empowers Senior Experts to share their valuable knowledge, connect with exciting opportunities, and continue making a meaningful impact.
            </p>
            <button className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition duration-300">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;