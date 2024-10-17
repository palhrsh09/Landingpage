import React from 'react';
import { LayoutGrid } from 'lucide-react';

const categories = [
  "Business Strategy",
  "Marketing & Sales",
  "Finance & Accounting",
  "Technology & IT",
  "Operations & Management",
  "Human Resources",
  "Legal & Compliance",
  "Healthcare",
  "Education"
];

const JobCategoriesComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Discover a World of Opportunities Tailored to Your Expertise.
      </h1>
      <p className="text-gray-600 mb-8">
        Discover a diverse range of projects tailored to your skills and experience. Browse through current
        openings and find the perfect fit for your expertise.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-red-50 text-gray-700 px-4 py-2 flex gap-2 rounded-full text-sm hover:bg-red-100 transition-colors duration-300"
          >
            <LayoutGrid />
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCategoriesComponent;