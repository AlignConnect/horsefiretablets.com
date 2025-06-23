import BitlyLinks from '@/components/hooks/Bitlylink';
import React from 'react'

const AFAds = () => {

    const links = BitlyLinks();


    return (
        <div className=' bg-inherit flex items-center justify-center  flex-col gap-5 pt-5'>
            <p className="text-[1.1rem] sm:text-3xl -mb-3 font-semibold text-black">We are Available:</p>
            <div className="flex w-8/12 sm:w-full justify-center items-center gap-3 sm:gap-5">

                <a href={links?.flipkartMain} className="">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="pic" className="w-40" width='100%' height='100%' />

                </a>


                {/* <a href=" https://bit.ly/3WUjedE" className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/456eb3fa-704d-4809-68f0-2e8e5c0b7800/public" alt="pic" className="w-[150px] md:w-[180px] mx-auto " loading='lazy' />
                </a> */}

                <a href={links?.amazonMain} className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="pic" className="w-40" width='100%' height='100%' /></a>

            </div>
        </div>
    )
}

export default AFAds