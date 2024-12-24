import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";


const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});

const Customer_satisfied = () => {

    let sliderRef = useRef(null);
    // console.log('sliderRef: ', sliderRef);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>

            <div className="bg-white
            ">

                <div className="w-full mx-auto">


                    <div className="fontBebas sm:text-[3vw] text-[3rem] font-extrabold  text-center pt-5 text-black">
                        Satisfied  <span className='text-red-500'>Customer's</span>
                    </div>


                    <p className='sm:text-[1.2vw] text-[1.2rem] text-center fontNoto font-semibold text-black sm:py-6 py-4 leading-tight px-2'>
                        हॉर्सफायर टेबलेट के प्रभाव को ग्राहकों द्वारा सराहा जाता है, निचे वीडियो देखें
                    </p>


                    <div className="max-w-2xl mx-auto ">


                        <div className="mx-1 pb-2 sm:pb-2 slider-container">

                            <Slider ref={slider => {
                                sliderRef = slider;
                            }}
                                {...settings}
                            >
                                <div key={1}>
                                    <YoutubeFrame vid='yFVH97V3J2c?si=h9t-WY0RXjw6XDKZ' />
                                </div>
                                <div key={2}>
                                    <YoutubeFrame vid='HvnOSO2Vh6U?si=893J9RL4-TO0Zgki' />
                                </div>
                                <div key={3}>
                                    <YoutubeFrame vid='l6HdJFVR1ak?si=baXm1Xs6IMVZXiu8' />
                                </div>

                            </Slider>

                            <div className='flex justify-between items-center gap-1 text-sm'>
                                <button className="button cursor-pointer flex items-center" onClick={previous}>
                                    <BiSkipPrevious size={20} />Previous
                                </button>
                                <button className="button cursor-pointer flex items-center" onClick={next}>
                                    Next<BiSkipNext size={20} />
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>

    )
}

export default Customer_satisfied