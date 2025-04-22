import dynamic from 'next/dynamic';
import React from 'react'


const OrderNow = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>Content is Loading</p>
});

const Header = () => {


    const reason_to_buy = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center' key={key}>
                <div className="  py-2  ">
                    <img src={e.icons} className="sm:w-24 w-24 mx-auto" alt="icons" />
                </div>
                <div className='text-white fontPoppins font-semibold sm:text-[1.3vw] text-[1.2rem] leading-tight pb-1 uppercase'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }


    return (
        <section>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb0518fd-0e09-41ba-5604-bceb08bd6900/public" alt="" className='w-full' />
            <div className="bg-black p-2">
                <div className=" ">
                    {
                        reason_to_buy([
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4e4c1481-5056-403c-e2cf-85387c930d00/public",
                                title: "<span class='text-yellow-400'>+3500 Units Sold</span> Per Day in India"
                            },
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e9d74078-b180-4910-55fb-8ee3f2eabc00/public",
                                title: "<span class='text-yellow-400'>30 Lacks Satisfied</span> Customers & Counting"
                            },
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4b2bbd2e-f432-4ab7-5620-4fa7bd654100/public",
                                title: "<span class='text-yellow-400'>96% Success Rate</span> in Sexual Problems "
                            }
                        ])
                    }

                </div>

            </div>
            <OrderNow />


        </section>
    )
}

export default Header