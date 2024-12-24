import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import FlipAmazon from './FlipAmazon';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const OrderNow = dynamic(() => import('./OrderNow'), {
    loading: () => <p>loader</p>
})

const Doctor = () => {
    return (
        <section className={noto.className}>

            <section className='bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/471deb45-f1f0-4747-eeea-caf376ab6400/public")] text-center'>

                <h1 className='bg-[#fef102] font-bold text-3xl pt-4 px-4 my-4 pb-1 inline-block rounded-lg'>डॉक्टर द्वारा प्रस्तावित </h1>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/74aa84fc-82a2-41bc-db26-a80d73c76200/public" alt="sdasd" loading='lazy' width={200} height={200} className='w-[150px] h-[150px] border border-yellow-400 border-dashed p-2 rounded-[50%] mx-auto' />
                </div>


                <div className={`${poppin.className} text-white`}>
                    <h1 className='text-2xl font-bold text-[#fef102] pt-2'>DR. VINAY SOLANKI </h1>
                    <p><span className='text-xl font-bold'>37 Yrs</span> Experience</p>
                    <h2 className='font-bold text-xl'>MBBS</h2>
                    <p className='uppercase'>General Physician Andrologist</p>
                </div>

                <p className='text-lg text-justify text-white p-2 md:p-4'>
                    Horse Fire Tablet एक प्रीमियम क्वालिटी प्रोडक्ट है जो स्टैमिना, सेक्स टाइमिंग और लिंग का तनाव करने में मदद करता है। इसके इस्तेमाल से शीघ्रपतन, इरेक्टाइल डिस्फक्शन या फिर चाहे किसी भी प्रकार की गुप्त बीमारी हो आसानी से मिट जाती है। इसमें मिश्रित प्रत्येक तत्व सेक्स कमजोरी में असरदार और भरोसेमंद है। इसे खाने से टेस्टोस्टेरोन लेवल बढ़ता है शरीर में ऊर्जा की वृद्धि होती है, बेजान पड़ी लिंग की नसों में ब्लड सर्क्युलेशन बढ़ता है जिससे नसों में जान आने लगती है और ढीले लिंग से राहत मिलती है तथा सेक्स टाइम में सुधार होता है। मैं उन पुरुषों को Horse Fire Tablet खाने की सलाह देता हूँ जो डॉक्टर कंसल्टेशन से घबराते या शर्माते है। इसकी मदद से आप घर बैठे अपनी समस्या जड़ से मिटा सकते है।
                </p>

            </section>


            <section className='text-center'>

                {/* <h1 className='bg-[#fef102] pt-4 pb-2 text-xl font-bold inline-block my-3 px-8'>इसे खाये और पाए</h1> */}


                <div className='bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/17e0496c-0cd7-4c27-1e56-07304430ec00/public")] bg-cover bg-contain  min-h-[400px]  pt-[30px]'>

                    <div className='w-[95%] mx-auto'>

                        {/* <div className='absolute transform  w-full translate-x-[50%] left-[-50%] -top-7'> */}
                        <h1 className='w-[80%] mx-auto bg-[#fff001] text-3xl md:text-3xl font-bold pt-3 pb-0 px-5 text-center'>
                            इसे खाये और पाए
                        </h1>
                        {/* </div> */}


                        <div className='grid grid-cols-2 gap-3 px-3 pt-7 text-center'>

                            <div className=''>

                                <div className=''>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c5273d20-7851-40c8-c5eb-db069a1de800/public" alt="asdasd" loading='lazy' className='w-full rounded-lg' />
                                </div>

                                <p className='py-2 text-[0.95rem] font-bold md:text-lg'>रॉक हार्ड और लम्बा लिंग</p>

                            </div>
                            <div>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/210d7f8c-5301-47c7-ee03-c9f0423ab000/public" alt="asdasd" loading='lazy' className='w-full rounded-lg' />
                                </div>

                                <p className='p-2 text-[0.95rem] font-bold  md:text-lg'>लॉन्ग लास्टिंग टाइमिंग</p>

                            </div>

                            <div>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f1d0ab72-3c19-40a7-f8c6-5c132712be00/public" alt="asdasd" loading='lazy' className='w-full rounded-lg' />
                                </div>

                                <p className='p-2 text-[0.95rem] font-bold  md:text-lg'>दमदार सेक्स स्टैमिना  </p>

                            </div>

                            <div>

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2646ed7d-ef13-462f-0df5-bdd1b46f6b00/public" alt="asdasd" loading='lazy' className='w-full rounded-lg' />
                                </div>

                                <p className='text-[0.95rem] font-bold md:text-lg p-2'>जोश और उत्तेजना में वृद्धि </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <FlipAmazon />



            <section className=''>

                {/* <div className='grid grid-cols-2 p-3'>

                    <div>
                        <p className='text-white'>
                            <span className='text-yellow-300'>Horse Fire Tablet</span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                        </p>
                    </div>

                    <div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b62583d0-0eda-445f-bbe2-b7b71763b600/public" alt="dsfs" loading='lazy' />

                    </div>

                </div> */}



                <div className='relative min-h-[270px] md:min-h-[480px]'>

                    <div className='absolute max-h-[270px] md:max-h-[480px] overflow-hidden -z-10 '>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1bb3bfe5-d825-42e4-c87b-81cdf6dd6e00/public" alt="asd" loading='lazy' className='w-full' />

                    </div>

                    <div className='z-10 p-3 absolute max-h-[270px] md:max-h-[480px] transform md:translate-y-[50%]  max-h-[270px]  md:max-h-[480px] w-1/2 flex flex-col justify-center items-center'>

                        <div className='text-2xl text-[#fef102] font-bold text-center'>

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3337c47d-68c7-4ccd-0a63-fc6efbc71000/public" alt="asdasd" loading='lazy' />

                        </div>

                        <p className='text-white bg-transparent text-[0.9rem] md:text-lg'>
                            <span className='text-yellow-300'>Horse Fire Tablet</span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                        </p>
                    </div>

                </div>




            </section>

            <div className='bg-red-600 mb-5'>

                <p className='text-white p-3 text-lg text-center'>
                    देर न करें <span className='uppercase text-yellow-300 font-bold'>Horse Fire Tablet</span> के इस्तेमाल से उन पुरुषों में शामिल हो जाएँ जिन्हे अपने सुडौल लिंग और दमदार सेक्स टाइमिंग गर्व है।
                </p>

            </div>




        </section>)
}

export default Doctor;