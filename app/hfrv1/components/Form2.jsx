"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect, useState } from "react";

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Form = () => {
    const searchParams = useSearchParams();

    const [submissionCount, setSubmissionCount] = useState(128);

    useEffect(() => {
        const interval = setInterval(() => {

            setSubmissionCount(prev => prev + (Math.random() < 0.5 ? 1 : 3));
        }, Math.random() * 1000 + 3000);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, [submissionCount]);
    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Horsefiretablets.com/hfrv1")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFRV1 ?? "horsefiretablets.com/hfrv1")

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            const searchParamss_hftevadev = searchParams.get("hftevadev");
            searchParamss_hftevadev && formdata.append("hftevadev", searchParamss_hftevadev);

            try {
                const form = await fetch(`https://horsefiretablets.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }


    return (
        <div id="form" className={noto.className}>

            {
                loading && <FormLoader />
            }

            <div className="">
                <div className=""

                >
                    <div className=" pb-1 flex "  >

                    </div>
                    <div className="py-6 md:py-12 px-3 ">


                        <div className="bg-[#d71601] rounded-md mb-10">
                            <div className="">
                                <div className="relative w-[95%] mx-auto rounded-lg py-5 z-10 text-center">
                                    <div className="font-bold text-xl bg-[#fff701] sm:text-3xl text-black w-60 sm:w-80 z-20 px-5 rounded-full text-center pt-2 absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 ">
                                        नक्कालों से सावधान !
                                    </div>

                                    <div className="text-[1rem] sm:text-lg bg-[#d71601] text-white pt-4 pb-0 relative ">
                                        <div>
                                            Horse Fire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में
                                            कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही
                                            प्रोडक्ट खरीदें !
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="fontNoto text-2xl md:text-2xl text-white text-center fw-bold mb-6 md:mb-6 mx-2 font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                        <div className="">
                            <div className="" id='form'>
                                <div className="form_shaddow " id='formcallhide'>
                                    <div className="mx-auto font-poppin  bg-[#1a1a1a] text-white px-4 py-6 border border-dashed rounded-lg ">
                                        <div>
                                            <div className="text-center mb-7">
                                                <h1 className="text-center text-white px-2 text-3xl font-bold inline-block border-bottom "> Contact Us </h1>
                                            </div>
                                            <form className="space-y-3">
                                                {CustomerDataValue?.map((data, key) => {
                                                    return <div className="flex flex-col my-6" key={key}>
                                                        <label className="font-semibold text-sm  py-1">{data.label}</label>
                                                        <div className="relative text-black">
                                                            <input {...data.inputValue} className={` p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                        </div>
                                                    </div>
                                                })}
                                                <div className="flex justify-center items-center pt-4 ">
                                                    <button onClick={handleFormSubmit} type="button" className="text-white font-bold py-2 px-10 rounded-bl-xl rounded-tr-xl text-lg bg-gradient-to-b from-[#1c1c1c] to-black border border-yellow-400 shadow-[0_0_10px_0_rgba(255,255,0,0.5)] hover:brightness-110 transition">
                                                        SUBMIT
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                        <div className="text-center mt-4 sm:text-md text-sm">
                                            <span className=" text-yellow-400 font-semibold">{submissionCount}</span>{" "}
                                            People Submitted Form in Last 1 Hour
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <AmaFlipDialog />
        </div>


    );
};

export default Form;
