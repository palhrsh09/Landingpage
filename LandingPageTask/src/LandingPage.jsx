import React from 'react'
import { FirstPart } from './Components/FirstPart'
import SMESectionFlexbox from './Components/ThirdPart'
import JobListings from './Components/JobListings'
import BenefitsSection from './Components/BenefitSection'
import TestimonialSection from './Components/Testominal'
import  Footer  from './Components/Footer'
import SMESection from './Components/SMESection'
import HowItWorks from './Components/HowItWorks'
import { SMEMiddle } from './Components/SMEMiddle'
import SMEPlatform from './Components/SMEPlatform'
import NewsAndBlogs from './Components/NewsAndBlogs'
import JobCategoriesComponent from './Components/JobCategories'

export const LandingPage = () => {
  return (
    <div className='mx-14 my-14'>
        <FirstPart />
        <HowItWorks />
        <SMESectionFlexbox />
        <SMEMiddle />
        <JobCategoriesComponent />
        <JobListings />
        <BenefitsSection />
        {/* <SMESection /> */}
        <TestimonialSection />
        <SMEPlatform />
        <NewsAndBlogs />
        <Footer />
    </div>
  )
}
