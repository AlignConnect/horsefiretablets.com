import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('@/app/hft143f/components/FlipAmazon'), {
  loading: () => <p>loader</p>
});

const Sec7 = () => {

  return (
    <div className="bg-white py-5 sm:py-10  xl:pt-16">

      <div className="max-w-2xl mx-auto text-black px-3 sm:px-0">
        <p className="text-[8vw] sm:text-[3vw] fontAnton font-extrabold text-center ">PROUD TO BE</p>
        <div className="text-xl sm:text-3xl">

          <p className="fontPoppins sm:mt-10 mb-5">&#10024; We're most selling men sexual health product</p>
          <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d443c446-4203-40ba-32a4-1ecb8d331b00/public' alt="pic" height='100%' width='100%' loading='lazy' />
        </div>
      </div>

      <div className="mt-5">
        <FlipAmazon />
      </div>

    </div>
  )
}

export default Sec7