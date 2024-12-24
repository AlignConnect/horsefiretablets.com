import React from 'react'


const OrderBtn = () => {
    return (
        // <div className="">
        //     <div className="bg-[#be3127]  text-white py-5 text-center">

        //         <div className=" grid ">

        //             <div className="fontJosefin sm:text-xl text-[1rem]  font-bold uppercase sm:pl-2 sm:my-2">
        //                 Save 10% Extra on Prepaid Order
        //             </div>


        //             <a href='#form' className=" bg-yellow-400 fontJosefin sm:text-xl text-center text-black font-extrabold pt-2 pb-1 mt-3 sm:mt-0 px-4 rounded w-1/2 sm:w-40 mx-auto box_shaddow animate-ease-in">
        //                 BUY NOW
        //             </a>

        //         </div>

        //     </div>
        // </div>
        <div className="p-2 max-w-4xl w-full mx-auto text-center bg-white rounded-sm overflow-hidden">
            <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
            <div className="grid grid-cols-2 items-center justify-center gap-1 py-1">
                <div className="">
                    <a href="https://bit.ly/3NzV7Ml" className="w-full d-grid leading-none">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd5c76b5-eacd-44c0-97c8-e26301f37600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                    </a>
                </div>
                <div className="">
                    <a href=" https://amzn.to/4eTZvSi" className="w-full d-grid leading-none">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OrderBtn