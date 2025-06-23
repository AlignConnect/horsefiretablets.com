import BitlyLinks from '@/components/hooks/Bitlylink'
import React from 'react'

function Section1() {


    const links = BitlyLinks()

    return (
        <div className='  '>
            <div className="max-w-4xl mx-auto bg-white py-5 sm:py-10">
                <img src="/main/hf99_images/lol.webp" alt="pic" width='100%' height='100%' loading='lazy' className='hidden sm:block' />
                <img src="/main/hf99_images/lol-mob.webp" alt="pic" width='100%' height='100%' loading='lazy' className='sm:hidden' />
                <div className="grid sm:grid-cols-2 pt-5 sm:pt-10 px-5 sm:px-10">
                    <img src="/main/hf99_images/pro3.webp" alt="pic" width='100%' height='100%' loading='lazy' />
                    <div className="bg-[#fef3d5] outline-dashed outline-1  p-5 -outline-offset-8 ">
                        <p className="fontArya text-2xl sm:text-3xl md:text-4xl font-bold text-center !leading-snug">अब मोटे और फौलादी लिंग के साथ देर तक सेक्स करना <span className="text-red-600"> एकदम आसान है, बस इसे आजमाए और कमाल देखें!</span>  </p>

                        <div className="text-center text-white font-bold mt-[7%]">


                            <a href={links?.flipkartMain} className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy' /></a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1