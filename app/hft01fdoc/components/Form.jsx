"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";


const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Form = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup, loading } = useGlobalContext();

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
            formdata.append("post", "Horsefiretablets.com/HFT01FDOC")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFT01FDOC ?? "horsefiretablets.com/hft01fdoc")

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

                // const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false)
                    openPopup();
                    // let destination = decodeURI(data.destination)
                    // let name = destination.split("?name=")[1].split("&")[0]
                    // let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                openPopup();
                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                openPopup();
                // return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (
        <div id="form" className={noto.className}>

            {
                loading && <Load />
            }

            <div className="doctor_header_background">
                <div className=""
                >
                    <div className="max-w-6xl mx-auto py-9 md:py-24 px-3">

                        <h1 className="fontNoto text-3xl md:text-4xl text-black text-center fw-bold mb-6 md:mb-12 font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                        <div className="grid grid-cols-12 m-0 gap-6 items-center">
                            <div className="col-span-12 md:col-span-6 fontPoppins text-black font-nunito mt-1 md:mt-0 order-2 sm:order-1">
                                <h1 className="text-xl fontNoto text-justify font-bold md:text-2xl">तो देर किस बात की यौन जीवन में खुशहाली की तरफ अपना पहला कदम बढ़ाएं, एक्सपर्ट से फ्री में सलाह पाए!</h1>

                                <hr className="border-t-2 my-3 md:my-6  opacity-100" />

                                <h1 className=" font-bold text-2xl md:text-4xl leading-normal">Helping Patients From all Over India</h1>
                                <div className="md:text-2xl fontKalnia  text-md font-bold md:mt-5 mt-3 text-black bg-[#f9d830] px-4 py-1 rounded-xl inline-block">
                                    <MdOutlineSupportAgent className="inline text-5xl  " /> We Are Available Now
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 order-1 sm:order-2" id='form'>
                                <div className="form_shaddow " id='formcallhide'>
                                    <div className="mx-auto font-poppin  bg-white px-4 py-6 border rounded-lg ">
                                        <div>
                                            <div className="text-center mb-12">
                                                <h1 className="text-center text-3xl font-bold inline-block border-bottom border-black"> Contact Us </h1>
                                            </div>
                                            <form className="space-y-3">
                                                {CustomerDataValue?.map((data, key) => {
                                                    return <div className="flex flex-col my-6" key={key}>
                                                        <label className="font-semibold text-sm py-1">{data.label}</label>
                                                        <div className="relative">
                                                            <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                        </div>
                                                    </div>
                                                })}
                                                <div className="flex justify-center items-center pt-4 ">
                                                    <button onClick={handleFormSubmit} type="button" className="bg-[#2c6cf4] text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-xl hover:bg-[#293a6e]/80 transition-colors text-white">
                                                        SUBMIT
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <AmaFlipDialog  type="ts" />

        </div>


    );
};

export default Form;
