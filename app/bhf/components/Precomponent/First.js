import { Poppins } from "next/font/google";

const pop = Poppins({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const First = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse justify-around items-center w-full md:max-w-7xl m-auto py-4 md:py-20 px-3">
            <div className="text-center md:text-start">

                <div className="hidden md:block">
                    <h1 className={`${pop.className} md:text-3xl py-3 text-xl font-medium`}>
                        INDIA'S Top Selling Product
                    </h1>
                    <h1 className="md:text-[7rem] text-5xl  text-red-600 font-black uppercase">
                        horse fire <br /> <span className="text-black"> tablet </span>
                    </h1>


                    <h2 className="text-5xl md:text-7xl md:w-2/3 mt-2 font-black py-4 text-green-700">
                        यौन कमजोर पुरुषों की पहली पसंद
                    </h2>
                    <h3 className="md:text-3xl text-2xl md:w-2/3">
                        शीघ्रपतन, लिंग कमजोरी व शारीरिक कमजोरी दूर करने में उपयोगी!
                    </h3>
                    <div className="pt-6">
                        <a href={"#form"} className="block text-center bg-red-600 md:w-1/3 w-full pt-4 pb-2 font-semibold text-white rounded-full text-xl shadow-lg shadow-red-500/60">
                            ORDER NOW
                        </a>
                    </div>

                </div>
            </div>

            <div className="flex-none md:transform md:translate-x-[-30%]">
                <img
                    alt="image1"
                    fetchPriority="high"
                    loading="eager"
                    width={400}
                    height={300}
                    decoding="async"
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5305222-e450-4632-aa86-7e91f818df00/public"
                />
            </div>



        </div>

    )
}

export default First;