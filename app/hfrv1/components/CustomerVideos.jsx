import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';


const YoutubeFrame = dynamic(() => import("@/app/commonUse/Youtubefile/YoutubeFrame"));
const CustomerVideos = () => {



    const sliderRefs = useRef([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        if (sliderRefs.current[0]) {
            setTotalSlides(sliderRefs.current[0].props.children.length - 1);
        }
    }, []);

    const next = () => {
        sliderRefs.current.forEach(slider => {
            if (slider && typeof slider.slickNext === "function") {
                slider.slickNext();
            }
        });
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
    };

    const previous = () => {
        sliderRefs.current.forEach(slider => {
            if (slider && typeof slider.slickPrev === "function") {
                slider.slickPrev();
            }
        });
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setCurrentSlide(next)
    };

    return (
        <div>
            <div className="fontPoppins text-center text-[#fff701] text-2xl sm:text-3xl font-extrabold pb-4">
                Customer's Say
            </div>


            <div className="mx-1  slider-container">

                <Slider
                    ref={el => {
                        if (el) sliderRefs.current[1] = el;
                    }}
                    {...settings}
                >
                    <div key={1}>
                        <YoutubeFrame vid='yFVH97V3J2c?si=h9t-WY0RXjw6XDKZ' />
                    </div>
                    <div key={2}>
                        <YoutubeFrame vid='BnoIvnZh4eY?si=eoJKd3TQaiH4J8WI' />
                    </div>
                    <div key={3}>
                        <YoutubeFrame vid='Ywuqj5x06Jc?si=ujygVAp2KQObyXCC' />
                    </div>

                </Slider>

                <div className='fontPoppins pt-2 pb-3 flex justify-between items-center gap-1 text-xs sm:text-sm text-white px-2'>
                    <button className="button cursor-pointer flex items-center" onClick={previous}>
                        <BiSkipPrevious size={20} />Previous
                    </button>
                    <button className="button cursor-pointer flex items-center" onClick={next}>
                        Next<BiSkipNext size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomerVideos