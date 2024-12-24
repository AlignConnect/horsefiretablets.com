import { Noto_Serif_Devanagari } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';


const items = [
    {
        title: 'क्या इससे नुकसान भी हो सकता है?',
        content: "जी नहीं, Horse Fire Tablet एक pure आयुर्वेदिक दवा है... इसमें किसी प्रकार के केमिकल का इस्तेमाल नहीं किया गया है इसलिए मात्रा में इस्तेमाल करने से इसका कोई दुष्प्रभाव नहीं है' कृपया ओवरडोज़ से बचें। "
    },
    {
        title: 'HorseFire की अनुशंसित खुराक क्या है?',
        content: "1 टेबलेट सुबह-शाम भोजन के बाद गुनगुने दूध या पानी के साथ लें।"
    },
    {
        title: 'HorseFire के एक पैकेट में कितनी गोली होती हैं?',
        content: "Horse Fire के एक पैकेट में 60 टेबलेट होते है जो एक महीने का कोर्स है।"
    },
    {
        title: ' क्या मैं दवा पाने के बाद पैसे दे सकता हूँ?',
        content: "जी हाँ, आप दवा रिसीव करने के बाद भुगतान कर सकते है। आप निश्चिंत रहे अपना सही प्रोडक्ट पाने के बाद भुगतान की सुविधा भी है और आप ऑनलाइन खरीद पर बचत भी कर सकते है।"
    },
    {
        title: 'क्या इसे विदेश से मंगवाया जा सकता है?',
        content: "जी नहीं, यह उत्पाद सिर्फ भारत में डिलीवर किया जाता है, इसे भारत के किसी भी कोने से आर्डर कर सकते है।"
    },
    {
        title: 'यह मुझे कितने दिन में मिल जायेगा?',
        content: "इस कंपनी की डिलीवरी सुविधा काफी अच्छी है आप इसे आर्डर करने के 4 के अंदर पुरे सुरक्षित पैक को रिसीव करेंगे। "
    },
    {
        title: 'इससे कितन लाभ मिल सकता है?',
        content: "वैसे तो यह प्रत्येक रोगी पर अलग-अलग प्रभाव डालता है परन्तु फिर भी सभी को कुछ ही दिनों में अंतर महसूस होने लगता है। मैं आप लोगों को इसका बेहतर परिणाम पाने के लिए लगातार 3 महीने सेवन करने की सलाह दूंगा।"
    },
    {
        title: 'क्या सेक्स की अवधि बढ़ जाएगी?',
        content: "जी हाँ, इसे खाने के बाद लिंग की नसे अच्छे से पंप होंगी लिंग में शानदार सख्ती मिलेगी  जो लम्बे समय तक बनी रहेगी। इससे वीर्य स्खलन की अवधि बढ़ जाएगी और आप लम्बे समय तक सेक्स कर सकते है।"
    },
];


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const QA = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);


    return (
        <section className='bg-white'>
            <div className={`${noto.className} w-[90%] mx-auto`}>


                <h1 className='pr' >मरीजों द्वारा सर्वाधिक पूछे जाने वाले प्रश्न !</h1>

                {items.map((item, index) => {
                    return <div
                        key={index}
                        className={`item ${activeIndex === index ? 'active' : ''} mx-1 px-1 border-t-2 border-[#beb29b]  py-1`}
                    >
                        <div className=''>
                            <button className='text-xl md:text-2xl py-2 w-full text-left' onClick={() => handleClick(index)}>
                                <div className='flex justify-between items-center font-semibold'>
                                    <div>{item.title}</div>
                                    {activeIndex !== index ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                                </div>
                            </button>

                        </div>
                        <div className="text-[1.1rem] md:text-xl text-justify py-1" hidden={activeIndex !== index}>
                            {item.content}
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default QA;