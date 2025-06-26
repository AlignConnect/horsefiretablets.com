
import BitlyLinks from "@/components/hooks/Bitlylink";

const FlipAmazon = () => {

    const links = BitlyLinks();

    return (
        <section className='max-w-xl mx-auto'>

            <div className="p-3 bg-white w-100">
                <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                    <h5 className="purchaseProduct leading-tight text-center pt-2  mb-0">Flipkart, Amazon से खरीदें और पाएं धमाकेदार ऑफर्स!!</h5>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy'
                    />
                </a>
            </div>

        </section>
    )
}
export default FlipAmazon;

// const FlipAmazon = () => {
//     return (
//         <section className='max-w-xl mx-auto'>

//             <div className="p-3 bg-white w-100">
//                 <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className="w-full d-grid leading-none">
//                     <h5 className="purchaseProduct leading-tight text-center pt-2  mb-0">Flipkart, Amazon से खरीदें और पाएं धमाकेदार ऑफर्स!!</h5>
//                     <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy'
//                     />
//                 </a>
//             </div>

//         </section>
//     )
// }
// export default FlipAmazon;