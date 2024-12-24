import Image from "next/image"


function SexProblemHeader() {

    const list = [
        {
            image: '/main/hf71_images/03.gif',
            title: 'लिंग की लम्बाई-मोटाई में वृद्धि'
        },
        {
            image: '/main/hf71_images/04.gif',
            title: 'स्टैमिना में वृद्धि थकान से राहत'
        },
        {
            image: '/main/hf71_images/02.gif',
            title: 'सेक्स समय अवधि में वृद्धि'
        },
        {
            image: '/main/hf71_images/01.webp',
            title: 'जोश और आत्मविश्वास में वृद्धि'
        },
    ]

    return (

        <div className="w-full text-[1rem] sm:text-xl ">
            <div className=' relative'>
                <div className=" relative z-10 py-5 text-center px-3 sm:px-5">

                    <div className="text-center text-white font-bold fontPoppins mb-3 ">
                        <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                            <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                        </a>
                    </div>
                    <p className="text-white">दोस्तों, दशकों से आज तक कई सर्वे होते आ रहे है जिसमे पुरुष भाग लेते है। इस सर्वे में ये पता चला है की पुरुषों में शीघ्रपतन, पार्ट में ढीलापन, स्टैमिना और एनर्जी की कमी जैसी यौन समस्या तेजी से बढ़ रही है। ऐसे में पुरुषों की को चाहिये Horse Fire Tablet जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके।</p>
                </div>
                <Image src='/main/hf71_images/bg8.webp' fill loading="lazy" sizes='100vw' alt='pic' />
            </div>



            <div className="bg-white py-5 px-4 sm:px-5 text-center font-bold text-[0.9rem] sm:text-2xl">

                <div className="grid grid-cols-2 items-between gap-4 sm:gap-5">
                    <div className="grid gap-4 sm:gap-5 ">

                        {list.slice(0, 2).map((e, key) => {
                            return <div key={key}>
                                <img src={e.image} alt="pic" width='100%' height='100%' loading="lazy" className='rounded-lg outline-1 outline-offset-4 outline-dashed outline-red-500' />
                                <p className="mt-3">{e.title}</p>
                            </div>
                        })}
                    </div>

                    <div className="grid gap-4 sm:gap-5 mt-[35%]">

                        {list.slice(2, 4).map((e, key) => {
                            return <div key={key}>
                                <img src={e.image} alt="pic" width='100%' height='100%' loading="lazy" className='rounded-lg outline-1 outline-offset-4 outline-dashed outline-red-500' />
                                <p className="mt-3">{e.title}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="text-center text-white font-bold fontPoppins mb-3 ">
                        <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                            <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                        </a>
                    </div>

            <div className=' relative fontArya'>
                <div className=" relative z-10 py-5 sm:py-10 text-center px-5 sm:px-10">
                    <p className="text-justify "><span className="!font-black">Horse Fire Tablet</span> एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। आयुर्वेद को सदियों से सबसे सफल और दुष्प्रभाव मुक्त चिकित्सा पद्धति के तौर पर जाना जाता है। आयुर्वेद का अनुसरण और जड़ीबूटियों का रिसर्च कर यह औषधि तैयार की गयी है। Horse Fire Tablet पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, क्योंकि इसमें आयुर्वेद की सबसे मशहूर जड़ीबूटियों की उच्चतम क्वालिटी इस्तेमाल में लिया गया है।</p>
                </div>
                
                <Image src='/main/hf71_images/bg2.webp' fill loading="lazy" alt='pic' />
            </div>
        </div>
    )
}

export default SexProblemHeader