"use client"
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import './Home.css'


const Header = dynamic(() => import('@/app/hftafc/component/Header'))
const Section1 = dynamic(() => import('@/app/hftafc/component/Section1'))
const Section2 = dynamic(() => import('@/app/hftafc/component/Section2'))
const Section3 = dynamic(() => import('@/app/hftafc/component/Section3'))

const CoUse = dynamic(() => import('@/app/hftafc/component/most_selling_3'))


const Review = dynamic(() => import('@/app/hf71/components/CustomerReview'))

const Footer = dynamic(() => import('@/app/commonUse/Footer'))

const Footerpop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))

const page = () => {


  useEffect(() => {

    localStorage.setItem("PATH_KEY", "/hftafc");

  }, [])



  return (
    <div className=''>

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <CoUse />

      <div className='w-full mx-auto sm:w-[768px]'>
        <Review />
      </div>

      <Footer />
      <Footerpop />

    </div>
  )
}

export default page
