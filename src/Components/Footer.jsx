import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div className="mb-6 lg:mb-0">
    <h3 className="font-semibold text-lg mb-3">{title}</h3> {/* Increased bottom margin for better separation */}
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2"> {/* Increased margin for better link spacing */}
          <a href="#" className="text-white hover:underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerLinks = {
    Product: ['Explore Projects', 'Sign In', 'Register'],
    Company: ['About us', 'Blogs', 'News', "Faq's"],
    Contact: ['Contact Us', 'Get Demo'],
    Legal: ['Terms & Conditions', 'Privacy Policy', 'Payments & Refunds', 'Disclaimers']
  };

  return (
    <footer className="bg-blue-800 text-white py-16 px-10"> {/* Increased top and bottom padding */}
      <div className="container mx-auto px-6"> {/* Increased horizontal padding */}
        <div className="flex flex-col md:flex-row gap-10"> {/* Increased gap between columns */}
          
          {/* First Column for Logo and Status */}
          <div className="flex-1 lg:flex-initial lg:w-2/5 flex flex-col space-y-4"> {/* Used space-y for better spacing between items */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white text-blue-800 rounded-full flex items-center justify-center font-bold text-xl mr-3">SE</div> {/* Adjusted margin */}
              <span className="text-2xl font-bold">SENIOR EXPERTS</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div> {/* Adjusted margin */}
              <span className="text-sm">All Systems Operational</span>
            </div>
            <div className="flex space-x-5"> {/* Adjusted space between social icons */}
              <a href="#" className="hover:text-gray-300"><FacebookIcon size={20} /></a>
              <a href="#" className="hover:text-gray-300"><InstagramIcon size={20} /></a>
              <a href="#" className="hover:text-gray-300"><LinkedinIcon size={20} /></a>
            </div>
            <p className="text-sm">
              Made and hosted in India.<br />
              Senior Experts © 2024
            </p>
          </div>
  
          {/* Links Section */}
          <div className="flex-1 lg:flex-1 lg:w-3/5 flex flex-wrap gap-12"> {/* Increased gap between link columns */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <FooterColumn key={index} title={title} links={links} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
