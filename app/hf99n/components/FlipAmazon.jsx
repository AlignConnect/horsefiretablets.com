import BitlyLinks from "@/components/hooks/Bitlylink";

const FlipAmazon = () => {

    const links = BitlyLinks()


    return (
        <section className='max-w-xl mx-auto'>

            <div className="px-2 text-center bg-transparent w-100 ">
                <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                    <h5 className="purchaseProduct leading-tight text-center pt-2  mb-0">Flipkart, Amazon से खरीदें और पाएं धमाकेदार ऑफर्स!!</h5>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy' />
                </a>
            </div>

        </section>
    )
}
export default FlipAmazon;