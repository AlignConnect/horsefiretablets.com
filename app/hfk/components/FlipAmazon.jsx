
import BitlyLinks from "@/components/hooks/Bitlylink";

const FlipAmazon = () => {

    const links = BitlyLinks()


    return (
        <section className='w-full  mx-auto '>



            <div className="p-2 max-w-2xl w-full mx-auto text-center bg-white rounded-sm overflow-hidden">
                <h5 className="purchaseProduct leading-tight text-center pt-2  mb-0">Flipkart, Amazon से खरीदें और पाएं धमाकेदार ऑफर्स!!</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-3 mb-1">
                    <div className="">
                        <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6b53864-0097-4cde-fa30-9723cc268600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>



                    </div>
                    <div className="">
                        <a href={links?.amazonMain} className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9b630eb5-2ca6-44f4-5d28-d95a6cb1d800/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto" loading='lazy' />
                        </a>
                    </div>
                </div>
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
//                     <h5 className="purchaseProduct leading-tight text-center pt-2  mb-0">HORSE FIRE TABLET खरीद ने के लिए निचे क्लिक करें</h5>
//                     <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy'
//                     />
//                 </a>
//             </div>

//         </section>
//     )
// }
// export default FlipAmazon;