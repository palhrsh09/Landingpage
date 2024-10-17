import React from 'react';
import image from "../assets/img_avatar.png" 

const BlogCard = ({ category, author, date, title, description, avatarSrc }) => (
  <div className="bg-red-50 rounded-lg p-6 mb-6 ">
    <span className="text-red-400 text-sm font-semibold">{category}</span>
    <div className="flex items-center mt-2 mb-4">
      <img src={image} alt={author} className="w-8 h-8 rounded-full mr-3" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const NewsAndBlogs = () => {
  const blogs = [
    {
      category: "Marketing",
      author: "Rajesh Sharma",
      date: "Sep 04, 2024",
      title: "Navigating the Digital Marketing Landscape",
      description: "Explore essential strategies for successful online marketing in the ever-evolving digital landscape of 2024.",
      avatarSrc: "/api/placeholder/40/40"
    },
    {
      category: "Finance",
      author: "Anita Verma",
      date: "Aug 28, 2024",
      title: "Financial Planning for Retirement: Key Considerations",
      description: "Get expert insights and practical tips on planning for a financially secure retirement.",
      avatarSrc: "/api/placeholder/40/40"
    },
    {
      category: "Leadership",
      author: "Vikram Patel",
      date: "Aug 15, 2024",
      title: "Building a High-Performing Team: Leadership Insights",
      description: "Discover effective leadership strategies to build and motivate a high-performing team.",
      avatarSrc: "/api/placeholder/40/40"
    },
    {
      category: "Technology",
      author: "Neha Kapoor",
      date: "Jul 30, 2024",
      title: "The Future of Work: Embracing Flexibility and Remote Collaboration",
      description: "Learn how to adapt and thrive in the changing world of work, embracing flexibility and remote collaboration.",
      avatarSrc: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-2">News and Blogs</h2>
      <p className="text-gray-600 text-center mb-8">
        Explore a variety of topics and gain knowledge from experienced professionals across different industries.
      </p>
      {/* Flexbox layout with 2 cards per row */}
      <div className="flex flex-wrap justify-center px-[180px]">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col items-center w-full sm:w-1/2 p-4">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndBlogs;
