import { Calendar, Lightbulb, Share } from 'lucide-react'
import React from 'react'

export const FirstPart = () => {
  
      return (
        <div className="min-h-screen bg-gradient-to-r from-purple-700 to-red-400 text-white font-sans">
          <header className="flex justify-between items-center py-4 px-[45px] ">
            <div className='flex gap-6 items-center'>
            <div className="text-xl font-bold">SE SENIOR EXPERTS</div>
            <nav className="space-x-7">
              <a href="#" className="hover:underline">Explore Projects</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Resources</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
            </div>
          
            <div className="space-x-2">
              <button className="bg-transparent  px-3 py-1 rounded">Sign in</button>
              <button className="bg-blue-600 px-3 py-1 rounded text-center">Register</button>
            </div>
          </header>
    
          <main className="container mx-auto text-center py-20">
            <div className="mb-8 flex justify-center items-center">
              <span className="mr-2">FOR SENIORS</span>
              <div className="inline-block w-12 h-6 bg-white rounded-full p-1">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <span className="ml-2">FOR SMEs</span>
            </div>
    
            <h1 className="text-5xl font-bold mb-4">Unlock New Opportunities<br />in Retirement</h1>
            <p className="mb-8">Explore flexible work arrangements that fit your lifestyle. Keep<br />learning and growing professionally.</p>
    
            <div className="space-x-4">
              <button className="bg-white text-purple-700 px-6 py-2 rounded-md">Register</button>
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">Get Demo</button>
            </div>
    
            <div className="mt-8">
              <div className="flex justify-center -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <p className="mt-2">Trusted by <strong>5000+</strong> Senior Experts and <strong>200+</strong> SMEs</p>

            </div>
    
            <div className="flex justify-center space-x-8 mt-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-20 h-8 bg-white/20 rounded"></div>
              ))}
            </div>
          </main>
    
          <section className="bg-gray-100 text-blue-800 py-16 px-[180px]">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Empower Your Next Chapter: Discover the Benefits<br />of Joining Our Senior Expert Community</h2>
              
              <div className="flex space-x-8 text-black">
  <div className="w-1/3 flex flex-col justify-start">
  <div className="bg-orange-700 rounded-full p-2 w-12 h-12 flex items-center shadow-lg justify-center">
  <Share className="w-6 h-6 text-white" />
</div>

    
    <h3 className="text-xl font-semibold mb-2 flex justify-start">Share Your Expertise</h3>
    <span className='block text-left text-gray-700'>
  Continue making a meaningful impact by sharing your knowledge and experience with businesses seeking your guidance.
</span>
</div>

  <div className="w-1/3 text-black">
  <div className="bg-orange-700 rounded-full p-2 w-12 h-12 flex items-center shadow-lg justify-center">
    <Calendar className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl text-black font-semibold mb-2 flex justify-start">Flexible Opportunities</h3>
    <p className='block text-left text-gray-700'>Choose projects that align with your interests and availability, enjoying the freedom and flexibility of independent work.</p>
  </div>

  <div className="w-1/3 text-black">
  <div className="bg-orange-700 rounded-full p-2 w-12 h-12 flex items-center shadow-lg justify-center">
    <Lightbulb className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2 flex justify-start">Continued Growth</h3>
    <p className='block text-left text-gray-700'>Stay engaged and challenged by tackling new projects and expanding your professional network.</p>
  </div>
</div>

            </div>
          </section>
        </div>
  
    
  
  )
}
