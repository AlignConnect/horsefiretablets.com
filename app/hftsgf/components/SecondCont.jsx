import YoutubeFrame from '@/app/commonUse/Youtubefile/YoutubeFrame';
import dynamic from 'next/dynamic';
import React from 'react'
import { FaBahai } from "react-icons/fa";


const OrderNow = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>Content is Loading</p>
});

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
    loading: () => <p>loader</p>
});

const SecondCont = () => {

    const reason_to_buy = (arr) => {
        return arr?.map((e, key) => {
            return <div className=' flex items-center' key={key}>
                <div className="  py-2  sm:px-5 px-2 my-3">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/153d6988-f05f-49a3-fb1b-93d9596bdd00/public" className="sm:w-8 w-6 mx-auto" alt="icons" />
                </div>
                <div className='text-white fontAnek sm:text-[1.1vw] text-[1.2rem] leading-tight py-3 uppercase'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }



    const Herbs = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek mx-3' key={key}>
                <div className="">
                    <img src={e.herb_img} className="sm:w-3/4 w-full mx-auto" alt="herbs" />

                    <div className="text-center bg-black">
                        <div className='text-green-500 font-semibold text-2xl sm:text-4xl sm:pt-4 pt-2'>{e.herbs_name}</div>
                        <div className='text-center text-white px-2'>{e.herbs_cont}</div>
                    </div>

                </div>

            </div >
        })
    }


    const Benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek py-2 ' key={key}>
                <div className="grid justify-center sm:my-4">
                    <img src={e.benifit_img} className="sm:w-2/3 w-3/4 mx-auto" alt="herbs" />
                    <div className='text-white sm:text-2xl text-xl font-semibold text-center py-4'>
                        <div
                            dangerouslySetInnerHTML={{ __html: e.benifit_title }}
                        />
                    </div>
                </div>

            </div >
        })
    }


    const Benifits_1 = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek py-2 ' key={key}>
                <div className="sm:my-4 ">
                    <img src={e.benifit_img} className="sm:w-full w-full mx-auto" alt="herbs" />
                    <div className='text-white sm:text-xl text-md font-semibold text-center py-4 px-3'>
                        <div
                            dangerouslySetInnerHTML={{ __html: e.benifit_title }}
                        />
                    </div>
                </div>

            </div >
        })
    }

    const Right_way_to = (arr) => {
        return arr?.map((e, key) => {
            return <div className='fontAnek  rounded-3xl border border-solid border-green-400 mx-3 my-2' key={key}>
                <div className="grid grid-cols-12 items-center gap-2 ">
                    <img src={e.img} alt="" className='sm:w-24 w-44 p-2 bg-white sm:col-span-2 col-span-3 rounded-s-3xl' />
                    <div className='text-white sm:text-2xl text-[1.3rem] pt-2 sm:col-span-10  col-span-9'>{e.way_title}</div>
                </div>
            </div >
        })
    }


    return (
        <section className='bg-black'>



            <div className=" w-5/6 mx-auto pt-5">
                <div className="border border-dotted border-yellow-500">
                    <div className=" fontAnek  flex justify-center items-center bg-black  text-white px-5 sm:px-10 pt-5 pb-3  text-center sm:text-4xl text-[1.4rem] font-extrabold">
                        सेक्सुअल हेल्थ सर्वे के मुताबिक
                    </div>
                </div>
            </div>

            <div className="bg-black p-2">
                <div className=" ">
                    {
                        reason_to_buy([
                            {

                                title: "महिला को ऑर्गेज़्म तक पहुंचने में औसतन 22 से 26 मिनट लगता है।"
                            },
                            {

                                title: "जिसमे 14 मिनट पुरुष द्वारा लगातार सेक्स (Penetration) शामिल है।"
                            },
                            {

                                title: "सेक्स के दौरान महिला के उत्तेजित होने से पहले पुरुष स्खलित हो जाते है।  "
                            },
                            {

                                title: "ज्यादातर पुरुष गुप्त कमजोरी की वजह से महिला को संतुष्टि नहीं दे पाते है। "
                            }
                        ])
                    }

                </div>

            </div>


            <div className="my-3">
                <p>
                    <span className='text-yellow-400'>ज्यादातर पुरुष सिर्फ </span>अपनी कामवासना मिटाने के लिए सेक्स करते है परन्तु महिला पार्टनर का क्या? कोई पुरुष तो <span className='text-yellow-400'>1 मिनट के अंदर डिस्चार्ज </span>होता है तो कोई अधिक से अधिक 5 मिनट अपने स्खलन पर काबू रख पाता है, इतने टाइम में तो महिला सेक्स के लिए<span className='text-yellow-400'> ठीक से उत्तेजित </span>तक नहीं हो पाती है।
                </p>
            </div>

            <OrderNow />

            <div className="p-5 m-2 border border-dashed border-white rounded-lg">

                <div className="relative w-full">
                    <div className="relative">
                        <img
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/385d7a6a-79e8-45c9-8e55-e11bfe7bbb00/public"
                            alt="Image description"
                            className="w-full h-[80px]"
                        />
                        <div className=" fontAnek  absolute top-2 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white px-0 sm:px-10 text-center sm:text-3xl text-[1.5rem] font-semibold">
                            सेक्स में निराशा बढ़ाने वाले कारक
                        </div>
                    </div>
                </div>


                <div className="">
                    {
                        Benifits([
                            {
                                benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/22d5cc78-3c99-413e-8292-2e522bb28300/public",
                                benifit_title: "<span class='text-yellow-400'>शीघ्रपतन-</span> कुछ झटको में या 1-2 मिनट के अंदर स्खलन "
                            },
                            {
                                benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c4a3b82d-d23b-468b-381c-3ae1e0dc4c00/public",
                                benifit_title: "<span class='text-yellow-400'>लिंग कमजोरी-</span> छोटा,पतला या ढीला और कमजोर लिंग"
                            },
                            {
                                benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0bf09784-9771-481f-1981-38308dfdff00/public",
                                benifit_title: "<span class='text-yellow-400'>लो इरेक्शन-</span> स्खलन होने के बाद इरेक्शन पाने में असमर्थ "
                            },
                            {
                                benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/87c349d4-ee39-4335-f046-4b17cc8c9600/public",
                                benifit_title: "<span class='text-yellow-400'>शारीरिक कमजोरी-</span> स्ट्रेंथ, स्टैमिना और स्टैमिना की कमी"
                            }
                        ])
                    }
                </div>


            </div>


            <div className="my-3">
                <p>
                    इन सब चीजों को ध्यान में रखते हुए <span className='text-green-400'>HORSE FIRE TABLET </span>बना है। यह सेक्स टाइमिंग और लिंग की मजबूती बढ़ाएगा और जीवन से निराशा मिटाएगा। यह <span className='text-green-400'>17 शक्तिशाली जड़ीबूटियों</span> का मिश्रण है और ये प्रत्येक जड़ीबूटियां सेक्स पावर बूस्ट करने के लिए <span className='text-green-400'>वैज्ञानिकी परीक्षण </span>में सिद्ध है। इसका फार्मूलेशन लेवल और सफलता दर अविश्वसनीय है जो इसे दूसरो से अलग बनाता है।
                </p>
            </div>


            <div className="">
                <div className="grid grid-cols-2 items-center gap-4">
                    {

                        Herbs([
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/505d3d5a-e781-4ecd-8812-1c4f15493f00/public",
                                herbs_name: "शिलाजीत",
                                herbs_cont: "टेस्टोस्टेरोन व लिंग की सख्ती बढ़ाए"
                            },
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c2377ec3-91c8-45f2-546f-fec1c1590a00/public",
                                herbs_name: "अश्वगंधा",
                                herbs_cont: "स्ट्रेस कम करे और स्टैमिना बढाए"
                            },
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/49dbb3b7-4a9d-48b9-70f2-598be707ff00/public",
                                herbs_name: "सफ़ेद मूसली",
                                herbs_cont: "एनर्जी और सेक्स टाइमिंग बढ़ाए"
                            },
                            {
                                herb_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0cd8a413-182d-446f-3a6f-b2c495c77300/public",
                                herbs_name: "गोक्षुरा",
                                herbs_cont: "लिंग की नसों और मसल्स को रिलैक्स करे"
                            },
                        ])
                    }
                </div>
            </div>

            <div className="mt-6">

                <OrderNow />

            </div>


            <div className="pps py-5">

                <div className=" m-2 py-2">
                    <div className="border border-dotted border-yellow-500">
                        <div className=" fontAnek  flex justify-center items-center bg-inherit  text-white px-5 sm:px-10 pt-5 pb-2  text-center sm:text-4xl text-[1.4rem] font-extrabold">
                            पुरुष पार्टनर की सेक्स में जिम्मेदारी!
                        </div>
                    </div>
                </div>

                <p className=''>
                    एक अच्छा लव-पार्टनर वही है, जो सेक्स के दौरान अपनी संतुष्टि के साथ-साथ अपने महिला पार्टनर की संतुष्टि के बारे में भी सोचे। सेक्स सिर्फ स्खलन का नाम नहीं है ये तो एक खुशनुमा एहसास है चरमानंद के रूप में दोनों को चाहिए। उनके चरमानंद के लिए आपके पास ज्यादा सेक्स टाइमिंग और फौलादी लिंग होना चाहिए और ये सब<span className='text-yellow-400 '> Horse Fire Tablet</span> के नियमित इस्तेमाल से मिलना बहुत आसान है।
                </p>



            </div>

            <div className="grid grid-cols-2 items-center gap-5 mx-2">
                {
                    Benifits_1([
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c69852c1-1cc4-4778-efa4-c89579e32e00/public",
                            benifit_title: "लम्बी सेक्स अवधि जोरदार प्रदर्शन"
                        },
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32dd4df2-e426-4861-5883-499cc1d4c200/public",
                            benifit_title: "लिंग की लम्बाई और सख्ती में वृद्धि"
                        },
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b33f429f-d5aa-41b4-c735-7d9ba7adf400/public",
                            benifit_title: "बार बार सेक्स करने की उत्तेजना "
                        },
                        {
                            benifit_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d2ba0cf-b641-47ea-27d4-87a274a28400/public",
                            benifit_title: "दमदार स्टैमिना और भरपूर शक्ति "
                        }
                    ])
                }
            </div>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/175dc327-7f5f-4cd7-c45b-d71a0da83a00/public" alt="" className='w-full' />
            <OrderNow />

            <p className='my-3'>
                यह कोई चमत्कार नहीं बल्कि आधुनिक आयुर्वेद का अविष्कार है जो टेस्टोस्टेरोन हार्मोन का स्तर बढ़ाता है, लिंग की नसों में रक्त का बहाव तेज करता है जिससे ढीला लिंग भी सख्त और मजबूत हो जाता है। वीर्य स्खलन पर कण्ट्रोल बढ़ता है और सेक्स प्रदर्शन में जोरदार बृद्धि होती है।
            </p>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/53b0ce6a-e08b-405b-2090-a8afcf019300/public" alt="" className='w-full' />


            <p className='my-3'>
                <span className='text-green-400'> Horse Fire Tablet</span> शोधित आयुर्वेदिक जड़ीबूटियों और भस्मो से बना हुआ प्राकृतिक उत्पाद है। यह ISO, GMP और AYUSH सर्टिफाइड और सेवन के लिए पूर्णतः सुरक्षित है।
            </p>


            <div className="">
                {
                    Right_way_to([
                        {
                            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5fa8329b-53f7-404b-63fa-ff05502b0600/public",
                            way_title: "First Choice of men in India"
                        },
                        // {
                        //     img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f766ae05-8f1f-427d-8f2f-840b35073700/public",
                        //     way_title: "Big Discount in Festival Season"
                        // },
                        {
                            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9442a552-c5c7-4849-7801-c6b639aa9a00/public",
                            way_title: "COD Payment Available"
                        },
                        {
                            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0aa12124-803d-41a8-dee7-72d9848e1c00/public",
                            way_title: "Save 10% Extra on Prepaid"
                        }
                    ])
                }

            </div>
            <OrderNow />


            <div className="border border-yellow-400 border-dotted rounded-xl my-3 mx-2">
                <p className="text-[5vw] sm:text-[1.8vw] fontPoppins font-extrabold text-center text-white py-3 my-1">Doctor Recommendation
                </p>
            </div>
            <div className="py-3 px-2">
                <YoutubeFrame vid="h-3HVSbQAGA" />
            </div>

            <div className=" text-black  py-4">

                <MostSelling />
            </div>

            <OrderNow />

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0fd91876-a137-4414-0ac1-2af2d6825300/public" alt="" className='w-full' />



            <div className='bg_h'>
                <p className='p-7'>
                    भारतीय पुरुष हॉर्सफायर से लाभान्वित हो रहे है और सेक्स प्रदर्शन से संतुष्ट है जिसकी वजह से इसकी बिक्री तेजी से बढ़ रही है। <span className='text-yellow-500'>Horse Fire Tablet</span> बहुत कम समय में भारत का सबसे असरदार और प्रसिद्ध यौन वर्धक प्रोडक्ट बन गया है। साल 2018 से यह यौन वर्धक श्रेणी में <span className='text-yellow-500'>प्रथम स्थान</span> पर काबिज है और लगातार बेहतरी के साथ पुरुष यौन कमजोरी को दूर कर उनके जीवन में खुशिया लौटा रहा है।
                </p>
            </div>



            <div className="border border-white border-solid m-7">
                <p className="text-[5vw] sm:text-[1.8vw] fontPoppins font-extrabold text-center text-white py-3 my-1">Right Way of Consumption</p>
            </div>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aaeb0881-36b0-4f5d-bba3-b27ea6d1ef00/public" alt="" className='sm:w-3/5 w-4/5 px-2 mx-auto my-6' />
            <div className='sm:py-2 py-2 px-4 border border-white border-solid mx-2 my-4'>

                <ul className='text-white text-xl sm:text-2xl  p-3  ml-2 list-disc  fontAnek text-justify'>
                    <li>"सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ"</li>
                    <li>"बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें"</li>
                    <li>"एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें"</li>
                </ul>


            </div>


            <div className="pb-7">
                <OrderNow />
            </div>


        </section>
    )
}

export default SecondCont