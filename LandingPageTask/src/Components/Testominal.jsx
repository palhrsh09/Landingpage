import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating, avatar }) => (
  <div className="bg-orange-50 rounded-lg p-6 shadow-md w-[350px]">
    <div className="flex justify-between items-start mb-4">
      <span className="text-sm font-semibold text-gray-600 p-1 bg-white rounded-lg">Expert Testimonial</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
    <p className="text-gray-700 mb-4">{content}</p>
    <div className="flex items-center bg-white rounded-full p-1">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Marketing Executive",
      content: "This platform has given me the opportunity to stay engaged and continue contributing my skills. I love the flexibility and the variety of projects available.",
      rating: 5,
      avatar: "/api/placeholder/48/48"
    },
    {
      name: "Anita Verma",
      role: "Financial Analyst",
      content: "I've found meaningful projects that allow me to utilize my expertise and make a difference. It's a win-win for both me and the businesses I work with.",
      rating: 4,
      avatar: "/api/placeholder/48/48"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 mb-8  h-full pt-[160px] lg:mb-0 pl-[120px]">
            <div className="flex items-center mb-4">
              <span className="mr-2 text-sm font-semibold text-blue-600">FOR SENIORS</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="ml-2 text-sm font-semibold text-gray-500">FOR SMEs</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Hear from Our Thriving Community of Senior Experts and SMEs.
            </h2>
            <p className="text-gray-600">
              Discover firsthand how our platform is empowering Senior Experts to share their valuable knowledge and helping SMEs achieve their goals.
            </p>
          </div>
          <div className="lg:w-1/2 relative h-[500px]"> {/* Increased height to contain cards */}
            <div className="absolute top-0 left-0">
              <TestimonialCard {...testimonials[0]} />
            </div>
            <div className="absolute top-64 right-0">
              <TestimonialCard {...testimonials[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;