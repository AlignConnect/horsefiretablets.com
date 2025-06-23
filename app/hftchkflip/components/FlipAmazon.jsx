import BitlyLinks from "@/components/hooks/Bitlylink";

const FlipAmazon = () => {


    const links = BitlyLinks();


    return (
        <section className='w-full  mx-auto '>

            <div className="p-3 bg-white text-center rounded-md my-3">
                <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                    <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy'
                    />
                </a>
            </div>

        </section>
    )
}
export default FlipAmazon;