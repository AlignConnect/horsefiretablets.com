"use client";
import dynamic from 'next/dynamic';
import React from 'react'


const Ordernow = dynamic(() => import("./Ordernow"));


const Header = () => {

    const statusData = [
        {
            id: 1,
            value: "+3500",
            label: "Units Sold Per Day in India",
        },
        {
            id: 2,
            value: "30 Lacks",
            label: "Satisfied Customers & Counting",
        },
        {
            id: 3,
            value: "96%",
            label: "Success Rate in Sexual Problems",
        },
    ];

    return (
        <section>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/31e63922-1ac1-4a03-049c-5849a961ae00/public" alt="" className='w-full' />


            <div className="bg-black text-white p-4 space-y-4  mx-auto">
                {statusData.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center border border-white rounded-lg sm:p-4 p-2"
                    >
                        <div className="card_bg fontPoppins text-black font-bold sm:text-2xl text-xl sm:w-28 sm:h-16 w-20 h-12 flex flex-col items-center justify-center rounded sm:mr-4 mr-2 text-center leading-none">
                            {item.value}
                        </div>
                        <div className="md:text-2xl text-md fontNunito leading-tight">{item.label}</div>
                    </div>
                ))}
            </div>

            <Ordernow />


        </section>
    )
}

export default Header