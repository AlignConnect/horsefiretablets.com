import Image from 'next/image'

function WhyChoose() {

    const list6 = [
        {
            image: '/main/hf71_images/icon3.webp',
            name: 'कम टेस्टोस्टेरोन हॉर्मोन स्तर',
        },
        {
            image: '/main/hf71_images/icon1.webp',
            name: 'टेस्टोस्टेरोन का उच्चतम स्तर',
        },
        {
            image: '/main/hf71_images/icon2.webp',
            name: 'कमजोर नसें, छोटा और ढीला लिंग',
        },
        {
            image: '/main/hf71_images/icon12.webp',
            name: 'मजबूत नसों के साथ फौलादी लिंग',
        },
        {
            image: '/main/hf71_images/icon4.webp',
            name: 'अधिकतम 2 मिनट सेक्स या कुछ झटको में स्खलन',
        },
        {
            image: '/main/hf71_images/icon11.webp',
            name: 'कम से कम 30-45 मिनट लगातार सेक्स',
        },
        {
            image: '/main/hf71_images/icon9.webp',
            name: 'ऑर्गेज्म तक पहुंचने से पहले थकान लो स्टैमिना',
        },
        {
            image: '/main/hf71_images/icon10.webp',
            name: 'जबरदस्त स्टैमिना थकानमुक्त जोरदार सेक्स',
        },
        {
            image: '/main/hf71_images/icon7.webp',
            name: 'पतला वीर्य तथा धात संबधित यौन समस्याएं',
        },
        {
            image: '/main/hf71_images/icon8.webp',
            name: ' गाढा वीर्य, सभी यौन समस्याओं से राहत',
        },
        {
            image: '/main/hf71_images/icon6.webp',
            name: 'मानसिक तनाव और सेक्स का प्रेशर',
        },
        {
            image: '/main/hf71_images/icon5.webp',
            name: 'स्ट्रेस-फ्री और कॉन्फिडेंस के साथ सेक्स  ',
        },
    ]

    return (
        <div className='w-full relative'>
            <div className='relative z-10 px-3 text-center'>

                <h1 className=" sm:w-11/12 mx-auto bg-yellow-400 pt-3 pb-1 rounded-b-2xl text-xl sm:text-2xl font-bold ">Horse Fire Tablet के अद्भुत लाभ जो ग्राहक अनुभव करते है !</h1>
                <div className="py-5 ">
                    <div className="grid grid-cols-2 text-3xl mb-5 font-bold">
                        <div className="">

                            <div className="bg-white inline-block px-5 rounded-lg pt-3 ">पहले</div>
                        </div>
                        <div className="">

                            <div className="bg-white inline-block px-5 rounded-lg pt-3 ">बाद में</div>
                        </div>


                    </div>
                    <div className="text-white grid grid-cols-2 px-0 sm:px-5 text-[1.2rem] sm:text-2xl gap-2 sm:gap-5">
                        {list6.map((e, key) => {
                            return <div className="" key={key}>
                                <img src={e.image} alt="pic" className="w-20 mx-auto" width='100%' height='100%' loading='lazy' />
                                <p className="mt-3">{e.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="text-center text-white font-bold fontPoppins pb-5 ">
                        <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                            <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                        </a>
                    </div>
            </div>
            <Image src='/main/hf71_images/bg4.webp' fill loading='lazy'  alt='pic' />
        </div>

    )
}

export default WhyChoose