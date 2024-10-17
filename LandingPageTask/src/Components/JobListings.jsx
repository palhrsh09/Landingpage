import React from 'react';
import { CheckCircle } from 'lucide-react';
import image from "../assets/img_avatar.png"

const JobCard = ({ company, location, title, description, tags, verified }) => (
  <div className="bg-orange-50 rounded-lg p-6 shadow-md">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-sm text-gray-600">{company}</h3>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
      <img src={image} alt={`${company} logo`} className="w-8 h-8 rounded-full" />
    </div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-white text-gray-700 text-xs px-2 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-indigo-800 text-white px-4 py-2 rounded-md text-sm">
        Apply Now
      </button>
      {verified && (
        <div className="flex items-center text-blue-500">
          <CheckCircle className="w-4 h-4 mr-1" />
          <span className="text-xs">Verified</span>
        </div>
      )}
    </div>
  </div>
);

const JobListings = () => {
  const jobs = [
    {
      company: "Tech Innovators Ltd.",
      location: "Bangalore",
      
      title: "Finance Advisor",
      description: "Provide financial guidance and strategic planning to a growing startup.",
      tags: ["Part-time, Remote", "Financial Analysis", "Strategic Planning", "Startup Experience"],
      verified: true
    },
    {
      company: "Green Earth Products",
      location: "Delhi",
      
      title: "Marketing Consultant",
      description: "Develop and implement a marketing strategy to increase brand awareness and...",
      tags: ["3-Month Contract", "Marketing Strategy", "Digital Marketing", "Brand Management"],
      verified: true
    },
    {
      company: "Global Logistics Solutions",
      location: "Mumbai",
    
      title: "Operations Manager",
      description: "Oversee daily operations, optimize processes, and improve overall efficiency.",
      tags: ["Full-time, On-site", "Operations Management", "Process Improvement", "Leadership"],
      verified: false
    },
    {
      company: "PeopleFirst Consulting",
      location: "Chennai",
  
      title: "HR Consultant",
      description: "Design and implement HR policies, procedures, and employee engagement...",
      tags: ["Work from Home", "HR Management", "Employee Relations", "Talent Acquisition"],
      verified: true
    },
    {
      company: "Lex & Co. Law Firm",
      location: "Hyderabad",
     
      title: "Legal Advisor",
      description: "Provide legal counsel on contracts, compliance, and risk management.",
      tags: ["1-Month Contract, Remote", "Legal Expertise", "Contract Review", "Compliance"],
      verified: false
    },
    {
      company: "GrowthMinds Ventures",
      location: "Pune",
    
      title: "Business Development Manager",
      description: "Identify and develop new business opportunities, build relationships, and clos...",
      tags: ["Full-time, Hybrid", "Business Development", "Sales", "Negotiation"],
      verified: true
    },
  ];

  return (
    <section className="container mx-auto py-16 px-[120px]">
      {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Explore Expert Opportunities
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default JobListings;