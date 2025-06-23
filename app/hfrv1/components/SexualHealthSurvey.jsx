"use client";

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

const Mostselling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
    loading: () => <p>loading</p>
});
const YoutubeFrame = dynamic(() => import("@/app/commonUse/Youtubefile/YoutubeFrame"));


const Ordernow = dynamic(() => import("./Ordernow"));


export default function SexualHealthSurvey() {

    const issues = [
        {
            title: "शीघ्रपतन",
            description: "कुछ झटको में या 1-2 मिनट के अंदर स्खलन",
        },
        {
            title: "लिंग कमजोरी",
            description: "छोटा, पतला या ढीला और कमजोर लिंग",
        },
        {
            title: "लो इरेक्शन",
            description: "स्खलन होने के बाद इरेक्शन पाने में असमर्थ",
        },
        {
            title: "शारीरिक कमजोरी",
            description: "स्ट्रेंथ, स्टैमिना और स्टेमिना की कमी",
        },
    ];


    const items = [
        {
            title: "शिलाजीत",
            description: "टेस्टोस्टेरोन व लिंग की सख्ती बढ़ाए",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2eb9c454-01e1-4c78-1442-55d053deb800/public",
        },
        {
            title: "अश्वगंधा",
            description: "स्ट्रेस कम करे और स्टैमिना बढ़ाए",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f68c5b84-59ec-4901-9397-5adea620df00/public",
        },
        {
            title: "सफ़ेद मूसली",
            description: "एनर्जी और सेक्स टाइमिंग बढ़ाए",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5b8d51f-b571-434b-1d99-ace5ac4e5c00/public",
        },
        {
            title: "गोक्षुरा",
            description: "लिंग की नसों और मसल्स को रिलैक्स करे",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d37531c-59ad-4fb4-f2c0-d80b0fade000/public",
        },
    ];


    const messages = [
        {
            message: "लम्बी सेक्स अवधि जोरदार प्रदर्शन",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/51668544-5390-4d81-8a92-cc8756bc2e00/public",
        },
        {
            message: "लिंग की लम्बाई और सख्ती में वृद्धि",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac691a2a-0593-4548-1d0e-c13625c8f500/public",
        },
        {
            message: "बार बार सेक्स करने की उत्तेजना",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc7de647-6f6f-4cf1-2d88-3fedc16c9500/public",
        },
        {
            message: "दमदार स्टैमिना और भरपूर शक्ति",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3d70f2fd-d48a-4e55-6a0c-4ae1dbd47c00/public",
        },
    ];


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
        <section className="fontNoto">
            <div
                className="fontNoto relative bg-cover bg-center text-white min-h-[100px] flex items-center justify-center px-6 py-8"
                style={{
                    backgroundImage:
                        "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0744a55-297e-40fc-9002-edee35eb9200/public')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0" />

                {/* Text Content */}
                <div className="relative text-center">
                    <h2 className="bg-[#148801] inline-block px-5 pt-2 text-2xl font-bold rounded">
                        सेक्सुअल हेल्थ सर्वे के मुताबिक
                    </h2>
                    <div className="mt-5 sm:text-xl text-lg leading-relaxed font-semibold text-black">
                        ज्यादातर पुरुष सिर्फ अपनी कामवासना मिटाने के लिए सेक्स करते हैं
                        परन्तु महिला पार्टनर का क्या? कोई पुरुष 1 मिनट के अंदर डिस्चार्ज होता
                        है तो कोई अधिक से अधिक 5 मिनट अपने स्तंभन पर काबू रख पाता है, इतने
                        टाइम में तो महिला सेक्स के लिए ठीक से उत्तेजित तक नहीं हो पाती है।
                    </div>
                </div>
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c2e39982-6cb4-45f9-ead4-7358f2f72700/public" alt="" className="py-7 px-1 mx-auto" />


            <div className="bg-black px-4 py-6 space-y-10 relative w-full  mx-auto">
                {issues.map((item, index) => (
                    <div
                        key={index}
                        className="relative border border-dashed border-[#fff701] rounded-lg px-4 pt-4 pb-2 text-white text-sm"
                    >
                        {/* Absolute Positioned Title */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                            <div className="bg-[#fff701] text-black font-extrabold sm:text-2xl text-xl rounded-full px-5 pt-2 shadow-md">
                                {item.title}
                            </div>
                        </div>
                        {/* Description */}
                        <div className="text-center font-semibold sm:text-xl text-lg mt-4 py-1">{item.description}</div>
                    </div>
                ))}
            </div>
            <Ordernow />

            <p className='text-white py-3' >
                इन सब चीजों को ध्यान में रखते हुए HORSE FIRE TABLET बना है। यह सेक्स टाइमिंग और लिंग की मजबूती बढ़ाएगा और जीवन से निराशा मिटाएगा। यह 17 शक्तिशाली जड़ीबूटियों का मिश्रण है और ये प्रत्येक जड़ीबूटियां सेक्स पावर बूस्ट करने के लिए वैज्ञानिकी परीक्षण में सिद्ध है। इसका फार्मूलेशन लेवल और सफलता दर अविश्वसनीय है जो इसे दूसरो से अलग बनाता है।
            </p>

            <div
                className="relative  bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-5"
                style={{
                    backgroundImage:
                        "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b348709e-e2b0-4492-fff3-6d2e159f5b00/public')",
                }}
            >
                <div className="absolute inset-0 " />
                <div className="relative z-10 w-full max-w-5xl space-y-5">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-row ${index % 2 === 1 ? "flex-row-reverse" : ""} items-center gap-2 sm:gap-5`}
                        >
                            {/* Image */}
                            <div className=" ">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Text */}
                            <div className={`w-full sm:w-auto ${index % 2 === 1 ? "text-right sm:text-right" : "text-left sm:text-left"
                                }`}>
                                <h3 className="text-[#fff701] font-bold sm:text-4xl text-2xl">
                                    {item.title}
                                </h3>
                                <div className="text-white sm:text-xl text-base">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Ordernow />



            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c5456869-414f-4e7c-ef25-9b6fbd095c00/public" alt="" className="w-full px-5 pt-3" />

            <p className="bg-[#fee202] rounded-lg pt-4 mx-1 font-semibold">
                एक अच्छा लव-पार्टनर वही है, जो सेक्स के दौरान अपनी संतुष्टि के साथ-साथ अपने महिला पार्टनर की संतुष्टि के बारे में भी सोचे। सेक्स सिर्फ स्खलन का नाम नहीं है ये तो एक खुशनुमा एहसास है चरमानंद के रूप में दोनों को चाहिए। उनके चरमानंद के लिए आपके पास ज्यादा सेक्स टाइमिंग और फौलादी लिंग होना चाहिए और ये सब HORSE FIRE TABLET के नियमित इस्तेमाल से मिलना बहुत आसान है।
            </p>


            <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-10 gap-4 md:pt-8 pt-10 pb-5 sm:px-0 px-3">
                {messages.map((item, index) => (
                    <div key={index} className="relative pb-10 sm:pb-16">
                        {/* Main Image */}
                        <img
                            src={item.img}
                            alt="icon"
                            className="sm:w-4/5 w-5/6 mx-auto rounded"
                        />

                        {/* Overlay Box with Background Image + Text */}
                        <div
                            className="absolute sm:bottom-5 bottom-2 left-1/2 transform -translate-x-1/2 sm:w-4/5 w-full text-white text-center px-2 py-3"
                            style={{
                                backgroundImage:
                                    "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/366941ba-7a21-48c3-2572-3602280dc000/public')",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="text-lg sm:text-2xl font-extrabold pt-1 px-2 leading-tight text-black">
                                {item.message}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Ordernow />


            <div className="sm:mx-3 mx-0 sm:py-2">

                <div className='fontPoppins text-center  text-[#fff701] font-extrabold sm:text-2xl text-xl rounded-full px-5 py-3 shadow-md'>Experts Opinion</div>

                <Slider
                    ref={el => {
                        if (el) sliderRefs.current[0] = el;
                    }}
                    {...settings}
                >
                    <YoutubeFrame vid={"lGJ_yqR9sfs?si=ITPswfR8YARqgHFd"} />
                    <YoutubeFrame vid={"h-3HVSbQAGA?si=CQpPTBbpa9Uy4Ng_"} />
                </Slider>

                <div className='fontPoppins pt-3 flex justify-between items-center gap-1 text-xs sm:text-sm text-white px-2'>
                    <button className="button cursor-pointer flex items-center" onClick={previous}>
                        <BiSkipPrevious size={20} />Previous
                    </button>
                    <button className="button cursor-pointer flex items-center" onClick={next}>
                        Next<BiSkipNext size={20} />
                    </button>
                </div>

            </div>



            <div className="text-white pt-5">
                <p>
                    यह कोई चमत्कार नहीं बल्कि आधुनिक आयुर्वेद का अविष्कार है जो टेस्टोस्टेरोन हार्मोन का स्तर बढ़ाता है, लिंग की नसों में रक्त का बहाव तेज करता है जिससे ढीला लिंग भी सख्त और मजबूत हो जाता है। वीर्य स्खलन पर कण्ट्रोल बढ़ता है और सेक्स प्रदर्शन में जोरदार बृद्धि होती है।
                </p>

                <p className="pt-2">Horse Fire Tablet शोधित आयुर्वेदिक जड़ीबूटियों और भस्मो से बना हुआ प्राकृतिक उत्पाद है। यह ISO, GMP और AYUSH सर्टिफाइड और सेवन के लिए पूर्णतः सुरक्षित है।</p>
            </div>


            <div className="grid grid-cols-2 items-center gap-5 px-2 py-6 sm:py-10">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d7db6b11-d134-4978-7f72-a7ef1ffc8f00/public" alt="" className="mx-auto w-full" />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fed679d2-4f3c-4b80-45bb-00da9cea7300/public" alt="" className="mx-auto w-full" />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9ee6a49f-67d9-4384-8177-1df890cbad00/public" alt="" className="mx-auto w-full" />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0e3d813f-c56e-453b-891d-25fff6128700/public" alt="" className="mx-auto w-full" />
            </div>

            <Ordernow />

            <Mostselling />




            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/615a8efa-06ee-4dcd-a0b8-1b39b4b1eb00/public" alt="" className='w-full py-1' />
            <Ordernow />


            <p className='text-white py-3'>
                भारतीय पुरुष हॉर्सफायर से लाभान्वित हो रहे है और सेक्स प्रदर्शन से संतुष्ट है जिसकी वजह से इसकी बिक्री तेजी से बढ़ रही है। Horse Fire Tablet बहुत कम समय में भारत का सबसे असरदार और प्रसिद्ध यौन वर्धक प्रोडक्ट बन गया है। साल 2018 से यह यौन वर्धक श्रेणी में प्रथम स्थान पर काबिज है और लगातार बेहतरी के साथ पुरुष यौन कमजोरी को दूर कर उनके जीवन में खुशिया लौटा रहा है।
            </p>


            <div className="">

                <h2 className="bg-[#fff701] mx-2 px-5 my-3 py-2 text-center text-xl  font-bold rounded fontPoppins">
                    Right Way of Consumption
                </h2>

                <div className='py-3 sm:py-6'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/arayurveda-product-variant-316f46e0-c3ef-4604-9d90-acff79c74f1f/public" alt="" className='w-4/5 sm:w-3/5
                     mx-auto' />

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d89d473d-9eab-44db-a58e-98508469ed00/public" alt="" className='sm:w-3/4 w-4/5 mx-auto pt-2' />
                </div>
            </div>


        </section >
    );
}
